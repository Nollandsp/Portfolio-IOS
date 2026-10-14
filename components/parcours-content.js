"use client";

import { useEffect } from "react";
import { useStatusBar } from "./status-bar-context";

const EXPERIENCES = [
  {
    period: "08/2025 – 11/2025",
    title: "Développeur Web",
    org: "OnRuntime (stage)",
    place: "Rouen",
    desc: "Sécurisation applicative : tests de conformité, recette fonctionnelle et audit de fonctionnalités. Création de tutoriels vidéo en anglais pour l'onboarding.",
  },
  {
    period: "07/2024 – 12/2024",
    title: "Manutentionnaire",
    org: "Paulstra",
    place: "Etrepagny",
    desc: "Préparation de commandes aéronautiques et administration RH (fiches de poste).",
  },
];

const FORMATIONS = [
  {
    period: "09/2026",
    title: "Bachelor Cybersécurité B3",
    org: "École 2600 — RNCP Niv. 6 (Bac+3)",
    place: "Montigny-le-Bretonneux",
    desc: "Pentest, défense des systèmes, intégration sécurité DevOps/DevSecOps.",
  },
  {
    period: "03/2024 – 12/2025",
    title: "Titre Pro. Développeur Web",
    org: "AFCI — RNCP Niveau 5 (Bac+2)",
    place: "Beauvais",
    desc: "Conception d'applications web/mobile, API REST, bases de données, bonnes pratiques et versioning (Git).",
  },
  {
    period: "09/2020 – 07/2022",
    title: "BTS Gestion de la PME",
    org: "Lycée Louise Michel",
    place: "Gisors",
    desc: "",
  },
  {
    period: "09/2016 – 07/2020",
    title: "Baccalauréat STMG",
    org: "Lycée Louise Michel",
    place: "Gisors",
    desc: "",
  },
];

const CERTIFICATIONS = [
  "CISCO Networking Basics",
  "TryHackMe Pre Security Certificate",
  "CISCO Introduction to Cybersecurity",
];

const OBJECTIVES_2026 = [
  "TryHackMe SOC Level 1 (en cours)",
  "CompTIA Security+",
  "GitLab CI/CD Associate",
  "AWS Cloud Practitioner",
];

export default function ParcoursContent({ onBack }) {
  const setStatusBarDark = useStatusBar();

  useEffect(() => {
    setStatusBarDark(true);
    return () => setStatusBarDark(false);
  }, [setStatusBarDark]);

  function TimelineGroup({ title, items }) {
    return (
      <div className="mt-4 first:mt-0">
        <div className="px-2 pb-1.5 text-xs font-medium uppercase tracking-wide text-[#8e8e93]">
          {title}
        </div>
        <div className="rounded-2xl overflow-hidden bg-white divide-y divide-[#e5e5ea]">
          {items.map((item) => (
            <div key={item.title + item.period} className="p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-semibold text-[#1c1c1e]">
                  {item.title}
                </span>
                <span className="shrink-0 rounded-full bg-[#f2f2f7] px-2 py-0.5 text-[11px] font-medium text-[#6b6b70]">
                  {item.period}
                </span>
              </div>
              <div className="mt-0.5 text-[12px] text-[#6b6b70]">
                {item.org} · {item.place}
              </div>
              {item.desc && (
                <p className="mt-1.5 text-[12px] leading-snug text-[#8e8e93]">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
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
          Parcours
        </h1>
        <p className="mt-1 text-sm text-[#8e8e93]">
          Bachelor Cybersécurité · Alternance Développeur Web
        </p>
      </div>

      <div className="flex-1 px-4 pt-1 pb-10 bg-[#f2f2f7]">
        <TimelineGroup
          title="Expériences professionnelles"
          items={EXPERIENCES}
        />
        <TimelineGroup title="Diplômes et formations" items={FORMATIONS} />

        <div className="mt-4">
          <div className="px-2 pb-1.5 text-xs font-medium uppercase tracking-wide text-[#8e8e93]">
            Certifications
          </div>
          <div className="rounded-2xl overflow-hidden bg-white divide-y divide-[#e5e5ea]">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 p-3 text-[13px] text-[#1c1c1e]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shrink-0" />
                {cert}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <div className="px-2 pb-1.5 text-xs font-medium uppercase tracking-wide text-[#8e8e93]">
            Objectifs 2026
          </div>
          <div className="flex flex-wrap gap-2">
            {OBJECTIVES_2026.map((goal) => (
              <span
                key={goal}
                className="rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-[#1c1c1e] shadow-[0_1px_2px_rgba(0,0,0,.06)]"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
