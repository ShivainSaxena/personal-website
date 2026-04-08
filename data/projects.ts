export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "FleetCommand",
    description:
      "A real-time analytics dashboard for monitoring cloud infrastructure. Features interactive charts, alerting systems, and team collaboration tools.",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js"],
    githubUrl: "https://github.com/username/cloudsync-dashboard",
    liveUrl: "https://cloudsync-demo.vercel.app",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "proj-2",
    name: "Verity",
    description:
      "A minimalist project management app with drag-and-drop functionality, real-time updates, and integrations with popular productivity tools.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/username/taskflow",
    liveUrl: "https://taskflow-app.vercel.app",
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    id: "proj-3",
    name: "StockSense",
    description:
      "An intelligent writing companion that helps users improve their content with grammar suggestions, tone analysis, and style recommendations.",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    githubUrl: "https://github.com/username/ai-writing-assistant",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "proj-4",
    name: "LaunchSTEM",
    description:
      "A customizable portfolio template for developers. Features dark mode, animations, and easy content management through markdown files.",
    technologies: ["Next.js", "MDX", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/username/devportfolio",
    liveUrl: "https://devportfolio-template.vercel.app",
    gradient: "from-rose-600 to-pink-500",
  },
];
