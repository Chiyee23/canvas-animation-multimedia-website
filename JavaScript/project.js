// =========================================================
// CANVAS STUDENT PROJECTS
//
// Gallery:
// artwork browsing + favourites
//
// Projects:
// complete project portfolio + viewed history
// =========================================================


// =========================================================
// LOCAL STORAGE
// =========================================================

const RECENT_KEY =
    "canvas_project_recent";

const MAX_RECENT =
    5;


// =========================================================
// PROJECT DATA
// =========================================================

const PROJECTS = [

    // =====================================================
    // 2D PROJECTS
    // =====================================================

    {
        id: "p1",
        title: "Autumn Watch",
        author: "Tan Wei",
        category: "2d",
        categoryLabel: "2D Illustration",

        projectType:
            "Character Illustration Project",

        software:
            "Procreate",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A storybook-style character illustration project exploring warm autumn colours, soft shading and visual storytelling through a single scene.",

        outcome:
            "A completed illustrated scene that combines character design, environmental mood and a consistent autumn-inspired colour palette.",

        img:
            "../images/gallery/g1-owl.png"
    },


    {
        id: "p2",
        title: "Blade of Dawn",
        author: "Lim Jia",
        category: "2d",
        categoryLabel: "2D Illustration",

        projectType:
            "Character Concept Project",

        software:
            "Clip Studio Paint",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A character concept project focused on armour design, dramatic lighting and a glowing energy weapon as the main visual focal point.",

        outcome:
            "A polished fantasy character concept with a clear silhouette, lighting direction and strong blue visual identity.",

        img:
            "../images/gallery/g2-warrior-blue.png"
    },


    {
        id: "p3",
        title: "Verdant Reaper",
        author: "Aisha N.",
        category: "2d",
        categoryLabel: "2D Illustration",

        projectType:
            "Fantasy Character Concept",

        software:
            "Clip Studio Paint",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "A fantasy character design project experimenting with toxic-green lighting, silhouette design and atmospheric contrast.",

        outcome:
            "A final character concept that communicates a mysterious fantasy identity through lighting, colour and costume design.",

        img:
            "../images/gallery/g3-warrior-green.png"
    },


    {
        id: "p4",
        title: "Neon Courier",
        author: "Chen Yi Xuan",
        category: "2d",
        categoryLabel: "Digital Illustration",

        projectType:
            "Cyber Character Design Project",

        software:
            "Adobe Photoshop",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A futuristic character design project combining cyber-inspired styling, saturated neon colours and dramatic rim lighting.",

        outcome:
            "A finished digital character artwork with a strong futuristic identity and clear neon visual language.",

        img:
            "../images/gallery/g11-neon-courier.jpg"
    },


    {
        id: "p5",
        title: "Moonlit Kimono",
        author: "Nur Ain",
        category: "2d",
        categoryLabel: "Digital Illustration",

        projectType:
            "Character Illustration Project",

        software:
            "Procreate",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A character illustration project inspired by traditional clothing, moonlit ambience and soft cinematic colour treatment.",

        outcome:
            "A completed character illustration that balances costume detail, lighting and atmosphere within a single composition.",

        img:
            "../images/gallery/g12-moonlit-kimono.jpg"
    },


    {
        id: "p6",
        title: "Ancient Roots",
        author: "David Heng",
        category: "2d",
        categoryLabel: "Concept Art",

        projectType:
            "Environment Concept Project",

        software:
            "Adobe Photoshop",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "An environment concept project exploring ancient structures, organic forms and fantasy world-building through digital painting.",

        outcome:
            "A final environment concept that establishes mood, setting and visual storytelling for a fantasy world.",

        img:
            "../images/gallery/g13-ancient-roots.jpg"
    },


    {
        id: "p7",
        title: "Late Night Deadline",
        author: "Farah Iman",
        category: "2d",
        categoryLabel: "Digital Illustration",

        projectType:
            "Narrative Illustration Project",

        software:
            "Adobe Photoshop",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "A narrative illustration project based on the atmosphere of a late-night creative workspace and student production life.",

        outcome:
            "A finished scene that communicates story and mood through lighting, composition and environmental details.",

        img:
            "../images/gallery/g14-late-night-deadline.jpg"
    },


    {
        id: "p8",
        title: "Coral Companion",
        author: "Nur Ain",
        category: "2d",
        categoryLabel: "Digital Art",

        projectType:
            "Digital Illustration Project",

        software:
            "Adobe Photoshop",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "A colourful illustration project inspired by underwater shapes, organic forms and vibrant environmental colour combinations.",

        outcome:
            "A polished digital artwork with a cohesive underwater visual theme and strong colour harmony.",

        img:
            "../images/gallery/g15-coral-companion.jpg"
    },


    {
        id: "p9",
        title: "Street Cart Rush",
        author: "Marcus Ooi",
        category: "2d",
        categoryLabel: "Digital Art",

        projectType:
            "Urban Visual Storytelling Project",

        software:
            "Adobe Photoshop",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "An urban visual storytelling project combining street imagery, energetic composition and a sense of movement.",

        outcome:
            "A completed illustration that captures a fast-paced street atmosphere through composition and visual rhythm.",

        img:
            "../images/gallery/g16-street-cart-rush.jpg"
    },


    // =====================================================
    // 3D PROJECTS
    // =====================================================

    {
        id: "p10",
        title: "Gilded Grid",
        author: "Marcus Ooi",
        category: "3d",
        categoryLabel: "3D Render",

        projectType:
            "Procedural 3D Study",

        software:
            "Blender",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A 3D study focused on geometric repetition, metallic materials and the use of a single gold element as a focal point.",

        outcome:
            "A final hard-surface render demonstrating material contrast, repetition and controlled lighting.",

        img:
            "../images/gallery/g4-cubes-gold.jpg"
    },


    {
        id: "p11",
        title: "Wooden Horizon",
        author: "Chen Yi Xuan",
        category: "3d",
        categoryLabel: "3D Render",

        projectType:
            "3D Environment Study",

        software:
            "Cinema 4D",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "A tunnel-style 3D environment project created from repeating wooden forms and a central directional light source.",

        outcome:
            "A completed environment render that demonstrates perspective, repetition, material treatment and depth.",

        img:
            "../images/gallery/g5-cubes-wood.jpg"
    },


    {
        id: "p13",
        title: "Glass Orchard",
        author: "Jason Lee",
        category: "3d",
        categoryLabel: "3D / Digital Art",

        projectType:
            "Material & Lighting Study",

        software:
            "Blender + Photoshop",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "An experimental 3D project exploring transparent materials, reflections, layered depth and post-production enhancement.",

        outcome:
            "A final composition that demonstrates reflective material behaviour and controlled visual depth.",

        img:
            "../images/gallery/g17-glass-orchard.jpg"
    },


    {
        id: "p14",
        title: "Fractured Tiles",
        author: "Lim Jia",
        category: "3d",
        categoryLabel: "3D Design",

        projectType:
            "Geometric Design Experiment",

        software:
            "Blender",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "A geometry-focused project studying fragmented surfaces, repeating forms and depth through a modular composition.",

        outcome:
            "A final abstract render that demonstrates spatial organisation, repetition and shadow control.",

        img:
            "../images/gallery/g18-fractured-tiles.jpg"
    },


    {
        id: "p15",
        title: "Pink Vortex",
        author: "Aina Rahman",
        category: "3d",
        categoryLabel: "Abstract 3D",

        projectType:
            "Abstract 3D Composition",

        software:
            "Cinema 4D",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "An abstract 3D project exploring flowing forms, vivid pink tones and the illusion of rotational movement.",

        outcome:
            "A completed abstract composition with a strong colour identity and dynamic visual flow.",

        img:
            "../images/gallery/g19-pink-vortex.jpg"
    },


    {
        id: "p16",
        title: "Copper Corridor",
        author: "David Heng",
        category: "3d",
        categoryLabel: "3D Render",

        projectType:
            "Architectural Visualisation",

        software:
            "Blender",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A cinematic architectural visualisation project experimenting with corridor perspective, copper surfaces and directional lighting.",

        outcome:
            "A final architectural render with clear depth, material consistency and a cinematic lighting style.",

        img:
            "../images/gallery/g20-copper-corridor.jpg"
    },


    {
        id: "p17",
        title: "Brick Depth",
        author: "Marcus Ooi",
        category: "3d",
        categoryLabel: "3D Design",

        projectType:
            "Spatial Geometry Study",

        software:
            "Blender",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "A spatial design project using repeated structural forms, layered perspective and shadow to create depth.",

        outcome:
            "A finished geometry study demonstrating repetition, perspective and visual hierarchy in 3D space.",

        img:
            "../images/gallery/g21-brick-depth.jpg"
    },


    {
        id: "p18",
        title: "Prism Drop",
        author: "Aisha N.",
        category: "3d",
        categoryLabel: "3D / Digital Art",

        projectType:
            "Reflective Material Study",

        software:
            "Blender",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "An abstract 3D project studying reflective surfaces, refraction-inspired colour and a balanced central composition.",

        outcome:
            "A final material study that combines reflection, colour and geometric balance in a polished render.",

        img:
            "../images/gallery/g22-prism-drop.jpg"
    },


    {
        id: "p19",
        title: "Crimson Folds",
        author: "Farah Iman",
        category: "3d",
        categoryLabel: "Abstract 3D",

        projectType:
            "Digital Sculpture Study",

        software:
            "Cinema 4D",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A digital sculpture project exploring folded surfaces, strong red tones and dramatic directional lighting.",

        outcome:
            "A final sculptural render that highlights form, surface detail and a focused crimson colour palette.",

        img:
            "../images/gallery/g23-crimson-folds.jpg"
    },


    // =====================================================
    // MOTION PROJECTS
    // =====================================================

    {
        id: "p20",
        title: "Forest Ambience",
        author: "Wong Kar Ling",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Environmental Loop Project",

        software:
            "Adobe After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A looping environmental animation project focused on gentle natural movement and a calm atmospheric mood.",

        outcome:
            "A seamless ambient loop suitable for multimedia backgrounds and environmental presentation.",

        img:
            "../images/gallery/g7-forest-poster.jpg",

        video:
            "../videos/motion-forest.mp4"
    },


    {
        id: "p21",
        title: "Backyard Loop",
        author: "Farah Iman",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Environmental Motion Study",

        software:
            "Adobe After Effects",

        year:
            "2024",

        team:
            "Solo Project",

        overview:
            "An outdoor motion study exploring natural lighting, environmental movement and smooth looping animation.",

        outcome:
            "A short seamless loop that demonstrates timing, environmental motion and visual continuity.",

        img:
            "../images/gallery/g8-backyard-poster.jpg",

        video:
            "../videos/motion-backyard.mp4"
    },


    {
        id: "p22",
        title: "Nebula Drift",
        author: "Adam Leong",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Particle Animation Project",

        software:
            "Adobe After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A particle-based motion graphics project exploring colour transitions, layered movement and an atmospheric nebula effect.",

        outcome:
            "A completed looping animation with continuous particle flow and a vibrant space-inspired visual identity.",

        img:
            "../images/gallery/g9-nebula-poster.jpg",

        video:
            "../videos/motion-nebula.mp4"
    },


    {
        id: "p23",
        title: "Golden Corridor",
        author: "Marcus Ooi",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Motion Tunnel Project",

        software:
            "Adobe After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A futuristic tunnel animation project combining glowing gold light strips, reflective surfaces and continuous camera movement.",

        outcome:
            "A polished motion sequence that creates a strong sense of speed, depth and cinematic movement.",

        img:
            "../images/gallery/g10-tunnel-poster.jpg",

        video:
            "../videos/motion-tunnel.mp4"
    },


    {
        id: "p24",
        title: "Chromatic Vortex",
        author: "Aina Rahman",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Abstract Motion Project",

        software:
            "Adobe After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "An abstract motion experiment combining rotational movement, bright colour transitions and layered distortion effects.",

        outcome:
            "A seamless abstract animation with strong rhythm, colour contrast and continuous rotational motion.",

        img:
            "../images/gallery/g24-vortex-poster.jpg",

        video:
            "../videos/motion-vortex.mp4"
    },


    {
        id: "p25",
        title: "Violet Current",
        author: "Jason Lee",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Fluid Motion Study",

        software:
            "Adobe After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A fluid motion project exploring purple abstract forms, light trails and rhythmic movement within a looping composition.",

        outcome:
            "A finished motion loop with a consistent violet palette and smooth visual rhythm.",

        img:
            "../images/gallery/g25-violet-poster.jpg",

        video:
            "../videos/motion-violet.mp4"
    },


    {
        id: "p26",
        title: "Neon Pulse",
        author: "Farah Iman",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Light Trail Animation",

        software:
            "Adobe After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A neon motion graphics project based on flowing luminous lines, contrast and repeated light movement against a dark environment.",

        outcome:
            "A completed looping animation that demonstrates glow effects, timing and continuous light movement.",

        img:
            "../images/gallery/g26-neonlines-poster.jpg",

        video:
            "../videos/motion-neonlines.mp4"
    },


    {
        id: "p27",
        title: "Cube Rush",
        author: "Lim Jia",
        category: "motion",
        categoryLabel: "Motion Graphics",

        projectType:
            "Geometric Motion Project",

        software:
            "Cinema 4D + After Effects",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A fast-paced motion project combining animated geometric forms, perspective changes and colourful transitions.",

        outcome:
            "A final motion sequence demonstrating geometric animation, pacing and dynamic camera movement.",

        img:
            "../images/gallery/g27-cuberush-poster.jpg",

        video:
            "../videos/motion-cuberush.mp4"
    },


    {
        id: "p28",
        title: "Golden Hour Walk",
        author: "Wong Kar Ling",
        category: "motion",
        categoryLabel: "Video Editing",

        projectType:
            "Video Editing Project",

        software:
            "Adobe Premiere Pro",

        year:
            "2025",

        team:
            "Solo Project",

        overview:
            "A cinematic editing project focused on pacing, colour grading and the use of sunset imagery to create atmosphere.",

        outcome:
            "A completed short-form edit with consistent pacing, colour treatment and a clear cinematic mood.",

        img:
            null,

        video:
            "../videos/edit-sunset-walk.mp4"
    }

];


