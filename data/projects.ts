export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "FleetCommand",
    description:
      "A real-time maritime monitoring platform that streams and analyzes live telemetry data from vessel sensors. It provides a dashboard for tracking critical vessel metrics and to ensure high-precision situational awareness.",
    technologies: [
      "Next.js",
      "FastAPI",
      "TimescaleDB",
      "Docker",
      "Supabase",
      "MQTT",
    ],
    liveUrl: "http://18.222.214.9:3000/auth/login",
    image: "/images/fleetcommandd.png",
  },
  {
    id: "proj-2",
    name: "Verity",
    description:
      "A minimalist project management app with drag-and-drop functionality, real-time updates, and integrations with popular productivity tools.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/username/taskflow",
    liveUrl: "https://taskflow-app.vercel.app",
    image: "/images/verity.png",
  },
  {
    id: "proj-3",
    name: "StockSense",
    description:
      "An intelligent writing companion that helps users improve their content with grammar suggestions, tone analysis, and style recommendations.",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    githubUrl: "https://github.com/username/ai-writing-assistant",
    image: "/images/stocksense.png",
  },
  {
    id: "proj-4",
    name: "LaunchSTEM",
    description:
      "A customizable portfolio template for developers. Features dark mode, animations, and easy content management through markdown files.",
    technologies: ["Next.js", "MDX", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/username/devportfolio",
    liveUrl: "https://devportfolio-template.vercel.app",
    image: "/images/launchstem.png",
  },
];
