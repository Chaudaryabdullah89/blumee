"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    setVisible(true);
    setProgress(0);
    setIsFadingOut(false);
    document.body.style.overflow = "hidden";

    let startTimestamp: number | null = null;
    const duration = 1400; // Organic 1.4-second loading phase
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Luxurious ease-in-out curve
      const easedProgress = rawProgress < 0.5 
        ? 2 * rawProgress * rawProgress 
        : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      const currentPercent = Math.floor(easedProgress * 100);
      setProgress(currentPercent);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setIsFadingOut(true);
        const timer = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 800); // Matches the cubic slide transition duration
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!visible) return null;

  // Exact math for 90px radius circle circumference: 2 * Math.PI * 90 = ~565.48
  const circumference = 565.48;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050A18] select-none transition-all duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isFadingOut ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Decorative Blueprint Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full rotate-[-90deg]">
          {/* Background track */}
          <circle
            cx="100"
            cy="100"
            r="90"
            className="stroke-[#FCFCFD]/[0.02]"
            strokeWidth="1"
            fill="none"
          />
          {/* Animated golden segment */}
          <circle
            cx="100"
            cy="100"
            r="90"
            className="stroke-brand-gold transition-all duration-75"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Center content */}
      <div className={`relative flex flex-col items-center gap-6 transition-all duration-500 ${
        isFadingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}>
        {/* Monogram / Blueprint Graphic */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <span className="font-sans font-black text-3xl text-brand-gold tracking-widest leading-none ml-1">B</span>
          {/* Rotating outlines */}
          <div className="absolute inset-0 border border-brand-gold/20 rounded-xl rotate-45 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 border border-white/5 rounded-xl animate-[spin_15s_linear_infinite_reverse]" />
        </div>

        {/* Brand Typography */}
        <div className="text-center flex flex-col gap-1.5 mt-2">
          <h1 className="font-sans font-black text-2xl md:text-3xl uppercase tracking-[0.3em] text-[#FCFCFD] leading-none">
            Blume
          </h1>
          <p className="font-sans font-semibold text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-brand-gold">
            Technical Services
          </p>
        </div>

        {/* Counter Percent */}
        <div className="mt-4 flex items-baseline font-sans font-black text-4xl md:text-5xl text-[#FCFCFD] tabular-nums tracking-tighter">
          <span>{String(progress).padStart(2, "0")}</span>
          <span className="text-brand-gold text-lg md:text-xl font-bold ml-1">%</span>
        </div>
      </div>

      {/* Bottom Loading Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/[0.04]">
        <div
          className="h-full bg-brand-gold transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
