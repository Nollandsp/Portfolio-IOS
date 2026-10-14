"use client";

export default function NotifProject() {
  return (
    <div className="flex items-center h-20 bg-white/20 backdrop-blur-xl backdrop-saturate-[1.8] rounded-[18px] p-3 text-white">
      <span
        className="w-[34px] h-[34px] rounded-[9px] grid place-items-center shrink-0
             bg-gradient-to-br from-[#5ac8fa] to-[#007aff]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M3 7a2 2 0 0 1 2-2h5l2 2.4h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      </span>
      <div className="ml-3 mb-2 flex flex-col flex-1">
        <div className="flex items-baseline justify-between">
          <span className="font-bold tracking-[-0.018em]">
            Projets
          </span>
          <span className="text-xs text-white/60">Maint.</span>
        </div>
        <span className="text-xs text-white/60">
          3 nouvelles application web à découvrir
        </span>
      </div>
    </div>
  );
}
