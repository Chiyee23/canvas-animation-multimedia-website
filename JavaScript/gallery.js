// =========================================================
// CANVAS GALLERY
//
// Features:
// 1. Search
// 2. Category filtering
// 3. Favorites
// 4. LocalStorage
// 5. Favorite counter
// 6. Favorites-only view
// 7. Artwork detail modal
// 8. Motion Graphics preview
// 9. Curated mixed showcase layout
// 10. Dynamic artwork count
// =========================================================


// =========================================================
// LOCAL STORAGE
// =========================================================

const FAV_KEY = "canvas_gallery_favorites";


// =========================================================
// DOM ELEMENTS
// =========================================================

const filterButtons =
    document.querySelectorAll(".filter-chip");

const favoriteButtons =
    document.querySelectorAll(".fav-btn");

const favoriteToggle =
    document.getElementById("favToggle");

const favoriteToggleText =
    document.getElementById("favToggleText");

const favoriteToggleIcon =
    document.getElementById("favToggleIcon");

const clearFavoriteButton =
    document.getElementById("clearFavBtn");

const searchInput =
    document.getElementById("searchInput");

const searchClearButton =
    document.getElementById("searchClearBtn");

const galleryStatus =
    document.getElementById("galleryStatus");

const emptyState =
    document.getElementById("emptyState");

const galleryGrid =
    document.getElementById("galleryGrid");

const galleryCount =
    document.getElementById("galleryCount");


// =========================================================
// MODAL
// =========================================================

const galleryModalElement =
    document.getElementById("galleryModal");

const galleryModal =
    bootstrap.Modal.getOrCreateInstance(
        galleryModalElement
    );

const galleryModalImg =
    document.getElementById("galleryModalImg");

const galleryModalVideo =
    document.getElementById("galleryModalVideo");

const galleryModalSoftware =
    document.getElementById("galleryModalSoftware");

const galleryModalYear =
    document.getElementById("galleryModalYear");


// =========================================================
// CURRENT STATE
// =========================================================

let activeFilter = "all";
let favoritesOnly = false;


// =========================================================
// CURATED SHOWCASE ORDER
//
// Desktop rows:
//
// Neon Courier | Gilded Grid | Nebula Drift
// Moonlit Kimono | Glass Orchard | Golden Corridor
// Blade of Dawn | Fractured Tiles | Chromatic Vortex
// etc.
// =========================================================

const GALLERY_SHOWCASE_ORDER = [

    "g11",
    "g4",
    "g9",

    "g12",
    "g17",
    "g10",

    "g2",
    "g18",
    "g24",

    "g1",
    "g5",
    "g25",

    "g3",
    "g22",
    "g26",

    "g14",
    "g6",
    "g7"

];


// =========================================================
// GET FAVORITES
// =========================================================

function getFavorites() {

    try {

        const saved =
            localStorage.getItem(FAV_KEY);

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    }

    catch (error) {

        console.warn(
            "Unable to read favorites.",
            error
        );

        return [];

    }

}


// =========================================================
// SAVE FAVORITES
// =========================================================

function saveFavorites(favorites) {

    localStorage.setItem(
        FAV_KEY,
        JSON.stringify(favorites)
    );

}


// =========================================================
// ARRANGE SHOWCASE
// =========================================================

function arrangeGalleryShowcase() {

    if (!galleryGrid) {
        return;
    }


    const itemMap =
        new Map();


    document
        .querySelectorAll(".gallery-item")
        .forEach(
            (item) => {

                itemMap.set(
                    item.dataset.id,
                    item
                );

            }
        );


    GALLERY_SHOWCASE_ORDER.forEach(
        (id) => {

            const item =
                itemMap.get(id);

            if (item) {

                galleryGrid.appendChild(
                    item
                );

            }

        }
    );

}


// =========================================================
// PORTFOLIO UI HELPERS
// =========================================================

function announceGallery(message) {
    if (!galleryStatus || !message) return;

    galleryStatus.textContent = message;
    galleryStatus.classList.add("show");

    window.clearTimeout(announceGallery.timeoutId);
    announceGallery.timeoutId = window.setTimeout(() => {
        galleryStatus.classList.remove("show");
    }, 2200);
}

function decorateGalleryCards() {
    document.querySelectorAll(".gallery-item").forEach(item => {
        const card = item.querySelector(".gallery-card");
        if (!card || card.querySelector(".gallery-category-badge")) return;

        const badge = document.createElement("span");
        badge.className = "gallery-category-badge";
        badge.textContent = item.dataset.catLabel || "Artwork";
        card.appendChild(badge);
    });
}

function updateSearchClearButton() {
    if (!searchClearButton || !searchInput) return;
    searchClearButton.classList.toggle("show", searchInput.value.trim().length > 0);
}

// =========================================================
// UPDATE FAVORITE UI
// =========================================================

