"use client";

export default function NotifDispo() {
  return (
    <div className="flex items-center h-20 bg-white/20 backdrop-blur-xl backdrop-saturate-[1.8] rounded-[18px] p-3 text-white">
      <span
        className="w-[34px] h-[34px] rounded-[9px] grid place-items-center shrink-0
             bg-gradient-to-br from-[#ffd60a] to-[#ff9f0a]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2 4 6v6c0 5 3.4 9 8 10 4.6-1 8-5 8-10V6Z" />
        </svg>
      </span>
      <div className="ml-3 mb-2 flex flex-col flex-1">
        <div className="flex items-baseline justify-between">
          <span className="font-bold tracking-[-0.018em]">Disponibilité Alternance</span>
          <span className="text-xs text-white/60">Maint.</span>
        </div>
        <span className="text-xs text-white/60">
          Développeur Web - Septembre 2026
        </span>
      </div>
    </div>
  );
}
