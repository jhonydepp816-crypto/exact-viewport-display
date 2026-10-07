// Edit all personal info, numbers and links here.
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import portrait from "@/assets/jhony-portrait.jpg.asset.json";
import full from "@/assets/jhony-full.jpg.asset.json";

export const site = {
  name: "Jhony",
  title: "Web Developer",
  photos: { hero: portrait.url, about: full.url },
  stats: [
    { value: "20+", label: "Projects" },
    { value: "18", label: "Clients" },
    { value: "4", label: "Years Experience" },
  ],
  contact: [
    { label: "Email", value: "jhonydepp816@gmail.com", href: "mailto:jhonydepp816@gmail.com" },
    { label: "WhatsApp", value: "0895-4022-07109", href: "https://wa.me/62895402207109" },
    { label: "GitHub", value: "github.com/jhonydepp816", href: "https://github.com/jhonydepp816" },
    { label: "Instagram", value: "@jhonnyawan_", href: "https://instagram.com/jhonnyawan_" },
  ],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "works", label: "Works" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const services = [
  { title: "Business Website", text: "Professional websites for businesses and organizations." },
  { title: "Landing Page", text: "High-converting landing pages for products, services, and campaigns." },
  { title: "Personal Portfolio", text: "Professional portfolio websites for individuals and professionals." },
  { title: "E-Commerce Website", text: "Modern online stores designed for a smooth shopping experience." },
  { title: "Custom Website", text: "Custom website solutions built around specific requirements." },
];

export const expertise = [
  "HTML", "CSS", "JavaScript", "Responsive Web Design", "UI Implementation",
  "Git & GitHub", "Website Performance", "SEO Fundamentals", "AI-Assisted Development",
];

export const experience = [
  { area: "Web Development", detail: "Professional Website Development" },
  { area: "UI & Frontend", detail: "Responsive Interface Development" },
  { area: "Website Projects", detail: "Business, Portfolio & Landing Page Development" },
  { area: "AI-Assisted Development", detail: "Modern AI-supported development workflow" },
];

export const projects = [
  { title: "Business Website", text: "A clean, editorial website presenting a business, its services and featured work.", tech: "HTML · CSS · JavaScript", image: p1, w: 1600, h: 1008, href: "", tag: "Concept Project" },
  { title: "Personal Portfolio", text: "A bold, typographic portfolio designed to look sharp on every screen.", tech: "React · Tailwind CSS", image: p2, w: 1008, h: 1200, href: "", tag: "Concept Project" },
  { title: "Landing Page", text: "A focused landing page built around one clear call to action.", tech: "HTML · CSS · JavaScript", image: p3, w: 1008, h: 1200, href: "", tag: "Concept Project" },
  { title: "E-Commerce Website", text: "A modern storefront with a calm, product-first shopping experience.", tech: "React · Tailwind CSS", image: p4, w: 1600, h: 1008, href: "", tag: "Concept Project" },
];

export const reasons = [
  { title: "Clean Design", text: "Layouts with clear hierarchy and nothing unnecessary." },
  { title: "Responsive Development", text: "Websites that work beautifully on phone, tablet and desktop." },
  { title: "Modern Technology", text: "Current tools and practices for reliable results." },
  { title: "Performance Focused", text: "Fast-loading pages that respect your visitors' time." },
  { title: "Clear Communication", text: "Straightforward updates from first call to launch." },
  { title: "Custom Solutions", text: "Every site is shaped around your specific goals." },
];

export const process = [
  { title: "Discovery", text: "Understanding the project and requirements." },
  { title: "Design", text: "Planning the visual direction and user experience." },
  { title: "Development", text: "Building the website with clean and responsive code." },
  { title: "Launch", text: "Testing, optimization, and publishing the website." },
];
