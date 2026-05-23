"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const PRELOADER_COMPLETE_EVENT = "preloader-complete";
const HERO_VIDEO_SRC = "/hero-video.mov";
const MIN_DISPLAY_MS = 900;
const MAX_WAIT_MS = 15000;

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
        }, 650);
      }, remaining);
    };

    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");

    const onProgress = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return;
      const pct = Math.min(99, Math.round((video.buffered.end(0) / video.duration) * 100));
      setProgress((prev) => Math.max(prev, pct));
    };

    const onReady = () => {
      setProgress(100);
      dismiss();
    };

    video.addEventListener("progress", onProgress);
    video.addEventListener("canplaythrough", onReady, { once: true });
    video.addEventListener("loadeddata", onReady, { once: true });
    video.addEventListener("error", onReady, { once: true });

    video.src = HERO_VIDEO_SRC;
    video.load();

    const maxTimer = window.setTimeout(onReady, MAX_WAIT_MS);

    return () => {
      window.clearTimeout(maxTimer);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("error", onReady);
      video.removeAttribute("src");
      video.load();
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!active) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0A1128] transition-opacity duration-[650ms] ease-out ${exiting ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Loading site"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-brand-gold">
              Loading experience
            </span>
          </span>
          <p className="font-sans font-black text-xl md:text-4xl tracking-tight text-white">
            BLUME TECHNICAL SERVICES
          </p>
          <p className="font-sans text-sm text-slate-400 max-w-xs">
            Preparing cinematic visuals…
          </p>
        </div>

        <div className="w-56 md:w-64">
          <div className="h-[2px] w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-gold via-[#f5e6a8] to-brand-gold transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-center font-sans text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
