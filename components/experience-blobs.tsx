"use client";

// Drop this file alongside your experience.tsx
// Then add <ExperienceBlobs /> inside the <section> in experience.tsx,
// right after the BGPattern line (see comment at bottom of this file).

export function ExperienceBlobs() {
  return (
    <>
      <style>{`
        @keyframes blob-float-1 {
          0%   { transform: translate(0px, 0px)    rotate(0deg)   scale(1); }
          33%  { transform: translate(12px, -18px) rotate(8deg)   scale(1.04); }
          66%  { transform: translate(-8px, 10px)  rotate(-5deg)  scale(0.97); }
          100% { transform: translate(0px, 0px)    rotate(0deg)   scale(1); }
        }
        @keyframes blob-float-2 {
          0%   { transform: translate(0px, 0px)    rotate(0deg)   scale(1); }
          33%  { transform: translate(-14px, 10px) rotate(-10deg) scale(1.05); }
          66%  { transform: translate(10px, -12px) rotate(6deg)   scale(0.96); }
          100% { transform: translate(0px, 0px)    rotate(0deg)   scale(1); }
        }
        @keyframes blob-float-3 {
          0%   { transform: translate(0px, 0px)    rotate(0deg)  scale(1); }
          50%  { transform: translate(8px, 16px)   rotate(12deg) scale(1.06); }
          100% { transform: translate(0px, 0px)    rotate(0deg)  scale(1); }
        }
        @keyframes blob-float-4 {
          0%   { transform: translate(0px, 0px)    rotate(0deg)   scale(1); }
          40%  { transform: translate(-10px, -14px) rotate(-8deg) scale(1.03); }
          80%  { transform: translate(6px, 8px)    rotate(4deg)   scale(0.98); }
          100% { transform: translate(0px, 0px)    rotate(0deg)   scale(1); }
        }

        /* Slow morph on the border-radius to give the "3d squish" feel */
        @keyframes morph-1 {
          0%,100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; }
          25%     { border-radius: 40% 60% 45% 55% / 60% 40% 55% 45%; }
          50%     { border-radius: 55% 45% 60% 40% / 45% 55% 50% 50%; }
          75%     { border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%; }
        }
        @keyframes morph-2 {
          0%,100% { border-radius: 50% 50% 40% 60% / 60% 40% 55% 45%; }
          30%     { border-radius: 65% 35% 55% 45% / 45% 55% 40% 60%; }
          60%     { border-radius: 40% 60% 65% 35% / 55% 45% 60% 40%; }
        }
        @keyframes morph-3 {
          0%,100% { border-radius: 45% 55% 60% 40% / 55% 45% 50% 50%; }
          35%     { border-radius: 60% 40% 45% 55% / 40% 60% 55% 45%; }
          70%     { border-radius: 55% 45% 50% 50% / 60% 40% 45% 55%; }
        }
        @keyframes morph-4 {
          0%,100% { border-radius: 55% 45% 50% 50% / 40% 60% 45% 55%; }
          25%     { border-radius: 40% 60% 55% 45% / 55% 45% 60% 40%; }
          75%     { border-radius: 60% 40% 40% 60% / 50% 50% 55% 45%; }
        }
      `}</style>

      {/*
        ── Blob 1 — left side, upper ──
        Large, teardrop-ish, deep blue glow
      */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          left: "2%",
          top: "18%",
          width: 180,
          height: 200,
          animation: "blob-float-1 9s ease-in-out infinite, morph-1 11s ease-in-out infinite",
          background:
            "radial-gradient(ellipse at 40% 35%, rgba(99,179,255,0.18) 0%, rgba(59,130,246,0.10) 45%, transparent 75%)",
          boxShadow:
            "inset 0 0 40px rgba(59,130,246,0.12), 0 0 60px rgba(59,130,246,0.08)",
          border: "1px solid rgba(99,179,255,0.12)",
          zIndex: 1,
        }}
      />

      {/*
        ── Blob 2 — right side, upper ──
        Smaller, rounder, indigo tint
      */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: "3%",
          top: "12%",
          width: 130,
          height: 140,
          animation: "blob-float-2 11s ease-in-out infinite, morph-2 13s ease-in-out infinite",
          animationDelay: "-3s",
          background:
            "radial-gradient(ellipse at 55% 40%, rgba(129,140,248,0.16) 0%, rgba(99,102,241,0.09) 50%, transparent 75%)",
          boxShadow:
            "inset 0 0 30px rgba(99,102,241,0.10), 0 0 50px rgba(99,102,241,0.07)",
          border: "1px solid rgba(129,140,248,0.10)",
          zIndex: 1,
        }}
      />

      {/*
        ── Blob 3 — left side, lower ──
        Tall narrow shape, cyan accent
      */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          left: "1%",
          bottom: "22%",
          width: 110,
          height: 160,
          animation: "blob-float-3 13s ease-in-out infinite, morph-3 10s ease-in-out infinite",
          animationDelay: "-5s",
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(34,211,238,0.14) 0%, rgba(6,182,212,0.08) 50%, transparent 75%)",
          boxShadow:
            "inset 0 0 30px rgba(6,182,212,0.09), 0 0 40px rgba(6,182,212,0.06)",
          border: "1px solid rgba(34,211,238,0.09)",
          zIndex: 1,
        }}
      />

      {/*
        ── Blob 4 — right side, lower ──
        Wide squat shape, sky blue
      */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: "2%",
          bottom: "18%",
          width: 160,
          height: 120,
          animation: "blob-float-4 10s ease-in-out infinite, morph-4 14s ease-in-out infinite",
          animationDelay: "-7s",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.15) 0%, rgba(14,165,233,0.08) 50%, transparent 75%)",
          boxShadow:
            "inset 0 0 35px rgba(14,165,233,0.10), 0 0 55px rgba(14,165,233,0.07)",
          border: "1px solid rgba(56,189,248,0.10)",
          zIndex: 1,
        }}
      />
    </>
  );
}

/*
  ── HOW TO USE ──────────────────────────────────────────────────────────────

  In experience.tsx, import this component and add it right after <BGPattern>:

    import { ExperienceBlobs } from "./experience-blobs";

    ...

    <BGPattern variant="grid" mask="fade-edges" size={40} fill="rgba(59, 130, 246, 0.18)" />
    <ExperienceBlobs />                          ← add this line
    <div className="absolute inset-0 ..." />    ← existing gradient fade

  The section already has position:relative and overflow:hidden,
  so the blobs will be correctly contained.

*/
