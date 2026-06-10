// ─── Navigation ────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ─── Links ─────────────────────────────────────────────────────────────────
export const resumeUrl = "/Priyanshu_Khakkhar_Resume.pdf";

export const socialLinks = {
  github: "https://github.com/priyanshukhakkhar",
  linkedin: "https://www.linkedin.com/in/priyanshu-khakkhar-10184a312/",
  email: "mailto:priyanshukhakkhar@gmail.com",
};

// ─── Hero ──────────────────────────────────────────────────────────────────
export const heroRoles = [
  "Angular Developer",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "TypeScript Specialist",
];

// ─── About ─────────────────────────────────────────────────────────────────
export const aboutStats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "13+", label: "Technologies" },
  { value: "∞", label: "Cups of Coffee" },
];

export const aboutSpecialties = [
  "Angular Architecture",
  "Component Libraries",
  "REST API Integration",
  "Performance Optimization",
  "Responsive UI Design",
  "TypeScript Patterns",
];

// ─── Services ──────────────────────────────────────────────────────────────
export type Service = {
  icon: string;
  title: string;
  description: string;
  tech: string[];
  color: string;
};

export const services: Service[] = [
  {
    icon: "🅰️",
    title: "Angular Development",
    description:
      "Building enterprise-grade Angular applications with clean architecture, reusable component libraries, and RxJS-powered state management.",
    tech: ["Angular 17+", "TypeScript", "RxJS", "NgRx", "SCSS"],
    color: "from-red-500/10 to-red-500/5",
  },
  {
    icon: "🖥️",
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, accessible UIs with modern frameworks. From design systems to interactive dashboards — built fast and right.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: "📱",
    title: "Responsive Web Apps",
    description:
      "Developing fully responsive web applications that look stunning on every screen — mobile, tablet, and desktop — without compromise.",
    tech: ["CSS Grid", "Flexbox", "Mobile First", "SCSS"],
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description:
      "Seamlessly connecting frontends to backend services, handling authentication, real-time data, and complex data transformations.",
    tech: ["REST APIs", "JWT", "Interceptors", "HTTP Client"],
    color: "from-green-500/10 to-green-500/5",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Auditing and optimizing Angular & React apps for speed — lazy loading, bundle splitting, OnPush strategy, and Core Web Vitals.",
    tech: ["Lazy Loading", "OnPush", "Tree Shaking", "Lighthouse"],
    color: "from-orange-500/10 to-orange-500/5",
  },
];

// ─── Skills ────────────────────────────────────────────────────────────────
export type Proficiency = "Expert" | "Proficient" | "Learning";

export type Skill = {
  name: string;
  proficiency: Proficiency;
};

