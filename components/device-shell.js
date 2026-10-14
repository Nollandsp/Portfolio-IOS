"use client";

import { useEffect, useState } from "react";
import Iphone from "./iphone";
import DeviceSwitcher from "./device-switcher";
import DevicePicker from "./device-picker";

function ComingSoon({ label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-white/50">
      <div className="text-sm">Version {label} bientôt disponible</div>
    </div>
  );
}

export default function DeviceShell({ children, home }) {
  const [ready, setReady] = useState(false);
  const [forcedMobile, setForcedMobile] = useState(false);
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setForcedMobile(true);
      setDevice("iphone");
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  if (!device) {
    return (
      <div className="relative flex flex-col flex-1 min-h-0 items-center justify-center bg-[radial-gradient(120%_100%_at_50%_0%,#1d1b2a_0%,#0a0a0c_62%)]">
        <DevicePicker onSelect={setDevice} />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col flex-1 min-h-0 items-center justify-center bg-[radial-gradient(120%_100%_at_50%_0%,#1d1b2a_0%,#0a0a0c_62%)] ${
        forcedMobile ? "" : "pt-20"
      }`}
    >
      {!forcedMobile && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
          <DeviceSwitcher device={device} onChange={setDevice} />
        </div>
      )}

      {device === "iphone" && <Iphone home={home}>{children}</Iphone>}
      {device === "ipad" && <ComingSoon label="iPad" />}
      {device === "mac" && <ComingSoon label="Mac" />}
    </div>
  );
}
