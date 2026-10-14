"use client";

const APPS = [
  {
    label: "Projets",
    from: "#5ac8fa",
    to: "#007aff",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M3 7a2 2 0 0 1 2-2h5l2 2.4h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      </svg>
    ),
  },
  {
    label: "Terminal",
    from: "#30d158",
    to: "#1e9e3e",
    icon: (
      <svg
        width="24"
        height="24"
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
    ),
  },
  {
    label: "Dispo.",
    from: "#ffd60a",
    to: "#ff9f0a",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2 4 6v6c0 5 3.4 9 8 10 4.6-1 8-5 8-10V6Z" />
      </svg>
    ),
  },
];

export default function IphoneHome() {
  return (
    <div className="absolute inset-0 px-7 pt-28 text-white">
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {APPS.map((app) => (
          <div key={app.label} className="flex flex-col items-center gap-1.5">
            <div
              className="w-14 h-14 rounded-[16px] grid place-items-center shadow-[0_5px_14px_rgba(0,0,0,.35)]"
              style={{
                background: `linear-gradient(135deg, ${app.from}, ${app.to})`,
              }}
            >
              {app.icon}
            </div>
            <span className="text-[11px] text-white/90">{app.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
