"use client";

import { useEffect } from "react";
import { useStatusBar } from "../../components/status-bar-context";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Weathora",
    desc: "Application météo full-stack — API externes, cache, comptes utilisateurs.",
  },
  {
    name: "Revline",
    desc: "Fiche prête à recevoir le vrai contenu du projet.",
  },
  {
    name: "TaskFlow API",
    desc: "API REST Symfony — entités Doctrine, JWT, Voters, tests.",
  },
];

export default function Project({ onBack }) {
  const setStatusBarDark = useStatusBar();

  useEffect(() => {
    setStatusBarDark(true);
    return () => setStatusBarDark(false);
  }, [setStatusBarDark]);

  function FolderIcon() {
    return (
      <span className="w-9 h-9 rounded-[10px] grid place-items-center shrink-0 bg-gradient-to-br from-[#5ac8fa] to-[#007aff]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M3 7a2 2 0 0 1 2-2h5l2 2.4h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      </span>
    );
  }

  function ChevronIcon() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c7c7cc"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
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

      <div className="px-6 pt-2 pb-4 ">
        <h1 className="text-[32px] font-extrabold tracking-tight">Projets</h1>
        <p className="mt-1 text-sm text-[#8e8e93]">
          {PROJECTS.length} applications, portées de bout en bout
        </p>
      </div>

      <div className="flex-1 px-4 pt-4 pb-10 bg-[#f2f2f7]">
        <div className="rounded-2xl overflow-hidden bg-white divide-y divide-[#e5e5ea]">
          {PROJECTS.map((p) => (
            <button
              key={p.name}
              className="w-full flex items-center gap-3 p-3 text-left"
            >
              <FolderIcon />
              <div className="flex-1 min-w-0 text-[13px] leading-snug">
                <span className="font-semibold">{p.name}</span>{" "}
                <span className="text-[#6b6b70]">{p.desc}</span>
              </div>
              <ChevronIcon />
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-2xl overflow-hidden bg-white">
          <button className="w-full flex items-center gap-3 p-3 text-left">
            <span className="w-9 h-9 rounded-[10px] grid place-items-center shrink-0 bg-[#1c1c1e]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.5 7 4 12l4.5 5" />
                <path d="M15.5 7 20 12l-4.5 5" />
              </svg>
            </span>
            <Link href="https://github.com/Nollandsp" target="_blank">
              <span className="flex-1 text-[13px] font-medium text-[#007aff]">
                Tout le code sur GitHub
              </span>
            </Link>
            <ChevronIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
