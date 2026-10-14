"use client";

export default function NotifTerminal() {
  return (
    <div className="flex items-center h-20 bg-white/20 backdrop-blur-xl backdrop-saturate-[1.8] rounded-[18px] p-3 text-white">
      <span
        className="w-[34px] h-[34px] rounded-[9px] grid place-items-center shrink-0
             bg-gradient-to-br from-[#30d158] to-[#1e9e3e]"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8l4 4-4 4" />
          <path d="M13 16h6" />
        </svg>
      </span>
      <div className="ml-3 mb-2 flex flex-col flex-1">
        <div className="flex items-baseline justify-between">
          <span className="font-bold tracking-[-0.018em]">Terminal</span>
          <span className="text-xs text-white/60">Maint.</span>
        </div>
        <span className="text-xs text-white/60">
          Session prête. Tapez "Help" pour explorer
        </span>
      </div>
    </div>
  );
}
