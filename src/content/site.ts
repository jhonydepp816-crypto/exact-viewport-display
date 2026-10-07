// Edit all personal info, numbers and links here.
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const site = {
  name: "Jhony",
  title: "Web Developer",
  stats: [
    { value: "XX+", label: "Projects" },
    { value: "XX+", label: "Clients" },
    { value: "X", label: "Years Experience" },
  ],
  contact: [
    { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
    { label: "WhatsApp", value: "+00 00 0000-0000", href: "#" },
    { label: "GitHub", value: "github.com/username", href: "#" },
    { label: "Instagram", value: "@username", href: "#" },
    { label: "LinkedIn", value: "linkedin.com/in/username", href: "#" },
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
  { title: "Business Website", text: "A clean, editorial website presenting a business, its services and featured work.", tech: "HTML · CSS · JavaScript", image: p1, w: 1600, h: 1008, href: "#" },
  { title: "Personal Portfolio", text: "A bold, typographic portfolio designed to look sharp on every screen.", tech: "React · Tailwind CSS", image: p2, w: 1008, h: 1200, href: "#" },
  { title: "Landing Page", text: "A focused landing page built around one clear call to action.", tech: "HTML · CSS · JavaScript", image: p3, w: 1008, h: 1200, href: "#" },
  { title: "E-Commerce Website", text: "A modern storefront with a calm, product-first shopping experience.", tech: "React · Tailwind CSS", image: p4, w: 1600, h: 1008, href: "#" },
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
