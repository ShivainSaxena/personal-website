export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string[]
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Innovations Inc.",
    role: "Senior Software Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      "Led development of a microservices architecture serving 1M+ daily active users",
      "Architected and implemented real-time data processing pipelines using Kafka and Redis",
      "Mentored a team of 5 junior developers, conducting code reviews and pair programming sessions",
      "Reduced API response times by 40% through optimization and caching strategies",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Kafka"],
  },
  {
    id: "exp-2",
    company: "Digital Solutions Co.",
    role: "Full Stack Developer",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    description: [
      "Built and maintained e-commerce platforms handling $10M+ in annual transactions",
      "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      "Developed responsive web applications with React and Next.js",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
    technologies: ["Next.js", "PostgreSQL", "Docker", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    company: "StartupHub",
    role: "Junior Developer",
    startDate: "Aug 2019",
    endDate: "May 2021",
    description: [
      "Developed features for a SaaS platform used by 500+ businesses",
      "Created RESTful APIs and integrated third-party services",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["JavaScript", "Python", "MongoDB", "Express"],
  },
]
