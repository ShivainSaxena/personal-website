"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { EtherealShadow } from "@/components/ui/etheral-shadow";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/ShivainSaxena", icon: Github, label: "Github" },
  {
    href: "http://www.linkedin.com/in/shivain-saxena",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:shivainsaxena@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background min-h-[280px] -mt-14 pt-24">
      {/* Ethereal animated shadow background */}
      <EtherealShadow
        color="rgba(59, 130, 246, 0.55)"
        animation={{ scale: 60, speed: 30 }}
        noise={{ opacity: 0.4, scale: 1.2 }}
        sizing="fill"
      />

      <div className="absolute inset-0 pointer-events-none bg-background/20" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* ─── Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-14 pb-8 h-full flex flex-col justify-between">
        {/* Top row — name (large) + about blurb */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left — big name */}
          <div className="flex items-start">
            <Link
              href="/"
              className="font-serif text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors leading-none tracking-tight uppercase"
            >
              Shivain Saxena
            </Link>
          </div>

          {/* Right — short about line */}
          <div className="flex items-start md:justify-end">
            <div className="max-w-xs">
              <p className="text-xs font-mono text-foreground-muted/60 tracking-widest uppercase mb-2">
                About
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Engineer focused on building elegant, performant, and scalable
                software.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/40 mb-8" />

        {/* Bottom row — socials left, nav right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Left — socials */}
          <div>
            <p className="text-xs font-mono text-foreground-muted/50 tracking-widest uppercase mb-3">
              Socials
            </p>
            <div className="flex items-center gap-1 flex-wrap">
              {socialLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-1">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-foreground-muted hover:text-primary transition-colors duration-200 tracking-wide uppercase"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                  {index < socialLinks.length - 1 && (
                    <span className="text-foreground-muted/30 mx-1 text-xs">
                      ■
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right — navigation */}
          <div className="md:text-right">
            <p className="text-xs font-mono text-foreground-muted/50 tracking-widest uppercase mb-3">
              Navigation
            </p>
            <div className="flex items-center gap-1 md:justify-end flex-wrap">
              {navLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    className="text-sm font-mono text-foreground-muted hover:text-primary transition-colors duration-200 tracking-wide uppercase"
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-foreground-muted/30 mx-1 text-xs">
                      ■
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