export type SkillCategory = {
  name: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Angular Ecosystem",
    icon: "🅰️",
    skills: [
      { name: "Angular 17+", proficiency: "Expert" },
      { name: "RxJS", proficiency: "Proficient" },
      { name: "NgRx", proficiency: "Learning" },
      { name: "Angular Material", proficiency: "Proficient" },
    ],
  },
  {
    name: "Core Languages",
    icon: "💻",
    skills: [
      { name: "TypeScript", proficiency: "Expert" },
      { name: "JavaScript (ES6+)", proficiency: "Expert" },
      { name: "HTML5", proficiency: "Expert" },
      { name: "CSS3 / SCSS", proficiency: "Expert" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "⚛️",
    skills: [
      { name: "Next.js", proficiency: "Proficient" },
      { name: "React", proficiency: "Proficient" },
      { name: "Tailwind CSS", proficiency: "Expert" },
      { name: "Bootstrap", proficiency: "Proficient" },
    ],
  },
  {
    name: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git & GitLab", proficiency: "Proficient" },
      { name: "REST APIs", proficiency: "Expert" },
      { name: "MongoDB", proficiency: "Learning" },
      { name: ".NET Basics", proficiency: "Learning" },
    ],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────
export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  tech: string[];
  achievements: string[];
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
    achievements: ["40% faster load times", "Reusable component library", "Git workflow"],
  },
  {
    role: "Software Developer Intern",
    company: "TatvaSoft",
    period: "2024 – 2025",
    location: "Ahmedabad, India",
    type: "Internship",
    description: [
      "Collaborated with a team of developers to build and maintain web applications.",
      "Gained hands-on experience in modern frontend development practices.",
      "Assisted in developing UI components and optimizing web performance.",
      "Participated in code reviews and daily agile stand-ups.",
    ],
    tech: ["Angular", "JavaScript", "HTML/CSS", "TypeScript", ".NET"],
    achievements: ["Agile standups", "Code reviews", "UI components"],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  keyAchievements: string[];
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Online Shopping System with Advanced Admin Panel",
    description:
      "A full-featured e-commerce platform with product management, cart system, order tracking, and a comprehensive admin dashboard for inventory, users, and analytics management.",
    problemStatement:
      "Needed a complete e-commerce solution with both a customer-facing storefront and a powerful admin panel for managing products, orders, and analytics in real time.",
    solution:
      "Built a full-stack Angular + .NET application with JWT authentication, a rich admin dashboard, and a smooth shopping experience with cart and order management.",
    keyAchievements: [
      "Real-time inventory & order tracking",
      "JWT-secured role-based access control",
      "Admin analytics dashboard with charts",
      "Optimized SQL queries for fast data loading",
    ],
    tech: ["Angular", "TypeScript", ".NET", "Bootstrap", "JWT", "SQL"],
    github: "https://github.com/priyanshukhakkhar",
    image: "/projects/ecommerce.svg",
    featured: true,
  },
  {
    title: "Kanban Board Management System",
    description:
      "A modern Trello-inspired project management platform featuring authentication, drag-and-drop task management, role-based workflows, responsive dashboard, search, and filtering.",
    problemStatement:
      "Teams needed a lightweight, fast project management tool with drag-and-drop task tracking, without the complexity of enterprise tools.",
    solution:
      "Developed an Angular-based Kanban board with smooth drag-and-drop, priority labeling, assignee management, and persistent state via local storage / API.",
    keyAchievements: [
      "Smooth drag-and-drop with CDK",
      "Multi-project & team support",
      "Priority & deadline management",
      "Responsive layout for all devices",
    ],
    tech: ["Angular", "TypeScript", "SCSS", "RxJS", "REST API"],
    github: "https://github.com/priyanshukhakkhar",
    demo: "https://kanban-board-plum-five.vercel.app/",
    image: "/projects/Screenshot 2026-06-10 at 4.05.18 PM.png",
    featured: true,
  },
  {
    title: "Creative Fusion E-Commerce Storefront",
    description:
      "A modern, visually stunning e-commerce storefront with smooth animations, product filtering, wishlist functionality, and seamless checkout experience.",
    problemStatement:
      "Existing e-commerce UIs lacked personality and smooth interactions — users wanted a premium shopping experience with fast filtering and wishlist features.",
    solution:
      "Built a fully responsive Angular storefront with animated product cards, advanced filtering, wishlist management, and a streamlined checkout UI.",
    keyAchievements: [
      "Advanced product filtering & sorting",
      "Wishlist & cart with local persistence",
      "Smooth page transitions & animations",
      "Mobile-first responsive design",
    ],
    tech: ["Angular", "TypeScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/priyanshukhakkhar",
    image: "/projects/creative-fusion.svg",
    featured: false,
  },
  {
    title: "Logo / Thumbnail / Banner Design Platform",
    description:
      "A browser-based graphic design platform for creating professional logos, social media thumbnails, and banners with drag-and-drop canvas editor and export functionality.",
    problemStatement:
      "Designers and content creators needed an accessible, browser-based design tool that didn't require heavy software installations for quick graphic creation.",
    solution:
      "Built a Next.js + Canvas API design platform with drag-and-drop elements, custom typography, shape tools, and one-click PNG/SVG export.",
    keyAchievements: [
      "Custom Canvas API rendering engine",
      "Drag-and-drop design elements",
      "Export to PNG, SVG, JPEG",
      "Real-time typography controls",
    ],
    tech: ["Next.js", "React", "TypeScript", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/priyanshukhakkhar",
    image: "/projects/design-platform.svg",
    featured: false,
  },
];

// ─── Certifications ────────────────────────────────────────────────────────
export type Certification = {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  credentialUrl?: string;
  color: string;
};

export const certifications: Certification[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (via Coursera)",
    year: "2024",
    icon: "🎓",
    color: "from-blue-500/15 to-indigo-500/10",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    title: "Meta Back-End Developer",
    issuer: "Meta (via Coursera)",
    year: "2024",
    icon: "🏆",
    color: "from-purple-500/15 to-purple-500/5",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
  },
  {
    title: "Angular Developer Internship",
    issuer: "GTC Software",
    year: "2026",
    icon: "🅰️",
    color: "from-red-500/15 to-orange-500/5",
  },
  {
    title: "Software Developer Internship",
    issuer: "TatvaSoft",
    year: "2025",
    icon: "💼",
    color: "from-orange-500/15 to-amber-500/5",
  },
];