// =========================================================
// CURATED PROJECT ORDER
// =========================================================

const PROJECT_SHOWCASE_ORDER = [

    "p5",
    "p13",
    "p23",

    "p4",
    "p10",
    "p22",

    "p2",
    "p14",
    "p24",

    "p1",
    "p15",
    "p25",

    "p3",
    "p18",
    "p26",

    "p6",
    "p16",
    "p20",

    "p7",
    "p17",
    "p27",

    "p8",
    "p19",
    "p21",

    "p9",
    "p11",
    "p28"

];


// =========================================================
// DOM ELEMENTS
// =========================================================

const projectGrid =
    document.getElementById(
        "projectGrid"
    );

const filterButtons =
    document.querySelectorAll(
        ".project-filter-chip"
    );

const projectEmpty =
    document.getElementById(
        "projectEmpty"
    );

const projectCount =
    document.getElementById(
        "projectCount"
    );

const projectModalElement =
    document.getElementById(
        "projectModal"
    );

const projectModal =
    bootstrap.Modal.getOrCreateInstance(
        projectModalElement
    );

const modalImg =
    document.getElementById(
        "modalImg"
    );

const modalVideo =
    document.getElementById(
        "modalVideo"
    );


let activeCategory =
    "all";


// =========================================================
// GET RECENTLY VIEWED PROJECTS
// =========================================================

