"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Letters of the wordmark, revealed one after another. */
const WORDMARK = ["B", "L", "U", "M", "E"];

const LOAD_DURATION = 1100; // ms spent counting up
const EXIT_DURATION = 900; // ms for the shutters to clear the viewport

export default function Preloader() {
  const pathname = usePathname();

  // Initialised from the first render so the panel is painted with the very
  // first frame — a preloader that appears a tick late is worse than none.
  const [visible, setVisible] = useState(pathname === "/");
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = "hidden";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const duration = reduceMotion ? 400 : LOAD_DURATION;

    let startTimestamp: number | null = null;
    let animationFrameId = 0;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const t = Math.min((timestamp - startTimestamp) / duration, 1);

      // Fast out of the gate, easing into 100 — reads as "nearly there".
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setIsExiting(true);
        exitTimer = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, EXIT_DURATION);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (exitTimer) clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const shutter =
    "absolute inset-x-0 h-1/2 bg-[#050A18] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]";

  return (
    <div
      className="fixed inset-0 z-[200] select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Two shutters that part vertically to reveal the page beneath. */}
      <div
        className={`${shutter} top-0 origin-top ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <div
        className={`${shutter} bottom-0 origin-bottom ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Content sits above the shutters and clears out first. */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-8 transition-opacity duration-500 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Wordmark — letters rise into place in sequence. */}
        <div className="flex items-baseline overflow-hidden">
          {WORDMARK.map((letter, i) => (
            <span
              key={i}
              className="preloader-letter font-sans font-black text-[15vw] leading-none tracking-[0.08em] text-[#FCFCFD] sm:text-6xl md:text-7xl"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Hairline that fills with the load progress. */}
        <div className="mt-6 h-px w-52 max-w-[70vw] overflow-hidden bg-white/10 sm:w-64">
          <div
            className="h-full bg-brand-gold"
            style={{
              width: `${progress}%`,
              transition: "width 120ms linear",
            }}
          />
        </div>

        <p className="mt-5 font-sans text-[9px] font-semibold uppercase tracking-[0.45em] text-brand-gold sm:text-[10px]">
          Technical Services
        </p>
      </div>

      {/* Corner meta — kept off the optical centre so the wordmark leads. */}
      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-6 transition-opacity duration-500 sm:px-10 sm:pb-8 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
          Dubai &middot; U.A.E.
        </span>
        <span className="font-sans text-2xl font-black tabular-nums leading-none tracking-tighter text-white/80 sm:text-3xl">
          {String(progress).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
