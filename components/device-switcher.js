"use client";

const DEVICES = [
  {
    id: "iphone",
    label: "iPhone",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <line x1="11" y1="18" x2="13" y2="18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "ipad",
    label: "iPad",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2.5" />
        <line x1="11.2" y1="18.5" x2="12.8" y2="18.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "mac",
    label: "Mac",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="13" rx="1.5" />
        <line x1="8" y1="20.5" x2="16" y2="20.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="20.5" />
      </svg>
    ),
  },
];

export default function DeviceSwitcher({ device, onChange }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md p-1 text-white/70">
      {DEVICES.map((d) => (
        <button
          key={d.id}
          type="button"
          onClick={() => onChange(d.id)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
            device === d.id
              ? "bg-white text-black"
              : "hover:text-white"
          }`}
        >
          {d.icon}
          {d.label}
        </button>
      ))}
    </div>
  );
}
