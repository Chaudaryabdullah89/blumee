"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "./SmoothScrollProvider";

export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.6 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, lenis]);

  return null;
}
