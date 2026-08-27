# CANVAS — Animation & Multimedia Club Website

CANVAS is a responsive front-end website concept for a university **Animation & Multimedia Club**. The portfolio version combines club information, events, workshops, artwork discovery, project case studies, multimedia, browser storage, forms, a live REST API and interactive UI enhancements in one consistent visual experience.

> **Portfolio note:** this project began as a group coursework project. My primary contribution is the **Gallery** and **Projects** experience, including the Local Storage features described below. The repository is presented as a portfolio version of the completed website rather than as a claim of sole authorship for every page.

## My Primary Contribution

### Gallery — Artwork Discovery

- 18 individual artworks across 2D, 3D and Motion Graphics
- Search by artwork title, creator or category
- Category filtering with dynamic result counts
- Favourite / unfavourite interaction
- Persistent favourites using `localStorage`
- Favourites-only view and clear-favourites control
- Image and motion-video previews
- Structured artwork detail modal
- Previous / next artwork navigation inside the modal
- Left / right keyboard navigation
- Search and filter state preserved during the browsing session
- Responsive desktop, tablet and mobile layouts
- Accessible button states and live interaction feedback

**Local Storage key:** `canvas_gallery_favorites`

### Projects — Project Case Studies

- 27 project case studies across 2D, 3D and Motion Graphics
- Data-driven project cards rendered from JavaScript
- Category filtering with dynamic project counts
- Project search by title, creator, tools or project type
- Sort options for Featured, Newest, Oldest and A–Z
- Featured case-study section
- Image and video project support
- `VIEWED` status for recently opened projects
- Latest five viewed projects persisted with `localStorage`
- Detailed case-study modal with overview, tools, year, project type, team and outcome
- Related-project recommendations inside the case-study modal
- Shareable project deep links using `?project=<id>`
- Copy Project Link interaction
- Responsive and keyboard-accessible project cards

**Local Storage key:** `canvas_project_recent`

## Gallery vs Projects

The two showcase pages intentionally serve different purposes:

| Gallery | Projects |
| --- | --- |
| Individual artwork collection | Complete project case studies |
| Search + category filters | Search + category filters + sorting |
| Favourite artworks | Recently viewed projects |
| Quick artwork details | Overview, tools, type, team and outcome |
| Previous / next artwork browsing | Related project recommendations |
| Visual discovery | Portfolio-style project exploration |

## Portfolio Enhancements

The portfolio version extends the original coursework with additional interaction and usability improvements:

- Unified dark studio background across the website
- Optional soft-lavender light mode
- Theme preference persisted with Local Storage
- Animated aurora background lighting
- Canvas-based ambient particles
- Subtle pointer-responsive parallax
- Reduced-motion accessibility support
- Home-page Nebula Drift autoplay showreel
- Smart video behaviour that pauses outside the viewport and respects manual pause
- Featured Creative Work section on the Home page
- Global **Ctrl / Cmd + K** search across:
  - 8 website pages
  - 18 Gallery artworks
  - 27 Project case studies
- Smooth page transitions
- Skeleton / shimmer loading feedback for images and videos
- Lazy-loaded non-critical images
- Back-to-top control
- Improved focus states and ARIA attributes
- Automatic `aria-current="page"` navigation state
- Custom `404.html` page

## Other Website Features

### Home

- Club introduction and call-to-action hero section
- Autoplay multimedia showreel
- Creative-area cards
- Animated statistics
- Featured workshops
- Testimonials carousel
- Newsletter reminder interaction
- Cookies and browser-storage demonstrations

### About

- Mission and vision content
- Club history and development timeline
- Team information
- Responsive content layout

### Events & Workshops

- Upcoming event and workshop cards
- Registration forms
- Session Storage registration data
- Registration confirmation summaries
- **Add to Calendar** `.ics` generation
- Responsive event and workshop layouts

### Join

- Multi-step membership form
- Personal-information fields
- Creative-interest selection
- Character-count feedback
- Review Before Submit dialog
- Local browser persistence for the portfolio demonstration

### Contact

- Contact information and enquiry form
- Social-media links
- Character-count feedback
- Live REST API integration using the Fetch API
- Loading, success and error states
- Retry API Request interaction
- Live creative-space / studio environment conditions

## Storage Technologies

The website demonstrates the main browser-storage approaches required by the coursework:

- **Cookies** — remember the cookie-notice preference
- **Session Storage** — keep registration information for the current browser session
- **Local Storage** — persist Gallery favourites, Project viewing history, theme preference and selected portfolio interactions

Important Local Storage keys include:

```text
canvas_gallery_favorites
canvas_project_recent
canvas_theme
```

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Bootstrap 5**
- **Bootstrap Icons**
- **Web Storage API**
- **Cookies**
- **Fetch API / REST API**
- **Intersection Observer API**
- **Mutation Observer API**
- **Canvas API**
- **HTML5 Video**
- **Responsive CSS / Media Queries**

## Project Structure

```text
canvas-github-portfolio/
├── index.html
├── 404.html
├── README.md
├── .gitignore
│
├── HTML/
│   ├── about.html
│   ├── events.html
│   ├── workshops.html
│   ├── gallery.html
│   ├── project.html
│   ├── join.html
│   └── contact.html
│
├── CSS/
│   ├── index.css
│   ├── about.css
│   ├── events.css
│   ├── workshops.css
│   ├── gallery.css
│   ├── project.css
│   ├── join.css
│   └── contact.css
│
├── JavaScript/
│   ├── index.js
│   ├── about.js
│   ├── events.js
│   ├── workshops.js
│   ├── gallery.js
│   ├── project.js
│   ├── script.js
│   ├── site-enhancements.js
│   ├── background-effects.js
│   └── portfolio-polish.js
│
├── images/
└── videos/
```

## Run Locally

No build step is required. Run the project through a local web server such as the VS Code **Live Server** extension so relative assets, browser storage, API requests and URL-based project deep links behave consistently.

After cloning your repository:

```bash
git clone YOUR_REPOSITORY_URL
cd canvas-github-portfolio
```

Then open `index.html` through the local server.

> Replace `YOUR_REPOSITORY_URL` with the final GitHub repository URL after the repository has been created.

## Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait for the GitHub Pages deployment link.
6. Test Home, Gallery, Projects, Join and Contact again from the deployed URL to confirm all relative assets work correctly.

## Useful Portfolio Demo Flow

A short demonstration can highlight the main interactive work:

1. Open the Gallery, filter artworks and save a favourite.
2. Refresh the page to show that the favourite remains stored.
3. Open Projects, search or sort the case studies and open one project.
4. Refresh to demonstrate the `VIEWED` state.
5. Open a shareable project URL such as `project.html?project=p22`.
6. Press **Ctrl / Cmd + K** and search for an artwork or project from any page.
7. Switch between dark and light themes.
8. Open Contact and load the live studio conditions API data.

## Content Note

Artwork titles, student names and project metadata in this demo are illustrative showcase content. Before using the website as a public production site, replace any placeholder or demo media with material you are authorised to publish and include any required credits or licences.