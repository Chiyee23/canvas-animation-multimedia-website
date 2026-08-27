/* =========================================================
   CANVAS — ALL-IN-ONE SITE ENHANCEMENTS
   Paste this as: JavaScript/site-enhancements.js
   ========================================================= */

(function () {

    "use strict";


    // =========================================================
    // PREVENT DUPLICATE INITIALISATION
    // =========================================================

    if (
        window.__CANVAS_ENHANCEMENTS__
    ) {

        return;

    }


    window.__CANVAS_ENHANCEMENTS__ =
        true;


    // =========================================================
    // PATHS / STORAGE
    // =========================================================

    const currentScript =
        document.currentScript;


    const asset =
        path =>
            currentScript

                ? new URL(
                    path,
                    currentScript.src
                ).href

                : path;


    const bgDark =
        asset(
            "../images/canvas-studio-background2.png"
        );


    const THEME_KEY =
        "canvas_theme";


    const GALLERY_STATE_KEY =
        "canvas_gallery_view_state";


    // =========================================================
    // STYLES
    // =========================================================

    const style =
        document.createElement(
            "style"
        );


    style.id =
        "canvasEnhancementStyles";


    style.textContent = `


    /* =====================================================
       GLOBAL
       ===================================================== */

    :root {

        --cx-purple:
            #9b59ff;

        --cx-bg:
            #08080d;

        --cx-panel:
            rgba(
                10,
                10,
                18,
                0.92
            );

        --cx-line:
            rgba(
                255,
                255,
                255,
                0.14
            );

        --cx-muted:
            #9696a6;

    }


    html {

        background:
            #08080d;

    }


    body {

        position:
            relative;

        isolation:
            isolate;

        min-height:
            100vh;

        background:
            transparent
            !important;

    }


    body::before {

        content:
            "";

        position:
            fixed;

        inset:
            0;

        z-index:
            -3;

        pointer-events:
            none;

        background:

            linear-gradient(
                rgba(
                    5,
                    5,
                    10,
                    0.91
                ),
                rgba(
                    8,
                    8,
                    13,
                    0.95
                )
            ),

            url("${bgDark}")
            center /
            cover
            no-repeat;

    }


    body::after {

        content:
            "";

        position:
            fixed;

        inset:
            0;

        z-index:
            -2;

        pointer-events:
            none;

        background:

            radial-gradient(
                circle
                at 18% 12%,
                rgba(
                    155,
                    89,
                    255,
                    0.12
                ),
                transparent
                28rem
            ),

            radial-gradient(
                circle
                at 82% 28%,
                rgba(
                    66,
                    88,
                    255,
                    0.08
                ),
                transparent
                30rem
            );

    }


    /* =====================================================
       SOFT LAVENDER LIGHT MODE
       ===================================================== */

    body.canvas-light {

        color:
            #27212f
            !important;

    }


    body.canvas-light::before {

        background:

            linear-gradient(
                rgba(
                    218,
                    212,
                    226,
                    0.84
                ),
                rgba(
                    205,
                    198,
                    216,
                    0.90
                )
            ),

            url("${bgDark}")
            center /
            cover
            no-repeat;

        filter:

            saturate(
                0.48
            )

            contrast(
                0.92
            )

            brightness(
                0.92
            );

    }


    body.canvas-light::after {

        background:

            radial-gradient(
                circle
                at 15% 10%,
                rgba(
                    122,
                    82,
                    190,
                    0.14
                ),
                transparent
                26rem
            ),

            radial-gradient(
                circle
                at 86% 24%,
                rgba(
                    95,
                    105,
                    190,
                    0.10
                ),
                transparent
                30rem
            );

    }


    /* =====================================================
       LIGHT NAVIGATION
       ===================================================== */

    body.canvas-light
    .navigation,

    body.canvas-light
    footer,

    body.canvas-light
    .site-footer {

        background:
            rgba(
                239,
                235,
                245,
                0.93
            )
            !important;

        color:
            #292230
            !important;

        border-color:
            rgba(
                55,
                42,
                68,
                0.14
            )
            !important;

        box-shadow:

            0
            8px
            30px
            rgba(
                50,
                36,
                62,
                0.05
            );

    }


    body.canvas-light
    .logo,

    body.canvas-light
    h1,

    body.canvas-light
    h2,

    body.canvas-light
    h3,

    body.canvas-light
    h4,

    body.canvas-light
    .modal-title {

        color:
            #241e2b
            !important;

    }


    body.canvas-light
    .nav-links a {

        color:
            #62596d
            !important;

    }


    body.canvas-light
    .nav-links a:hover,

    body.canvas-light
    .nav-links a.active,

    body.canvas-light
    .nav-links a[
        aria-current="page"
    ] {

        color:
            #2c2434
            !important;

    }


    /* =====================================================
       LIGHT TEXT
       ===================================================== */

    body.canvas-light
    p,

    body.canvas-light
    .text-muted,

    body.canvas-light
    .section-lead,

    body.canvas-light
    .project-meta,

    body.canvas-light
    .gallery-meta,

    body.canvas-light
    .cx-feature-meta,

    body.canvas-light
    .cx-featured-projects-head
    span {

        color:
            #635a6d
            !important;

    }


    body.canvas-light
    .eyebrow,

    body.canvas-light
    .gallery-small-title,

    body.canvas-light
    .project-small-title,

    body.canvas-light
    .cx-kicker,

    body.canvas-light
    .project-type {

        color:
            #7653b8
            !important;

    }


    /* =====================================================
       GALLERY / PROJECT OUTLINE TITLE
       ===================================================== */

    body.canvas-light
    .project-hero
    h1
    span,

    body.canvas-light
    .gallery-hero
    h1
    span {

        color:
            transparent
            !important;

        -webkit-text-stroke:

            1.4px
            #785ba0
            !important;

    }


    /* =====================================================
       LIGHT CARDS
       ===================================================== */

    body.canvas-light
    .card,

    body.canvas-light
    .event,

    body.canvas-light
    .workshop,

    body.canvas-light
    .step,

    body.canvas-light
    .project-card,

    body.canvas-light
    .gallery-info,

    body.canvas-light
    .modal-content,

    body.canvas-light
    .resource-card,

    body.canvas-light
    .cx-summary,

    body.canvas-light
    .cx-feature-card,

    body.canvas-light
    .cx-featured-projects {

        background:

            rgba(
                244,
                240,
                248,
                0.91
            )
            !important;

        color:
            #292230
            !important;

        border-color:

            rgba(
                68,
                49,
                82,
                0.15
            )
            !important;

        box-shadow:

            0
            16px
            40px
            rgba(
                55,
                38,
                67,
                0.08
            );

    }


    body.canvas-light
    .project-info,

    body.canvas-light
    .gallery-info {

        background:

            rgba(
                241,
                237,
                246,
                0.96
            )
            !important;

    }


    body.canvas-light
    .project-title,

    body.canvas-light
    .gallery-title,

    body.canvas-light
    .cx-feature-title,

    body.canvas-light
    .cx-summary-value {

        color:
            #2a2232
            !important;

    }


    /*
     * Keep artwork/media backgrounds dark
     * even while using light mode.
     */

    body.canvas-light
    .project-media,

    body.canvas-light
    .gallery-media,

    body.canvas-light
    .thumb,

    body.canvas-light
    .cx-feature-media,

    body.canvas-light
    .cx-gallery-stage {

        background:
            #0c0a11
            !important;

    }


    /* =====================================================
       LIGHT INPUTS
       ===================================================== */

    body.canvas-light
    input,

    body.canvas-light
    select,

    body.canvas-light
    textarea,

    body.canvas-light
    .cx-project-search,

    body.canvas-light
    .cx-project-sort {

        background:

            rgba(
                249,
                247,
                251,
                0.92
            )
            !important;

        color:
            #2a2331
            !important;

        border-color:

            rgba(
                65,
                48,
                77,
                0.20
            )
            !important;

    }


    body.canvas-light
    input::placeholder,

    body.canvas-light
    textarea::placeholder {

        color:
            #91889a
            !important;

    }


    /* =====================================================
       LIGHT BUTTONS
       ===================================================== */

    body.canvas-light
    .btn:not(
        .btn-solid
    ),

    body.canvas-light
    .showcase-link {

        color:
            #3b3047
            !important;

        border-color:

            rgba(
                72,
                52,
                87,
                0.24
            )
            !important;

        background:

            rgba(
                247,
                244,
                250,
                0.74
            )
            !important;

    }


    body.canvas-light
    .btn:not(
        .btn-solid
    ):hover,

    body.canvas-light
    .showcase-link:hover {

        color:
            #241e2b
            !important;

        border-color:

            rgba(
                118,
                83,
                184,
                0.55
            )
            !important;

        background:

            rgba(
                238,
                231,
                246,
                0.96
            )
            !important;

    }


    body.canvas-light
    .cx-theme,

    body.canvas-light
    .cx-search-trigger {

        color:
            #7250ad
            !important;

        border-color:

            rgba(
                76,
                55,
                91,
                0.20
            )
            !important;

        background:

            rgba(
                248,
                245,
                250,
                0.72
            )
            !important;

    }


    body.canvas-light
    .cx-top {

        background:

            rgba(
                47,
                38,
                57,
                0.94
            )
            !important;

        color:
            #ffffff
            !important;

        border-color:

            rgba(
                118,
                83,
                184,
                0.55
            )
            !important;

    }


    body.canvas-light
    .view-details-btn,

    body.canvas-light
    .cx-calendar,

    body.canvas-light
    .cx-project-share {

        color:
            #553b79
            !important;

        border-color:

            rgba(
                118,
                83,
                184,
                0.30
            )
            !important;

        background:

            rgba(
                118,
                83,
                184,
                0.07
            )
            !important;

    }


    /* =====================================================
       JOIN PAGE LIGHT MODE
       ===================================================== */

    body.canvas-light
    .creative-form-card,

    body.canvas-light
    .message-card,

    body.canvas-light
    .contact-card,

    body.canvas-light
    .why-card {

        background:

            rgba(
                231,
                225,
                238,
                0.82
            )
            !important;

        border-color:

            rgba(
                68,
                49,
                82,
                0.15
            )
            !important;

        box-shadow:

            0
            18px
            46px
            rgba(
                55,
                38,
                67,
                0.08
            )
            !important;

    }


    body.canvas-light
    .message-section,

    body.canvas-light
    .api-section {

        background:

            rgba(
                211,
                204,
                221,
                0.45
            )
            !important;

        border-color:

            rgba(
                68,
                49,
                82,
                0.12
            )
            !important;

    }


    body.canvas-light
    .form-card-top,

    body.canvas-light
    .progress-labels,

    body.canvas-light
    .part-number,

    body.canvas-light
    .part-description,

    body.canvas-light
    .creative-input
    label,

    body.canvas-light
    .creative-textarea
    label,

    body.canvas-light
    .contact-label,

    body.canvas-light
    .contact-description,

    body.canvas-light
    .message-card-top {

        color:
            #655d70
            !important;

    }


    body.canvas-light
    .progress-line {

        background:

            rgba(
                57,
                43,
                69,
                0.14
            )
            !important;

    }


    body.canvas-light
    .progress-fill {

        background:
            #7653b8
            !important;

    }


    body.canvas-light
    .progress-labels
    span.active {

        color:
            #34283f
            !important;

    }


    body.canvas-light
    .interest-card {

        background:

            rgba(
                244,
                240,
                248,
                0.72
            )
            !important;

        border-color:

            rgba(
                68,
                49,
                82,
                0.14
            )
            !important;

    }


    body.canvas-light
    .interest-card:has(
        input:checked
    ) {

        background:

            rgba(
                118,
                83,
                184,
                0.12
            )
            !important;

        border-color:

            rgba(
                118,
                83,
                184,
                0.58
            )
            !important;

    }


    body.canvas-light
    .contact-card
    h3,

    body.canvas-light
    .contact-link,

    body.canvas-light
    .part-content
    h2,

    body.canvas-light
    .why-card
    h3 {

        color:
            #2a2232
            !important;

    }


    /* =====================================================
       THEME BUTTON
       ===================================================== */

    .cx-theme {

        width:
            36px;

        height:
            36px;

        display:
            inline-flex;

        align-items:
            center;

        justify-content:
            center;

        flex:
            0 0
            36px;

        padding:
            0;

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.17
            );

        border-radius:
            50%;

        background:

            rgba(
                255,
                255,
                255,
                0.03
            );

        color:
            #d8c7ff;

        cursor:
            pointer;

        transition:
            0.25s;

    }


    .cx-theme:hover,

    .cx-theme:focus-visible {

        transform:
            translateY(
                -2px
            );

        border-color:

            rgba(
                155,
                89,
                255,
                0.85
            );

        background:

            rgba(
                155,
                89,
                255,
                0.12
            );

    }


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    .cx-top {

        position:
            fixed;

        right:
            22px;

        bottom:
            22px;

        z-index:
            1050;

        width:
            44px;

        height:
            44px;

        display:
            grid;

        place-items:
            center;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.55
            );

        border-radius:
            50%;

        background:

            rgba(
                9,
                9,
                16,
                0.9
            );

        color:
            #ffffff;

        opacity:
            0;

        visibility:
            hidden;

        transform:
            translateY(
                12px
            );

        transition:
            0.25s;

        box-shadow:

            0
            12px
            30px
            rgba(
                0,
                0,
                0,
                0.3
            );

    }


    .cx-top.show {

        opacity:
            1;

        visibility:
            visible;

        transform:
            none;

    }


    .cx-top:hover {

        background:

            rgba(
                155,
                89,
                255,
                0.22
            );

    }


    /* =====================================================
       TOAST
       ===================================================== */

    .cx-toast {

        position:
            fixed;

        left:
            50%;

        bottom:
            28px;

        z-index:
            1400;

        max-width:

            min(
                520px,
                calc(
                    100vw
                    -
                    36px
                )
            );

        padding:
            12px
            18px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.5
            );

        border-radius:
            999px;

        background:

            rgba(
                10,
                10,
                18,
                0.96
            );

        color:
            #ffffff;

        font-size:
            12px;

        opacity:
            0;

        visibility:
            hidden;

        transform:
            translate(
                -50%,
                16px
            );

        transition:
            0.22s;

        box-shadow:

            0
            16px
            40px
            rgba(
                0,
                0,
                0,
                0.35
            );

    }


    .cx-toast.show {

        opacity:
            1;

        visibility:
            visible;

        transform:
            translate(
                -50%,
                0
            );

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    .cx-reveal {

        opacity:
            0;

        transform:
            translateY(
                18px
            );

        transition:

            opacity
            0.55s
            ease,

            transform
            0.55s
            ease;

    }


    .cx-reveal.cx-visible {

        opacity:
            1;

        transform:
            none;

    }


    /* =====================================================
       HOME FEATURED WORK
       ===================================================== */

    .cx-home-featured {

        padding:
            88px
            0;

        border-block:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.07
            );

    }


    .cx-feature-head {

        display:
            flex;

        align-items:
            end;

        justify-content:
            space-between;

        gap:
            28px;

        margin-bottom:
            30px;

    }


    .cx-feature-head
    p {

        max-width:
            520px;

        margin:
            0;

        color:
            #9292a2;

        line-height:
            1.7;

    }


    .cx-feature-grid {

        display:
            grid;

        grid-template-columns:

            repeat(
                3,
                minmax(
                    0,
                    1fr
                )
            );

        gap:
            20px;

    }


    .cx-feature-card {

        overflow:
            hidden;

        display:
            block;

        color:
            #ffffff;

        text-decoration:
            none;

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.13
            );

        border-radius:
            14px;

        background:

            rgba(
                9,
                9,
                16,
                0.9
            );

        transition:
            0.3s;

    }


    .cx-feature-card:hover {

        color:
            #ffffff;

        transform:
            translateY(
                -6px
            );

        border-color:

            rgba(
                155,
                89,
                255,
                0.65
            );

        box-shadow:

            0
            18px
            40px
            rgba(
                0,
                0,
                0,
                0.28
            );

    }


    .cx-feature-media {

        width:
            100%;

        aspect-ratio:
            16 / 10;

        overflow:
            hidden;

        background:
            #06060a;

    }


    .cx-feature-media
    img {

        width:
            100%;

        height:
            100%;

        display:
            block;

        object-fit:
            contain;

        transition:
            0.4s;

    }


    .cx-feature-card:hover
    img {

        transform:
            scale(
                1.025
            );

    }


    .cx-feature-body {

        padding:
            18px;

    }


    .cx-kicker {

        color:
            #a979ff;

        font:

            700
            7px
            Orbitron,
            sans-serif;

        letter-spacing:
            1.7px;

    }


    .cx-feature-title {

        margin:
            8px
            0
            6px;

        font:

            600
            15px
            Orbitron,
            sans-serif;

    }


    .cx-feature-meta {

        color:
            #8f8f9f;

        font-size:
            11px;

    }


    .cx-feature-actions {

        display:
            flex;

        gap:
            10px;

        flex-wrap:
            wrap;

        margin-top:
            26px;

    }


    /* =====================================================
       HERO VIDEO CAPTION
       ===================================================== */

    .cx-video-caption {

        position:
            absolute;

        left:
            14px;

        bottom:
            14px;

        z-index:
            7;

        padding:
            7px
            10px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.44
            );

        border-radius:
            999px;

        background:

            rgba(
                7,
                7,
                12,
                0.78
            );

        color:
            #d5bdff;

        font:

            6.5px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

        pointer-events:
            none;

    }


    /* =====================================================
       GALLERY MODAL NAVIGATION
       ===================================================== */

    .cx-gallery-stage {

        position:
            relative;

        background:
            #050508;

    }


    .cx-gallery-nav {

        position:
            absolute;

        top:
            50%;

        z-index:
            20;

        width:
            44px;

        height:
            44px;

        display:
            grid;

        place-items:
            center;

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.24
            );

        border-radius:
            50%;

        background:

            rgba(
                8,
                8,
                14,
                0.8
            );

        color:
            #ffffff;

        transform:
            translateY(
                -50%
            );

        backdrop-filter:
            blur(
                8px
            );

    }


    .cx-gallery-nav:hover {

        background:

            rgba(
                155,
                89,
                255,
                0.24
            );

        border-color:
            #b78cff;

    }


    .cx-gallery-prev {

        left:
            14px;

    }


    .cx-gallery-next {

        right:
            14px;

    }


    .cx-gallery-position {

        position:
            absolute;

        right:
            14px;

        bottom:
            14px;

        z-index:
            19;

        padding:
            5px
            9px;

        border-radius:
            999px;

        background:

            rgba(
                8,
                8,
                14,
                0.78
            );

        color:
            #cfc0ec;

        font:

            7px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

    }


    /* =====================================================
       PROJECT SEARCH / SORT
       ===================================================== */

    .cx-project-toolbar {

        max-width:
            980px;

        margin:
            28px
            auto
            22px;

        display:
            grid;

        grid-template-columns:

            minmax(
                0,
                1fr
            )

            210px;

        gap:
            12px;

    }


    .cx-search-wrap {

        position:
            relative;

    }


    .cx-search-wrap
    i {

        position:
            absolute;

        left:
            14px;

        top:
            50%;

        transform:
            translateY(
                -50%
            );

        color:
            #817d8c;

    }


    .cx-project-search,

    .cx-project-sort {

        width:
            100%;

        min-height:
            44px;

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.14
            );

        border-radius:
            10px;

        background:

            rgba(
                9,
                9,
                16,
                0.8
            );

        color:
            #ffffff;

        outline:
            none;

    }


    .cx-project-search {

        padding:

            10px
            14px
            10px
            40px;

    }


    .cx-project-sort {

        padding:
            10px
            12px;

    }


    .cx-project-search:focus,

    .cx-project-sort:focus {

        border-color:
            #9b59ff;

        box-shadow:

            0
            0
            0
            3px
            rgba(
                155,
                89,
                255,
                0.1
            );

    }


    /* =====================================================
       FEATURED PROJECTS
       ===================================================== */

    .cx-featured-projects {

        margin:
            26px
            0
            42px;

        padding:
            22px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.22
            );

        border-radius:
            16px;

        background:

            rgba(
                155,
                89,
                255,
                0.04
            );

    }


    .cx-featured-projects-head {

        display:
            flex;

        align-items:
            center;

        justify-content:
            space-between;

        gap:
            20px;

        margin-bottom:
            18px;

    }


    .cx-featured-projects-head
    h3 {

        margin:
            0;

        font:

            600
            15px
            Orbitron,
            sans-serif;

    }


    .cx-featured-projects-head
    span {

        color:
            #8e8998;

        font-size:
            11px;

    }


    .cx-project-share {

        display:
            inline-flex;

        align-items:
            center;

        gap:
            7px;

        margin-top:
            20px;

        padding:
            9px
            12px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.45
            );

        border-radius:
            8px;

        background:

            rgba(
                155,
                89,
                255,
                0.08
            );

        color:
            #d4bbff;

        font:

            7px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

        text-transform:
            uppercase;

    }


    /* =====================================================
       CALENDAR BUTTON
       ===================================================== */

    .cx-calendar {

        margin-top:
            10px;

        width:
            100%;

        min-height:
            40px;

        display:
            inline-flex;

        align-items:
            center;

        justify-content:
            center;

        gap:
            8px;

        padding:
            8px
            12px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.42
            );

        border-radius:
            7px;

        background:

            rgba(
                155,
                89,
                255,
                0.06
            );

        color:
            #d8c5ff;

        font:

            8px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

        text-transform:
            uppercase;

    }


    .cx-calendar:hover {

        background:

            rgba(
                155,
                89,
                255,
                0.16
            );

        border-color:
            #b991ff;

    }


    /* =====================================================
       SUMMARY
       ===================================================== */

    .cx-summary {

        margin-top:
            24px;

        padding:
            22px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.38
            );

        border-radius:
            12px;

        background:

            rgba(
                12,
                12,
                20,
                0.93
            );

    }


    .cx-summary
    h3 {

        margin:
            0
            0
            14px;

        font:

            600
            16px
            Orbitron,
            sans-serif;

    }


    .cx-summary-grid {

        display:
            grid;

        grid-template-columns:

            repeat(
                2,
                minmax(
                    0,
                    1fr
                )
            );

        gap:
            12px;

    }


    .cx-summary-item {

        padding:
            11px
            12px;

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.08
            );

        border-radius:
            8px;

        background:

            rgba(
                255,
                255,
                255,
                0.02
            );

    }


    .cx-summary-label {

        display:
            block;

        margin-bottom:
            4px;

        color:
            #9d76e7;

        font:

            7px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

    }


    .cx-summary-value {

        color:
            #f3f1f7;

        font-size:
            12px;

    }


    /* =====================================================
       JOIN REVIEW POPUP
       ===================================================== */

    .cx-review-overlay {

        position:
            fixed;

        inset:
            0;

        z-index:
            1500;

        display:
            none;

        align-items:
            center;

        justify-content:
            center;

        padding:
            22px;

        background:

            rgba(
                2,
                2,
                6,
                0.8
            );

        backdrop-filter:
            blur(
                10px
            );

    }


    .cx-review-overlay.show {

        display:
            flex;

    }


    .cx-review-card {

        width:

            min(
                760px,
                100%
            );

        max-height:

            calc(
                100vh
                -
                44px
            );

        overflow:
            auto;

        padding:
            26px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.48
            );

        border-radius:
            16px;

        background:
            #0d0d15;

        color:
            #ffffff;

        box-shadow:

            0
            30px
            90px
            rgba(
                0,
                0,
                0,
                0.55
            );

    }


    .cx-review-card
    h2 {

        margin:
            0
            0
            8px;

        font:

            600
            22px
            Orbitron,
            sans-serif;

    }


    .cx-review-card
    > p {

        color:
            #9995a6;

    }


    .cx-review-grid {

        display:
            grid;

        grid-template-columns:

            repeat(
                2,
                minmax(
                    0,
                    1fr
                )
            );

        gap:
            12px;

        margin:
            22px
            0;

    }


    .cx-review-item {

        padding:
            12px;

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.08
            );

        border-radius:
            9px;

        background:

            rgba(
                255,
                255,
                255,
                0.025
            );

    }


    .cx-review-item.full {

        grid-column:
            1 /
            -1;

    }


    .cx-review-label {

        display:
            block;

        margin-bottom:
            4px;

        color:
            #a579ef;

        font:

            7px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

    }


    .cx-review-actions {

        display:
            flex;

        justify-content:
            flex-end;

        flex-wrap:
            wrap;

        gap:
            10px;

    }


    .cx-review-actions
    button {

        min-height:
            42px;

        padding:
            9px
            15px;

        border-radius:
            8px;

        font:

            8px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

        text-transform:
            uppercase;

    }


    .cx-review-edit {

        border:

            1px
            solid
            rgba(
                255,
                255,
                255,
                0.22
            );

        background:
            transparent;

        color:
            #ffffff;

    }


    .cx-review-confirm {

        border:

            1px
            solid
            #9b59ff;

        background:
            #9b59ff;

        color:
            #ffffff;

    }


    /* =====================================================
       API RETRY
       ===================================================== */

    .cx-api-retry {

        display:
            none;

        margin:
            14px
            auto
            0;

        padding:
            9px
            14px;

        border:

            1px
            solid
            rgba(
                155,
                89,
                255,
                0.52
            );

        border-radius:
            8px;

        background:

            rgba(
                155,
                89,
                255,
                0.08
            );

        color:
            #d8c5ff;

        font:

            8px
            Orbitron,
            sans-serif;

        letter-spacing:
            1px;

        text-transform:
            uppercase;

    }


    .cx-api-retry.show {

        display:
            inline-flex;

    }


    /* =====================================================
       RESPONSIVE
       ===================================================== */

    @media (
        max-width:
        900px
    ) {

        .cx-feature-grid {

            grid-template-columns:
                1fr;

        }


        .cx-feature-head,

        .cx-featured-projects-head {

            align-items:
                flex-start;

            flex-direction:
                column;

        }


        .cx-project-toolbar {

            grid-template-columns:
                1fr;

        }


        .cx-summary-grid,

        .cx-review-grid {

            grid-template-columns:
                1fr;

        }


        .cx-review-item.full {

            grid-column:
                auto;

        }

    }


    @media (
        max-width:
        560px
    ) {

        .cx-top {

            right:
                14px;

            bottom:
                14px;

            width:
                40px;

            height:
                40px;

        }


        .cx-gallery-nav {

            width:
                38px;

            height:
                38px;

        }


        .cx-gallery-prev {

            left:
                8px;

        }


        .cx-gallery-next {

            right:
                8px;

        }

    }


    @media (
        prefers-reduced-motion:
        reduce
    ) {

        .cx-reveal,

        .cx-reveal.cx-visible {

            opacity:
                1
                !important;

            transform:
                none
                !important;

            transition:
                none
                !important;

        }

    }

    `;


    document.head.appendChild(
        style
    );


    // =========================================================
    // BOOTSTRAP ICONS
    // =========================================================

    if (
        !document.querySelector(
            'link[href*="bootstrap-icons"]'
        )
    ) {

        const icons =
            document.createElement(
                "link"
            );


        icons.rel =
            "stylesheet";


        icons.href =
            "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css";


        document.head.appendChild(
            icons
        );

    }


    // =========================================================
    // HELPERS
    // =========================================================

    const ready =
        fn =>

            document.readyState ===
            "loading"

                ? document.addEventListener(
                    "DOMContentLoaded",
                    fn,
                    {
                        once:
                            true
                    }
                )

                : fn();


    const esc =
        value =>

            String(
                value ?? ""
            )

                .replaceAll(
                    "&",
                    "&amp;"
                )

                .replaceAll(
                    "<",
                    "&lt;"
                )

                .replaceAll(
                    ">",
                    "&gt;"
                )

                .replaceAll(
                    '"',
                    "&quot;"
                )

                .replaceAll(
                    "'",
                    "&#039;"
                );


    // =========================================================
    // TOAST
    // =========================================================

    function toast(
        message
    ) {

        if (
            !message
        ) {

            return;

        }


        let element =
            document.getElementById(
                "cxToast"
            );


        if (
            !element
        ) {

            element =
                document.createElement(
                    "div"
                );


            element.id =
                "cxToast";


            element.className =
                "cx-toast";


            element.role =
                "status";


            element.setAttribute(
                "aria-live",
                "polite"
            );


            document.body.appendChild(
                element
            );

        }


        element.textContent =
            message;


        element.classList.add(
            "show"
        );


        clearTimeout(
            toast.timer
        );


        toast.timer =
            setTimeout(
                function () {

                    element.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }


    window.showCanvasToast =
        toast;


    // =========================================================
    // PAGE METADATA
    // =========================================================

    function ensurePageMetadata() {

        const file =
            location.pathname
                .split(
                    "/"
                )
                .pop()
                .toLowerCase()

            ||

            "index.html";


        const descriptions = {

            "events.html":

                "Explore upcoming CANVAS Animation & Multimedia Club events, creative activities and student registration opportunities.",


            "workshops.html":

                "Browse practical CANVAS workshops in animation, video editing, motion graphics and multimedia production.",


            "join.html":

                "Join the CANVAS Animation & Multimedia Club and share your creative interests in animation, design, video and multimedia.",


            "contact.html":

                "Contact the CANVAS Animation & Multimedia Club, send an enquiry and explore the website's live REST API integration."

        };


        if (
            descriptions[
                file
            ]

            &&

            !document.querySelector(
                'meta[name="description"]'
            )
        ) {

            const meta =
                document.createElement(
                    "meta"
                );


            meta.name =
                "description";


            meta.content =
                descriptions[
                    file
                ];


            document.head.appendChild(
                meta
            );

        }


        let themeColor =
            document.querySelector(
                'meta[name="theme-color"]'
            );


        if (
            !themeColor
        ) {

            themeColor =
                document.createElement(
                    "meta"
                );


            themeColor.name =
                "theme-color";


            document.head.appendChild(
                themeColor
            );

        }


        themeColor.content =

            document.body
                .classList
                .contains(
                    "canvas-light"
                )

                ? "#e7e1ec"

                : "#08080d";

    }


    // =========================================================
    // GLOBAL
    // =========================================================

    function initGlobal() {

        ensurePageMetadata();


        const navLinks =
            document.querySelector(
                ".nav-links"
            );


        // =====================================================
        // THEME
        // =====================================================

        if (
            navLinks

            &&

            !document.getElementById(
                "cxTheme"
            )
        ) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.id =
                "cxTheme";


            button.className =
                "cx-theme";


            navLinks.appendChild(
                button
            );


            const apply =
                theme => {

                    const light =
                        theme ===
                        "light";


                    document.body
                        .classList
                        .toggle(
                            "canvas-light",
                            light
                        );


                    button.innerHTML =

                        light

                            ? '<i class="bi bi-moon-stars"></i>'

                            : '<i class="bi bi-sun"></i>';


                    button.setAttribute(

                        "aria-label",

                        light

                            ? "Switch to dark theme"

                            : "Switch to light theme"

                    );


                    let themeColor =
                        document.querySelector(
                            'meta[name="theme-color"]'
                        );


                    if (
                        !themeColor
                    ) {

                        themeColor =
                            document.createElement(
                                "meta"
                            );


                        themeColor.name =
                            "theme-color";


                        document.head.appendChild(
                            themeColor
                        );

                    }


                    themeColor.content =

                        light

                            ? "#e7e1ec"

                            : "#08080d";

                };


            let theme =
                localStorage.getItem(
                    THEME_KEY
                )

            ||

            "dark";


            apply(
                theme
            );


            button.addEventListener(

                "click",

                function () {

                    theme =

                        document.body
                            .classList
                            .contains(
                                "canvas-light"
                            )

                            ? "dark"

                            : "light";


                    localStorage.setItem(
                        THEME_KEY,
                        theme
                    );


                    apply(
                        theme
                    );


                    toast(

                        theme[
                            0
                        ]
                            .toUpperCase()

                        +

                        theme.slice(
                            1
                        )

                        +

                        " theme enabled."

                    );

                }

            );

        }


        // =====================================================
        // BACK TO TOP
        // =====================================================

        if (
            !document.getElementById(
                "cxTop"
            )
        ) {

            const top =
                document.createElement(
                    "button"
                );


            top.type =
                "button";


            top.id =
                "cxTop";


            top.className =
                "cx-top";


            top.setAttribute(
                "aria-label",
                "Back to top"
            );


            top.innerHTML =
                '<i class="bi bi-arrow-up"></i>';


            document.body.appendChild(
                top
            );


            const update =
                function () {

                    top.classList.toggle(

                        "show",

                        scrollY >
                            520

                    );

                };


            addEventListener(
                "scroll",
                update,
                {
                    passive:
                        true
                }
            );


            update();


            top.addEventListener(

                "click",

                function () {

                    scrollTo({

                        top:
                            0,

                        behavior:
                            "smooth"

                    });

                }

            );

        }


        // =====================================================
        // LAZY IMAGES
        // =====================================================

        document
            .querySelectorAll(
                "img"
            )
            .forEach(
                function (
                    image
                ) {

                    if (
                        !image.hasAttribute(
                            "decoding"
                        )
                    ) {

                        image.decoding =
                            "async";

                    }


                    if (
                        !image.closest(
                            "header,.hero,.gallery-hero,.project-hero,.about-hero,.events-hero,.workshops-hero,.contact-hero,.join-hero"
                        )

                        &&

                        !image.hasAttribute(
                            "loading"
                        )
                    ) {

                        image.loading =
                            "lazy";

                    }

                }
            );


        // =====================================================
        // SCROLL REVEAL
        // =====================================================

        if (
            !matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            const elements =
                document.querySelectorAll(

                    ".card,.event,.workshop,.step,.gallery-item,.project-item,.resource-card,.timeline-item,.value-card"

                );


            elements.forEach(
                function (
                    element,
                    index
                ) {

                    if (
                        !(
                            index <
                                2

                            &&

                            element
                                .getBoundingClientRect()
                                .top <
                                innerHeight
                        )
                    ) {

                        element
                            .classList
                            .add(
                                "cx-reveal"
                            );

                    }

                }
            );


            const observer =
                new IntersectionObserver(

                    function (
                        entries
                    ) {

                        entries.forEach(
                            function (
                                entry
                            ) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add(
                                            "cx-visible"
                                        );


                                    observer
                                        .unobserve(
                                            entry.target
                                        );

                                }

                            }
                        );

                    },

                    {
                        threshold:
                            0.12
                    }

                );


            document
                .querySelectorAll(
                    ".cx-reveal"
                )
                .forEach(
                    function (
                        element
                    ) {

                        observer.observe(
                            element
                        );

                    }
                );

        }

    }


    // =========================================================
    // HOME
    // =========================================================

    function initHome() {

        const video =
            document.getElementById(
                "heroVideo"
            );


        const shell =
            document.querySelector(
                ".hero-video-shell"
            );


        document
            .getElementById(
                "welcomeBanner"
            )
            ?.remove();


        if (
            video
        ) {

            const source =
                video.querySelector(
                    "source"
                );


            video.poster =
                "images/gallery/g9-nebula-poster.jpg";


            video.autoplay =
                true;


            video.muted =
                true;


            video.loop =
                true;


            video.playsInline =
                true;


            video.controls =
                true;


            video.preload =
                "metadata";


            if (
                source

                &&

                !source
                    .getAttribute(
                        "src"
                    )
                    ?.includes(
                        "motion-nebula.mp4"
                    )
            ) {

                source.src =
                    "videos/motion-nebula.mp4";


                video.load();

            }


            document
                .getElementById(
                    "heroPlayButton"
                )
                ?.remove();


            document
                .querySelector(
                    ".hero-video-label"
                )
                ?.remove();


            if (
                shell

                &&

                !shell.querySelector(
                    ".cx-video-caption"
                )
            ) {

                const caption =
                    document.createElement(
                        "div"
                    );


                caption.className =
                    "cx-video-caption";


                caption.textContent =
                    "NEBULA DRIFT · MOTION GRAPHICS";


                shell.appendChild(
                    caption
                );

            }


            // =================================================
            // SMART AUTOPLAY
            // =================================================

            /*
             * User manually pauses:
             * respect the pause.
             *
             * Observer pauses because user scrolls away:
             * automatically resume when hero comes back.
             */

            let pausedByObserver =
                false;


            let manualPause =
                false;


            let internalPause =
                false;


            let userInteracting =
                false;


            const markInteraction =
                function () {

                    userInteracting =
                        true;

                };


            video.addEventListener(

                "pointerdown",

                markInteraction,

                {
                    passive:
                        true
                }

            );


            video.addEventListener(
                "keydown",
                markInteraction
            );


            video.addEventListener(

                "pause",

                function () {

                    if (
                        !internalPause

                        &&

                        userInteracting
                    ) {

                        manualPause =
                            true;

                    }


                    userInteracting =
                        false;

                }

            );


            video.addEventListener(

                "play",

                function () {

                    if (
                        userInteracting
                    ) {

                        manualPause =
                            false;

                    }


                    userInteracting =
                        false;

                }

            );


            const heroObserver =
                new IntersectionObserver(

                    function (
                        entries
                    ) {

                        entries.forEach(
                            function (
                                entry
                            ) {

                                const visible =

                                    entry.isIntersecting

                                    &&

                                    entry
                                        .intersectionRatio >=
                                        0.45;


                                if (
                                    visible
                                ) {

                                    if (
                                        pausedByObserver

                                        &&

                                        !manualPause
                                    ) {

                                        pausedByObserver =
                                            false;


                                        video
                                            .play()
                                            .catch(
                                                function () {}
                                            );

                                    }

                                }

                                else if (
                                    !video.paused
                                ) {

                                    pausedByObserver =
                                        true;


                                    internalPause =
                                        true;


                                    video.pause();


                                    internalPause =
                                        false;

                                }

                            }
                        );

                    },

                    {
                        threshold: [
                            0,
                            0.45,
                            0.8
                        ]
                    }

                );


            heroObserver.observe(
                video
            );


            video
                .play()
                .catch(
                    function () {}
                );

        }


        // =====================================================
        // FEATURED WORK
        // =====================================================

        const stats =
            document.querySelector(
                ".stats-band"
            );


        if (
            !stats

            ||

            document.querySelector(
                ".cx-home-featured"
            )
        ) {

            return;

        }


        const section =
            document.createElement(
                "section"
            );


        section.className =
            "cx-home-featured";


        section.innerHTML = `

        <div class="container">

            <div class="cx-feature-head">

                <div>

                    <p class="eyebrow">

                        FEATURED CREATIVE WORK

                    </p>


                    <h2>

                        Selected work from the CANVAS showcase.

                    </h2>

                </div>


                <p>

                    Browse individual artworks in the Gallery,
                    or open full case studies in Projects.

                </p>

            </div>


            <div class="cx-feature-grid">

                ${featureCard(
                    "HTML/project.html?project=p5",
                    "images/gallery/g12-moonlit-kimono.jpg",
                    "2D CASE STUDY",
                    "Moonlit Kimono",
                    "Character Illustration · Nur Ain"
                )}


                ${featureCard(
                    "HTML/project.html?project=p10",
                    "images/gallery/g4-cubes-gold.jpg",
                    "3D CASE STUDY",
                    "Gilded Grid",
                    "Procedural 3D · Marcus Ooi"
                )}


                ${featureCard(
                    "HTML/project.html?project=p22",
                    "images/gallery/g9-nebula-poster.jpg",
                    "MOTION CASE STUDY",
                    "Nebula Drift",
                    "Motion Graphics · Adam Leong"
                )}

            </div>


            <div class="cx-feature-actions">

                <a
                    class="btn"
                    href="HTML/gallery.html">

                    Explore Gallery

                </a>


                <a
                    class="btn btn-solid"
                    href="HTML/project.html">

                    View Project Case Studies

                </a>

            </div>

        </div>

        `;


        stats.insertAdjacentElement(
            "afterend",
            section
        );

    }


    function featureCard(
        href,
        image,
        kicker,
        title,
        meta
    ) {

        return `

        <a
            class="cx-feature-card"
            href="${href}">

            <div class="cx-feature-media">

                <img
                    src="${image}"
                    alt="${title} preview">

            </div>


            <div class="cx-feature-body">

                <span class="cx-kicker">

                    ${kicker}

                </span>


                <div class="cx-feature-title">

                    ${title}

                </div>


                <div class="cx-feature-meta">

                    ${meta}

                </div>

            </div>

        </a>

        `;

    }


    // =========================================================
    // GALLERY
    // =========================================================

    function initGallery() {

        const grid =
            document.getElementById(
                "galleryGrid"
            );


        const modal =
            document.getElementById(
                "galleryModal"
            );


        const search =
            document.getElementById(
                "searchInput"
            );


        if (
            !grid

            ||

            !modal
        ) {

            return;

        }


        const filters =
            [
                ...document.querySelectorAll(
                    ".filter-chip"
                )
            ];


        let currentId =
            null;


        const items =
            function () {

                return [
                    ...document.querySelectorAll(
                        ".gallery-item"
                    )
                ];

            };


        const visible =
            function () {

                return items()
                    .filter(
                        function (
                            item
                        ) {

                            return (
                                item.style.display !==
                                "none"
                            );

                        }
                    );

            };


        const index =
            function () {

                return visible()
                    .findIndex(
                        function (
                            item
                        ) {

                            return (
                                item.dataset.id ===
                                currentId
                            );

                        }
                    );

            };


        const position =
            function () {

                const element =
                    modal.querySelector(
                        ".cx-gallery-position"
                    );


                const list =
                    visible();


                const current =
                    index();


                if (
                    element
                ) {

                    element.textContent =

                        current >=
                            0

                            ? (
                                current +
                                1
                                +
                                " / "
                                +
                                list.length
                            )

                            : (
                                list.length
                                +
                                " artworks"
                            );

                }

            };


        const navigate =
            function (
                delta
            ) {

                const list =
                    visible();


                if (
                    !list.length
                ) {

                    return;

                }


                let current =
                    index();


                if (
                    current <
                    0
                ) {

                    current =
                        0;

                }


                const item =

                    list[
                        (
                            current
                            +
                            delta
                            +
                            list.length
                        )
                        %
                        list.length
                    ];


                currentId =
                    item.dataset.id;


                if (
                    typeof openGalleryModal ===
                    "function"
                ) {

                    openGalleryModal(
                        item
                    );


                    position();

                }

            };


        // =====================================================
        // MODAL PREVIOUS / NEXT
        // =====================================================

        if (
            !modal.querySelector(
                ".cx-gallery-stage"
            )
        ) {

            const image =
                document.getElementById(
                    "galleryModalImg"
                );


            const video =
                document.getElementById(
                    "galleryModalVideo"
                );


            if (
                image

                &&

                video
            ) {

                const stage =
                    document.createElement(
                        "div"
                    );


                stage.className =
                    "cx-gallery-stage";


                image.parentNode
                    .insertBefore(
                        stage,
                        image
                    );


                stage.append(
                    image,
                    video
                );


                const previous =
                    document.createElement(
                        "button"
                    );


                const next =
                    document.createElement(
                        "button"
                    );


                const number =
                    document.createElement(
                        "span"
                    );


                previous.type =
                    "button";


                next.type =
                    "button";


                previous.className =
                    "cx-gallery-nav cx-gallery-prev";


                next.className =
                    "cx-gallery-nav cx-gallery-next";


                number.className =
                    "cx-gallery-position";


                previous.setAttribute(
                    "aria-label",
                    "Previous artwork"
                );


                next.setAttribute(
                    "aria-label",
                    "Next artwork"
                );


                number.setAttribute(
                    "aria-live",
                    "polite"
                );


                previous.innerHTML =
                    '<i class="bi bi-chevron-left"></i>';


                next.innerHTML =
                    '<i class="bi bi-chevron-right"></i>';


                stage.append(
                    previous,
                    next,
                    number
                );


                previous.onclick =
                    function () {

                        navigate(
                            -1
                        );

                    };


                next.onclick =
                    function () {

                        navigate(
                            1
                        );

                    };

            }

        }


        document.addEventListener(

            "click",

            function (
                event
            ) {

                const button =
                    event.target.closest(
                        ".view-details-btn"
                    );


                if (
                    !button
                ) {

                    return;

                }


                currentId =

                    button
                        .closest(
                            ".gallery-item"
                        )
                        ?.dataset.id

                    ||

                    null;


                setTimeout(
                    position
                );

            }

        );


        document.addEventListener(

            "keydown",

            function (
                event
            ) {

                if (
                    !modal
                        .classList
                        .contains(
                            "show"
                        )
                ) {

                    return;

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    event.preventDefault();


                    navigate(
                        -1
                    );

                }


                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    event.preventDefault();


                    navigate(
                        1
                    );

                }

            }

        );


        modal.addEventListener(

            "shown.bs.modal",

            function () {

                if (
                    !currentId
                ) {

                    const title =
                        document
                            .getElementById(
                                "galleryModalLabel"
                            )
                            ?.textContent
                            .trim();


                    currentId =

                        items()
                            .find(
                                function (
                                    item
                                ) {

                                    return (
                                        item.dataset.title ===
                                        title
                                    );

                                }
                            )
                            ?.dataset.id

                        ||

                        null;

                }


                position();

            }

        );


        // =====================================================
        // RESTORE FILTER / SEARCH
        // =====================================================

        let saved =
            {};


        try {

            saved =
                JSON.parse(

                    sessionStorage
                        .getItem(
                            GALLERY_STATE_KEY
                        )

                    ||

                    "{}"

                );

        }

        catch (
            error
        ) {

            saved =
                {};

        }


        const parameters =
            new URLSearchParams(
                location.search
            );


        const category =

            parameters.get(
                "category"
            )

            ||

            saved.category

            ||

            "all";


        const query =

            parameters.get(
                "search"
            )

            ??

            saved.search

            ??

            "";


        if (
            search
        ) {

            search.value =
                query;


            search.dispatchEvent(

                new Event(
                    "input",
                    {
                        bubbles:
                            true
                    }
                )

            );

        }


        const categoryButton =
            filters.find(
                function (
                    button
                ) {

                    return (
                        button.dataset.filter ===
                        category
                    );

                }
            );


        if (
            categoryButton

            &&

            !categoryButton
                .classList
                .contains(
                    "active"
                )
        ) {

            categoryButton.click();

        }


        const persist =
            function () {

                const categoryNow =

                    document
                        .querySelector(
                            ".filter-chip.active"
                        )
                        ?.dataset.filter

                    ||

                    "all";


                const searchNow =

                    search
                        ?.value
                        .trim()

                    ||

                    "";


                sessionStorage.setItem(

                    GALLERY_STATE_KEY,

                    JSON.stringify({

                        category:
                            categoryNow,

                        search:
                            searchNow

                    })

                );


                const url =
                    new URL(
                        location.href
                    );


                if (
                    categoryNow ===
                    "all"
                ) {

                    url.searchParams
                        .delete(
                            "category"
                        );

                }

                else {

                    url.searchParams
                        .set(
                            "category",
                            categoryNow
                        );

                }


                if (
                    searchNow
                ) {

                    url.searchParams
                        .set(
                            "search",
                            searchNow
                        );

                }

                else {

                    url.searchParams
                        .delete(
                            "search"
                        );

                }


                history.replaceState(
                    {},
                    "",
                    url
                );

            };


        filters.forEach(
            function (
                button
            ) {

                button.addEventListener(

                    "click",

                    function () {

                        setTimeout(
                            persist
                        );

                    }

                );

            }
        );


        let timer;


        search?.addEventListener(

            "input",

            function () {

                clearTimeout(
                    timer
                );


                timer =
                    setTimeout(
                        persist,
                        180
                    );

            }

        );

    }


    // =========================================================
    // PROJECTS
    // =========================================================

    function initProjects() {

        const grid =
            document.getElementById(
                "projectGrid"
            );


        const filters =
            document.getElementById(
                "projectFilterBar"
            );


        const count =
            document.getElementById(
                "projectCount"
            );


        const modal =
            document.getElementById(
                "projectModal"
            );


        if (
            !grid

            ||

            !filters

            ||

            typeof PROJECTS ===
                "undefined"
        ) {

            return;

        }


        const map =
            new Map(

                PROJECTS.map(
                    function (
                        project
                    ) {

                        return [
                            project.id,
                            project
                        ];

                    }
                )

            );


        const curated =

            typeof PROJECT_SHOWCASE_ORDER !==
                "undefined"

                ? PROJECT_SHOWCASE_ORDER

                : PROJECTS.map(
                    function (
                        project
                    ) {

                        return project.id;

                    }
                );


        const rank =
            new Map(

                curated.map(
                    function (
                        id,
                        index
                    ) {

                        return [
                            id,
                            index
                        ];

                    }
                )

            );


        // =====================================================
        // SEARCH / SORT
        // =====================================================

        const toolbar =
            document.createElement(
                "div"
            );


        toolbar.className =
            "cx-project-toolbar";


        toolbar.innerHTML = `

        <div class="cx-search-wrap">

            <i class="bi bi-search"></i>


            <label
                class="visually-hidden"
                for="projectSearch">

                Search projects

            </label>


            <input
                id="projectSearch"
                class="cx-project-search"
                type="search"
                placeholder="Search title, creator, software or project type...">

        </div>


        <div>

            <label
                class="visually-hidden"
                for="projectSort">

                Sort projects

            </label>


            <select
                id="projectSort"
                class="cx-project-sort">

                <option value="featured">
                    Sort: Featured
                </option>

                <option value="newest">
                    Newest
                </option>

                <option value="oldest">
                    Oldest
                </option>

                <option value="az">
                    A–Z
                </option>

            </select>

        </div>

        `;


        filters.insertAdjacentElement(
            "beforebegin",
            toolbar
        );


        // =====================================================
        // FEATURED PROJECTS
        // =====================================================

        if (
            typeof createProjectCard ===
            "function"
        ) {

            const section =
                document.createElement(
                    "section"
                );


            section.className =
                "cx-featured-projects";


            section.id =
                "cxFeaturedProjects";


            section.innerHTML = `

            <div class="cx-featured-projects-head">

                <h3>
                    Featured Case Studies
                </h3>

                <span>
                    Selected 2D, 3D and motion work.
                </span>

            </div>


            <div
                class="row g-4"
                id="cxFeaturedGrid">
            </div>

            `;


            toolbar.insertAdjacentElement(
                "beforebegin",
                section
            );


            const featuredGrid =
                section.querySelector(
                    "#cxFeaturedGrid"
                );


            [
                "p5",
                "p10",
                "p22"
            ].forEach(
                function (
                    id
                ) {

                    const project =
                        map.get(
                            id
                        );


                    if (
                        !project
                    ) {

                        return;

                    }


                    const wrapper =
                        createProjectCard(
                            project
                        );


                    wrapper
                        .classList
                        .remove(
                            "project-item"
                        );


                    wrapper
                        .classList
                        .add(
                            "featured-project-item"
                        );


                    featuredGrid
                        .appendChild(
                            wrapper
                        );

                }
            );


            /*
             * FIX:
             * Featured cards are created later,
             * therefore restore their VIEWED badge again.
             */

            if (
                typeof updateViewedBadges ===
                "function"
            ) {

                updateViewedBadges();

            }

        }


        const search =
            document.getElementById(
                "projectSearch"
            );


        const sort =
            document.getElementById(
                "projectSort"
            );


        const mainCards =
            function () {

                return [
                    ...grid.children
                ]
                    .filter(
                        function (
                            wrapper
                        ) {

                            return Boolean(

                                wrapper
                                    .querySelector(
                                        ".project-card"
                                    )

                            );

                        }
                    );

            };


        const projectOf =
            function (
                wrapper
            ) {

                return map.get(

                    wrapper
                        .querySelector(
                            ".project-card"
                        )
                        ?.dataset
                        .projectId

                );

            };


        const apply =
            function () {

                const query =
                    search.value
                        .trim()
                        .toLowerCase();


                const category =

                    document
                        .querySelector(
                            ".project-filter-chip.active"
                        )
                        ?.dataset.filter

                    ||

                    "all";


                const mode =
                    sort.value;


                const cards =
                    mainCards()
                        .sort(
                            function (
                                first,
                                second
                            ) {

                                const a =
                                    projectOf(
                                        first
                                    );


                                const b =
                                    projectOf(
                                        second
                                    );


                                if (
                                    !a

                                    ||

                                    !b
                                ) {

                                    return 0;

                                }


                                if (
                                    mode ===
                                    "newest"
                                ) {

                                    return (

                                        Number(
                                            b.year
                                        )

                                        -

                                        Number(
                                            a.year
                                        )

                                    )

                                    ||

                                    a.title
                                        .localeCompare(
                                            b.title
                                        );

                                }


                                if (
                                    mode ===
                                    "oldest"
                                ) {

                                    return (

                                        Number(
                                            a.year
                                        )

                                        -

                                        Number(
                                            b.year
                                        )

                                    )

                                    ||

                                    a.title
                                        .localeCompare(
                                            b.title
                                        );

                                }


                                if (
                                    mode ===
                                    "az"
                                ) {

                                    return (
                                        a.title
                                            .localeCompare(
                                                b.title
                                            )
                                    );

                                }


                                return (

                                    (
                                        rank.get(
                                            a.id
                                        )
                                        ??
                                        999
                                    )

                                    -

                                    (
                                        rank.get(
                                            b.id
                                        )
                                        ??
                                        999
                                    )

                                );

                            }
                        );


                cards.forEach(
                    function (
                        wrapper
                    ) {

                        grid.appendChild(
                            wrapper
                        );

                    }
                );


                let visibleCount =
                    0;


                cards.forEach(
                    function (
                        wrapper
                    ) {

                        const project =
                            projectOf(
                                wrapper
                            );


                        if (
                            !project
                        ) {

                            return;

                        }


                        const searchable =

                            [
                                project.title,
                                project.author,
                                project.software,
                                project.projectType,
                                project.categoryLabel,
                                project.year
                            ]
                                .join(
                                    " "
                                )
                                .toLowerCase();


                        const categoryMatch =

                            category ===
                                "all"

                            ||

                            project.category ===
                                category;


                        const searchMatch =

                            !query

                            ||

                            searchable.includes(
                                query
                            );


                        const show =

                            categoryMatch

                            &&

                            searchMatch;


                        wrapper.style.display =

                            show

                                ? ""

                                : "none";


                        if (
                            show
                        ) {

                            visibleCount++;

                        }

                    }
                );


                if (
                    count
                ) {

                    let label;


                    if (
                        category ===
                        "all"
                    ) {

                        label =
                            "Student Projects";

                    }

                    else if (
                        category ===
                        "2d"
                    ) {

                        label =
                            "2D Projects";

                    }

                    else if (
                        category ===
                        "3d"
                    ) {

                        label =
                            "3D Projects";

                    }

                    else {

                        label =
                            "Motion Graphics Projects";

                    }


                    count.textContent =

                        visibleCount

                        +

                        " "

                        +

                        label;

                }


                const empty =
                    document.getElementById(
                        "projectEmpty"
                    );


                if (
                    empty
                ) {

                    empty.style.display =

                        visibleCount

                            ? "none"

                            : "block";

                }

            };


        document
            .querySelectorAll(
                ".project-filter-chip"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(

                        "click",

                        function () {

                            setTimeout(
                                apply
                            );

                        }

                    );

                }
            );


        search.addEventListener(
            "input",
            apply
        );


        sort.addEventListener(
            "change",
            apply
        );


        apply();


        // =====================================================
        // PROJECT DEEP LINK / SHARE
        // =====================================================

        let currentProject =
            null;


        if (
            modal
        ) {

            const share =
                document.createElement(
                    "button"
                );


            share.type =
                "button";


            share.id =
                "cxProjectShare";


            share.className =
                "cx-project-share";


            share.innerHTML =
                '<i class="bi bi-link-45deg"></i> Copy project link';


            document
                .querySelector(
                    ".project-outcome-section"
                )
                ?.insertAdjacentElement(
                    "afterend",
                    share
                );


            share.addEventListener(

                "click",

                async function () {

                    if (
                        !currentProject
                    ) {

                        return;

                    }


                    const url =
                        new URL(
                            location.href
                        );


                    url.searchParams.set(
                        "project",
                        currentProject.id
                    );


                    try {

                        await navigator
                            .clipboard
                            .writeText(
                                url.href
                            );


                        toast(
                            "Project link copied."
                        );

                    }

                    catch (
                        error
                    ) {

                        prompt(
                            "Copy this project link:",
                            url.href
                        );

                    }

                }

            );


            modal.addEventListener(

                "shown.bs.modal",

                function () {

                    const title =
                        document
                            .getElementById(
                                "projectModalLabel"
                            )
                            ?.textContent
                            .trim();


                    currentProject =

                        PROJECTS.find(
                            function (
                                project
                            ) {

                                return (
                                    project.title ===
                                    title
                                );

                            }
                        )

                        ||

                        null;


                    if (
                        currentProject
                    ) {

                        const url =
                            new URL(
                                location.href
                            );


                        url.searchParams.set(
                            "project",
                            currentProject.id
                        );


                        history.replaceState(
                            {},
                            "",
                            url
                        );

                    }

                }

            );


            modal.addEventListener(

                "hidden.bs.modal",

                function () {

                    currentProject =
                        null;


                    const url =
                        new URL(
                            location.href
                        );


                    url.searchParams.delete(
                        "project"
                    );


                    history.replaceState(
                        {},
                        "",
                        url
                    );

                }

            );

        }


        const wanted =
            map.get(

                new URLSearchParams(
                    location.search
                )
                    .get(
                        "project"
                    )

            );


        if (
            wanted

            &&

            typeof openProjectModal ===
            "function"
        ) {

            setTimeout(
                function () {

                    openProjectModal(
                        wanted
                    );

                },
                120
            );

        }

    }


    // =========================================================
    // EVENTS / WORKSHOPS
    // =========================================================

    const months = {

        january:
            0,

        february:
            1,

        march:
            2,

        april:
            3,

        may:
            4,

        june:
            5,

        july:
            6,

        august:
            7,

        september:
            8,

        october:
            9,

        november:
            10,

        december:
            11

    };


    const dateParts =
        function (
            text
        ) {

            const match =
                String(
                    text
                )
                    .trim()
                    .match(
                        /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/
                    );


            return match

                ? {

                    day:
                        Number(
                            match[
                                1
                            ]
                        ),

                    month:
                        months[
                            match[
                                2
                            ]
                                .toLowerCase()
                        ],

                    year:
                        Number(
                            match[
                                3
                            ]
                        )

                }

                : null;

        };


    const timeParts =
        function (
            text
        ) {

            const match =
                String(
                    text
                )
                    .trim()
                    .match(
                        /(\d{1,2}):(\d{2})\s*(AM|PM)/i
                    );


            if (
                !match
            ) {

                return null;

            }


            let hour =
                Number(
                    match[
                        1
                    ]
                );


            const meridiem =
                match[
                    3
                ]
                    .toUpperCase();


            if (
                meridiem ===
                    "PM"

                &&

                hour !==
                    12
            ) {

                hour +=
                    12;

            }


            if (
                meridiem ===
                    "AM"

                &&

                hour ===
                    12
            ) {

                hour =
                    0;

            }


            return {

                hour:
                    hour,

                minute:
                    Number(
                        match[
                            2
                        ]
                    )

            };

        };


    const icsDate =
        function (
            date,
            time
        ) {

            const pad =
                function (
                    value
                ) {

                    return String(
                        value
                    )
                        .padStart(
                            2,
                            "0"
                        );

                };


            return (

                date.year

                +

                pad(
                    date.month +
                    1
                )

                +

                pad(
                    date.day
                )

                +

                "T"

                +

                pad(
                    time.hour
                )

                +

                pad(
                    time.minute
                )

                +

                "00"

            );

        };


    function initRegistration() {

        const events =
            [
                ...document.querySelectorAll(
                    "article.event"
                )
            ];


        const workshops =
            [
                ...document.querySelectorAll(
                    "article.workshop"
                )
            ];


        const cards =
            [
                ...events,
                ...workshops
            ];


        cards.forEach(
            function (
                card
            ) {

                // =============================================
                // ADD TO CALENDAR
                // =============================================

                if (
                    !card.querySelector(
                        ".cx-calendar"
                    )
                ) {

                    const title =
                        card
                            .querySelector(
                                "h3"
                            )
                            ?.textContent
                            .trim();


                    const dateText =
                        card
                            .querySelector(
                                ".date"
                            )
                            ?.textContent
                            .trim();


                    const paragraphs =
                        [
                            ...card.querySelectorAll(
                                "p"
                            )
                        ];


                    const timeText =

                        paragraphs
                            .find(
                                function (
                                    paragraph
                                ) {

                                    return paragraph
                                        .textContent
                                        .includes(
                                            "Time:"
                                        );

                                }
                            )
                            ?.textContent
                            .replace(
                                "Time:",
                                ""
                            )
                            .trim();


                    const locationText =

                        paragraphs
                            .find(
                                function (
                                    paragraph
                                ) {

                                    return paragraph
                                        .textContent
                                        .includes(
                                            "Location:"
                                        );

                                }
                            )
                            ?.textContent
                            .replace(
                                "Location:",
                                ""
                            )
                            .trim()

                        ||

                        "";


                    if (
                        title

                        &&

                        dateText

                        &&

                        timeText
                    ) {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "cx-calendar";


                        button.innerHTML =
                            '<i class="bi bi-calendar-plus"></i> Add to Calendar';


                        card.appendChild(
                            button
                        );


                        button.onclick =
                            function () {

                                const date =
                                    dateParts(
                                        dateText
                                    );


                                const times =
                                    timeText
                                        .split(
                                            "-"
                                        )
                                        .map(
                                            timeParts
                                        );


                                if (
                                    !date

                                    ||

                                    !times[
                                        0
                                    ]

                                    ||

                                    !times[
                                        1
                                    ]
                                ) {

                                    toast(
                                        "Calendar information could not be created."
                                    );


                                    return;

                                }


                                const lines = [

                                    "BEGIN:VCALENDAR",

                                    "VERSION:2.0",

                                    "PRODID:-//CANVAS Club//EN",

                                    "BEGIN:VEVENT",

                                    `UID:${Date.now()}@canvas-club`,

                                    `DTSTAMP:${icsDate(
                                        date,
                                        times[
                                            0
                                        ]
                                    )}`,

                                    `DTSTART:${icsDate(
                                        date,
                                        times[
                                            0
                                        ]
                                    )}`,

                                    `DTEND:${icsDate(
                                        date,
                                        times[
                                            1
                                        ]
                                    )}`,

                                    `SUMMARY:${title.replaceAll(
                                        ",",
                                        "\\,"
                                    )}`,

                                    "DESCRIPTION:CANVAS Animation & Multimedia Club",

                                    locationText

                                        ? `LOCATION:${locationText.replaceAll(
                                            ",",
                                            "\\,"
                                        )}`

                                        : "",

                                    "END:VEVENT",

                                    "END:VCALENDAR"

                                ]
                                    .filter(
                                        Boolean
                                    )
                                    .join(
                                        "\r\n"
                                    );


                                const url =
                                    URL.createObjectURL(

                                        new Blob(
                                            [
                                                lines
                                            ],
                                            {
                                                type:
                                                    "text/calendar;charset=utf-8"
                                            }
                                        )

                                    );


                                const link =
                                    document.createElement(
                                        "a"
                                    );


                                link.href =
                                    url;


                                link.download =

                                    title
                                        .toLowerCase()
                                        .replace(
                                            /[^a-z0-9]+/g,
                                            "-"
                                        )
                                        .replace(
                                            /^-|-$/g,
                                            ""
                                        )

                                    +

                                    ".ics";


                                document.body.appendChild(
                                    link
                                );


                                link.click();


                                link.remove();


                                URL.revokeObjectURL(
                                    url
                                );


                                toast(
                                    "Calendar file created."
                                );

                            };

                    }

                }


                // =============================================
                // REGISTER → AUTO SELECT
                // =============================================

                const registrationLink =
                    card.querySelector(
                        'a[href="#registration"]'
                    );


                const title =
                    card
                        .querySelector(
                            "h3"
                        )
                        ?.textContent
                        .trim();


                registrationLink
                    ?.addEventListener(

                        "click",

                        function () {

                            const select =
                                document.getElementById(

                                    events.length

                                        ? "event"

                                        : "workshop"

                                );


                            if (
                                select

                                &&

                                title
                            ) {

                                select.value =
                                    title;

                            }

                        }

                    );

            }
        );


        // =====================================================
        // REGISTRATION SUMMARY
        // =====================================================

        const form =

            document.getElementById(
                "eventRegistrationForm"
            )

            ||

            document.getElementById(
                "workshopRegistrationForm"
            );


        if (
            !form
        ) {

            return;

        }


        form.addEventListener(

            "submit",

            function (
                event
            ) {

                event.preventDefault();


                event.stopImmediatePropagation();


                if (
                    !form.checkValidity()
                ) {

                    form.reportValidity();


                    return;

                }


                const isEvent =
                    Boolean(
                        document.getElementById(
                            "event"
                        )
                    );


                const select =
                    document.getElementById(

                        isEvent

                            ? "event"

                            : "workshop"

                    );


                const selected =
                    select?.value

                    ||

                    "";


                const data = {

                    name:

                        document
                            .getElementById(
                                "name"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    email:

                        document
                            .getElementById(
                                "email"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    comments:

                        document
                            .getElementById(
                                "comments"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    submittedAt:

                        new Date()
                            .toLocaleString()

                };


                const stored =

                    isEvent

                        ? {

                            ...data,

                            selectedEvent:
                                selected

                        }

                        : {

                            ...data,

                            selectedWorkshop:
                                selected

                        };


                sessionStorage.setItem(

                    isEvent

                        ? "eventRegistration"

                        : "workshopRegistration",

                    JSON.stringify(
                        stored
                    )

                );


                let summary =
                    form
                        .parentElement
                        .querySelector(
                            ".cx-summary"
                        );


                if (
                    !summary
                ) {

                    summary =
                        document.createElement(
                            "section"
                        );


                    summary.className =
                        "cx-summary";


                    summary.setAttribute(
                        "aria-live",
                        "polite"
                    );


                    form.insertAdjacentElement(
                        "afterend",
                        summary
                    );

                }


                summary.innerHTML = `

                <h3>
                    Registration Confirmed
                </h3>


                <div class="cx-summary-grid">


                    <div class="cx-summary-item">

                        <span class="cx-summary-label">

                            ${isEvent
                                ? "EVENT"
                                : "WORKSHOP"}

                        </span>


                        <span class="cx-summary-value">

                            ${esc(
                                selected
                            )}

                        </span>

                    </div>


                    <div class="cx-summary-item">

                        <span class="cx-summary-label">
                            NAME
                        </span>


                        <span class="cx-summary-value">

                            ${esc(
                                data.name
                            )}

                        </span>

                    </div>


                    <div class="cx-summary-item">

                        <span class="cx-summary-label">
                            EMAIL
                        </span>


                        <span class="cx-summary-value">

                            ${esc(
                                data.email
                            )}

                        </span>

                    </div>


                    <div class="cx-summary-item">

                        <span class="cx-summary-label">
                            SESSION STORAGE
                        </span>


                        <span class="cx-summary-value">

                            Saved for this browser session

                        </span>

                    </div>


                </div>

                `;


                form.reset();


                summary.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "center"

                });


                toast(

                    (
                        isEvent

                            ? "Event"

                            : "Workshop"
                    )

                    +

                    " registration saved to Session Storage."

                );

            },

            true

        );

    }


    // =========================================================
    // JOIN
    // =========================================================

    function initJoin() {

        const form =
            document.getElementById(
                "membershipForm"
            );


        if (
            !form
        ) {

            return;

        }


        const overlay =
            document.createElement(
                "div"
            );


        overlay.className =
            "cx-review-overlay";


        overlay.id =
            "cxJoinReview";


        overlay.setAttribute(
            "role",
            "dialog"
        );


        overlay.setAttribute(
            "aria-modal",
            "true"
        );


        document.body.appendChild(
            overlay
        );


        let pending =
            null;


        const collect =
            function () {

                return {

                    name:

                        document
                            .getElementById(
                                "name"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    studentID:

                        document
                            .getElementById(
                                "studentID"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    email:

                        document
                            .getElementById(
                                "email"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    programme:

                        document
                            .getElementById(
                                "programme"
                            )
                            ?.value

                        ||

                        "",


                    year:

                        document
                            .getElementById(
                                "year"
                            )
                            ?.value

                        ||

                        "",


                    interests:

                        [
                            ...document.querySelectorAll(
                                'input[name="interest"]:checked'
                            )
                        ]
                            .map(
                                function (
                                    input
                                ) {

                                    return input.value;

                                }
                            ),


                    reason:

                        document
                            .getElementById(
                                "reason"
                            )
                            ?.value
                            .trim()

                        ||

                        "",


                    submittedAt:

                        new Date()
                            .toLocaleString()

                };

            };


        const show =
            function (
                data
            ) {

                overlay.innerHTML = `

                <div class="cx-review-card">

                    <h2>
                        Review Your Application
                    </h2>


                    <p>
                        Check the information below before submitting.
                    </p>


                    <div class="cx-review-grid">


                        <div class="cx-review-item">

                            <span class="cx-review-label">
                                NAME
                            </span>

                            ${esc(
                                data.name
                            )}

                        </div>


                        <div class="cx-review-item">

                            <span class="cx-review-label">
                                STUDENT ID
                            </span>

                            ${esc(
                                data.studentID
                            )}

                        </div>


                        <div class="cx-review-item">

                            <span class="cx-review-label">
                                EMAIL
                            </span>

                            ${esc(
                                data.email
                            )}

                        </div>


                        <div class="cx-review-item">

                            <span class="cx-review-label">
                                PROGRAMME / YEAR
                            </span>

                            ${esc(
                                data.programme
                            )}

                            ·

                            ${esc(
                                data.year
                            )}

                        </div>


                        <div class="cx-review-item full">

                            <span class="cx-review-label">
                                CREATIVE INTERESTS
                            </span>

                            ${esc(
                                data.interests
                                    .join(
                                        ", "
                                    )
                            )}

                        </div>


                        <div class="cx-review-item full">

                            <span class="cx-review-label">
                                YOUR STORY
                            </span>

                            ${esc(
                                data.reason
                            )}

                        </div>


                    </div>


                    <div class="cx-review-actions">


                        <button
                            type="button"
                            class="cx-review-edit"
                            id="cxReviewEdit">

                            Edit Application

                        </button>


                        <button
                            type="button"
                            class="cx-review-confirm"
                            id="cxReviewConfirm">

                            Confirm & Submit

                        </button>


                    </div>

                </div>

                `;


                overlay.classList.add(
                    "show"
                );


                document
                    .getElementById(
                        "cxReviewEdit"
                    )
                    .focus();


                document
                    .getElementById(
                        "cxReviewEdit"
                    )
                    .onclick =
                    function () {

                        overlay.classList.remove(
                            "show"
                        );

                    };


                document
                    .getElementById(
                        "cxReviewConfirm"
                    )
                    .onclick =
                    function () {

                        if (
                            !pending
                        ) {

                            return;

                        }


                        localStorage.setItem(

                            "canvasMembership",

                            JSON.stringify(
                                pending
                            )

                        );


                        overlay.classList.remove(
                            "show"
                        );


                        const button =
                            document.getElementById(
                                "joinButton"
                            );


                        const text =
                            button
                                ?.querySelector(
                                    ".button-text"
                                );


                        const arrow =
                            button
                                ?.querySelector(
                                    ".button-arrow"
                                );


                        if (
                            button
                        ) {

                            button.disabled =
                                true;

                        }


                        if (
                            text
                        ) {

                            text.textContent =
                                "CREATING PROFILE...";

                        }


                        if (
                            arrow
                        ) {

                            arrow.textContent =
                                "✓";

                        }


                        setTimeout(

                            function () {

                                document
                                    .getElementById(
                                        "successPopup"
                                    )
                                    ?.classList
                                    .add(
                                        "show"
                                    );


                                if (
                                    button
                                ) {

                                    button.disabled =
                                        false;

                                }


                                if (
                                    text
                                ) {

                                    text.textContent =
                                        "JOIN CANVAS";

                                }


                                if (
                                    arrow
                                ) {

                                    arrow.textContent =
                                        "→";

                                }


                                toast(
                                    "Membership application saved locally."
                                );

                            },

                            550

                        );

                    };

            };


        form.addEventListener(

            "submit",

            function (
                event
            ) {

                event.preventDefault();


                event.stopImmediatePropagation();


                if (
                    !form.checkValidity()
                ) {

                    form.reportValidity();


                    return;

                }


                if (
                    !document
                        .querySelectorAll(
                            'input[name="interest"]:checked'
                        )
                        .length
                ) {

                    const message =
                        document.getElementById(
                            "joinMessage"
                        );


                    if (
                        message
                    ) {

                        message.textContent =
                            "Please select at least one creative interest.";


                        message.style.display =
                            "block";

                    }


                    document
                        .querySelector(
                            ".interest-grid"
                        )
                        ?.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "center"

                        });


                    return;

                }


                pending =
                    collect();


                show(
                    pending
                );

            },

            true

        );


        overlay.onclick =
            function (
                event
            ) {

                if (
                    event.target ===
                    overlay
                ) {

                    overlay.classList.remove(
                        "show"
                    );

                }

            };


        document.addEventListener(

            "keydown",

            function (
                event
            ) {

                if (
                    event.key ===
                        "Escape"

                    &&

                    overlay
                        .classList
                        .contains(
                            "show"
                        )
                ) {

                    overlay.classList.remove(
                        "show"
                    );

                }

            }

        );

    }


    // =========================================================
    // CONTACT
    // =========================================================

    function initContact() {

        const load =
            document.getElementById(
                "loadResources"
            );


        const error =
            document.getElementById(
                "apiError"
            );


        const loading =
            document.getElementById(
                "apiLoading"
            );


        if (
            !load

            ||

            !error
        ) {

            return;

        }


        error.setAttribute(
            "role",
            "alert"
        );


        loading?.setAttribute(
            "aria-live",
            "polite"
        );


        const retry =
            document.createElement(
                "button"
            );


        retry.type =
            "button";


        retry.id =
            "cxApiRetry";


        retry.className =
            "cx-api-retry";


        retry.innerHTML =
            '<i class="bi bi-arrow-clockwise"></i> Retry API Request';


        error.insertAdjacentElement(
            "afterend",
            retry
        );


        retry.onclick =
            function () {

                load.click();

            };


        const update =
            function () {

                retry.classList.toggle(

                    "show",

                    Boolean(
                        error
                            .textContent
                            .trim()
                    )

                    &&

                    getComputedStyle(
                        error
                    ).display !==
                        "none"

                );

            };


        new MutationObserver(
            update
        )
            .observe(
                error,
                {

                    childList:
                        true,

                    characterData:
                        true,

                    subtree:
                        true,

                    attributes:
                        true,

                    attributeFilter: [
                        "style",
                        "class"
                    ]

                }
            );


        load.addEventListener(

            "click",

            function () {

                retry.classList.remove(
                    "show"
                );

            }

        );

    }


    // =========================================================
    // INITIALISE
    // =========================================================

    ready(
        function () {

            initGlobal();

            initHome();

            initGallery();

            initProjects();

            initRegistration();

            initJoin();

            initContact();

        }
    );


    // =========================================================
    // LOAD SHARED MODULES
    // =========================================================

    function loadSiblingScript(
        filename,
        guardName
    ) {

        if (
            window[
                guardName
            ]

            ||

            !currentScript
        ) {

            return;

        }


        window[
            guardName
        ] =
            true;


        const src =
            new URL(
                filename,
                currentScript.src
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


        script.defer =
            true;


        document.body.appendChild(
            script
        );

    }


    loadSiblingScript(
        "background-effects.js",
        "__CANVAS_BACKGROUND_LOADER__"
    );


    loadSiblingScript(
        "portfolio-polish.js",
        "__CANVAS_PORTFOLIO_POLISH_LOADER__"
    );


})();