"use client";

export function AboutWidget() {
  return (
    <div
      className="w-full rounded-[24px] p-4 text-white shadow-[0_10px_24px_rgba(0,0,0,.35)]"
      style={{
        background: "linear-gradient(135deg, #7F448B 0%, #BF547B 100%)",
      }}
    >
      <div className="flex items-center gap-1.5 text-xs font-medium text-white/80">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
          <path d="M3 7a2 2 0 0 1 2-2h5l2 2.4h7a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
        Portfolio
      </div>

      <div className="mt-2 text-lg font-bold tracking-[-0.015em]">
        Nollan Da Silva Pereira
      </div>

      <p className="mt-1 text-[13px] leading-snug text-white/85">
        Développeur web — je construis des applications complètes, du modèle
        de données jusqu&apos;à l&apos;interface.
      </p>

      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
        Disponible en septembre 2026
      </div>
    </div>
  );
}