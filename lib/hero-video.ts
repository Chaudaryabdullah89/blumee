/** Public hero video URL — set NEXT_PUBLIC_HERO_VIDEO_URL in .env.local for CDN/hosted links. */
const FALLBACK_SRC = "/hero-video.mov";

export const HERO_VIDEO_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || FALLBACK_SRC;

/** Shown instantly while video buffers — set NEXT_PUBLIC_HERO_VIDEO_POSTER for your own frame. */
export const HERO_POSTER_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER?.trim() ||
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=75&w=1920";

export function heroVideoMimeType(url: string = HERO_VIDEO_URL): string {
  const path = url.split("?")[0]?.toLowerCase() ?? "";
  if (path.endsWith(".webm")) return "video/webm";
  if (path.endsWith(".mov")) return "video/quicktime";
  if (path.endsWith(".ogg") || path.endsWith(".ogv")) return "video/ogg";
  return "video/mp4";
}

export function isExternalHeroVideoUrl(url: string = HERO_VIDEO_URL): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function heroVideoOrigin(): string | null {
  if (!isExternalHeroVideoUrl()) return null;
  try {
    return new URL(HERO_VIDEO_URL).origin;
  } catch {
    return null;
  }
}
