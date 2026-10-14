"use client";

import { useEffect, useState } from "react";
import { StatusBarContext } from "./status-bar-context";

const WALLPAPER =
  "linear-gradient(180deg, #1d1b2a 0%, #2f2350 18%, #52377D 38%, #7F448B 58%, #BF547B 78%, #D97171 100%)";

export default function Iphone({ children, home }) {
  const [s, setS] = useState(1);
  const [now, setNow] = useState(null);
  const [locked, setLocked] = useState(true);
  const [statusBarDark, setStatusBarDark] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    : " ";
  const rawDate = now
    ? now.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : " ";
  const date = rawDate.charAt(0).toUpperCase() + rawDate.slice(1);

  useEffect(() => {
    const updateScale = () => {
      const byHeight = (window.innerHeight - 128) / 844;
      const byWidth = (window.innerWidth - 32) / 414;
      setS(Math.min(1, byHeight, byWidth));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div style={{ width: 390 * s, height: 844 * s }}>
    <div
      style={{ transform: `scale(${s})`, transformOrigin: "top left" }}
      className="relative w-[390px] h-[844px] rounded-[56px] bg-[#0b0b0d] p-3 shadow-[0_0_0_2px_#2b2b30,0_40px_90px_rgba(0,0,0,.7),0_0_60px_rgba(120,90,220,.12)]"
    >
      <div
        className="relative w-full h-full rounded-[45px] overflow-hidden isolate"
        style={{ background: WALLPAPER }}
      >
        <div
          className={`absolute top-4 left-0 right-0 px-7 flex items-center justify-between z-[60] ${
            statusBarDark ? "text-[#1c1c1e]" : "text-white"
          }`}
        >
          <div className="text-sm font-semibold tabular-nums leading-none">
            {time}
          </div>
          <div className="flex items-center gap-1.5">
            {/* réseau */}
            <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
              <rect x="0" y="7" width="3" height="5" rx="0.5" />
              <rect x="5" y="5" width="3" height="7" rx="0.5" />
              <rect x="10" y="3" width="3" height="9" rx="0.5" />
              <rect x="15" y="0" width="3" height="12" rx="0.5" />
            </svg>
            {/* wifi */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 10.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z" />
              <path d="M8 6.6c1.6 0 3.1.6 4.3 1.6l-1.4 1.5A4.3 4.3 0 0 0 8 8.6c-1.1 0-2.1.4-2.9 1.1L3.7 8.2A6.3 6.3 0 0 1 8 6.6Z" />
              <path d="M8 3c2.6 0 5 1 6.8 2.6l-1.4 1.5A8.3 8.3 0 0 0 8 5c-2.1 0-4.1.8-5.6 2.1L1 5.6A10.3 10.3 0 0 1 8 3Z" />
            </svg>
            {/* batterie */}
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="20"
                height="11"
                rx="2.5"
                stroke="currentColor"
              />
              <rect
                x="2"
                y="2"
                width="17"
                height="8"
                rx="1.3"
                fill="currentColor"
              />
              <rect
                x="21.5"
                y="4"
                width="1.5"
                height="4"
                rx="0.7"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* accueil, révélé sous l'écran verrouillé */}
        <div className="absolute inset-0 px-7 pt-16">
          <StatusBarContext.Provider value={setStatusBarDark}>
            {home}
          </StatusBarContext.Provider>
        </div>

        {/* écran verrouillé */}
        <div
          onClick={() => locked && setLocked(false)}
          style={{ background: WALLPAPER }}
          className={`absolute inset-0 z-[55] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            locked ? "translate-y-0" : "-translate-y-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 flex flex-col justify-between px-6 pt-14 pb-10 text-white">
            <div>
              <div className="text-base text-center font-medium text-white/80">
                {date}
              </div>
              <div className="text-[76px] text-center font-semibold tracking-[-0.045em] tabular-nums">
                {time}
              </div>
            </div>

            <div className="text-center text-xs text-white/60">
              Touchez l&apos;écran pour déverrouiller
              <br />
              bas revient à l&apos;accueil
            </div>
          </div>

          <div className="absolute top-50 inset-x-6 flex flex-col gap-3">
            {children}
          </div>
        </div>

        <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-8 min-w-[112px] rounded-[20px] bg-black z-[70]"></div>
      </div>
    </div>
    </div>
  );
}
