import Image from "next/image";

/**
 * Drop-in replacement for a `bg-cover bg-center` background div.
 *
 * A CSS `background-image` is invisible to the image optimiser: every visitor
 * downloads the full-size JPEG, phones included. Rendering through next/image
 * instead gives responsive srcsets, AVIF/WebP and lazy loading, while `fill` +
 * `object-cover` reproduces the same visual result.
 */
export default function BackgroundImage({
  src,
  alt = "",
  priority = false,
  sizes = "100vw",
  className = "",
  quality = 75,
}: {
  src: string;
  /** Empty by default: these are decorative backdrops behind their own copy. */
  alt?: string;
  /** Set on above-the-fold heroes so they are not lazy-loaded. */
  priority?: boolean;
  sizes?: string;
  /** Extra classes on the <img> itself (e.g. hover transforms). */
  className?: string;
  quality?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      priority={priority}
      // Decorative backdrops must not be announced by screen readers.
      aria-hidden={alt === "" ? true : undefined}
      className={`object-cover ${className}`}
    />
  );
}
