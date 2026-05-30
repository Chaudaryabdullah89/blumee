"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PRELOADER_COMPLETE_EVENT = "preloader-complete";
const MIN_DISPLAY_MS = 550;
const MAX_DISPLAY_MS = 1400;

export default function Preloader() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const complete = () => {
      window.dispatchEvent(new CustomEvent(PRELOADER_COMPLETE_EVENT));
      document.documentElement.dataset.preloaderDone = "true";
    };

    if (pathname !== "/") {
      complete();
      return;
    }

    setActive(true);
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let finished = false;

    const dismiss = () => {
      if (finished) return;
      finished = true;

      const remaining = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));
      window.setTimeout(() => {
        setProgress(100);
        setExiting(true);
        window.setTimeout(() => {
          setActive(false);
          document.body.style.overflow = "";
          complete();
        }, 500);
      }, remaining);
    };

    const progressTimer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return prev;
        return prev + 8 + Math.floor(Math.random() * 6);
      });
    }, 120);

    const readyPromise = document.fonts?.ready ?? Promise.resolve();
    const maxTimer = window.setTimeout(dismiss, MAX_DISPLAY_MS);

    readyPromise
      .then(() => {
        window.clearTimeout(maxTimer);
        dismiss();
      })
      .catch(() => dismiss());

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(maxTimer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!active) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0A1128] transition-opacity duration-500 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Loading site"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative flex flex-col items-center gap-10 px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Blume Technical Services
            </span>
          </span>
          <p className="font-sans text-xl font-black tracking-tight text-white md:text-4xl">
            BLUME TECHNICAL SERVICES
          </p>
        </div>

        <div className="w-56 md:w-64">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-gold via-[#f5e6a8] to-brand-gold transition-[width] duration-200 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
