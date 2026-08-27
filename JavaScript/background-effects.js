/* ============================================================
   CANVAS — INTERACTIVE AMBIENT BACKGROUND

   Features:
   1. Animated Aurora Glow
   2. Floating Particles
   3. Subtle Particle Connections
   4. Mouse Parallax
   5. Page-Specific Intensity
   6. Mobile Performance Optimisation
   7. Page Visibility Performance Control
   8. Reduced Motion Accessibility

   File:
   JavaScript/background-effects.js
   ============================================================ */


(function () {

    "use strict";


    // =========================================================
    // PREVENT DUPLICATE INITIALISATION
    // =========================================================

    if (
        window.__CANVAS_BACKGROUND_EFFECTS__
    ) {

        return;

    }


    window.__CANVAS_BACKGROUND_EFFECTS__ =
        true;


    // =========================================================
    // REDUCED MOTION
    // =========================================================

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    // =========================================================
    // CURRENT PAGE
    // =========================================================

    const pathname =
        window.location.pathname
            .toLowerCase();


    function getPageType() {

        if (
            pathname.endsWith("/") ||
            pathname.endsWith("index.html")
        ) {

            return "home";

        }


        if (
            pathname.includes(
                "gallery"
            )
        ) {

            return "gallery";

        }


        if (
            pathname.includes(
                "project"
            )
        ) {

            return "projects";

        }


        if (
            pathname.includes(
                "about"
            )
        ) {

            return "about";

        }


        if (
            pathname.includes(
                "events"
            )
        ) {

            return "events";

        }


        if (
            pathname.includes(
                "workshops"
            )
        ) {

            return "workshops";

        }


        if (
            pathname.includes(
                "join"
            )
        ) {

            return "join";

        }


        if (
            pathname.includes(
                "contact"
            )
        ) {

            return "contact";

        }


        return "default";

    }


    const pageType =
        getPageType();


    // =========================================================
    // PAGE-SPECIFIC SETTINGS
    // =========================================================

    const PAGE_CONFIG = {

        home: {

            particleOpacity:
                0.60,

            auroraOpacity:
                1,

            connectionOpacity:
                0.17,

            speed:
                1

        },


        about: {

            particleOpacity:
                0.43,

            auroraOpacity:
                0.72,

            connectionOpacity:
                0.11,

            speed:
                0.82

        },


        events: {

            particleOpacity:
                0.43,

            auroraOpacity:
                0.74,

            connectionOpacity:
                0.11,

            speed:
                0.85

        },


        workshops: {

            particleOpacity:
                0.43,

            auroraOpacity:
                0.74,

            connectionOpacity:
                0.11,

            speed:
                0.85

        },


        gallery: {

            particleOpacity:
                0.27,

            auroraOpacity:
                0.42,

            connectionOpacity:
                0.055,

            speed:
                0.65

        },


        projects: {

            particleOpacity:
                0.27,

            auroraOpacity:
                0.42,

            connectionOpacity:
                0.055,

            speed:
                0.65

        },


        join: {

            particleOpacity:
                0.38,

            auroraOpacity:
                0.68,

            connectionOpacity:
                0.09,

            speed:
                0.80

        },


        contact: {

            particleOpacity:
                0.38,

            auroraOpacity:
                0.68,

            connectionOpacity:
                0.09,

            speed:
                0.80

        },


        default: {

            particleOpacity:
                0.38,

            auroraOpacity:
                0.65,

            connectionOpacity:
                0.09,

            speed:
                0.80

        }

    };


    const config =
        PAGE_CONFIG[
            pageType
        ]
        ||
        PAGE_CONFIG.default;


    // =========================================================
    // DEVICE SETTINGS
    // =========================================================

    const mobileQuery =
        window.matchMedia(
            "(max-width: 768px)"
        );


    function isMobile() {

        return mobileQuery.matches;

    }


    function getParticleCount() {

        if (
            reducedMotion.matches
        ) {

            return 0;

        }


        if (
            isMobile()
        ) {

            return 16;

        }


        if (
            window.innerWidth <
            1200
        ) {

            return 28;

        }


        return 42;

    }


    // =========================================================
    // CREATE BACKGROUND ROOT
    // =========================================================

    const root =
        document.createElement(
            "div"
        );


    root.id =
        "canvasDynamicBackground";


    root.setAttribute(
        "aria-hidden",
        "true"
    );


    root.innerHTML = `

        <div class="cx-aurora cx-aurora-one"></div>

        <div class="cx-aurora cx-aurora-two"></div>

        <div class="cx-aurora cx-aurora-three"></div>

        <div class="cx-aurora cx-aurora-four"></div>

        <canvas
            id="canvasParticleField">
        </canvas>

    `;


    document.body.prepend(
        root
    );


    // =========================================================
    // BACKGROUND CSS
    // =========================================================

    const style =
        document.createElement(
            "style"
        );


    style.id =
        "canvasDynamicBackgroundStyles";


    style.textContent = `

        /* =================================================
           DYNAMIC BACKGROUND ROOT
           ================================================= */

        #canvasDynamicBackground {

            --cx-mouse-x:
                0px;

            --cx-mouse-y:
                0px;

            position:
                fixed;

            inset:
                0;

            width:
                100%;

            height:
                100%;

            overflow:
                hidden;

            pointer-events:
                none;

            z-index:
                -1;

            opacity:
                1;

            isolation:
                isolate;

        }


        /* =================================================
           PARTICLE CANVAS
           ================================================= */

        #canvasParticleField {

            position:
                absolute;

            inset:
                0;

            width:
                100%;

            height:
                100%;

            z-index:
                4;

            pointer-events:
                none;

        }


        /* =================================================
           AURORA BASE
           ================================================= */

        .cx-aurora {

            position:
                absolute;

            border-radius:
                50%;

            filter:
                blur(85px);

            opacity:
                ${config.auroraOpacity};

            will-change:
                transform;

            pointer-events:
                none;

            mix-blend-mode:
                screen;

        }


        /* =================================================
           PURPLE AURORA
           ================================================= */

        .cx-aurora-one {

            width:
                min(
                    720px,
                    65vw
                );

            height:
                min(
                    720px,
                    65vw
                );

            left:
                -14vw;

            top:
                -18vh;

            background:

                radial-gradient(

                    circle,

                    rgba(
                        155,
                        89,
                        255,
                        0.23
                    )
                    0%,

                    rgba(
                        105,
                        60,
                        220,
                        0.10
                    )
                    40%,

                    transparent
                    72%

                );

            animation:

                cxAuroraOne
                26s
                ease-in-out
                infinite
                alternate;

        }


        /* =================================================
           BLUE / VIOLET AURORA
           ================================================= */

        .cx-aurora-two {

            width:
                min(
                    780px,
                    70vw
                );

            height:
                min(
                    780px,
                    70vw
                );

            right:
                -22vw;

            top:
                15vh;

            background:

                radial-gradient(

                    circle,

                    rgba(
                        85,
                        105,
                        255,
                        0.16
                    )
                    0%,

                    rgba(
                        116,
                        64,
                        230,
                        0.09
                    )
                    42%,

                    transparent
                    72%

                );

            animation:

                cxAuroraTwo
                32s
                ease-in-out
                infinite
                alternate;

        }


        /* =================================================
           LOWER PURPLE AURORA
           ================================================= */

        .cx-aurora-three {

            width:
                min(
                    650px,
                    58vw
                );

            height:
                min(
                    650px,
                    58vw
                );

            left:
                28vw;

            bottom:
                -34vh;

            background:

                radial-gradient(

                    circle,

                    rgba(
                        175,
                        92,
                        255,
                        0.16
                    )
                    0%,

                    rgba(
                        116,
                        64,
                        230,
                        0.08
                    )
                    44%,

                    transparent
                    70%

                );

            animation:

                cxAuroraThree
                29s
                ease-in-out
                infinite
                alternate;

        }


        /* =================================================
           SMALL ACCENT GLOW
           ================================================= */

        .cx-aurora-four {

            width:
                420px;

            height:
                420px;

            right:
                20vw;

            bottom:
                12vh;

            background:

                radial-gradient(

                    circle,

                    rgba(
                        82,
                        162,
                        255,
                        0.10
                    )
                    0%,

                    transparent
                    68%

                );

            filter:
                blur(
                    100px
                );

            animation:

                cxAuroraFour
                22s
                ease-in-out
                infinite
                alternate;

        }


        /* =================================================
           MOUSE PARALLAX
           ================================================= */

        .cx-aurora-one {

            translate:

                calc(
                    var(
                        --cx-mouse-x
                    )
                    *
                    0.75
                )

                calc(
                    var(
                        --cx-mouse-y
                    )
                    *
                    0.75
                );

        }


        .cx-aurora-two {

            translate:

                calc(
                    var(
                        --cx-mouse-x
                    )
                    *
                    -0.52
                )

                calc(
                    var(
                        --cx-mouse-y
                    )
                    *
                    -0.52
                );

        }


        .cx-aurora-three {

            translate:

                calc(
                    var(
                        --cx-mouse-x
                    )
                    *
                    0.38
                )

                calc(
                    var(
                        --cx-mouse-y
                    )
                    *
                    -0.38
                );

        }


        .cx-aurora-four {

            translate:

                calc(
                    var(
                        --cx-mouse-x
                    )
                    *
                    -0.30
                )

                calc(
                    var(
                        --cx-mouse-y
                    )
                    *
                    0.30
                );

        }


        /* =================================================
           AURORA ANIMATIONS
           ================================================= */

        @keyframes cxAuroraOne {

            0% {

                transform:

                    translate3d(
                        0,
                        0,
                        0
                    )

                    scale(
                        0.94
                    );

            }


            35% {

                transform:

                    translate3d(
                        12vw,
                        7vh,
                        0
                    )

                    scale(
                        1.07
                    );

            }


            68% {

                transform:

                    translate3d(
                        5vw,
                        18vh,
                        0
                    )

                    scale(
                        1
                    );

            }


            100% {

                transform:

                    translate3d(
                        17vw,
                        10vh,
                        0
                    )

                    scale(
                        1.12
                    );

            }

        }


        @keyframes cxAuroraTwo {

            0% {

                transform:

                    translate3d(
                        0,
                        0,
                        0
                    )

                    scale(
                        1
                    );

            }


            40% {

                transform:

                    translate3d(
                        -15vw,
                        6vh,
                        0
                    )

                    scale(
                        1.08
                    );

            }


            72% {

                transform:

                    translate3d(
                        -8vw,
                        -10vh,
                        0
                    )

                    scale(
                        0.96
                    );

            }


            100% {

                transform:

                    translate3d(
                        -19vw,
                        12vh,
                        0
                    )

                    scale(
                        1.10
                    );

            }

        }


        @keyframes cxAuroraThree {

            0% {

                transform:

                    translate3d(
                        0,
                        0,
                        0
                    )

                    scale(
                        0.96
                    );

            }


            50% {

                transform:

                    translate3d(
                        -14vw,
                        -14vh,
                        0
                    )

                    scale(
                        1.07
                    );

            }


            100% {

                transform:

                    translate3d(
                        11vw,
                        -20vh,
                        0
                    )

                    scale(
                        1.13
                    );

            }

        }


        @keyframes cxAuroraFour {

            0% {

                transform:

                    translate3d(
                        0,
                        0,
                        0
                    );

            }


            50% {

                transform:

                    translate3d(
                        -7vw,
                        -6vh,
                        0
                    );

            }


            100% {

                transform:

                    translate3d(
                        9vw,
                        5vh,
                        0
                    );

            }

        }


        /* =================================================
           LIGHT THEME
           ================================================= */

        body.canvas-light
        #canvasDynamicBackground {

            opacity:
                0.60;

        }


        body.canvas-light
        .cx-aurora {

            mix-blend-mode:
                multiply;

        }


        /* =================================================
           GALLERY / PROJECTS
           MAKE BACKGROUND EVEN MORE SUBTLE
           ================================================= */

        body.gallery-page
        #canvasDynamicBackground,

        body.project-page
        #canvasDynamicBackground {

            opacity:
                0.78;

        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (
            max-width:
            768px
        ) {

            .cx-aurora {

                filter:
                    blur(
                        70px
                    );

            }


            .cx-aurora-one {

                width:
                    560px;

                height:
                    560px;

            }


            .cx-aurora-two {

                width:
                    580px;

                height:
                    580px;

            }


            .cx-aurora-three {

                width:
                    520px;

                height:
                    520px;

            }


            .cx-aurora-four {

                width:
                    320px;

                height:
                    320px;

            }

        }


        /* =================================================
           REDUCED MOTION
           ================================================= */

        @media (
            prefers-reduced-motion:
            reduce
        ) {

            .cx-aurora {

                animation:
                    none
                    !important;

                translate:
                    none
                    !important;

            }


            #canvasParticleField {

                display:
                    none;

            }

        }

    `;


    document.head.appendChild(
        style
    );


    // =========================================================
    // CANVAS
    // =========================================================

    const canvas =
        document.getElementById(
            "canvasParticleField"
        );


    const ctx =
        canvas.getContext(
            "2d"
        );


    // =========================================================
    // PIXEL RATIO
    // =========================================================

    let pixelRatio =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    let width =
        0;


    let height =
        0;


    // =========================================================
    // POINTER
    // =========================================================

    const pointer = {

        x:
            window.innerWidth / 2,

        y:
            window.innerHeight / 2,

        active:
            false

    };


    // =========================================================
    // PARTICLE CLASS
    // =========================================================

    class Particle {

        constructor() {

            this.reset(
                true
            );

        }


        reset(
            initial =
                false
        ) {

            this.x =
                Math.random() *
                width;


            this.y =
                initial

                    ? (
                        Math.random() *
                        height
                    )

                    : (
                        Math.random() >
                            0.5

                            ? -20

                            : height +
                                20
                    );


            const sizeChance =
                Math.random();


            if (
                sizeChance >
                0.93
            ) {

                this.radius =
                    2.2 +
                    Math.random() *
                    1.7;

            }

            else if (
                sizeChance >
                0.65
            ) {

                this.radius =
                    1.3 +
                    Math.random() *
                    1.2;

            }

            else {

                this.radius =
                    0.6 +
                    Math.random() *
                    0.8;

            }


            const speed =
                config.speed *
                (
                    0.10 +
                    Math.random() *
                    0.18
                );


            this.vx =
                (
                    Math.random() -
                    0.5
                )
                *
                speed;


            this.vy =
                (
                    -0.10 -
                    Math.random() *
                    0.16
                )
                *
                config.speed;


            this.baseAlpha =
                (
                    0.18 +
                    Math.random() *
                    0.58
                )
                *
                config.particleOpacity;


            this.alpha =
                this.baseAlpha;


            this.twinkleSpeed =
                0.006 +
                Math.random() *
                0.012;


            this.twinkleOffset =
                Math.random() *
                Math.PI *
                2;


            this.hueType =
                Math.random();


            this.parallax =
                0.15 +
                Math.random() *
                0.85;

        }


        update(
            time
        ) {

            this.x +=
                this.vx;


            this.y +=
                this.vy;


            /*
             * Subtle mouse influence.
             * Particle movement is intentionally tiny.
             */

            if (
                pointer.active &&
                !isMobile()
            ) {

                const dx =
                    pointer.x -
                    this.x;


                const dy =
                    pointer.y -
                    this.y;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                const influenceRadius =
                    180;


                if (
                    distance <
                        influenceRadius &&
                    distance >
                        0
                ) {

                    const force =
                        (
                            1 -
                            distance /
                            influenceRadius
                        )
                        *
                        0.004
                        *
                        this.parallax;


                    /*
                     * Very gentle repulsion.
                     */

                    this.x -=
                        (
                            dx /
                            distance
                        )
                        *
                        force
                        *
                        9;


                    this.y -=
                        (
                            dy /
                            distance
                        )
                        *
                        force
                        *
                        9;

                }

            }


            /*
             * Small twinkle.
             */

            const twinkle =
                Math.sin(

                    time *
                    this.twinkleSpeed

                    +

                    this.twinkleOffset

                );


            this.alpha =
                Math.max(

                    0.08,

                    this.baseAlpha *
                    (
                        0.72 +
                        twinkle *
                        0.28
                    )

                );


            /*
             * Wrap particles.
             */

            if (
                this.y <
                -30
            ) {

                this.y =
                    height +
                    30;


                this.x =
                    Math.random() *
                    width;

            }


            if (
                this.x <
                -30
            ) {

                this.x =
                    width +
                    30;

            }


            if (
                this.x >
                width +
                    30
            ) {

                this.x =
                    -30;

            }

        }


        draw() {

            let colour;


            if (
                this.hueType <
                0.58
            ) {

                colour =

                    `rgba(
                        187,
                        145,
                        255,
                        ${this.alpha}
                    )`;

            }

            else if (
                this.hueType <
                0.86
            ) {

                colour =

                    `rgba(
                        118,
                        142,
                        255,
                        ${this.alpha * 0.88}
                    )`;

            }

            else {

                colour =

                    `rgba(
                        255,
                        255,
                        255,
                        ${this.alpha * 0.72}
                    )`;

            }


            ctx.beginPath();


            ctx.arc(

                this.x,

                this.y,

                this.radius,

                0,

                Math.PI *
                2

            );


            ctx.fillStyle =
                colour;


            ctx.fill();


            /*
             * Only larger particles get glow.
             */

            if (
                this.radius >
                1.7
            ) {

                ctx.beginPath();


                ctx.arc(

                    this.x,

                    this.y,

                    this.radius *
                    3.6,

                    0,

                    Math.PI *
                    2

                );


                const glow =
                    ctx.createRadialGradient(

                        this.x,
                        this.y,
                        0,

                        this.x,
                        this.y,
                        this.radius *
                        3.6

                    );


                glow.addColorStop(

                    0,

                    `rgba(
                        155,
                        89,
                        255,
                        ${this.alpha * 0.20}
                    )`

                );


                glow.addColorStop(

                    1,

                    "rgba(155,89,255,0)"

                );


                ctx.fillStyle =
                    glow;


                ctx.fill();

            }

        }

    }


    // =========================================================
    // PARTICLES
    // =========================================================

    let particles =
        [];


    function createParticles() {

        const target =
            getParticleCount();


        particles =
            Array.from(

                {
                    length:
                        target
                },

                function () {

                    return new Particle();

                }

            );

    }


    // =========================================================
    // RESIZE
    // =========================================================

    function resize() {

        width =
            window.innerWidth;


        height =
            window.innerHeight;


        pixelRatio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        canvas.width =
            Math.floor(
                width *
                pixelRatio
            );


        canvas.height =
            Math.floor(
                height *
                pixelRatio
            );


        canvas.style.width =
            width +
            "px";


        canvas.style.height =
            height +
            "px";


        ctx.setTransform(

            pixelRatio,
            0,
            0,
            pixelRatio,
            0,
            0

        );


        createParticles();

    }


    // =========================================================
    // PARTICLE CONNECTIONS
    // =========================================================

    function drawConnections() {

        if (
            isMobile() ||
            config.connectionOpacity <= 0
        ) {

            return;

        }


        const maximumDistance =
            pageType ===
                "home"

                ? 125

                : 105;


        for (
            let i = 0;
            i < particles.length;
            i++
        ) {

            for (
                let j =
                    i + 1;

                j <
                    particles.length;

                j++
            ) {

                const first =
                    particles[i];


                const second =
                    particles[j];


                const dx =
                    first.x -
                    second.x;


                const dy =
                    first.y -
                    second.y;


                const distanceSquared =
                    dx * dx +
                    dy * dy;


                if (
                    distanceSquared >
                    maximumDistance *
                    maximumDistance
                ) {

                    continue;

                }


                const distance =
                    Math.sqrt(
                        distanceSquared
                    );


                const opacity =
                    (
                        1 -
                        distance /
                        maximumDistance
                    )
                    *
                    config.connectionOpacity;


                ctx.beginPath();


                ctx.moveTo(
                    first.x,
                    first.y
                );


                ctx.lineTo(
                    second.x,
                    second.y
                );


                ctx.strokeStyle =

                    `rgba(
                        151,
                        113,
                        220,
                        ${opacity}
                    )`;


                ctx.lineWidth =
                    0.55;


                ctx.stroke();

            }

        }

    }


    // =========================================================
    // ANIMATION LOOP
    // =========================================================

    let animationFrame =
        null;


    let running =
        true;


    function animate(
        time
    ) {

        if (
            !running ||
            reducedMotion.matches
        ) {

            animationFrame =
                null;


            return;

        }


        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        particles.forEach(
            function (
                particle
            ) {

                particle.update(
                    time
                );

            }
        );


        drawConnections();


        particles.forEach(
            function (
                particle
            ) {

                particle.draw();

            }
        );


        animationFrame =
            requestAnimationFrame(
                animate
            );

    }


    // =========================================================
    // START / STOP
    // =========================================================

    function start() {

        if (
            running &&
            animationFrame
        ) {

            return;

        }


        running =
            true;


        if (
            !reducedMotion.matches
        ) {

            animationFrame =
                requestAnimationFrame(
                    animate
                );

        }

    }


    function stop() {

        running =
            false;


        if (
            animationFrame
        ) {

            cancelAnimationFrame(
                animationFrame
            );


            animationFrame =
                null;

        }

    }


    // =========================================================
    // POINTER PARALLAX
    // =========================================================

    let mouseTargetX =
        0;


    let mouseTargetY =
        0;


    let mouseCurrentX =
        0;


    let mouseCurrentY =
        0;


    let parallaxFrame =
        null;


    function updateParallax() {

        mouseCurrentX +=

            (
                mouseTargetX -
                mouseCurrentX
            )
            *
            0.055;


        mouseCurrentY +=

            (
                mouseTargetY -
                mouseCurrentY
            )
            *
            0.055;


        root.style.setProperty(

            "--cx-mouse-x",

            mouseCurrentX
            +
            "px"

        );


        root.style.setProperty(

            "--cx-mouse-y",

            mouseCurrentY
            +
            "px"

        );


        const stillMoving =

            Math.abs(
                mouseTargetX -
                mouseCurrentX
            )
            >
            0.05

            ||

            Math.abs(
                mouseTargetY -
                mouseCurrentY
            )
            >
            0.05;


        if (
            stillMoving
        ) {

            parallaxFrame =
                requestAnimationFrame(
                    updateParallax
                );

        }

        else {

            parallaxFrame =
                null;

        }

    }


    function requestParallaxUpdate() {

        if (
            !parallaxFrame
        ) {

            parallaxFrame =
                requestAnimationFrame(
                    updateParallax
                );

        }

    }


    if (
        !reducedMotion.matches &&
        !isMobile()
    ) {

        window.addEventListener(

            "pointermove",

            function (
                event
            ) {

                pointer.x =
                    event.clientX;


                pointer.y =
                    event.clientY;


                pointer.active =
                    true;


                /*
                 * Convert pointer position
                 * into approximately -10px → +10px.
                 */

                const normalX =

                    (
                        event.clientX /
                        window.innerWidth
                    )
                    -
                    0.5;


                const normalY =

                    (
                        event.clientY /
                        window.innerHeight
                    )
                    -
                    0.5;


                mouseTargetX =
                    normalX *
                    18;


                mouseTargetY =
                    normalY *
                    14;


                requestParallaxUpdate();

            },

            {
                passive:
                    true
            }

        );


        document.addEventListener(

            "mouseleave",

            function () {

                pointer.active =
                    false;


                mouseTargetX =
                    0;


                mouseTargetY =
                    0;


                requestParallaxUpdate();

            }

        );

    }


    // =========================================================
    // TAB VISIBILITY PERFORMANCE
    // =========================================================

    document.addEventListener(

        "visibilitychange",

        function () {

            if (
                document.hidden
            ) {

                stop();

            }

            else {

                start();

            }

        }

    );


    // =========================================================
    // RESIZE PERFORMANCE
    // =========================================================

    let resizeTimer;


    window.addEventListener(

        "resize",

        function () {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    resize,
                    160
                );

        },

        {
            passive:
                true
        }

    );


    // =========================================================
    // REDUCED MOTION CHANGES
    // =========================================================

    function handleMotionPreference() {

        if (
            reducedMotion.matches
        ) {

            stop();


            ctx.clearRect(
                0,
                0,
                width,
                height
            );


            root.style.setProperty(
                "--cx-mouse-x",
                "0px"
            );


            root.style.setProperty(
                "--cx-mouse-y",
                "0px"
            );

        }

        else {

            resize();

            start();

        }

    }


    if (
        typeof reducedMotion
            .addEventListener ===
        "function"
    ) {

        reducedMotion.addEventListener(

            "change",

            handleMotionPreference

        );

    }


    // =========================================================
    // INITIALISE
    // =========================================================

    resize();


    if (
        !reducedMotion.matches
    ) {

        animationFrame =
            requestAnimationFrame(
                animate
            );

    }


})();