function updateFavoriteUI() {

    const favorites =
        getFavorites();


    document
        .querySelectorAll(".fav-btn")
        .forEach(
            (button) => {

                const id =
                    button.dataset.id;

                const icon =
                    button.querySelector("i");


                if (favorites.includes(id)) {

                    button.classList.add(
                        "active"
                    );

                    icon.classList.remove(
                        "bi-heart"
                    );

                    icon.classList.add(
                        "bi-heart-fill"
                    );

                    button.setAttribute("aria-pressed", "true");
                    button.setAttribute(
                        "aria-label",
                        `Remove ${button.closest(".gallery-item")?.dataset.title || "artwork"} from favorites`
                    );

                }

                else {

                    button.classList.remove(
                        "active"
                    );

                    icon.classList.remove(
                        "bi-heart-fill"
                    );

                    icon.classList.add(
                        "bi-heart"
                    );

                    button.setAttribute("aria-pressed", "false");
                    button.setAttribute(
                        "aria-label",
                        `Save ${button.closest(".gallery-item")?.dataset.title || "artwork"} to favorites`
                    );

                }

            }
        );


    const favCount =
        document.getElementById("favCount");


    if (favCount) {

        favCount.textContent =
            favorites.length;

    }

}


// =========================================================
// FAVORITE BUTTONS
// =========================================================

favoriteButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                const id =
                    button.dataset.id;


                let favorites =
                    getFavorites();


                const artworkTitle =
                    button.closest(".gallery-item")?.dataset.title ||
                    "Artwork";

                const wasFavorite =
                    favorites.includes(id);

                if (wasFavorite) {
                    favorites = favorites.filter(
                        (favoriteId) => favoriteId !== id
                    );
                }

                else {
                    favorites.push(id);
                }

                saveFavorites(favorites);

                announceGallery(
                    wasFavorite
                        ? `${artworkTitle} removed from favourites.`
                        : `${artworkTitle} saved to favourites.`
                );


                updateFavoriteUI();

                applyFilters();

            }
        );

    }
);


// =========================================================
// CATEGORY FILTER
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
                        item.setAttribute("aria-pressed", "false");

                    }
                );


                button.classList.add(
                    "active"
                );
                button.setAttribute("aria-pressed", "true");


                activeFilter =
                    button.dataset.filter;


                applyFilters();

            }
        );

    }
);


// =========================================================
// FAVORITES VIEW
// =========================================================

if (favoriteToggle) {

    favoriteToggle.addEventListener(
        "click",
        () => {

            favoritesOnly =
                !favoritesOnly;


            favoriteToggle.classList.toggle(
                "active",
                favoritesOnly
            );
            favoriteToggle.setAttribute("aria-pressed", String(favoritesOnly));


            if (favoriteToggleText) {

                favoriteToggleText.textContent =
                    favoritesOnly
                        ? "Show All"
                        : "View Favorites";

            }


            if (favoriteToggleIcon) {

                favoriteToggleIcon.className =
                    favoritesOnly
                        ? "bi bi-grid me-1"
                        : "bi bi-heart-fill me-1";

            }


            applyFilters();

        }
    );

}


// =========================================================
// CLEAR FAVORITES
// =========================================================

if (clearFavoriteButton) {

    clearFavoriteButton.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                FAV_KEY
            );


            favoritesOnly =
                false;


            favoriteToggle?.classList.remove(
                "active"
            );


            if (favoriteToggleText) {

                favoriteToggleText.textContent =
                    "View Favorites";

            }


            if (favoriteToggleIcon) {

                favoriteToggleIcon.className =
                    "bi bi-heart-fill me-1";

            }


            updateFavoriteUI();

            applyFilters();

            announceGallery("All favourites cleared.");

        }
    );

}


// =========================================================
// SEARCH
// =========================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {
            updateSearchClearButton();
            applyFilters();
        }
    );

}

if (searchClearButton && searchInput) {
    searchClearButton.addEventListener("click", () => {
        searchInput.value = "";
        updateSearchClearButton();
        applyFilters();
        searchInput.focus();
        announceGallery("Search cleared.");
    });
}


// =========================================================
// UPDATE ARTWORK COUNT
// =========================================================

function updateGalleryCount(
    visibleCount
) {

    if (!galleryCount) {
        return;
    }


    if (favoritesOnly) {

        galleryCount.textContent =
            visibleCount === 1
                ? "1 Favorite Artwork"
                : `${visibleCount} Favorite Artworks`;

        return;

    }


    if (activeFilter === "2d") {

        galleryCount.textContent =
            `${visibleCount} 2D Artworks`;

    }

    else if (
        activeFilter === "3d"
    ) {

        galleryCount.textContent =
            `${visibleCount} 3D Artworks`;

    }

    else if (
        activeFilter === "motion"
    ) {

        galleryCount.textContent =
            `${visibleCount} Motion Graphics Artworks`;

    }

    else {

        galleryCount.textContent =
            visibleCount === 1
                ? "1 Artwork"
                : `${visibleCount} Artworks`;

    }

}


// =========================================================
// APPLY SEARCH + FILTER + FAVORITES
// =========================================================

