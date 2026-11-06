/**
 * Selected work. Ordered by depth of engineering — the flagship first.
 * Only verifiable information: everything here is sourced from the existing
 * project data. `demo` is empty when no public URL exists.
 */
export const projectsData = [
  {
    id: 1,
    name: "Intelligent Network Analyzer",
    slug: "intelligent-network-analyzer",
    year: "Work",
    category: "Work",
    role: "Full Stack Developer",
    featured: true,
    tagline: "Network health, traffic and topology in one analytical canvas.",
    description:
      "A platform for telecom operators to monitor network health, analyze traffic data, and visualize system performance with a drag-and-drop interface.",
    approach:
      "Graph-shaped telecom data is modelled in Neo4j, served through a typed API layer, and rendered as an interactive topology with yFiles for HTML — letting operators rearrange nodes and read traffic patterns directly on the canvas.",
    highlights: [
      "Drag-and-drop topology canvas built on yFiles for HTML",
      "Graph data modelling and traversal with Neo4j",
      "Traffic and performance charts with D3.js",
      "TypeScript across the React application layer",
    ],
    tools: ["React", "TypeScript", "Neo4j", "MongoDB", "yFiles for HTML", "D3.js"],
    image: "/projects/network-analyzer-screenshot.png",
    demo: "",
  },
  {
    id: 2,
    name: "Tick-Tock Store",
    slug: "tick-tock-store",
    year: "Personal",
    category: "Personal",
    role: "Full Stack Developer",
    featured: false,
    tagline: "A watch storefront with real-time catalog state.",
    description:
      "A Vue.js e-commerce website for showcasing and selling watches, with dynamic product catalogs, search and filtering, and a responsive UI for mobile and desktop.",
    approach:
      "Built on a component-driven Vue 3 architecture with Vue Router for navigation and Pinia for state, so catalog updates propagate through the UI without page reloads. Product imagery is served through Cloudinary.",
    highlights: [
      "Dynamic catalog with search and filter",
      "Vue Router navigation with Pinia state",
      "Responsive storefront layout",
      "Cloudinary-backed product media",
    ],
    tools: ["Vue 3", "JavaScript", "Firebase", "Bootstrap", "Cloudinary"],
    image: "/projects/tick-tock-store-screenshot.png",
    demo: "https://tick-tock-store.vercel.app/",
  },
  {
    id: 3,
    name: "Tap 'n' Play",
    slug: "tap-n-play",
    year: "Personal",
    category: "Personal",
    role: "Full Stack Developer",
    featured: false,
    tagline: "A small arcade of classic games in the browser.",
    description:
      "A mini-games project built with React, featuring classic games like Tic Tac Toe, Quiz, and Play & Pause — focused on interactive UI, state management and responsive design.",
    approach:
      "Each game is an isolated React module with its own state machine, so new games can be added without touching the shell. The interface stays usable from phone to desktop.",
    highlights: [
      "Tic Tac Toe, Quiz and Play & Pause",
      "Component-isolated game modules",
      "Interactive UI with responsive design",
    ],
    tools: ["React", "JavaScript", "CSS"],
    image: "/projects/tap-n-play-screenshot.png",
    demo: "https://tic-tac-toe-two-self-19.vercel.app/",
  },
  {
    id: 4,
    name: "Personal Portfolio",
    slug: "personal-portfolio",
    year: "Ongoing",
    category: "Personal",
    role: "Designer & Developer",
    featured: false,
    tagline: "This site — designed, built and maintained end to end.",
    description:
      "A responsive, interactive portfolio built with React and Next.js to present professional skills, projects and achievements, with modern UI/UX, performance optimization and SEO-friendly architecture.",
    approach:
      "Rebuilt around a centralized content model so every section reads from one data layer, with a hand-rolled animation system that respects reduced-motion preferences.",
    highlights: [
      "Design system and typography scale",
      "Centralized content configuration",
      "Accessible, keyboard-friendly navigation",
      "SEO metadata and Open Graph support",
    ],
    tools: ["Next.js", "React", "JavaScript", "Tailwind"],
    image: "/projects/portfolio-screenshot.png",
    demo: "https://rajatsharma-portfolio.vercel.app/",
  },
];

export const featuredProject = projectsData.find((p) => p.featured);
export const secondaryProjects = projectsData.filter((p) => !p.featured);