function getRecentIds() {

    try {

        const stored =
            localStorage.getItem(
                RECENT_KEY
            );


        if (!stored) {
            return [];
        }


        const parsed =
            JSON.parse(
                stored
            );


        if (!Array.isArray(parsed)) {
            return [];
        }


        return parsed
            .map(
                (item) => {

                    if (
                        typeof item ===
                        "string"
                    ) {

                        return item;

                    }


                    if (
                        typeof item ===
                        "object" &&
                        item !== null &&
                        item.id
                    ) {

                        return item.id;

                    }


                    return null;

                }
            )
            .filter(Boolean);

    }


    catch (error) {

        console.warn(
            "Unable to read recently viewed projects.",
            error
        );

        return [];

    }

}


// =========================================================
// SAVE RECENT PROJECT IDS
// =========================================================

function saveRecentIds(ids) {

    localStorage.setItem(
        RECENT_KEY,
        JSON.stringify(ids)
    );

}


// =========================================================
// ADD PROJECT TO VIEWING HISTORY
// =========================================================

function addToRecent(projectId) {

    let recent =
        getRecentIds();


    // Remove duplicate
    recent =
        recent.filter(
            (id) =>
                id !== projectId
        );


    // Put latest project first
    recent.unshift(
        projectId
    );


    // Only keep latest 5
    recent =
        recent.slice(
            0,
            MAX_RECENT
        );


    saveRecentIds(
        recent
    );


    updateViewedBadges();

}


