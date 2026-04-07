"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-background-surface border border-border rounded-xl overflow-hidden hover:border-border-bright hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
    >
      {/* Preview Gradient */}
      <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}>
        <div className="w-full h-full bg-background/20 backdrop-blur-[1px]" />
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-foreground-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
