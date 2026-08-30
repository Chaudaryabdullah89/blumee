"use client";

import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { HERO_POSTER_URL, HERO_VIDEO_WEBM_URL, HERO_VIDEO_MP4_URL } from "@/lib/hero-video";

/**
 * Starts the hero video.
 *
 * `eager` is used for the full-bleed hero background, which is above the fold
 * on every visit — it fetches straight away so the motion is already running
 * when the preloader lifts. Everything else waits for the element to scroll
 * into view before spending the bandwidth.
 */
function useHeroVideo(eager: boolean) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = () => {
      video.querySelectorAll("source").forEach((source) => {
        const s = source as HTMLSourceElement;
        if (s.dataset.src && !s.src) {
          s.src = s.dataset.src;
        }
      });
      video.load();
      video.play().catch(() => {});
    };

    if (eager) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [eager]);

  return { ready, setReady, videoRef };
}

function HeroVideoLayer({
  posterClassName,
  videoClassName,
  posterAlt = "",
  eager = false,
  showPlayOverlayUntilReady = false,
}: {
  posterClassName: string;
  videoClassName: string;
  posterAlt?: string;
  eager?: boolean;
  showPlayOverlayUntilReady?: boolean;
}) {
  const { ready, setReady, videoRef } = useHeroVideo(eager);

  return (
    <>
      <img
        src={HERO_POSTER_URL}
        alt={posterAlt}
        className={`${posterClassName} transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        poster={HERO_POSTER_URL}
        autoPlay
        muted
        loop
        playsInline
        preload={eager ? "auto" : "none"}
        onCanPlay={() => setReady(true)}
        className={`${videoClassName} transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source data-src={HERO_VIDEO_WEBM_URL} type="video/webm" />
        <source data-src={HERO_VIDEO_MP4_URL} type="video/mp4" />
      </video>
      {showPlayOverlayUntilReady && !ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/20 pointer-events-none">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md">
            <Play className="ml-1 h-6 w-6 fill-white text-white" />
          </span>
        </div>
      )}
    </>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <HeroVideoLayer
        eager
        posterClassName="absolute inset-0 h-full w-full scale-105 object-cover"
        videoClassName="absolute inset-0 h-full w-full scale-105 object-cover"
      />
    </div>
  );
}

export function HeroCardPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <HeroVideoLayer
        posterAlt="Project showcase"
        posterClassName="absolute inset-0 h-full w-full object-cover"
        videoClassName="absolute inset-0 h-full w-full object-cover"
        showPlayOverlayUntilReady
      />
    </div>
  );
}
