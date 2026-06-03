"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { HERO_POSTER_URL, HERO_VIDEO_URL } from "@/lib/hero-video";

export function HeroBackground() {
  const [ready, setReady] = useState(false);

  return (
    <div className="absolute inset-0">
      <img
        src={HERO_POSTER_URL}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <video
        src={HERO_VIDEO_URL}
        poster={HERO_POSTER_URL}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"
          }`}
      />
    </div>
  );
}

export function HeroCardPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <img
        src={HERO_POSTER_URL}
        alt="Project showcase"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/20">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md">
          <Play className="ml-1 h-6 w-6 fill-white text-white" />
        </span>
      </div>
    </div>
  );
}