// =========================================================
// CREATE PROJECT CARD
// =========================================================

function createProjectCard(project) {

    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "col-md-6 col-lg-4 project-item";


    wrapper.dataset.category =
        project.category;


    let thumbnailHTML;


    // =====================================================
    // STATIC IMAGE / VIDEO POSTER
    // =====================================================

    if (project.img) {

        thumbnailHTML = `

            <div class="project-thumb">

                <img
                    class="project-thumb-image"
                    src="${project.img}"
                    alt="${project.title} project preview"
                    loading="lazy"
                    decoding="async">


                <span
                    class="project-category-badge">

                    ${project.categoryLabel}

                </span>


                <span
                    class="viewed-badge"
                    data-viewed-id="${project.id}"
                    style="display:none;">

                    VIEWED

                    <i class="bi bi-eye"></i>

                </span>


                <i
                    class="bi ${
                        project.video
                            ? "bi-play-circle-fill"
                            : "bi-eye-fill"
                    } play-icon"
                    aria-hidden="true">
                </i>

            </div>

        `;

    }


    // =====================================================
    // VIDEO WITHOUT POSTER
    // =====================================================

    else {

        thumbnailHTML = `

            <div class="project-thumb">

                <span
                    class="project-category-badge">

                    ${project.categoryLabel}

                </span>


                <video
                    class="project-thumb-video"
                    muted
                    playsinline
                    preload="metadata"
                    src="${project.video}#t=0.1">
                </video>


                <span
                    class="viewed-badge"
                    data-viewed-id="${project.id}"
                    style="display:none;">

                    VIEWED

                    <i class="bi bi-eye"></i>

                </span>


                <i
                    class="bi bi-play-circle-fill play-icon"
                    aria-hidden="true">
                </i>

            </div>

        `;

    }


    // =====================================================
    // CARD CONTENT
    // =====================================================

    wrapper.innerHTML = `

        <div
            class="project-card"
            data-project-id="${project.id}"
            role="button"
            tabindex="0"
            aria-label="View project ${project.title}">

            ${thumbnailHTML}

            <div class="project-info">

                <div class="project-card-kicker">
                    CASE STUDY
                </div>


                <div class="project-title">
                    ${project.title}
                </div>


                <div class="project-type">
                    ${project.projectType}
                </div>


                <div class="project-meta">

                    <span>
                        ${project.author}
                    </span>

                    <span>
                        ${project.year}
                    </span>

                </div>


                <div class="project-card-footer">

                    <span>
                        ${project.categoryLabel}
                    </span>

                    <span class="project-card-cta">

                        View case study

                        <i
                            class="bi bi-arrow-up-right"
                            aria-hidden="true">
                        </i>

                    </span>

                </div>

            </div>

        </div>

    `;


    const card =
        wrapper.querySelector(
            ".project-card"
        );


    // Open with mouse
    card.addEventListener(
        "click",
        () => {

            openProjectModal(
                project
            );

        }
    );


    // Keyboard accessibility
    card.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openProjectModal(
                    project
                );

            }

        }
    );


    return wrapper;

}


