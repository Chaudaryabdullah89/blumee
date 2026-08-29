/**
 * Motion helpers shared by the scroll-driven animations.
 *
 * Scroll-linked ("scrub") animations recalculate on every scroll frame on the
 * main thread. That is affordable on a desktop pointer device and expensive on
 * a phone, so heavy effects are gated behind these checks.
 */

/** True when the visitor has asked the OS for reduced motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True for touch-primary devices (phones, tablets). */
export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

/**
 * True when scroll-linked and decorative animations should be skipped —
 * on touch devices, narrow viewports, or when reduced motion is requested.
 */
export function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return true;
  return (
    prefersReducedMotion() || isTouchDevice() || window.innerWidth < 768
  );
}
