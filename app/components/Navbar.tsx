"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkHref = (hash: string) => {
    if (hash === "home") return "/";
    if (hash === "aboutus") return "/about";
    if (hash === "services") return "/services";
    if (hash === "projects") return "/projects";
    if (hash === "process") return "/process";
    if (hash === "faq") return "/faq";
    if (hash === "contact") return "/contact";
    return pathname === "/" ? `#${hash}` : `/#${hash}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-[94%]">
        {/* Main Floating Glass Navbar Capsule */}
        <div className="w-full bg-[#f1f5f9]/70 backdrop-blur-lg border border-white/40 rounded-full px-6 py-2.5 md:py-3 flex items-center justify-between shadow-lg">
          {/* Left: Logo with Custom Minimal House Icon (Matching Realtor mockup) */}
          <Link href="/" className="flex items-center gap-2 group">
            <svg
              className="w-6 h-6 text-[#0F172A]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Parallel diagonal roof lines from the logo image */}
              <path d="M3 11l9-9 9 9" />
              <path d="M9 21v-8h6v8" />
            </svg>
            <span className="font-sans font-extrabold text-lg md:text-xl tracking-tight text-[#0F172A]">
              Blume<span className="text-brand-gold">TS</span>
            </span>
          </Link>

          {/* Center: White Capsule Navigation Wrapper */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-white border border-[#e2e8f0]/80 rounded-full shadow-sm">
            <Link
              href="/"
              className={`px-5 py-1.5 font-sans font-bold text-xs tracking-wide rounded-full transition-all duration-300 ${
                pathname === "/"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-1.5 font-sans font-bold text-xs tracking-wide rounded-full transition-all duration-300 ${
                pathname === "/about"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              About us
            </Link>
            <Link
              href="/services"
              className={`px-4 py-1.5 font-sans font-bold text-xs tracking-wide rounded-full transition-all duration-300 ${
                pathname === "/services"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`px-4 py-1.5 font-sans font-bold text-xs tracking-wide rounded-full transition-all duration-300 ${
                pathname === "/projects"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Projects
            </Link>
            <div className="relative group/dropdown">
              <button className="px-4 py-1.5 font-sans font-bold text-xs tracking-wide text-[#475569] hover:text-[#0F172A] flex items-center gap-1 transition-colors duration-200">
                Pages
                <svg
                  className="w-3 h-3 text-[#475569]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {/* Dropdown Box */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-black/[0.06] rounded-2xl shadow-xl py-2.5 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 translate-y-1 group-hover/dropdown:translate-y-0">
                <Link
                  href={getLinkHref("process")}
                  className="block px-4 py-2 font-sans font-bold text-xs text-[#475569] hover:bg-slate-50 hover:text-[#0F172A] transition-colors"
                >
                  Our Process
                </Link>
                <Link
                  href={getLinkHref("faq")}
                  className="block px-4 py-2 font-sans font-bold text-xs text-[#475569] hover:bg-slate-50 hover:text-[#0F172A] transition-colors"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </nav>

          {/* Right: Phone, Separator, and CTA Button with Circular Arrow Icon */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+971585252114"
              className="flex items-center gap-2 font-sans font-bold text-[#0F172A] text-xs tracking-wide hover:text-brand-accent transition-colors"
            >
              {/* Phone Icon */}
              <svg
                className="w-3.5 h-3.5 text-[#475569]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.01 12.01 0 01-4.507-4.507c-.24-.441-.074-.927.302-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +971 58 525 2114
            </a>

            {/* Vertical Line Separator */}
            <div className="w-[1px] h-4 bg-[#cbd5e1]" />

            {/* Get a Quote Capsule Button with Circular Arrow Icon */}
            <Link
              href={getLinkHref("contact")}
              className="px-5 py-2 font-sans font-bold text-xs text-white bg-[#0F172A] rounded-full hover:bg-brand-accent transition-all duration-300 shadow-md flex items-center gap-2 group"
            >
              Get a Quote
              <div className="w-4 h-4 rounded-full bg-white text-[#0F172A] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M5 19L19 5M19 5H9M19 5V15"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#0F172A] text-white hover:bg-brand-accent transition-colors shadow"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute right-4 top-4 bottom-4 w-72 bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-[110%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="font-sans font-extrabold text-[#0F172A] text-lg">
                Blume<span className="text-brand-gold">TS</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 text-[#0F172A] hover:bg-slate-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {[
                "Home",
                "About us",
                "Services",
                "Projects",
                "Our Process",
                "FAQs",
              ].map((l) => {
                const key = l.toLowerCase().replace(" ", "");
                return (
                  <Link
                    key={l}
                    href={getLinkHref(key)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-sans font-bold text-sm transition-colors ${
                      (l === "Home" && pathname === "/") ||
                      (l === "About us" && pathname === "/about")
                        ? "text-[#0F172A]"
                        : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    {l}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="border-t pt-6 flex flex-col gap-4">
            <a
              href="tel:+971585252114"
              className="flex items-center gap-2 font-sans font-bold text-[#0F172A] text-sm"
            >
              <svg
                className="w-4 h-4 text-[#475569]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.01 12.01 0 01-4.507-4.507c-.24-.441-.074-.927.302-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +971 58 525 2114
            </a>
            <Link
              href={getLinkHref("contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center font-sans font-bold text-xs uppercase tracking-widest text-white bg-[#0F172A] rounded-full shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
