/* ============================================================
   CANVAS HOME PAGE

   Features:
   1. Mobile Navigation
   2. Nebula Drift Autoplay Hero Video
   3. Cookie Preference
   4. Local Storage Visit Counter
   5. Animated Statistics
   6. Newsletter Local Storage
   7. Toast Notification
   ============================================================ */


$(function () {


    // =========================================================
    // COOKIE HELPERS
    // =========================================================

    function setCookie(
        name,
        value,
        days
    ) {

        const expires =
            new Date(
                Date.now() +
                days * 864e5
            ).toUTCString();


        document.cookie =
            `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;

    }


    function getCookie(name) {

        const match =
            document.cookie.match(
                new RegExp(
                    "(^| )" +
                    name +
                    "=([^;]+)"
                )
            );


        return match
            ? decodeURIComponent(
                match[2]
            )
            : null;

    }


    // =========================================================
    // MOBILE NAVIGATION
    // =========================================================

    $("#navToggle").on(
        "click",
        function () {

            const $links =
                $("#navLinks");


            $links.toggleClass(
                "open"
            );


            $(this).attr(
                "aria-expanded",
                $links.hasClass(
                    "open"
                )
            );

        }
    );


    $("#navLinks a").on(
        "click",
        function () {

            $("#navLinks")
                .removeClass(
                    "open"
                );


            $("#navToggle")
                .attr(
                    "aria-expanded",
                    "false"
                );

        }
    );


    // =========================================================
    // NEBULA DRIFT AUTOPLAY HERO VIDEO
    // =========================================================

    const heroVideo =
        document.getElementById(
            "heroVideo"
        );


    if (heroVideo) {

        /*
         * Browsers normally allow autoplay
         * only when the video is muted.
         */

        heroVideo.muted =
            true;


        heroVideo.loop =
            true;


        heroVideo.playsInline =
            true;


        // Try to autoplay immediately

        const playPromise =
            heroVideo.play();


        if (
            playPromise !== undefined
        ) {

            playPromise
                .catch(
                    function (error) {

                        /*
                         * Some browsers may still block autoplay
                         * depending on user settings.
                         *
                         * Controls remain visible so the user
                         * can manually start the video.
                         */

                        console.warn(
                            "Nebula Drift autoplay was blocked by the browser.",
                            error
                        );

                    }
                );

        }

    }


    // =========================================================
    // COOKIE PREFERENCE
    // =========================================================

    const cookieConsent =
        getCookie(
            "amc_cookie_consent"
        );


    if (
        cookieConsent !==
            "accepted" &&
        cookieConsent !==
            "rejected"
    ) {

        $("#cookieBanner")
            .addClass(
                "show"
            );

    }


    // =========================================================
    // ACCEPT COOKIE
    // =========================================================

    $("#cookieAccept").on(
        "click",
        function () {

            setCookie(
                "amc_cookie_consent",
                "accepted",
                180
            );


            $("#cookieBanner")
                .removeClass(
                    "show"
                );


            showToast(
                "Cookie preference saved: Accepted."
            );

        }
    );


    // =========================================================
    // REJECT COOKIE
    // =========================================================

    $("#cookieReject").on(
        "click",
        function () {

            setCookie(
                "amc_cookie_consent",
                "rejected",
                180
            );


            $("#cookieBanner")
                .removeClass(
                    "show"
                );


            showToast(
                "Cookie preference saved: Rejected."
            );

        }
    );


    // =========================================================
    // LOCAL STORAGE VISIT COUNTER
    // =========================================================

    let visits =
        parseInt(
            localStorage.getItem(
                "amc_visit_count"
            ) || "0",
            10
        );


    visits +=
        1;


    localStorage.setItem(
        "amc_visit_count",
        visits
    );


    $("#visitCounter")
        .text(

            visits === 1

                ? "You're on your first visit — welcome!"

                : `This is visit #${visits} on this device. Thanks for coming back.`

        );


    // =========================================================
    // ANIMATED STATISTICS
    // =========================================================

    let statsAnimated =
        false;


    function animateStats() {

        if (
            statsAnimated
        ) {

            return;

        }


        const section =
            document.querySelector(
                ".stats-band"
            );


        if (
            !section
        ) {

            return;

        }


        const top =
            section
                .getBoundingClientRect()
                .top;


        if (
            top >
            window.innerHeight *
                0.85
        ) {

            return;

        }


        statsAnimated =
            true;


        $(".stat").each(
            function () {

                const $stat =
                    $(this);


                const target =
                    parseInt(
                        $stat.data(
                            "target"
                        ),
                        10
                    );


                const $num =
                    $stat.find(
                        ".stat-num"
                    );


                $(
                    {
                        val: 0
                    }
                ).animate(

                    {
                        val: target
                    },

                    {
                        duration: 900,

                        easing:
                            "swing",


                        step:
                            function (now) {

                                $num.text(
                                    Math.floor(
                                        now
                                    )
                                );

                            },


                        complete:
                            function () {

                                $num.text(
                                    target
                                );

                            }

                    }

                );

            }
        );

    }


    $(window).on(
        "scroll",
        animateStats
    );


    animateStats();


    // =========================================================
    // NEWSLETTER LOCAL STORAGE
    // =========================================================

    $("#newsletterForm").on(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                $("#newsletterEmail")
                    .val()
                    .trim();


            if (
                !email
            ) {

                return;

            }


            let list =
                [];


            try {

                const stored =
                    JSON.parse(
                        localStorage.getItem(
                            "amc_newsletter_list"
                        ) ||
                        "[]"
                    );


                list =
                    Array.isArray(
                        stored
                    )
                        ? stored
                        : [];

            }


            catch (error) {

                console.warn(
                    "Could not read the saved newsletter list. Resetting it.",
                    error
                );


                localStorage.removeItem(
                    "amc_newsletter_list"
                );

            }


            // Already subscribed

            if (
                list.includes(
                    email
                )
            ) {

                $("#newsletterStatus")
                    .text(
                        `${email} is already on the reminder list.`
                    );

            }


            // New subscriber

            else {

                list.push(
                    email
                );


                localStorage.setItem(
                    "amc_newsletter_list",
                    JSON.stringify(
                        list
                    )
                );


                $("#newsletterStatus")
                    .text(
                        `Saved! We'll remind ${email} before the next workshop.`
                    );


                showToast(
                    "Subscribed for workshop reminders."
                );

            }


            $("#newsletterEmail")
                .val(
                    ""
                );

        }
    );


    // =========================================================
    // TOAST NOTIFICATION
    // =========================================================

    function showToast(
        message
    ) {

        const $toast =
            $("#toast")
                .text(
                    message
                )
                .addClass(
                    "show"
                );


        setTimeout(
            function () {

                $toast
                    .removeClass(
                        "show"
                    );

            },
            2600
        );

    }

});

/* =========================================================
   LOAD SHARED CANVAS SITE ENHANCEMENTS
   ========================================================= */

(function loadCanvasSiteEnhancements() {

    const current =
        document.currentScript;


    if (!current) {
        return;
    }


    const src =
        new URL(
            "site-enhancements.js",
            current.src
        ).href;


    if (
        document.querySelector(
            `script[src="${src}"]`
        )
    ) {

        return;

    }


    const script =
        document.createElement(
            "script"
        );


    script.src =
        src;


    script.async =
        false;


    document.body.appendChild(
        script
    );

})();