function applyFilters() {

    const searchTerm =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const favorites =
        getFavorites();


    let visibleCount = 0;


    document
        .querySelectorAll(".gallery-item")
        .forEach(
            (item) => {

                const category =
                    item.dataset.category;

                const id =
                    item.dataset.id;

                const title =
                    (
                        item.dataset.title ||
                        ""
                    ).toLowerCase();

                const student =
                    (
                        item.dataset.student ||
                        ""
                    ).toLowerCase();

                const categoryLabel =
                    (
                        item.dataset.catLabel ||
                        ""
                    ).toLowerCase();


                const matchesCategory =
                    activeFilter === "all" ||
                    category === activeFilter;


                const matchesFavorites =
                    !favoritesOnly ||
                    favorites.includes(id);


                const matchesSearch =
                    !searchTerm ||
                    title.includes(searchTerm) ||
                    student.includes(searchTerm) ||
                    categoryLabel.includes(searchTerm);


                const shouldShow =
                    matchesCategory &&
                    matchesFavorites &&
                    matchesSearch;


                item.style.display =
                    shouldShow
                        ? ""
                        : "none";


                if (shouldShow) {

                    visibleCount++;

                }


                const previewVideo =
                    item.querySelector(
                        ".gallery-preview-video"
                    );


                if (previewVideo) {

                    if (shouldShow) {

                        previewVideo
                            .play()
                            .catch(
                                () => {
                                    // Browser may block autoplay.
                                }
                            );

                    }

                    else {

                        previewVideo.pause();

                    }

                }

            }
        );


    if (emptyState) {

        emptyState.style.display =
            visibleCount === 0
                ? "block"
                : "none";

    }


    updateGalleryCount(
        visibleCount
    );

}


// =========================================================
// VIEW DETAILS
// =========================================================

document
    .querySelectorAll(
        ".view-details-btn"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const item =
                        button.closest(
                            ".gallery-item"
                        );


                    if (!item) {
                        return;
                    }


                    openGalleryModal(
                        item
                    );

                }
            );

        }
    );


// =========================================================
// OPEN GALLERY MODAL
// =========================================================

function openGalleryModal(item) {

    const title =
        item.dataset.title;

    const student =
        item.dataset.student;

    const category =
        item.dataset.catLabel;

    const description =
        item.dataset.desc;

    const software =
        item.dataset.software;

    const year =
        item.dataset.year;

    const image =
        item.dataset.img;

    const video =
        item.dataset.video;


    document.getElementById(
        "galleryModalLabel"
    ).textContent =
        title;


    document.getElementById(
        "galleryModalMeta"
    ).textContent =
        `by ${student} · ${category}`;


    document.getElementById(
        "galleryModalDesc"
    ).textContent =
        description;

    if (galleryModalSoftware) {
        galleryModalSoftware.textContent = software;
    }

    if (galleryModalYear) {
        galleryModalYear.textContent = year;
    }


    // =====================================================
    // VIDEO
    // =====================================================

    if (video) {

        galleryModalImg.style.display =
            "none";


        galleryModalImg.removeAttribute(
            "src"
        );


        galleryModalVideo.style.display =
            "block";


        galleryModalVideo.muted =
            true;


        galleryModalVideo.loop =
            true;


        galleryModalVideo.playsInline =
            true;


        if (image) {

            galleryModalVideo.poster =
                image;

        }

        else {

            galleryModalVideo.removeAttribute(
                "poster"
            );

        }


        galleryModalVideo.src =
            video;


        galleryModalVideo.load();

    }


    // =====================================================
    // IMAGE
    // =====================================================

    else {

        galleryModalVideo.pause();


        galleryModalVideo.removeAttribute(
            "src"
        );


        galleryModalVideo.load();


        galleryModalVideo.style.display =
            "none";


        galleryModalImg.style.display =
            "block";


        galleryModalImg.src =
            image;


        galleryModalImg.alt =
            title;

    }


    galleryModal.show();

}


// =========================================================
// MODAL VIDEO AUTOPLAY
// =========================================================

galleryModalElement.addEventListener(
    "shown.bs.modal",
    () => {

        if (
            galleryModalVideo.style.display !== "none" &&
            galleryModalVideo.getAttribute("src")
        ) {

            galleryModalVideo.muted =
                true;


            galleryModalVideo
                .play()
                .catch(
                    () => {
                        // Controls remain available.
                    }
                );

        }

    }
);


// =========================================================
// STOP VIDEO WHEN MODAL CLOSES
// =========================================================

galleryModalElement.addEventListener(
    "hidden.bs.modal",
    () => {

        galleryModalVideo.pause();


        try {

            galleryModalVideo.currentTime =
                0;

        }

        catch (error) {

            // Ignore before metadata loads.

        }


        galleryModalVideo.removeAttribute(
            "src"
        );


        galleryModalVideo.load();

    }
);


// =========================================================
// INITIALISE
// =========================================================

arrangeGalleryShowcase();

decorateGalleryCards();

filterButtons.forEach((button, index) => {
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
});

if (favoriteToggle) {
    favoriteToggle.setAttribute("aria-pressed", "false");
}

updateSearchClearButton();

updateFavoriteUI();

applyFilters();

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