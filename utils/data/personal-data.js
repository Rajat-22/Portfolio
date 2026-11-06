/**
 * Single source of truth for everything personal.
 * Components must never hardcode any of these values.
 */
export const personalData = {
  name: "Rajat Sharma",
  shortName: "Rajat",
  initials: "RS",
  designation: "Senior Software Engineer",
  company: "Sopra Steria",
  location: "Greater Noida, India",
  timezone: "IST (UTC+5:30)",
  email: "rajatsharma221098@gmail.com",
  phone: "+91-9873957498",
  profile: "/profile.jpg",
  tagline: "Building thoughtful digital experiences through engineering.",
  summary:
    "Senior Software Engineer focused on building scalable web applications, intuitive interfaces, and impactful digital products.",
  resume: "https://www.linkedin.com/in/rajatsharma22",
  github: "https://github.com/Rajat-22",
  linkedIn: "https://www.linkedin.com/in/rajatsharma22",
  twitter: "https://twitter.com/_mr_Rajat_?s=09",
  whatsAppUrl:
    "https://wa.me/+919454276383?text=Hello%20I%20want%20to%20connect%20with%20you",
};

/**
 * Portfolio AI assistant.
 * Placeholder until the assistant is deployed — swap `url` (or set
 * NEXT_PUBLIC_CHATBOT_URL) and the UI automatically drops the "preview" badge.
 */
const CHATBOT_PLACEHOLDER_URL = "https://your-chatbot-url.vercel.app/";

export const chatbotConfig = {
  url: process.env.NEXT_PUBLIC_CHATBOT_URL || CHATBOT_PLACEHOLDER_URL,
  isPlaceholder:
    (process.env.NEXT_PUBLIC_CHATBOT_URL || CHATBOT_PLACEHOLDER_URL) ===
    CHATBOT_PLACEHOLDER_URL,
  title: "Meet my AI assistant",
  eyebrow: "In development",
  description:
    "Curious about my experience, projects, or technical background? Explore my AI-powered portfolio assistant and interact with my professional profile.",
  cta: "Chat with my AI assistant",
};

export const siteMeta = {
  title: "Rajat Sharma — Senior Software Engineer",
  titleTemplate: "%s · Rajat Sharma",
  description:
    "Rajat Sharma is a Senior Software Engineer building scalable web applications, data-dense interfaces, and full-stack products — React, Next.js, Vue, TypeScript, Neo4j and D3.js.",
  url: "https://rajatsharma-portfolio.vercel.app",
  locale: "en_US",
  keywords: [
    "Rajat Sharma",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Frontend Engineer",
    "Portfolio",
  ],
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