// =========================================================
// GET CURATED PROJECT ORDER
// =========================================================

function getShowcaseOrder() {

    const projectMap =
        new Map(
            PROJECTS.map(
                (project) => [
                    project.id,
                    project
                ]
            )
        );


    return PROJECT_SHOWCASE_ORDER
        .map(
            (id) =>
                projectMap.get(id)
        )
        .filter(Boolean);

}


// =========================================================
// RENDER PROJECTS
// =========================================================

function renderProjects() {

    projectGrid.innerHTML =
        "";


    const showcaseProjects =
        getShowcaseOrder();


    showcaseProjects.forEach(
        (project) => {

            projectGrid.appendChild(
                createProjectCard(
                    project
                )
            );

        }
    );


    updateViewedBadges();

    applyProjectFilter();

}


// =========================================================
// FILTER BUTTONS
// =========================================================

filterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                        item.setAttribute(
                            "aria-pressed",
                            "false"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                button.setAttribute(
                    "aria-pressed",
                    "true"
                );


                activeCategory =
                    button.dataset.filter;


                applyProjectFilter();

            }
        );

    }
);


// =========================================================
// APPLY FILTER
// =========================================================

function applyProjectFilter() {

    const items =
        document.querySelectorAll(
            ".project-item"
        );


    let visibleCount =
        0;


    items.forEach(
        (item) => {

            const matches =
                activeCategory === "all" ||
                item.dataset.category ===
                    activeCategory;


            item.style.display =
                matches
                    ? ""
                    : "none";


            if (matches) {
                visibleCount++;
            }

        }
    );


    // Empty state
    if (projectEmpty) {

        projectEmpty.style.display =
            visibleCount === 0
                ? "block"
                : "none";

    }


    // Project count
    if (projectCount) {

        const labels = {

            "2d":
                "2D Projects",

            "3d":
                "3D Projects",

            "motion":
                "Motion Graphics Projects"

        };


        if (
            activeCategory ===
            "all"
        ) {

            projectCount.textContent =
                `${visibleCount} Student Projects`;

        }


        else {

            projectCount.textContent =
                `${visibleCount} ${labels[activeCategory]}`;

        }

    }

}


