export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = {
  github: "https://github.com/priyanshukhakkhar",
  linkedin: "https://www.linkedin.com/in/priyanshu-khakkhar-10184a312/",
  email: "[EMAIL_ADDRESS]",
};

export const heroRoles = [
  "Angular Developer",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "TypeScript Specialist",
];

export const aboutStats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "13+", label: "Technologies" },
  { value: "∞", label: "Cups of Coffee" },
];

export type SkillCategory = {
  name: string;
  skills: string[];
  icon: string;
  color: string;
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🖥️",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Angular",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    name: "Database",
    icon: "🗄️",
    color: "from-emerald-500 to-teal-500",
    skills: ["MongoDB"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    color: "from-orange-500 to-amber-500",
    skills: ["Git", "GitLab"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Angular Developer Intern",
    company: "GTC Software",
    period: "2026 – Present",
    location: "India",
    type: "Internship",
    description: [
      "Developed and maintained scalable Angular applications with TypeScript for enterprise clients.",
      "Built reusable component libraries and implemented state management patterns.",
      "Collaborated with cross-functional teams to deliver high-quality frontend features.",
      "Optimized application performance, reducing load times by up to 40%.",
      "Implemented responsive UI designs following modern UX principles.",
    ],
    tech: ["Angular", "TypeScript", "SCSS", "RxJS", "REST APIs"],
  },
  {
    role: "Software Developer Intern",
    company: "TatvaSoft",
    period: "Previous Period",
    location: "Ahmedabad, India",
    type: "Internship",
    description: [
      "Collaborated with a team of developers to build and maintain web applications.",
      "Gained hands-on experience in modern frontend development practices.",
      "Assisted in developing UI components and optimizing web performance.",
      "Participated in code reviews and daily agile stand-ups.",
    ],
    tech: ["Angular", "JavaScript", "HTML/CSS", "TypeScript", ".NET"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Online Shopping System with Advanced Admin Page",
    description:
      "A full-featured e-commerce platform with product management, cart system, order tracking, and a comprehensive admin dashboard for inventory, users, and analytics management.",
    tech: ["Angular", "TypeScript", ".NET", "Bootstrap", "JWT", "SQL"],
    github: "https://github.com/priyanshukhakkhar",
    featured: true,
  },
  {
    title: "Creative Fusion E-commerce Website",
    description:
      "A modern, visually stunning e-commerce storefront with smooth animations, product filtering, wishlist functionality, and seamless checkout experience.",
    tech: ["Angular", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/priyanshukhakkhar",
    featured: true,
  },
  {
    title: "Logo / Thumbnail / Banner Design Platform",
    description:
      "A browser-based graphic design platform for creating professional logos, social media thumbnails, and banners with drag-and-drop canvas editor and export functionality.",
    tech: ["Next.js", "React", "TypeScript", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/priyanshukhakkhar",
    featured: true,
  },
];
