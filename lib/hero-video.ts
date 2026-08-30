export const HERO_VIDEO_WEBM_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM_URL?.trim() || "/hero.webm";

export const HERO_VIDEO_MP4_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_MP4_URL?.trim() ||
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() ||
  "/hero-compressed.mp4";

export const HERO_POSTER_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER?.trim() || "/hero-poster.jpg";
