"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useLenis } from "./SmoothScrollProvider";

const SHOW_AFTER_PX = 400;

export default function ScrollToTop() {
  const lenis = useLenis();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = (scroll: number) => setVisible(scroll > SHOW_AFTER_PX);

    if (lenis) {
      update(lenis.scroll);
      return lenis.on("scroll", ({ scroll }) => update(scroll));
    }

    const onScroll = () => update(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-brand-navy text-white shadow-lg shadow-brand-navy/25 transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}
