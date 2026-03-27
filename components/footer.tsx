"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/username", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/username",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://twitter.com/username", icon: Twitter, label: "Twitter" },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden bg-background-surface min-h-[340px]">
      {/* Dotted Wave Animation — absolute, behind all content */}
      <DottedSurface />

      {/* Dark gradient overlay — keeps dots subtle and text legible */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-surface/90 via-background-surface/50 to-transparent" />

      {/* Footer Content — sits above animation via z-10 */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Shivain Saxena
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground-muted hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
