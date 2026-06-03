"use client";

import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { HERO_POSTER_URL, HERO_VIDEO_WEBM_URL, HERO_VIDEO_MP4_URL } from "@/lib/hero-video";

export function HeroBackground() {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Load video sources only when in viewport
          video.querySelectorAll("source").forEach((source) => {
            const s = source as HTMLSourceElement;
            if (s.dataset.src) {
              s.src = s.dataset.src;
            }
          });
          video.load();
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0">
      <img
        src={HERO_POSTER_URL}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <video
        ref={videoRef}
        poster={HERO_POSTER_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source data-src={HERO_VIDEO_WEBM_URL} type="video/webm" />
        <source data-src={HERO_VIDEO_MP4_URL} type="video/mp4" />
      </video>
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
