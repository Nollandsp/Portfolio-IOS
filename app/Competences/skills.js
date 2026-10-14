"use client";

import { useEffect } from "react";
import { useStatusBar } from "../../components/status-bar-context";

const SECTIONS = [
  {
    title: "Back-end",
    items: [
      {
        name: "Node.js · Python",
        desc: "Scripts, API, automatisation",
        slug: "nodedotjs",
        from: "#6ee787",
        to: "#30d158",
      },
      {
        name: "PHP · Symfony · Doctrine",
        desc: "API REST, entités, migrations, tests fonctionnels",
        slug: "php",
        from: "#8892bf",
        to: "#6a7bc9",
      },
      {
        name: "SQL · PostgreSQL · NoSQL",
        desc: "Modélisation, Prisma, API REST",
        slug: "postgresql",
        from: "#64d2ff",
        to: "#0a84ff",
      },
    ],
  },
  {
    title: "Front-end",
    items: [
      {
        name: "JavaScript · React · Next.js",
        desc: "Composants, rendu serveur, routing",
        slug: "react",
        from: "#61dafb",
        to: "#21a1c4",
      },
      {
        name: "HTML5 · CSS3",
        desc: "Mise en page, responsive",
        slug: "html5",
        from: "#ff9f6b",
        to: "#ff6b3d",
      },
      {
        name: "Tailwind CSS",
        desc: "Notions",
        slug: "tailwindcss",
        from: "#38bdf8",
        to: "#0ea5e9",
      },
    ],
  },
  {
    title: "Sécurité Web",
    items: [
      {
        name: "OWASP Top 10",
        desc: "Injections, XSS, CSRF",
        slug: "owasp",
        from: "#bf5af2",
        to: "#7d3bd6",
      },
      {
        name: "Authentification JWT",
        desc: "Authentification sécurisée, secrets management",
        slug: "jsonwebtokens",
        from: "#ffd60a",
        to: "#ff9f0a",
      },
      {
        name: "Row Level Security (RLS)",
        desc: "Politiques d'accès au niveau des données",
        slug: "supabase",
        from: "#3ecf8e",
        to: "#249361",
      },
    ],
  },
  {
    title: "Outils et méthode",
    items: [
      {
        name: "Git · GitHub",
        desc: "Branches, commits lisibles, revue de code",
        slug: "git",
        from: "#f05133",
        to: "#c13c24",
      },
      {
        name: "Postman",
        desc: "Tests et documentation d'API",
        slug: "postman",
        from: "#ff9f6b",
        to: "#ff6b3d",
      },
      {
        name: "Docker · Vercel",
        desc: "Docker (notions), déploiement Vercel",
        slug: "docker",
        from: "#5ac8fa",
        to: "#0a66c2",
      },
    ],
  },
];

const STACK = [
  { name: "Node.js", slug: "nodedotjs", from: "#6ee787", to: "#30d158" },
  { name: "Python", slug: "python", from: "#5ac8fa", to: "#0a66c2" },
  { name: "PHP", slug: "php", from: "#8892bf", to: "#6a7bc9" },
  { name: "Symfony", slug: "symfony", from: "#2d2d2d", to: "#000000" },
  { name: "Doctrine", slug: "doctrine", from: "#f4a132", to: "#e67e22" },
  { name: "PostgreSQL", slug: "postgresql", from: "#64d2ff", to: "#0a84ff" },
  { name: "Prisma", slug: "prisma", from: "#2d2d2d", to: "#000000" },
  { name: "JavaScript", slug: "javascript", from: "#f7df1e", to: "#f0db4f" },
  { name: "React", slug: "react", from: "#61dafb", to: "#21a1c4" },
  { name: "Next.js", slug: "nextdotjs", from: "#2d2d2d", to: "#000000" },
  { name: "Tailwind", slug: "tailwindcss", from: "#38bdf8", to: "#0ea5e9" },
  { name: "Supabase", slug: "supabase", from: "#3ecf8e", to: "#249361" },
  { name: "Git", slug: "git", from: "#f05133", to: "#c13c24" },
  { name: "GitHub", slug: "github", from: "#2d2d2d", to: "#000000" },
  { name: "Postman", slug: "postman", from: "#ff9f6b", to: "#ff6b3d" },
  { name: "Docker", slug: "docker", from: "#5ac8fa", to: "#0a66c2" },
  { name: "Vercel", slug: "vercel", from: "#2d2d2d", to: "#000000" },
  { name: "JWT", slug: "jsonwebtokens", from: "#ffd60a", to: "#ff9f0a" },
  { name: "OWASP", slug: "owasp", from: "#bf5af2", to: "#7d3bd6" },
];

export default function Skills({ onBack }) {
  const setStatusBarDark = useStatusBar();

  useEffect(() => {
    setStatusBarDark(true);
    return () => setStatusBarDark(false);
  }, [setStatusBarDark]);

  function BrandIcon({ slug, name, size = 18 }) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}/ffffff`}
        alt={name}
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div className="-mx-7 -mt-16 h-[calc(100%+4rem)] flex flex-col bg-white text-[#1c1c1e] overflow-y-auto">
      <div className="px-6 pt-14 pb-1">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-[#007aff]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Accueil
        </button>
      </div>

      <div className="px-6 pt-2 pb-4">
        <h1 className="text-[32px] font-extrabold tracking-tight">
          Compétences
        </h1>
      </div>

      <div className="flex-1 px-4 pt-1 pb-10 bg-[#f2f2f7]">
        {SECTIONS.map((section) => (
          <div key={section.title} className="mt-4 first:mt-0">
            <div className="px-2 pb-1.5 text-xs font-medium uppercase tracking-wide text-[#8e8e93]">
              {section.title}
            </div>
            <div className="rounded-2xl overflow-hidden bg-white divide-y divide-[#e5e5ea]">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="w-full flex items-center gap-3 p-3 text-left"
                >
                  <span
                    className="w-9 h-9 rounded-[10px] grid place-items-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                    }}
                  >
                    <BrandIcon slug={item.slug} name={item.name} />
                  </span>
                  <div className="flex-1 min-w-0 text-[13px] leading-snug">
                    <span className="font-semibold">{item.name}</span>{" "}
                    <span className="text-[#6b6b70]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-4">
          <div className="px-2 pb-1.5 text-xs font-medium uppercase tracking-wide text-[#8e8e93]">
            La stack au complet
          </div>
          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 rounded-full bg-white pl-1.5 pr-3 py-1.5 text-[12px] font-medium text-[#1c1c1e] shadow-[0_1px_2px_rgba(0,0,0,.06)]"
              >
                <span
                  className="w-5 h-5 rounded-full grid place-items-center shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${tech.from}, ${tech.to})`,
                  }}
                >
                  <BrandIcon slug={tech.slug} name={tech.name} size={13} />
                </span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
