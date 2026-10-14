"use client";

const DEVICES = [
  {
    id: "iphone",
    label: "iPhone",
    desc: "Portfolio complet",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <line x1="11" y1="18" x2="13" y2="18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "ipad",
    label: "iPad",
    desc: "Bientôt disponible",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="2" width="16" height="20" rx="2.5" />
        <line x1="11.2" y1="18.5" x2="12.8" y2="18.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "mac",
    label: "Mac",
    desc: "Bientôt disponible",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="4" width="20" height="13" rx="1.5" />
        <line x1="8" y1="20.5" x2="16" y2="20.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="20.5" />
      </svg>
    ),
  },
];

export default function DevicePicker({ onSelect }) {
  return (
    <div className="flex flex-col items-center gap-10 px-6 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-white tracking-tight">
          Sur quel appareil veux-tu voir ce portfolio ?
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Choisis une version pour continuer.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {DEVICES.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => onSelect(d.id)}
            className="flex flex-col items-center gap-3 w-40 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {d.icon}
            <span className="text-sm font-medium">{d.label}</span>
            <span className="text-[11px] text-white/40">{d.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