// =========================================================
// UPDATE VIEWED BADGES
// =========================================================

function updateViewedBadges() {

    const recent =
        getRecentIds();


    document
        .querySelectorAll(
            ".viewed-badge"
        )
        .forEach(
            (badge) => {

                const projectId =
                    badge.dataset.viewedId;


                badge.style.display =
                    recent.includes(
                        projectId
                    )
                        ? "inline-flex"
                        : "none";

            }
        );

}


// =========================================================
// OPEN PROJECT MODAL
// =========================================================

function openProjectModal(project) {

    // Title
    document.getElementById(
        "projectModalLabel"
    ).textContent =
        project.title;


    // Creator
    document.getElementById(
        "modalMeta"
    ).textContent =
        `by ${project.author} · ${project.categoryLabel}`;


    // Overview
    document.getElementById(
        "modalOverview"
    ).textContent =
        project.overview;


    // Tools
    document.getElementById(
        "modalTools"
    ).textContent =
        project.software;


    // Year
    document.getElementById(
        "modalYear"
    ).textContent =
        project.year;


    // Project Type
    document.getElementById(
        "modalType"
    ).textContent =
        project.projectType;


    // Team
    document.getElementById(
        "modalTeam"
    ).textContent =
        project.team;


    // Outcome
    document.getElementById(
        "modalOutcome"
    ).textContent =
        project.outcome;


    // =====================================================
    // VIDEO PROJECT
    // =====================================================

    if (project.video) {

        modalImg.style.display =
            "none";


        modalImg.removeAttribute(
            "src"
        );


        modalVideo.style.display =
            "block";


        modalVideo.muted =
            true;


        modalVideo.loop =
            true;


        modalVideo.playsInline =
            true;


        if (project.img) {

            modalVideo.poster =
                project.img;

        }


        else {

            modalVideo.removeAttribute(
                "poster"
            );

        }


        modalVideo.src =
            project.video;


        modalVideo.load();

    }


    // =====================================================
    // IMAGE PROJECT
    // =====================================================

    else {

        modalVideo.pause();


        modalVideo.removeAttribute(
            "src"
        );


        modalVideo.load();


        modalVideo.style.display =
            "none";


        modalImg.style.display =
            "block";


        modalImg.src =
            project.img;


        modalImg.alt =
            project.title;

    }


    // Save as recently viewed
    addToRecent(
        project.id
    );


    // Open modal
    projectModal.show();

}


// =========================================================
// VIDEO AUTOPLAY WHEN MODAL OPENS
// =========================================================

projectModalElement.addEventListener(
    "shown.bs.modal",
    () => {

        if (
            modalVideo.style.display !==
                "none" &&
            modalVideo.getAttribute(
                "src"
            )
        ) {

            modalVideo.muted =
                true;


            modalVideo
                .play()
                .catch(
                    () => {
                        // User can still press play manually.
                    }
                );

        }

    }
);


// =========================================================
// STOP VIDEO WHEN MODAL CLOSES
// =========================================================

projectModalElement.addEventListener(
    "hidden.bs.modal",
    () => {

        modalVideo.pause();


        try {

            modalVideo.currentTime =
                0;

        }


        catch (error) {

            // Ignore before metadata loads.

        }


        modalVideo.removeAttribute(
            "src"
        );


        modalVideo.load();

    }
);


// =========================================================
// INITIAL ARIA STATE
// =========================================================

filterButtons.forEach(
    (button, index) => {

        button.setAttribute(
            "aria-pressed",
            index === 0
                ? "true"
                : "false"
        );

    }
);


// =========================================================
// INITIALISE
// =========================================================

renderProjects();

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