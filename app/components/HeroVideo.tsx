"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { HERO_POSTER_URL, HERO_VIDEO_URL } from "@/lib/hero-video";

/** Single hero background video — poster first, fades in when first frames are ready. */
export function HeroBackgroundVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      markReady();
      return;
    }

    video.addEventListener("canplay", markReady, { once: true });
    video.addEventListener("loadeddata", markReady, { once: true });

    return () => {
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("loadeddata", markReady);
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src={HERO_POSTER_URL}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={HERO_POSTER_URL}
        className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-700 ease-out ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

/** Card uses poster only — avoids downloading the same large file twice. */
export function HeroVideoCard() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900 shadow-inner">
      <img
        src={HERO_POSTER_URL}
        alt="Project showcase preview"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/20" />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md">
          <Play className="ml-1 h-6 w-6 fill-white text-white" />
        </span>
      </div>
    </div>
  );
}
