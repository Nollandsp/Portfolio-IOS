"use client";

export default function Application({
  onOpenProjects,
  onOpenSkills,
  onOpenParcours,
}) {
  return (
    <>
      <button
        onClick={onOpenProjects}
        className="flex flex-col items-center gap-1.5 group"
      >
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#5ac8fa] to-[#007aff]"
        >
          <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="#fff">
            <path d="M3 7.4a2 2 0 0 1 2-2h4.6L12 7.9h7a2 2 0 0 1 2 2v7.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          </svg>
        </span>
        <span
          className="text-[11px] text-white tracking-[-.01em] max-w-[74px] truncate
               [text-shadow:0_1px_3px_rgba(0,0,0,.5)]"
        >
          Projets
        </span>
      </button>
      <button
        onClick={onOpenSkills}
        className="flex flex-col items-center gap-1.5 group"
      >
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#bf5af2] to-[#7d3bd6]"
        >
          <svg
            className="w-[34px] h-[34px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8.5 6 3.5 12l5 6" />
            <path d="M15.5 6l5 6-5 6" />
          </svg>
        </span>
        <span
          className="text-[11px] text-white tracking-[-.01em] max-w-[74px] truncate
               [text-shadow:0_1px_3px_rgba(0,0,0,.5)]"
        >
          Compétences
        </span>
      </button>
      <button
        onClick={onOpenParcours}
        className="flex flex-col items-center gap-1.5 group"
      >
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#ff9f6b] to-[#ff6b3d]"
        >
          <svg className="w-[34px] h-[34px]" viewBox="0 0 24 24" fill="#fff">
            <circle cx="6.5" cy="7" r="2.4" />
            <circle cx="6.5" cy="17" r="2.4" />
            <rect x="11.5" y="5.6" width="9" height="2.8" rx="1.4" />
            <rect x="11.5" y="15.6" width="6.5" height="2.8" rx="1.4" />
          </svg>
        </span>
        <span
          className="text-[11px] text-white tracking-[-.01em] max-w-[74px] truncate
               [text-shadow:0_1px_3px_rgba(0,0,0,.5)]"
        >
          Parcours
        </span>
      </button>
      <button className="flex flex-col items-center gap-1.5 group">
        <span
          className="w-[60px] h-[60px] rounded-[15px] grid place-items-center
               shadow-[0_5px_14px_rgba(0,0,0,.28)]
               transition-transform duration-200 ease-[cubic-bezier(.32,.72,0,1)]
               group-active:scale-90
               bg-gradient-to-br from-[#4a4a4f] to-[#232326]"
        >
          <svg
            className="w-[34px] h-[34px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 6.5 2.8 12 7 17.5" />
            <path d="M17 6.5 21.2 12 17 17.5" />
            <path d="M13.6 4.6l-3.2 14.8" />
          </svg>
        </span>
        <span
          className="text-[11px] text-white tracking-[-.01em] max-w-[74px] truncate
               [text-shadow:0_1px_3px_rgba(0,0,0,.5)]"
        >
          GitHub
        </span>
      </button>
    </>
  );
}
