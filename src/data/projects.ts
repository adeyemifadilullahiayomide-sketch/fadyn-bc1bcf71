import tasteHomeArtwork from "@/assets/taste-home-food-flyer.png.asset.json";

export type ProjectCategory =
  | "AI Apps"
  | "Websites"
  | "Healthcare"
  | "Business Systems"
  | "Islamic Tech"
  | "Other";

export type ProjectStatus =
  | "Built Project"
  | "Personal Project"
  | "Built Project / Personal Project"
  | "Concept"
  | "AI Project";

export interface CaseStudy {
  challenge: string;
  goal: string;
  solution: string;
  built: string[];
  builtWith: string[];
  process: string[];
  outcome: string;
}

export interface Project {
  id: string;
  name: string;
  secondaryName?: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  url?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  accent?: string;
  caseStudy?: CaseStudy;
}

/**
 * Central project data. Add a new project by appending an object here —
 * the grid, filters and case-study views pick it up automatically.
 */
export const projects: Project[] = [
  {
    id: "cre8hive",
    name: "Cre8hive",
    category: "Websites",
    categoryLabel: "Digital Agency / AI Website",
    status: "Built Project",
    description:
      "A modern digital platform showcasing web development, AI applications, automation, and digital systems services.",
    technologies: ["Lovable", "React", "AI-assisted development", "Responsive UI"],
    url: "https://cre8hive.lovable.app/",
    image: "/images/work/cre8hive.jpg",
    featured: true,
    caseStudy: {
      challenge:
        "A digital services offering needs a single place where visitors immediately understand what is built, for whom, and what to do next.",
      goal:
        "Present web development, AI applications and automation as one connected service offering, with a clear path to enquiry.",
      solution:
        "I structured the site around outcomes rather than deliverables, then built a clean, high-contrast interface where every section leads toward a contact action.",
      built: [
        "Service-led landing structure",
        "Sectioned offering breakdown",
        "Conversion-focused calls to action",
        "Fully responsive layout",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS", "AI-assisted development"],
      process: [
        "Mapped the offering into clear service pillars",
        "Wrote positioning-first copy before layout",
        "Built the interface with reusable sections",
        "Tested responsiveness and refined spacing and hierarchy",
      ],
      outcome:
        "The result is a coherent, professional presence that communicates capability across web, AI and automation instead of a single service.",
    },
  },
  {
    id: "gentle-path",
    name: "Gentle Path",
    category: "AI Apps",
    categoryLabel: "AI / Wellness Web Application",
    status: "Built Project",
    description:
      "A calm, modern digital experience designed around guided user interactions and AI-powered functionality.",
    technologies: ["Lovable", "AI", "Responsive Web App"],
    url: "https://gentle-path-create.lovable.app/",
    image: "/images/work/gentle-path.jpg",
    featured: true,
    caseStudy: {
      challenge:
        "Wellness-oriented products often feel cluttered or clinical, which works against the calm state the experience is meant to support.",
      goal:
        "Create a guided, low-friction interface where AI supports the user gently instead of overwhelming them.",
      solution:
        "I designed a restrained interface with generous spacing and a single clear action per step, then layered AI-powered functionality into that flow.",
      built: [
        "Guided step-by-step user flow",
        "AI-powered interaction layer",
        "Calm, minimal visual system",
        "Mobile-first responsive experience",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS", "AI"],
      process: [
        "Defined the emotional tone before the UI",
        "Prototyped the guided flow",
        "Integrated AI-powered interactions",
        "Refined pacing, copy and responsiveness",
      ],
      outcome:
        "A focused experience that shows how AI can be embedded into a product without making it feel technical or noisy.",
    },
  },
  {
    id: "vibrant-ai-health",
    name: "Vibrant AI Health",
    secondaryName: "HealthHub AI",
    category: "Healthcare",
    categoryLabel: "AI Healthcare Platform",
    status: "Built Project",
    description:
      "An AI-powered healthcare experience combining modern product design with intelligent digital assistance while clearly communicating that AI does not replace licensed medical professionals.",
    technologies: ["AI", "Lovable", "Healthcare UX", "Modern Web UI"],
    url: "https://vibrant-ai-health.lovable.app/",
    image: "/images/work/vibrant-ai-health.jpg",
    featured: true,
    accent: "#0EA5E9",
    caseStudy: {
      challenge:
        "Health-related AI products must be genuinely useful while being explicit about their limits — trust breaks the moment the boundary is unclear.",
      goal:
        "Deliver an intelligent healthcare experience that assists users and states plainly that it does not replace licensed medical professionals.",
      solution:
        "I built a product interface where AI assistance sits inside a careful information hierarchy, with responsible-use messaging placed where users actually read it.",
      built: [
        "AI-assisted health information experience",
        "Clear responsible-use and limitation messaging",
        "Product-grade dashboard-style UI",
        "Accessible, responsive layouts",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS", "AI"],
      process: [
        "Defined what the AI should and should not do",
        "Structured content around user questions",
        "Built the interface and AI interaction layer",
        "Reviewed wording for clarity and responsibility",
      ],
      outcome:
        "A healthcare-focused build that demonstrates both product craft and the judgement required when applying AI to a sensitive domain.",
    },
  },
  {
    id: "deen-flow",
    name: "Deen Flow",
    category: "Islamic Tech",
    categoryLabel: "Islamic Technology / Web App",
    status: "Built Project / Personal Project",
    description:
      "A digital experience exploring how modern technology can support Islamic productivity, reflection, and everyday digital experiences.",
    technologies: ["AI-assisted development", "Web App", "Modern UI"],
    url: "https://deen-flow-app.lovable.app",
    image: "/images/work/deen-flow.jpg",
    featured: true,
    caseStudy: {
      challenge:
        "Tools in this space are often functional but dated, which makes daily use feel like a chore rather than a habit.",
      goal:
        "Build a modern, calm interface that supports consistency in daily routines and reflection.",
      solution:
        "I approached it as a product rather than a utility: clear structure, modern typography, and a flow that respects the user's attention.",
      built: [
        "Daily routine and reflection flows",
        "Modern, distraction-free interface",
        "Reusable component structure",
        "Responsive experience across devices",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS", "AI-assisted development"],
      process: [
        "Started from real daily-use scenarios",
        "Designed the structure and navigation",
        "Built and iterated on the interface",
        "Refined details through repeated personal use",
      ],
      outcome:
        "A personal product that shows how thoughtful design can make a meaningful routine easier to keep.",
    },
  },
  {
    id: "niyyah-core",
    name: "Niyyah Core",
    category: "Islamic Tech",
    categoryLabel: "Islamic Technology / AI & Web App",
    status: "Built Project / Personal Project",
    description:
      "An Islamic-focused digital product concept exploring the use of modern technology to support intention, reflection, productivity, and meaningful digital experiences.",
    technologies: ["AI", "Web App", "Lovable", "Product Design"],
    url: "https://niyyah-core.lovable.app",
    image: "/images/work/niyyah-core.jpg",
    featured: false,
    caseStudy: {
      challenge:
        "Intention and reflection are hard to support with software without turning them into another checklist to feel guilty about.",
      goal:
        "Explore a product model where technology supports intention and reflection with minimal friction.",
      solution:
        "I built a lightweight product concept around short, meaningful interactions, using AI where it adds clarity rather than volume.",
      built: [
        "Intention and reflection interaction model",
        "AI-supported prompts and structure",
        "Clean product interface",
        "Responsive layouts",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS", "AI"],
      process: [
        "Framed the product idea and constraints",
        "Designed the core interaction",
        "Built the working interface",
        "Iterated on tone, pacing and clarity",
      ],
      outcome:
        "A concept-to-working-product exercise in restraint: fewer features, clearer purpose.",
    },
  },
  {
    id: "neat-note",
    name: "Neat Note",
    category: "AI Apps",
    categoryLabel: "Productivity / Web Application",
    status: "Built Project",
    description:
      "A clean and focused digital experience designed around organizing and managing information efficiently.",
    technologies: ["Lovable", "Web App", "Responsive UI"],
    url: "https://neat-note-home.lovable.app",
    image: "/images/work/neat-note.jpg",
    featured: false,
    caseStudy: {
      challenge:
        "Note tools accumulate features until the basic act of capturing and finding information becomes slow.",
      goal:
        "Keep capture and retrieval fast, with an interface that stays out of the way.",
      solution:
        "I built a focused productivity interface where organisation is obvious and every screen has one job.",
      built: [
        "Fast capture and organisation flow",
        "Clear information hierarchy",
        "Reusable UI components",
        "Responsive layout",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS"],
      process: [
        "Defined the minimum useful feature set",
        "Built the core capture experience",
        "Layered organisation on top",
        "Polished interactions and responsiveness",
      ],
      outcome:
        "A practical productivity build that demonstrates clean application structure and disciplined scope.",
    },
  },
  {
    id: "azure-escape",
    name: "Azure Escape",
    category: "Websites",
    categoryLabel: "Travel / Hospitality Web Experience",
    status: "Built Project",
    description:
      "A polished web experience designed around travel and hospitality, with a strong focus on visual presentation and modern user experience.",
    technologies: ["Lovable", "Web Design", "Responsive UI"],
    url: "https://azure-escape-crafted.lovable.app",
    image: "/images/work/azure-escape.jpg",
    featured: false,
    caseStudy: {
      challenge:
        "Travel and hospitality sites live or die on presentation, but visual richness usually costs clarity and speed.",
      goal:
        "Create a visually strong experience that still guides visitors toward a clear next step.",
      solution:
        "I built a layout that leads with imagery and atmosphere while keeping navigation, structure and calls to action unmistakable.",
      built: [
        "Visual-led landing experience",
        "Structured offering sections",
        "Clear enquiry pathways",
        "Responsive image handling",
      ],
      builtWith: ["Lovable", "React", "Tailwind CSS"],
      process: [
        "Established the visual direction",
        "Built the page structure and sections",
        "Tuned imagery, spacing and type scale",
        "Verified the experience across breakpoints",
      ],
      outcome:
        "A presentation-heavy build that stays fast, readable and conversion-aware.",
    },
  },
  {
    id: "taste-home",
    name: "Taste Home",
    category: "Other",
    categoryLabel: "Food Brand / Promotional Graphic Design",
    status: "Built Project",
    description:
      "A bold promotional food flyer designed to showcase local dishes, catering services, delivery options, and direct ordering details at a glance.",
    technologies: ["Graphic Design", "Visual Communication", "Food Branding"],
    image: tasteHomeArtwork.url,
    imageFit: "contain",
    featured: false,
    caseStudy: {
      challenge:
        "Present a varied food offering, service details, and ordering information in one compact promotional design without losing visual impact.",
      goal:
        "Create an appetising, easy-to-scan graphic that gives the dishes strong visual priority and makes the next step clear.",
      solution:
        "I used a large food image as the anchor, supported by smaller dish photography, warm brand colours, and a structured service and contact area.",
      built: [
        "Promotional food flyer",
        "Dish photography composition",
        "Service and contact hierarchy",
        "High-contrast call to action",
      ],
      builtWith: ["Graphic Design", "Layout Design", "Visual Communication"],
      process: [
        "Organised the content by visual priority",
        "Built the food-led image composition",
        "Established the warm colour and type direction",
        "Refined service details and ordering visibility",
      ],
      outcome:
        "A distinctive promotional graphic that communicates Taste Home's offer quickly while keeping the food at the centre of the design.",
    },
  },
  {
    id: "noor-ai",
    name: "Noor AI",
    category: "Islamic Tech",
    categoryLabel: "Islamic Technology / AI Concept",
    status: "Concept",
    description:
      "A concept exploring how an AI assistant can support Islamic learning and everyday questions with a respectful, well-sourced approach.",
    technologies: ["AI", "LLMs", "Product Design"],
    image: "/images/work/islamic-tech.jpg",
    featured: false,
  },
  {
    id: "noor-al-hidayah-portal",
    name: "Noor Al Hidayah Portal",
    category: "Islamic Tech",
    categoryLabel: "Islamic Technology / Learning Portal",
    status: "Concept",
    description:
      "A concept for a structured learning portal that organises Islamic educational content into clear, followable pathways.",
    technologies: ["Web App", "Product Design", "Content Architecture"],
    image: "/images/work/islamic-tech.jpg",
    featured: false,
  },
  {
    id: "nawir",
    name: "NAWIR",
    category: "Islamic Tech",
    categoryLabel: "Islamic Technology / Digital Product",
    status: "Concept",
    description:
      "An early-stage digital product concept focused on community-oriented Islamic technology experiences.",
    technologies: ["Product Design", "Web App", "AI-assisted development"],
    image: "/images/work/islamic-tech.jpg",
    featured: false,
  },
];

export const projectFilters = [
  "All",
  "AI Apps",
  "Websites",
  "Healthcare",
  "Business Systems",
  "Islamic Tech",
  "Other",
] as const;

export type ProjectFilterValue = (typeof projectFilters)[number];
