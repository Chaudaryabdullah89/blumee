"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 900);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-navy transition-opacity duration-500">
      <p className="font-sans text-2xl font-black tracking-tight text-white md:text-4xl">
        BLUME TECHNICAL SERVICES
      </p>
    </div>
  );
}
