import BackgroundImage from "./BackgroundImage";

/**
 * Hero imagery.
 *
 * These were previously a looping showreel of a luxury designer apartment,
 * which oversold the business and shipped ~1.6MB of video to every visitor.
 * Both slots now use stills of the work actually carried out, served through
 * the image optimiser.
 */

const HERO_BACKDROP = "/img/screeding-powerfloat.jpg";
const HERO_CARD = "/projects/gypsum-ceiling-ornate.jpg";

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <BackgroundImage
        src={HERO_BACKDROP}
        // Largest element above the fold — load it eagerly.
        priority
        sizes="100vw"
        className="scale-105"
      />
    </div>
  );
}

export function HeroCardPreview() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <BackgroundImage
        src={HERO_CARD}
        alt="Ornate gypsum ceiling completed by our in-house team"
        priority
        sizes="(max-width: 1024px) 90vw, 28rem"
      />
    </div>
  );
}
