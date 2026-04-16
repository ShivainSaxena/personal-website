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
      "An AI-powered market intelligence platform that automates complex company research by executing parallel web searches to synthesize structured briefs. Utilizing a multi-stage pipeline to transform raw data into intelligent reports.",
    technologies: ["Node.js", "Claude", "Redis", "Exa API"],
    githubUrl: "https://github.com/jayyy044/Verity-Intelligence",
    image: "/images/verity.png",
  },
  {
    id: "proj-3",
    name: "StockSense",
    description:
      "A financial analysis application designed to provide users with data-driven stock market insights and future price trend predictions. Integrates automated data collection from external financial sources to help investors.",
    technologies: ["Python", "Javascript", "Selenium", "AWS", "MongoDB"],
    githubUrl: "https://github.com/ShivainSaxena/StockSense",
    liveUrl: "https://stocksensedev.netlify.app/",
    image: "/images/stocksense.png",
  },
  {
    id: "proj-4",
    name: "LaunchSTEM",
    description:
      "An educational website and integrated learning platform designed to deliver structured content to students. The platform provides an interface with optimized page delivery and an infrastructure for quizzes and PDF lessons.",
    technologies: ["React.js", "MongoDB", "Redis", "Mailchimp"],
    githubUrl: "https://github.com/ShivainSaxena/launchstem-learn",
    liveUrl: "https://learn.launchstem.org/",
    image: "/images/launchstem.png",
  },
];
