/* ============================================================
   CANVAS — FINAL PORTFOLIO POLISH

   Features
   1. Smooth page transitions
   2. True global Ctrl / Cmd + K search
      - 8 pages
      - 18 Gallery artworks
      - 27 Project case studies
   3. Related Projects inside the Project modal
   4. Skeleton / media loading feedback
   5. Automatic aria-current navigation state
   6. Contact REST API wording cleanup
   7. Keyboard + accessibility support
   ============================================================ */

(function () {
    "use strict";

    if (window.__CANVAS_PORTFOLIO_POLISH__) return;
    window.__CANVAS_PORTFOLIO_POLISH__ = true;

    const currentScript = document.currentScript;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function rootUrl(path) {
        return currentScript
            ? new URL("../" + path, currentScript.src).href
            : path;
    }

    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback, { once: true });
        } else {
            callback();
        }
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    /* =========================================================
       GLOBAL SEARCH DATA
       ========================================================= */

    const GLOBAL_PROJECTS = [
        { id: "p1",  title: "Autumn Watch",        author: "Tan Wei",        category: "2d",     categoryLabel: "2D Illustration",      projectType: "Character Illustration Project",      software: "Procreate",                 year: "2025" },
        { id: "p2",  title: "Blade of Dawn",       author: "Lim Jia",        category: "2d",     categoryLabel: "2D Illustration",      projectType: "Character Concept Project",           software: "Clip Studio Paint",         year: "2025" },
        { id: "p3",  title: "Verdant Reaper",      author: "Aisha N.",       category: "2d",     categoryLabel: "2D Illustration",      projectType: "Fantasy Character Concept",           software: "Clip Studio Paint",         year: "2024" },
        { id: "p4",  title: "Neon Courier",        author: "Chen Yi Xuan",   category: "2d",     categoryLabel: "Digital Illustration", projectType: "Cyber Character Design Project",      software: "Adobe Photoshop",           year: "2025" },
        { id: "p5",  title: "Moonlit Kimono",      author: "Nur Ain",        category: "2d",     categoryLabel: "Digital Illustration", projectType: "Character Illustration Project",      software: "Procreate",                 year: "2025" },
        { id: "p6",  title: "Ancient Roots",       author: "David Heng",     category: "2d",     categoryLabel: "Concept Art",          projectType: "Environment Concept Project",         software: "Adobe Photoshop",           year: "2024" },
        { id: "p7",  title: "Late Night Deadline", author: "Farah Iman",     category: "2d",     categoryLabel: "Digital Illustration", projectType: "Narrative Illustration Project",      software: "Adobe Photoshop",           year: "2024" },
        { id: "p8",  title: "Coral Companion",     author: "Nur Ain",        category: "2d",     categoryLabel: "Digital Art",          projectType: "Digital Illustration Project",        software: "Adobe Photoshop",           year: "2024" },
        { id: "p9",  title: "Street Cart Rush",    author: "Marcus Ooi",     category: "2d",     categoryLabel: "Digital Art",          projectType: "Urban Visual Storytelling Project",   software: "Adobe Photoshop",           year: "2025" },

        { id: "p10", title: "Gilded Grid",         author: "Marcus Ooi",     category: "3d",     categoryLabel: "3D Render",            projectType: "Procedural 3D Study",                 software: "Blender",                   year: "2025" },
        { id: "p11", title: "Wooden Horizon",      author: "Chen Yi Xuan",   category: "3d",     categoryLabel: "3D Render",            projectType: "3D Environment Study",               software: "Cinema 4D",                 year: "2024" },
        { id: "p13", title: "Glass Orchard",       author: "Jason Lee",      category: "3d",     categoryLabel: "3D / Digital Art",     projectType: "Material & Lighting Study",           software: "Blender + Photoshop",       year: "2025" },
        { id: "p14", title: "Fractured Tiles",     author: "Lim Jia",        category: "3d",     categoryLabel: "3D Design",            projectType: "Geometric Design Experiment",         software: "Blender",                   year: "2024" },
        { id: "p15", title: "Pink Vortex",         author: "Aina Rahman",    category: "3d",     categoryLabel: "Abstract 3D",          projectType: "Abstract 3D Composition",            software: "Cinema 4D",                 year: "2025" },
        { id: "p16", title: "Copper Corridor",     author: "David Heng",     category: "3d",     categoryLabel: "3D Render",            projectType: "Architectural Visualisation",         software: "Blender",                   year: "2025" },
        { id: "p17", title: "Brick Depth",         author: "Marcus Ooi",     category: "3d",     categoryLabel: "3D Design",            projectType: "Spatial Geometry Study",              software: "Blender",                   year: "2024" },
        { id: "p18", title: "Prism Drop",          author: "Aisha N.",       category: "3d",     categoryLabel: "3D / Digital Art",     projectType: "Reflective Material Study",           software: "Blender",                   year: "2025" },
        { id: "p19", title: "Crimson Folds",       author: "Farah Iman",     category: "3d",     categoryLabel: "Abstract 3D",          projectType: "Digital Sculpture Study",             software: "Cinema 4D",                 year: "2025" },

        { id: "p20", title: "Forest Ambience",     author: "Wong Kar Ling",  category: "motion", categoryLabel: "Motion Graphics",      projectType: "Environmental Loop Project",          software: "Adobe After Effects",       year: "2025" },
        { id: "p21", title: "Backyard Loop",       author: "Farah Iman",     category: "motion", categoryLabel: "Motion Graphics",      projectType: "Environmental Motion Study",          software: "Adobe After Effects",       year: "2024" },
        { id: "p22", title: "Nebula Drift",        author: "Adam Leong",      category: "motion", categoryLabel: "Motion Graphics",      projectType: "Particle Animation Project",          software: "Adobe After Effects",       year: "2025" },
        { id: "p23", title: "Golden Corridor",     author: "Marcus Ooi",     category: "motion", categoryLabel: "Motion Graphics",      projectType: "Motion Tunnel Project",               software: "Adobe After Effects",       year: "2025" },
        { id: "p24", title: "Chromatic Vortex",    author: "Aina Rahman",    category: "motion", categoryLabel: "Motion Graphics",      projectType: "Abstract Motion Project",             software: "Adobe After Effects",       year: "2025" },
        { id: "p25", title: "Violet Current",      author: "Jason Lee",      category: "motion", categoryLabel: "Motion Graphics",      projectType: "Fluid Motion Study",                 software: "Adobe After Effects",       year: "2025" },
        { id: "p26", title: "Neon Pulse",          author: "Farah Iman",     category: "motion", categoryLabel: "Motion Graphics",      projectType: "Light Trail Animation",               software: "Adobe After Effects",       year: "2025" },
        { id: "p27", title: "Cube Rush",           author: "Lim Jia",        category: "motion", categoryLabel: "Motion Graphics",      projectType: "Geometric Motion Project",            software: "Cinema 4D + After Effects", year: "2025" },
        { id: "p28", title: "Golden Hour Walk",    author: "Wong Kar Ling",  category: "motion", categoryLabel: "Video Editing",        projectType: "Video Editing Project",               software: "Adobe Premiere Pro",        year: "2025" }
    ];

    const GLOBAL_ARTWORKS = [
        { id: "g1",  title: "Autumn Watch",        student: "Tan Wei",       categoryLabel: "2D Illustration" },
        { id: "g2",  title: "Blade of Dawn",       student: "Lim Jia",       categoryLabel: "2D Illustration" },
        { id: "g3",  title: "Verdant Reaper",      student: "Aisha N.",      categoryLabel: "2D Illustration" },
        { id: "g11", title: "Neon Courier",        student: "Chen Yi Xuan",  categoryLabel: "Digital Illustration" },
        { id: "g12", title: "Moonlit Kimono",      student: "Nur Ain",       categoryLabel: "Digital Illustration" },
        { id: "g14", title: "Late Night Deadline", student: "Farah Iman",    categoryLabel: "Digital Illustration" },

        { id: "g4",  title: "Gilded Grid",         student: "Marcus Ooi",    categoryLabel: "3D Render" },
        { id: "g5",  title: "Wooden Horizon",      student: "Chen Yi Xuan",  categoryLabel: "3D Render" },
        { id: "g6",  title: "Sweet Slice",         student: "Nur Ain",       categoryLabel: "3D Render" },
        { id: "g17", title: "Glass Orchard",       student: "Jason Lee",     categoryLabel: "3D / Digital Art" },
        { id: "g18", title: "Fractured Tiles",     student: "Lim Jia",       categoryLabel: "3D Design" },
        { id: "g22", title: "Prism Drop",          student: "Aisha N.",      categoryLabel: "3D / Digital Art" },

        { id: "g7",  title: "Forest Ambience",     student: "Wong Kar Ling", categoryLabel: "Motion Graphics" },
        { id: "g9",  title: "Nebula Drift",        student: "Adam Leong",     categoryLabel: "Motion Graphics" },
        { id: "g10", title: "Golden Corridor",     student: "Marcus Ooi",    categoryLabel: "Motion Graphics" },
        { id: "g24", title: "Chromatic Vortex",    student: "Aina Rahman",   categoryLabel: "Motion Graphics" },
        { id: "g25", title: "Violet Current",      student: "Jason Lee",     categoryLabel: "Motion Graphics" },
        { id: "g26", title: "Neon Pulse",          student: "Farah Iman",    categoryLabel: "Motion Graphics" }
    ];

    /* =========================================================
       GLOBAL CSS
       ========================================================= */

    const style = document.createElement("style");

    style.id = "canvasPortfolioPolishStyles";

    style.textContent = `

        /* =================================================
           PAGE TRANSITION
           ================================================= */

        .cx-page-transition {
            position: fixed;
            inset: 0;

            z-index: 99999;

            pointer-events: none;

            background:
                radial-gradient(
                    circle at center,
                    rgba(155, 89, 255, 0.16),
                    transparent 35rem
                ),
                #08080d;

            opacity: 1;
            visibility: visible;

            transition:
                opacity 0.28s ease,
                visibility 0.28s ease;
        }


        .cx-page-transition.ready {
            opacity: 0;
            visibility: hidden;
        }


        .cx-page-transition::before {
            content: "CANVAS";

            position: absolute;

            left: 50%;
            top: 50%;

            transform:
                translate(-50%, -50%);

            color:
                rgba(255, 255, 255, 0.82);

            font-family:
                "Orbitron",
                sans-serif;

            font-size: 14px;
            font-weight: 700;

            letter-spacing: 6px;
        }


        body.canvas-light
        .cx-page-transition {
            background:
                radial-gradient(
                    circle at center,
                    rgba(118, 83, 184, 0.14),
                    transparent 34rem
                ),
                #e7e1ec;
        }


        body.canvas-light
        .cx-page-transition::before {
            color: #3c3047;
        }


        /* =================================================
           SEARCH BUTTON
           ================================================= */

        .cx-search-trigger {
            width: 36px;
            height: 36px;

            flex:
                0 0 36px;

            display:
                inline-flex;

            align-items:
                center;

            justify-content:
                center;

            padding: 0;

            border:
                1px solid
                rgba(255, 255, 255, 0.16);

            border-radius:
                50%;

            background:
                rgba(255, 255, 255, 0.03);

            color:
                #d9c7ff;

            cursor:
                pointer;

            transition:
                0.25s;
        }


        .cx-search-trigger:hover,
        .cx-search-trigger:focus-visible {
            color:
                #ffffff;

            border-color:
                rgba(155, 89, 255, 0.85);

            background:
                rgba(155, 89, 255, 0.13);

            transform:
                translateY(-2px);
        }


        body.canvas-light
        .cx-search-trigger {
            color:
                #7250ad;

            border-color:
                rgba(76, 55, 91, 0.20);

            background:
                rgba(248, 245, 250, 0.72);
        }


        /* =================================================
           GLOBAL SEARCH OVERLAY
           ================================================= */

        .cx-command-overlay {
            position: fixed;
            inset: 0;

            z-index: 100000;

            display: none;

            align-items:
                flex-start;

            justify-content:
                center;

            padding:
                min(14vh, 120px)
                20px
                30px;

            background:
                rgba(3, 3, 8, 0.80);

            backdrop-filter:
                blur(14px);

            -webkit-backdrop-filter:
                blur(14px);
        }


        .cx-command-overlay.show {
            display:
                flex;
        }


        .cx-command-box {
            width:
                min(760px, 100%);

            overflow:
                hidden;

            border:
                1px solid
                rgba(155, 89, 255, 0.45);

            border-radius:
                16px;

            background:
                rgba(11, 11, 19, 0.98);

            box-shadow:
                0 35px 100px
                rgba(0, 0, 0, 0.60),

                0 0 45px
                rgba(155, 89, 255, 0.08);
        }


        .cx-command-input-row {
            position:
                relative;

            display:
                flex;

            align-items:
                center;

            border-bottom:
                1px solid
                rgba(255, 255, 255, 0.09);
        }


        .cx-command-search-icon {
            position:
                absolute;

            left:
                19px;

            color:
                #9b75e5;

            font-size:
                17px;

            pointer-events:
                none;
        }


        .cx-command-input {
            width:
                100%;

            min-height:
                64px;

            padding:
                15px
                64px
                15px
                52px;

            border:
                0;

            outline:
                0;

            background:
                transparent;

            color:
                #ffffff;

            font-family:
                "Inter",
                sans-serif;

            font-size:
                16px;
        }


        .cx-command-input::placeholder {
            color:
                #777484;
        }


        .cx-command-shortcut {
            position:
                absolute;

            right:
                17px;

            padding:
                4px 7px;

            border:
                1px solid
                rgba(255, 255, 255, 0.13);

            border-radius:
                6px;

            background:
                rgba(255, 255, 255, 0.03);

            color:
                #777484;

            font:
                7px
                "Orbitron",
                sans-serif;

            letter-spacing:
                1px;
        }


        .cx-command-results {
            max-height:
                min(58vh, 520px);

            overflow-y:
                auto;

            padding:
                8px;
        }


        .cx-command-item {
            width:
                100%;

            display:
                grid;

            grid-template-columns:
                38px
                minmax(0, 1fr)
                auto;

            align-items:
                center;

            gap:
                12px;

            padding:
                11px
                12px;

            border:
                1px solid
                transparent;

            border-radius:
                10px;

            background:
                transparent;

            color:
                #ffffff;

            text-align:
                left;

            cursor:
                pointer;

            transition:
                0.18s;
        }


        .cx-command-item:hover,
        .cx-command-item.active {
            border-color:
                rgba(155, 89, 255, 0.32);

            background:
                rgba(155, 89, 255, 0.09);
        }


        .cx-command-icon {
            width:
                36px;

            height:
                36px;

            display:
                grid;

            place-items:
                center;

            border:
                1px solid
                rgba(255, 255, 255, 0.10);

            border-radius:
                9px;

            background:
                rgba(255, 255, 255, 0.025);

            color:
                #b993ff;
        }


        .cx-command-title,
        .cx-command-description {
            display:
                block;

            overflow:
                hidden;

            text-overflow:
                ellipsis;

            white-space:
                nowrap;
        }


        .cx-command-title {
            color:
                #f5f4f8;

            font-family:
                "Orbitron",
                sans-serif;

            font-size:
                10px;

            font-weight:
                500;

            letter-spacing:
                0.6px;
        }


        .cx-command-description {
            margin-top:
                3px;

            color:
                #777484;

            font-size:
                10px;
        }


        .cx-command-type {
            color:
                #777484;

            font:
                6.5px
                "Orbitron",
                sans-serif;

            letter-spacing:
                1px;

            text-transform:
                uppercase;
        }


        .cx-command-empty {
            padding:
                35px
                20px;

            color:
                #7b7887;

            text-align:
                center;

            font-size:
                12px;
        }


        .cx-command-footer {
            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                18px;

            padding:
                10px
                16px;

            border-top:
                1px solid
                rgba(255, 255, 255, 0.07);

            color:
                #676473;

            font-size:
                9px;
        }


        .cx-command-footer span {
            display:
                inline-flex;

            align-items:
                center;

            gap:
                7px;
        }


        .cx-command-footer kbd {
            padding:
                2px 5px;

            border:
                1px solid
                rgba(255, 255, 255, 0.12);

            border-radius:
                4px;

            background:
                rgba(255, 255, 255, 0.04);

            color:
                #9793a1;

            font:
                inherit;
        }


        /* =================================================
           SEARCH — LIGHT MODE
           ================================================= */

        body.canvas-light
        .cx-command-overlay {
            background:
                rgba(59, 47, 70, 0.34);
        }


        body.canvas-light
        .cx-command-box {
            background:
                rgba(244, 240, 248, 0.98);

            border-color:
                rgba(111, 67, 180, 0.30);
        }


        body.canvas-light
        .cx-command-input {
            color:
                #27212f;
        }


        body.canvas-light
        .cx-command-title {
            color:
                #292230;
        }


        body.canvas-light
        .cx-command-description,

        body.canvas-light
        .cx-command-type,

        body.canvas-light
        .cx-command-footer {
            color:
                #6c6375;
        }


        body.canvas-light
        .cx-command-item:hover,

        body.canvas-light
        .cx-command-item.active {
            background:
                rgba(118, 83, 184, 0.10);

            border-color:
                rgba(118, 83, 184, 0.28);
        }


        /* =================================================
           SKELETON LOADING
           ================================================= */

        img.cx-media-loading,

        video.cx-media-loading {
            background:
                linear-gradient(
                    105deg,

                    rgba(
                        255,
                        255,
                        255,
                        0.035
                    )
                    22%,

                    rgba(
                        155,
                        89,
                        255,
                        0.12
                    )
                    38%,

                    rgba(
                        255,
                        255,
                        255,
                        0.035
                    )
                    54%
                );

            background-size:
                230% 100%;

            animation:
                cxSkeleton
                1.45s
                linear
                infinite;
        }


        img.cx-media-loading {
            filter:
                brightness(0.45);
        }


        img.cx-media-loaded,

        video.cx-media-loaded {
            animation:
                cxMediaFadeIn
                0.35s
                ease;
        }


        img.cx-media-error {
            opacity:
                0.45;

            filter:
                grayscale(1);
        }


        @keyframes cxSkeleton {

            from {
                background-position:
                    150% 0;
            }

            to {
                background-position:
                    -80% 0;
            }

        }


        @keyframes cxMediaFadeIn {

            from {
                opacity:
                    0.45;
            }

            to {
                opacity:
                    1;
            }

        }


        /* =================================================
           RELATED PROJECTS
           ================================================= */

        .cx-related-projects {
            margin-top:
                24px;

            padding-top:
                22px;

            border-top:
                1px solid
                rgba(255, 255, 255, 0.09);
        }


        .cx-related-heading {
            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                14px;

            margin-bottom:
                14px;
        }


        .cx-related-heading h3 {
            margin:
                0;

            color:
                #ffffff;

            font:
                600
                11px
                "Orbitron",
                sans-serif;

            letter-spacing:
                1px;
        }


        .cx-related-heading span {
            color:
                #6f6b7b;

            font-size:
                9px;
        }


        .cx-related-grid {
            display:
                grid;

            grid-template-columns:
                repeat(
                    3,
                    minmax(0, 1fr)
                );

            gap:
                10px;
        }


        .cx-related-card {
            overflow:
                hidden;

            padding:
                0;

            border:
                1px solid
                rgba(255, 255, 255, 0.09);

            border-radius:
                10px;

            background:
                rgba(255, 255, 255, 0.025);

            color:
                #ffffff;

            text-align:
                left;

            cursor:
                pointer;

            transition:
                0.25s;
        }


        .cx-related-card:hover,

        .cx-related-card:focus-visible {
            transform:
                translateY(-3px);

            border-color:
                rgba(155, 89, 255, 0.55);

            background:
                rgba(155, 89, 255, 0.06);
        }


        .cx-related-media {
            width:
                100%;

            aspect-ratio:
                16 / 9;

            overflow:
                hidden;

            display:
                grid;

            place-items:
                center;

            background:
                #060609;
        }


        .cx-related-media img {
            width:
                100%;

            height:
                100%;

            display:
                block;

            object-fit:
                contain;
        }


        .cx-related-placeholder {
            color:
                #9a70e5;

            font-size:
                25px;
        }


        .cx-related-info {
            padding:
                10px;
        }


        .cx-related-title {
            overflow:
                hidden;

            margin-bottom:
                4px;

            color:
                #ffffff;

            font:
                600
                8px
                "Orbitron",
                sans-serif;

            letter-spacing:
                0.6px;

            text-overflow:
                ellipsis;

            white-space:
                nowrap;
        }


        .cx-related-meta {
            overflow:
                hidden;

            color:
                #777484;

            font-size:
                8px;

            text-overflow:
                ellipsis;

            white-space:
                nowrap;
        }


        body.canvas-light
        .cx-related-projects {
            border-color:
                rgba(62, 46, 74, 0.12);
        }


        body.canvas-light
        .cx-related-heading h3,

        body.canvas-light
        .cx-related-title {
            color:
                #292230;
        }


        body.canvas-light
        .cx-related-heading span,

        body.canvas-light
        .cx-related-meta {
            color:
                #6c6375;
        }


        body.canvas-light
        .cx-related-card {
            background:
                rgba(244, 240, 248, 0.88);

            border-color:
                rgba(62, 46, 74, 0.12);
        }


        /* =================================================
           RESPONSIVE
           ================================================= */

        @media (
            max-width:
            700px
        ) {

            .cx-related-grid {
                grid-template-columns:
                    1fr;
            }


            .cx-command-footer {
                display:
                    none;
            }


            .cx-command-overlay {
                padding:
                    70px
                    12px
                    20px;
            }


            .cx-command-item {
                grid-template-columns:
                    34px
                    minmax(0, 1fr);
            }


            .cx-command-type {
                display:
                    none;
            }

        }


        @media (
            prefers-reduced-motion:
            reduce
        ) {

            .cx-page-transition {
                transition:
                    none
                    !important;
            }


            img.cx-media-loading,

            video.cx-media-loading,

            img.cx-media-loaded,

            video.cx-media-loaded {
                animation:
                    none
                    !important;
            }

        }

    `;

    document.head.appendChild(style);


    /* =========================================================
       NAVIGATION ACCESSIBILITY
       Automatically fixes aria-current for every page.
       ========================================================= */

    function initNavigationAccessibility() {

        const links = [
            ...document.querySelectorAll(
                ".nav-links a[href]"
            )
        ];

        if (!links.length) {
            return;
        }


        const normalize =
            function (urlPath) {

                return urlPath.replace(
                    /\/$/,
                    "/index.html"
                );

            };


        const currentPath =
            normalize(
                new URL(
                    location.href
                ).pathname
            );


        links.forEach(
            function (link) {

                let linkPath;


                try {

                    linkPath =
                        normalize(
                            new URL(
                                link.href,
                                location.href
                            ).pathname
                        );

                }

                catch (error) {

                    return;

                }


                const isCurrent =
                    linkPath ===
                    currentPath;


                link.classList.toggle(
                    "active",
                    isCurrent
                );


                if (isCurrent) {

                    link.setAttribute(
                        "aria-current",
                        "page"
                    );

                }

                else {

                    link.removeAttribute(
                        "aria-current"
                    );

                }

            }
        );

    }


    /* =========================================================
       CONTACT API WORDING
       Fixes "Creative Resources" vs Weather/API mismatch.
       ========================================================= */

    function initContactApiCopy() {

        const apiSection =
            document.querySelector(
                ".api-section"
            );


        if (!apiSection) {
            return;
        }


        const heading =
            apiSection.querySelector(
                ".api-heading h2"
            );


        const description =
            apiSection.querySelector(
                ".api-description"
            );


        const button =
            document.getElementById(
                "loadResources"
            );


        const loading =
            document.getElementById(
                "apiLoading"
            );


        if (heading) {

            heading.innerHTML =
                `
                    CREATIVE
                    <span>
                        SPACE CONDITIONS.
                    </span>
                `;

        }


        if (description) {

            description.textContent =
                "Check the current environment conditions around the CANVAS creative space using live REST API data.";

        }


        if (button) {

            button.textContent =
                "LOAD STUDIO CONDITIONS →";


            button.setAttribute(
                "aria-label",
                "Load live CANVAS studio environment conditions"
            );

        }


        if (loading) {

            loading.textContent =
                "CHECKING LIVE CONDITIONS...";

        }

    }


    /* =========================================================
       PAGE TRANSITIONS
       ========================================================= */

    function initPageTransitions() {

        if (
            document.getElementById(
                "cxPageTransition"
            )
        ) {

            return;

        }


        const transition =
            document.createElement(
                "div"
            );


        transition.id =
            "cxPageTransition";


        transition.className =
            "cx-page-transition";


        transition.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.appendChild(
            transition
        );


        function revealPage() {

            requestAnimationFrame(
                function () {

                    requestAnimationFrame(
                        function () {

                            transition
                                .classList
                                .add(
                                    "ready"
                                );

                        }
                    );

                }
            );

        }


        revealPage();


        window.addEventListener(
            "pageshow",
            revealPage
        );


        document.addEventListener(
            "click",
            function (event) {

                if (
                    event.defaultPrevented ||
                    event.button !== 0 ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                ) {

                    return;

                }


                const link =
                    event.target.closest(
                        "a[href]"
                    );


                if (
                    !link ||
                    link.hasAttribute(
                        "download"
                    ) ||
                    link.target ===
                        "_blank"
                ) {

                    return;

                }


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href.startsWith("#") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:") ||
                    href.startsWith("javascript:")
                ) {

                    return;

                }


                let target;


                try {

                    target =
                        new URL(
                            link.href,
                            location.href
                        );

                }

                catch (error) {

                    return;

                }


                if (
                    target.origin !==
                    location.origin
                ) {

                    return;

                }


                if (
                    target.pathname ===
                        location.pathname &&
                    target.search ===
                        location.search &&
                    target.hash
                ) {

                    return;

                }


                event.preventDefault();


                transition
                    .classList
                    .remove(
                        "ready"
                    );


                setTimeout(
                    function () {

                        location.href =
                            target.href;

                    },

                    reducedMotion.matches
                        ? 0
                        : 230
                );

            }
        );

    }


    /* =========================================================
       SKELETON / MEDIA LOADING
       ========================================================= */

    function initialiseImage(image) {

        if (
            image.dataset
                .cxSkeletonReady ===
            "true"
        ) {

            return;

        }


        image.dataset
            .cxSkeletonReady =
            "true";


        function loaded() {

            image.classList.remove(
                "cx-media-loading"
            );


            image.classList.add(
                "cx-media-loaded"
            );

        }


        function failed() {

            image.classList.remove(
                "cx-media-loading"
            );


            image.classList.add(
                "cx-media-error"
            );

        }


        if (
            image.complete &&
            image.naturalWidth >
                0
        ) {

            loaded();

            return;

        }


        image.classList.add(
            "cx-media-loading"
        );


        image.addEventListener(
            "load",
            loaded,
            {
                once:
                    true
            }
        );


        image.addEventListener(
            "error",
            failed,
            {
                once:
                    true
            }
        );

    }


    function initialiseVideo(video) {

        if (
            video.dataset
                .cxSkeletonReady ===
            "true"
        ) {

            return;

        }


        video.dataset
            .cxSkeletonReady =
            "true";


        function loaded() {

            video.classList.remove(
                "cx-media-loading"
            );


            video.classList.add(
                "cx-media-loaded"
            );

        }


        if (
            video.readyState >=
            2
        ) {

            loaded();

            return;

        }


        video.classList.add(
            "cx-media-loading"
        );


        video.addEventListener(
            "loadeddata",
            loaded,
            {
                once:
                    true
            }
        );


        video.addEventListener(
            "loadedmetadata",
            loaded,
            {
                once:
                    true
            }
        );

    }


    function scanMedia() {

        document
            .querySelectorAll(
                "img"
            )
            .forEach(
                initialiseImage
            );


        document
            .querySelectorAll(
                "video"
            )
            .forEach(
                initialiseVideo
            );

    }


    function initSkeletonLoading() {

        scanMedia();


        const observer =
            new MutationObserver(
                function (mutations) {

                    const hasNewNodes =
                        mutations.some(
                            function (mutation) {

                                return (
                                    mutation
                                        .addedNodes
                                        .length >
                                    0
                                );

                            }
                        );


                    if (hasNewNodes) {

                        requestAnimationFrame(
                            scanMedia
                        );

                    }

                }
            );


        observer.observe(
            document.body,
            {
                childList:
                    true,

                subtree:
                    true
            }
        );

    }


    /* =========================================================
       TRUE GLOBAL SEARCH INDEX
       ========================================================= */

    function buildSearchIndex() {

        const pages = [

            {
                title:
                    "Home",

                description:
                    "CANVAS homepage and featured creative work",

                type:
                    "Page",

                icon:
                    "bi-house",

                url:
                    rootUrl(
                        "index.html"
                    )
            },


            {
                title:
                    "About",

                description:
                    "Mission, vision, history and club team",

                type:
                    "Page",

                icon:
                    "bi-people",

                url:
                    rootUrl(
                        "HTML/about.html"
                    )
            },


            {
                title:
                    "Events",

                description:
                    "Upcoming CANVAS events and registration",

                type:
                    "Page",

                icon:
                    "bi-calendar-event",

                url:
                    rootUrl(
                        "HTML/events.html"
                    )
            },


            {
                title:
                    "Workshops",

                description:
                    "Creative workshops and registration",

                type:
                    "Page",

                icon:
                    "bi-easel",

                url:
                    rootUrl(
                        "HTML/workshops.html"
                    )
            },


            {
                title:
                    "Gallery",

                description:
                    "Browse and favourite individual artworks",

                type:
                    "Page",

                icon:
                    "bi-images",

                url:
                    rootUrl(
                        "HTML/gallery.html"
                    )
            },


            {
                title:
                    "Projects",

                description:
                    "Explore complete student project case studies",

                type:
                    "Page",

                icon:
                    "bi-journal-richtext",

                url:
                    rootUrl(
                        "HTML/project.html"
                    )
            },


            {
                title:
                    "Join CANVAS",

                description:
                    "Membership application and creative interests",

                type:
                    "Page",

                icon:
                    "bi-person-plus",

                url:
                    rootUrl(
                        "HTML/join.html"
                    )
            },


            {
                title:
                    "Contact",

                description:
                    "Contact form, studio conditions API and social media",

                type:
                    "Page",

                icon:
                    "bi-envelope",

                url:
                    rootUrl(
                        "HTML/contact.html"
                    )
            }

        ];


        const artworks =
            GLOBAL_ARTWORKS.map(
                function (artwork) {

                    return {

                        title:
                            artwork.title,


                        description:
                            artwork.student
                            +
                            " · "
                            +
                            artwork.categoryLabel,


                        type:
                            "Artwork",


                        icon:

                            artwork.categoryLabel ===
                            "Motion Graphics"

                                ? "bi-play-circle"

                                : "bi-image",


                        url:
                            rootUrl(
                                "HTML/gallery.html?search="
                                +
                                encodeURIComponent(
                                    artwork.title
                                )
                            )

                    };

                }
            );


        const projects =
            GLOBAL_PROJECTS.map(
                function (project) {

                    let icon =
                        "bi-journal-richtext";


                    if (
                        project.category ===
                        "motion"
                    ) {

                        icon =
                            "bi-play-circle";

                    }

                    else if (
                        project.category ===
                        "3d"
                    ) {

                        icon =
                            "bi-box";

                    }


                    return {

                        title:
                            project.title,


                        description:
                            project.projectType
                            +
                            " · "
                            +
                            project.author
                            +
                            " · "
                            +
                            project.software,


                        type:
                            "Project",


                        icon:
                            icon,


                        url:
                            rootUrl(
                                "HTML/project.html?project="
                                +
                                encodeURIComponent(
                                    project.id
                                )
                            )

                    };

                }
            );


        return [
            ...pages,
            ...artworks,
            ...projects
        ];

    }


    /* =========================================================
       GLOBAL CTRL / CMD + K SEARCH
       ========================================================= */

    function initGlobalSearch() {

        if (
            document.getElementById(
                "cxCommandOverlay"
            )
        ) {

            return;

        }


        const nav =
            document.querySelector(
                ".nav-links"
            );


        let trigger =
            document.getElementById(
                "cxSearchTrigger"
            );


        /* -----------------------------------------
           SEARCH BUTTON
           ----------------------------------------- */

        if (
            nav &&
            !trigger
        ) {

            trigger =
                document.createElement(
                    "button"
                );


            trigger.type =
                "button";


            trigger.id =
                "cxSearchTrigger";


            trigger.className =
                "cx-search-trigger";


            trigger.setAttribute(
                "aria-label",
                "Search CANVAS"
            );


            trigger.setAttribute(
                "title",
                "Search CANVAS (Ctrl+K)"
            );


            trigger.innerHTML =
                '<i class="bi bi-search" aria-hidden="true"></i>';


            const theme =
                document.getElementById(
                    "cxTheme"
                );


            if (theme) {

                nav.insertBefore(
                    trigger,
                    theme
                );

            }

            else {

                nav.appendChild(
                    trigger
                );

            }

        }


        /* -----------------------------------------
           SEARCH OVERLAY
           ----------------------------------------- */

        const overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "cxCommandOverlay";


        overlay.className =
            "cx-command-overlay";


        overlay.setAttribute(
            "role",
            "dialog"
        );


        overlay.setAttribute(
            "aria-modal",
            "true"
        );


        overlay.setAttribute(
            "aria-label",
            "Search CANVAS"
        );


        overlay.innerHTML = `

            <div class="cx-command-box">

                <div class="cx-command-input-row">

                    <i
                        class="bi bi-search cx-command-search-icon"
                        aria-hidden="true">
                    </i>


                    <input
                        id="cxCommandInput"
                        class="cx-command-input"
                        type="search"
                        autocomplete="off"
                        placeholder="Search 8 pages, 18 artworks and 27 projects..."
                        aria-label="Search CANVAS">


                    <span class="cx-command-shortcut">
                        ESC
                    </span>

                </div>


                <div
                    class="cx-command-results"
                    id="cxCommandResults">
                </div>


                <div class="cx-command-footer">

                    <span>

                        <kbd>↑</kbd>
                        <kbd>↓</kbd>

                        Navigate

                    </span>


                    <span>

                        <kbd>Enter</kbd>

                        Open

                    </span>


                    <span>

                        <kbd>Esc</kbd>

                        Close

                    </span>

                </div>

            </div>

        `;


        document.body.appendChild(
            overlay
        );


        const input =
            overlay.querySelector(
                "#cxCommandInput"
            );


        const results =
            overlay.querySelector(
                "#cxCommandResults"
            );


        const searchIndex =
            buildSearchIndex();


        let filtered =
            [];


        let selectedIndex =
            0;


        let previousFocusedElement =
            null;


        /* -----------------------------------------
           SEARCH SCORING
           ----------------------------------------- */

        function scoreItem(
            item,
            query
        ) {

            const title =
                item.title
                    .toLowerCase();


            const description =
                item.description
                    .toLowerCase();


            const type =
                item.type
                    .toLowerCase();


            let score =
                0;


            if (
                title ===
                query
            ) {

                score +=
                    120;

            }


            if (
                title.startsWith(
                    query
                )
            ) {

                score +=
                    70;

            }


            if (
                title.includes(
                    query
                )
            ) {

                score +=
                    40;

            }


            if (
                description.includes(
                    query
                )
            ) {

                score +=
                    18;

            }


            if (
                type.includes(
                    query
                )
            ) {

                score +=
                    10;

            }


            query
                .split(
                    /\s+/
                )
                .filter(
                    Boolean
                )
                .forEach(
                    function (word) {

                        if (
                            title.includes(
                                word
                            )
                        ) {

                            score +=
                                8;

                        }


                        if (
                            description.includes(
                                word
                            )
                        ) {

                            score +=
                                3;

                        }

                    }
                );


            return score;

        }


        function performSearch(
            query
        ) {

            const value =
                query
                    .trim()
                    .toLowerCase();


            if (
                !value
            ) {

                return [

                    ...searchIndex.filter(
                        function (item) {

                            return (
                                item.type ===
                                "Page"
                            );

                        }
                    ),


                    ...searchIndex.filter(
                        function (item) {

                            return (

                                item.type ===
                                "Project"

                                &&

                                [
                                    "Moonlit Kimono",
                                    "Gilded Grid",
                                    "Nebula Drift"
                                ]
                                    .includes(
                                        item.title
                                    )

                            );

                        }
                    )

                ];

            }


            return searchIndex

                .map(
                    function (item) {

                        return {

                            ...item,

                            score:
                                scoreItem(
                                    item,
                                    value
                                )

                        };

                    }
                )

                .filter(
                    function (item) {

                        return (
                            item.score >
                            0
                        );

                    }
                )

                .sort(
                    function (a, b) {

                        return (

                            b.score -
                            a.score

                        )

                        ||

                        a.title
                            .localeCompare(
                                b.title
                            );

                    }
                )

                .slice(
                    0,
                    14
                );

        }


        /* -----------------------------------------
           ACTIVE SEARCH RESULT
           ----------------------------------------- */

        function refreshSelected() {

            const buttons =
                results.querySelectorAll(
                    ".cx-command-item"
                );


            buttons.forEach(
                function (
                    button,
                    index
                ) {

                    button.classList.toggle(
                        "active",
                        index ===
                            selectedIndex
                    );

                }
            );


            buttons[
                selectedIndex
            ]
                ?.scrollIntoView({

                    block:
                        "nearest"

                });

        }


        function openSelected(
            index =
                selectedIndex
        ) {

            const item =
                filtered[
                    index
                ];


            if (
                !item
            ) {

                return;

            }


            closeSearch();


            location.href =
                item.url;

        }


        /* -----------------------------------------
           RENDER SEARCH RESULTS
           ----------------------------------------- */

        function renderResults(
            items
        ) {

            filtered =
                items;


            if (
                !items.length
            ) {

                results.innerHTML = `

                    <div class="cx-command-empty">

                        No matching page, artwork or project found.

                    </div>

                `;


                return;

            }


            if (
                selectedIndex >=
                items.length
            ) {

                selectedIndex =
                    0;

            }


            results.innerHTML =
                items
                    .map(
                        function (
                            item,
                            index
                        ) {

                            return `

                                <button
                                    type="button"
                                    class="cx-command-item ${
                                        index ===
                                        selectedIndex

                                            ? "active"

                                            : ""
                                    }"
                                    data-index="${index}">


                                    <span class="cx-command-icon">

                                        <i
                                            class="bi ${item.icon}"
                                            aria-hidden="true">
                                        </i>

                                    </span>


                                    <span>

                                        <span class="cx-command-title">

                                            ${escapeHtml(
                                                item.title
                                            )}

                                        </span>


                                        <span class="cx-command-description">

                                            ${escapeHtml(
                                                item.description
                                            )}

                                        </span>

                                    </span>


                                    <span class="cx-command-type">

                                        ${escapeHtml(
                                            item.type
                                        )}

                                    </span>

                                </button>

                            `;

                        }
                    )
                    .join(
                        ""
                    );


            results
                .querySelectorAll(
                    ".cx-command-item"
                )
                .forEach(
                    function (button) {

                        button.addEventListener(
                            "mouseenter",
                            function () {

                                selectedIndex =
                                    Number(
                                        button.dataset
                                            .index
                                    );


                                refreshSelected();

                            }
                        );


                        button.addEventListener(
                            "click",
                            function () {

                                openSelected(
                                    Number(
                                        button.dataset
                                            .index
                                    )
                                );

                            }
                        );

                    }
                );

        }


        /* -----------------------------------------
           OPEN / CLOSE SEARCH
           ----------------------------------------- */

        function openSearch() {

            previousFocusedElement =
                document.activeElement;


            overlay.classList.add(
                "show"
            );


            document.body.style
                .overflow =
                "hidden";


            input.value =
                "";


            selectedIndex =
                0;


            renderResults(
                performSearch(
                    ""
                )
            );


            setTimeout(
                function () {

                    input.focus();

                },
                20
            );

        }


        function closeSearch() {

            overlay.classList.remove(
                "show"
            );


            document.body.style
                .overflow =
                "";


            if (
                previousFocusedElement
                instanceof
                HTMLElement
            ) {

                previousFocusedElement
                    .focus();

            }

        }


        /* -----------------------------------------
           SEARCH INPUT
           ----------------------------------------- */

        input.addEventListener(
            "input",
            function () {

                selectedIndex =
                    0;


                renderResults(
                    performSearch(
                        input.value
                    )
                );

            }
        );


        /* -----------------------------------------
           SEARCH KEYBOARD
           ----------------------------------------- */

        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "ArrowDown"
                ) {

                    event.preventDefault();


                    if (
                        filtered.length
                    ) {

                        selectedIndex =
                            (
                                selectedIndex +
                                1
                            )
                            %
                            filtered.length;


                        refreshSelected();

                    }

                }


                else if (
                    event.key ===
                    "ArrowUp"
                ) {

                    event.preventDefault();


                    if (
                        filtered.length
                    ) {

                        selectedIndex =
                            (
                                selectedIndex -
                                1 +
                                filtered.length
                            )
                            %
                            filtered.length;


                        refreshSelected();

                    }

                }


                else if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();


                    openSelected();

                }


                else if (
                    event.key ===
                    "Escape"
                ) {

                    event.preventDefault();


                    closeSearch();

                }

            }
        );


        /* -----------------------------------------
           CLICK OUTSIDE
           ----------------------------------------- */

        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    overlay
                ) {

                    closeSearch();

                }

            }
        );


        /* -----------------------------------------
           NAV SEARCH BUTTON
           ----------------------------------------- */

        trigger
            ?.addEventListener(
                "click",
                openSearch
            );


        /* -----------------------------------------
           CTRL / CMD + K
           ----------------------------------------- */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    (
                        event.ctrlKey ||
                        event.metaKey
                    )

                    &&

                    event.key
                        .toLowerCase() ===
                        "k"
                ) {

                    event.preventDefault();


                    if (
                        overlay
                            .classList
                            .contains(
                                "show"
                            )
                    ) {

                        closeSearch();

                    }

                    else {

                        openSearch();

                    }

                }


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

                    closeSearch();

                }

            }
        );

    }


    /* =========================================================
       RELATED PROJECTS
       ========================================================= */

    function initRelatedProjects() {

        const modal =
            document.getElementById(
                "projectModal"
            );


        if (
            !modal ||

            typeof PROJECTS ===
                "undefined" ||

            !Array.isArray(
                PROJECTS
            )
        ) {

            return;

        }


        const caseStudy =
            modal.querySelector(
                ".project-case-study"
            );


        if (
            !caseStudy
        ) {

            return;

        }


        let section =
            caseStudy.querySelector(
                ".cx-related-projects"
            );


        if (
            !section
        ) {

            section =
                document.createElement(
                    "section"
                );


            section.className =
                "cx-related-projects";


            caseStudy.appendChild(
                section
            );

        }


        function currentProject() {

            const title =
                document
                    .getElementById(
                        "projectModalLabel"
                    )
                    ?.textContent
                    .trim();


            return PROJECTS.find(
                function (project) {

                    return (
                        project.title ===
                        title
                    );

                }
            );

        }


        function renderRelated(
            project
        ) {

            if (
                !project
            ) {

                section.innerHTML =
                    "";


                return;

            }


            const related =
                PROJECTS

                    .filter(
                        function (candidate) {

                            return (

                                candidate.id !==
                                project.id

                                &&

                                candidate.category ===
                                project.category

                            );

                        }
                    )

                    .sort(
                        function (a, b) {

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
                    )

                    .slice(
                        0,
                        3
                    );


            if (
                !related.length
            ) {

                section.innerHTML =
                    "";


                return;

            }


            section.innerHTML = `

                <div class="cx-related-heading">

                    <h3>
                        RELATED PROJECTS
                    </h3>


                    <span>

                        More
                        ${escapeHtml(
                            project.categoryLabel
                        )}

                    </span>

                </div>


                <div class="cx-related-grid">

                    ${related
                        .map(
                            function (item) {

                                const media =
                                    item.img

                                        ? `

                                            <img
                                                src="${escapeHtml(
                                                    item.img
                                                )}"
                                                alt="${escapeHtml(
                                                    item.title
                                                )} preview"
                                                loading="lazy">

                                        `

                                        : `

                                            <span class="cx-related-placeholder">

                                                <i
                                                    class="bi bi-play-circle"
                                                    aria-hidden="true">
                                                </i>

                                            </span>

                                        `;


                                return `

                                    <button
                                        type="button"
                                        class="cx-related-card"
                                        data-related-project="${escapeHtml(
                                            item.id
                                        )}"
                                        aria-label="Open ${escapeHtml(
                                            item.title
                                        )} project case study">


                                        <div class="cx-related-media">

                                            ${media}

                                        </div>


                                        <div class="cx-related-info">

                                            <div class="cx-related-title">

                                                ${escapeHtml(
                                                    item.title
                                                )}

                                            </div>


                                            <div class="cx-related-meta">

                                                ${escapeHtml(
                                                    item.author
                                                )}

                                                ·

                                                ${escapeHtml(
                                                    item.year
                                                )}

                                            </div>

                                        </div>

                                    </button>

                                `;

                            }
                        )
                        .join(
                            ""
                        )}

                </div>

            `;


            section
                .querySelectorAll(
                    "[data-related-project]"
                )
                .forEach(
                    function (button) {

                        button.addEventListener(
                            "click",
                            function () {

                                const target =
                                    PROJECTS.find(
                                        function (
                                            candidate
                                        ) {

                                            return (
                                                candidate.id ===
                                                button.dataset
                                                    .relatedProject
                                            );

                                        }
                                    );


                                if (
                                    !target ||

                                    typeof openProjectModal !==
                                    "function"
                                ) {

                                    return;

                                }


                                openProjectModal(
                                    target
                                );


                                renderRelated(
                                    target
                                );


                                const url =
                                    new URL(
                                        location.href
                                    );


                                url.searchParams.set(
                                    "project",
                                    target.id
                                );


                                history.replaceState(
                                    {},
                                    "",
                                    url
                                );


                                modal
                                    .querySelector(
                                        ".modal-body"
                                    )
                                    ?.scrollTo({

                                        top:
                                            0,

                                        behavior:
                                            "smooth"

                                    });

                            }
                        );

                    }
                );


            setTimeout(
                scanMedia
            );

        }


        modal.addEventListener(
            "shown.bs.modal",
            function () {

                renderRelated(
                    currentProject()
                );

            }
        );


        if (
            modal.classList.contains(
                "show"
            )
        ) {

            renderRelated(
                currentProject()
            );

        }

    }


    /* =========================================================
       INITIALISE
       ========================================================= */

    ready(
        function () {

            initNavigationAccessibility();

            initContactApiCopy();

            initPageTransitions();

            initSkeletonLoading();

            initGlobalSearch();

            initRelatedProjects();

        }
    );

})();