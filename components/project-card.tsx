"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { GlowCard } from "@/components/ui/spotlight-card";

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlowCard
        glowColor="blue"
        customSize
        className="w-full group bg-background-surface transition-all duration-300"
      >
        {/* Preview Image */}
        <div className="relative h-42 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-fill"
          />
        </div>

        {/* Card Body */}
        <div className="p-2 flex flex-col gap-4">
          <h3 className="font-serif text-xl font-bold text-foreground">
            {project.name}
          </h3>
          <p className="text-foreground-muted text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
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
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            )}
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
      </GlowCard>
    </motion.div>
  );
}
