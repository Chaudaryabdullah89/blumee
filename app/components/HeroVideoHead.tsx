import { HERO_POSTER_URL, heroVideoOrigin } from "@/lib/hero-video";

/** Preload poster image + CDN connection in document head (server component). */
export default function HeroVideoHead() {
  const origin = heroVideoOrigin();

  return (
    <>
      <link rel="preload" as="image" href={HERO_POSTER_URL} fetchPriority="high" />
      {origin ? <link rel="preconnect" href={origin} crossOrigin="anonymous" /> : null}
    </>
  );
}
