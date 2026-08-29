"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Send,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroBackground, HeroCardPreview } from "./components/Hero";
import { submitContactForm } from "@/lib/submit-contact-form";

export default function Home() {
  // State for FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // State for Cost Estimator Form
  const [estName, setEstName] = useState("");
  const [estEmail, setEstEmail] = useState("");
  const [estPhone, setEstPhone] = useState("");
  const [estService, setEstService] = useState("screeding");
  const [estLocation, setEstLocation] = useState("dubai");
  const [estMessage, setEstMessage] = useState("");
  const [estSubmitted, setEstSubmitted] = useState(false);
  const [estIsSubmitting, setEstIsSubmitting] = useState(false);
  const [estError, setEstError] = useState("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Animations (delayed so the preloader can slide up completely)
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          delay: 1.5,
        },
      );

      gsap.fromTo(
        ".hero-title-line",
        { y: 80, opacity: 0, skewY: 4 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.2,
          delay: 1.6,
        },
      );

      gsap.to(".hero-video-card", {
        y: -40,
        scale: 1.04,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Editorial Text Inline Capsule Animations — clipPath reveal (no width conflict)
      gsap.fromTo(
        ".capsule-img",
        { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0%)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".editorial-heading",
            start: "top 80%",
          },
        },
      );

      // 3. Stats Counter Animation (stat-counters are currently bypassed as stats are qualitative)
      const statElements = document.querySelectorAll(".stat-counter");
      statElements.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.floor(obj.val)}${suffix}`;
          },
        });
      });

      // 4. SVG Blueprint Draw-In
      const blueprintLines = document.querySelectorAll(".blueprint-path");
      blueprintLines.forEach((line) => {
        const pathEl = line as SVGPathElement | SVGLineElement | SVGRectElement;
        let length = 1000;
        const tag = pathEl.tagName.toLowerCase();
        if (tag === "rect") {
          const w = parseFloat(pathEl.getAttribute("width") || "0");
          const h = parseFloat(pathEl.getAttribute("height") || "0");
          length = (w + h) * 2;
        } else if (tag === "line") {
          const x1 = parseFloat(pathEl.getAttribute("x1") || "0");
          const y1 = parseFloat(pathEl.getAttribute("y1") || "0");
          const x2 = parseFloat(pathEl.getAttribute("x2") || "0");
          const y2 = parseFloat(pathEl.getAttribute("y2") || "0");
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        } else {
          length = pathEl.getTotalLength();
        }

        gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(pathEl, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: ".blueprint-container",
            start: "top 80%",
            end: "bottom 35%",
            scrub: 1.2,
          },
        });
      });

      // 5. Services Cards Cascading Entrance
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 78%",
          },
        },
      );

      // 6. Featured Projects Cards Parallax Entrance
      gsap.fromTo(
        ".project-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          },
        },
      );

      // 7. Process Step Active Highlighting Timeline
      const steps = document.querySelectorAll(".process-step");
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { x: 30, opacity: 0.3, scale: 0.98 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 78%",
              end: "bottom 32%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });

      // 8. Our Story Section Columns entrance
      gsap.fromTo(
        ".about-reveal",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 78%",
          },
        },
      );

      // 9. CTA Section entrance
      gsap.fromTo(
        ".cta-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: "What trades does Blume cover?",
      a: "We are a specialist trade contractor across six disciplines: floor screeding, block work and masonry, plastering and painting, gypsum works and false ceilings, interior fit-out and renovation, and MEP. Each is run by its own crews and supervision, so a space can go from bare structure to finished handover under one contract.",
    },
    {
      q: "What tolerances do you guarantee on screeded floors?",
      a: "Surface regularity is measured as the maximum permissible gap beneath a 2m straightedge: SR1 (3mm) for high-specification floors, SR2 (5mm) for normal-specification floors, and SR3 (10mm) for utility-specification floors — verified with a level and SR survey on every bay, plus soundness and moisture testing before handover.",
    },
    {
      q: "Are you a licensed and approved contractor?",
      a: "Yes. Blume Technical Services L.L.C. holds Professional Trade License No. 959319 issued by Dubai's Department of Economy and Tourism, is VAT registered (TRN 100564723300003), and is a reviewed and approved subcontractor / applicator for leading UAE consultants including Arcadis, National Engineering Bureau, Dewan Architects + Engineers and KEO International.",
    },
    {
      q: "Are you certified by the material manufacturers you install?",
      a: "Yes. We are a registered approved applicator for Al Gurg Fosroc, MAPEI Construction Chemicals, Master Builders Solutions, Flowcrete Middle East and NYA Technical Services / SBI Industries — for epoxy, polyurethane, traffic deck and screed systems, executed under manufacturer specification and, where required, their site supervision.",
    },
    {
      q: "How fast can you mobilize crews to site?",
      a: "Each trade operates with its own crews, supervision and plant — forced-action mixers, screed pumps and rotary laser levels for screeding, plus masonry, plastering and gypsum gangs. Once approvals and access are in place, we mobilise quickly and hold programme on repetitive floor-by-floor and villa-by-villa sequences.",
    },
    {
      q: "Which locations do you cover?",
      a: "From our base in Dubai, our teams mobilise across the Emirates — with completed and ongoing work in Dubai, Abu Dhabi and Fujairah — to deliver screeding, fit-out and renovation projects wherever our clients need us.",
    },
  ];

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. HERO SECTION — Cinematic Video Background
      ───────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 pb-28 hero-section">
        <HeroBackground />
        {/* Cinematic gradient overlay — deep navy top fading to page white */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/70 via-[#0A1128]/40 to-[#FCFCFD]" />

        {/* Blueprint line graphic background overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000000 1px, transparent 1px),
              linear-gradient(to bottom, #000000 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12">
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#FCFCFD]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] w-fit shadow-md hero-reveal opacity-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-brand-gold">
                Specialist Trade Contractor
              </span>
            </div>

            <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-xl leading-relaxed tracking-wide hero-reveal opacity-0">
              Floor screeding, block work, plastering, gypsum and false
              ceilings, interior fit-out and MEP — delivered as one
              coordinated package for commercial offices, residential
              developments and hospitality spaces across the UAE.
            </p>

            {/* Giant Title */}
            <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-white drop-shadow-xl mt-4 overflow-hidden">
              <span className="block hero-title-line opacity-0">EVERY</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#cbd5e1] block hero-title-line opacity-0">
                TRADE
              </span>
            </h1>
          </div>

          {/* Right Column — Live Video Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="hero-video-card relative w-full max-w-md p-6 rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-2xl overflow-hidden group">
              {/* Decorative radial lighting inside card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/20 blur-3xl group-hover:bg-brand-gold/30 transition-colors duration-500" />

              <HeroCardPreview />

              {/* Card stats text */}
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="font-sans font-black text-2xl text-white tracking-tight flex items-center gap-2">
                  <span className="text-brand-gold">21+ Projects</span>{" "}
                  Delivered &amp; Ongoing
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  75 team members on the ground across residential, commercial
                  and hospitality sites in Dubai, Abu Dhabi and Fujairah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. INTRO SECTION — Rich Editorial Layout
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 border-y border-black/[0.04]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          {/* Paragraph with inline rounded capsules like the image */}
          <h2 className="font-sans font-semibold text-2xl md:text-4xl text-brand-navy leading-relaxed md:leading-[1.7] max-w-4xl mx-auto tracking-tight editorial-heading">
            Wherever you build, we fit it out — from residential villas to
            <span
              className="capsule-image capsule-img"
              style={{
                backgroundImage: `url('/img/capsule-a.jpg')`,
              }}
            ></span>
            corporate offices, retail and malls to hospitality, we take a space
            from bare structure to
            <span
              className="capsule-image capsule-img"
              style={{
                backgroundImage: `url('/img/capsule-b.jpg')`,
              }}
            ></span>
            finished handover, driven by senior technical staff and dedicated
            crews in every trade.
          </h2>

          {/* Stats grid section with divider lines */}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2.5 INFINITE BRAND COMPLIANCE MARQUEE
      ───────────────────────────────────────── */}
      <div className="bg-[#0A1128] py-8 overflow-hidden border-y border-white/[0.04] relative">
        {/* Soft gold side gradients for dramatic fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A1128] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A1128] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 text-[#FCFCFD]">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Floor Screeding
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Block Work
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Plastering & Painting
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Gypsum & False Ceilings
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Interior Fit-Out
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                MEP Services
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────
          3. OUR STORY SECTION — Blueprint Skyscraper
      ───────────────────────────────────────── */}
      <span id="about" className="block -mt-20 pt-20" />
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8 about-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sketch Outline */}
          <div className="lg:col-span-6 flex flex-col gap-6 about-reveal opacity-0">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                Our Story
              </span>
              <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                Craftsmanship In Every Detail
              </h2>
            </div>

            {/* Minimal SVG Interior Floor Plan wireframe - super high premium detail */}
            <div className="relative aspect-[4/3] w-full border border-black/[0.05] rounded-3xl bg-[#f8fafc] flex items-center justify-center p-8 overflow-hidden shadow-inner group blueprint-container">
              {/* Grid background in wireframe */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000000 1px, transparent 1px),
                    linear-gradient(to bottom, #000000 1px, transparent 1px)
                  `,
                  backgroundSize: "15px 15px",
                }}
              />
              <svg
                className="w-full h-full text-brand-navy/15 group-hover:text-brand-navy/25 transition-colors duration-500"
                viewBox="0 0 200 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
              >
                {/* Boundary Walls (Double line for brick/block thickness) */}
                <rect x="20" y="15" width="160" height="120" rx="2" />
                <rect x="22" y="17" width="156" height="116" rx="1" />
                {/* Interior Partition Block Walls (Double lines for block thickness) */}
                {/* Meeting Room Division */}
                <line x1="75" y1="17" x2="75" y2="80" />
                <line x1="77" y1="17" x2="77" y2="78" />
                <line x1="22" y1="80" x2="75" y2="80" />
                <line x1="22" y1="78" x2="77" y2="78" />
                {/* Office 01 Division */}
                <line x1="130" y1="17" x2="130" y2="133" />
                <line x1="128" y1="17" x2="128" y2="133" />
                {/* Door Openings and Swings */}
                {/* Main Entrance Swing */}
                <path d="M 90 133 L 90 118" strokeDasharray="1 1" />
                <path
                  d="M 90 118 A 15 15 0 0 1 105 133"
                  strokeDasharray="1 1"
                />
                {/* Meeting Room Door Swing */}
                <line x1="77" y1="45" x2="62" y2="45" />
                <path d="M 62 45 A 15 15 0 0 1 77 60" strokeDasharray="1 1" />
                {/* Executive Office Door Swing */}
                <line x1="128" y1="90" x2="143" y2="90" />
                <path
                  d="M 143 90 A 15 15 0 0 1 128 105"
                  strokeDasharray="1 1"
                />
                {/* Space Planning & Furniture Layout blocks */}
                {/* Conference Table in Meeting Room */}
                <rect
                  x="35"
                  y="35"
                  width="28"
                  height="18"
                  rx="4"
                  strokeWidth="0.5"
                />
                {/* Conference Chairs */}
                <circle cx="30" cy="44" r="1.5" />
                <circle cx="40" cy="28" r="1.5" />
                <circle cx="49" cy="28" r="1.5" />
                <circle cx="58" cy="28" r="1.5" />
                <circle cx="68" cy="44" r="1.5" />
                <circle cx="40" cy="60" r="1.5" />
                <circle cx="49" cy="60" r="1.5" />
                <circle cx="58" cy="60" r="1.5" />
                {/* Sofa in Reception Area */}
                <rect
                  x="90"
                  y="35"
                  width="28"
                  height="10"
                  rx="1"
                  strokeWidth="0.5"
                />
                <rect
                  x="90"
                  y="55"
                  width="10"
                  height="20"
                  rx="1"
                  strokeWidth="0.5"
                />
                <circle cx="104" cy="65" r="4" strokeWidth="0.5" />{" "}
                {/* Small plant */}
                {/* Desks in Executive Office */}
                <rect
                  x="142"
                  y="30"
                  width="24"
                  height="14"
                  rx="1"
                  strokeWidth="0.5"
                />
                <circle cx="154" cy="50" r="2" /> {/* Chair */}
                <rect
                  x="142"
                  y="95"
                  width="24"
                  height="14"
                  rx="1"
                  strokeWidth="0.5"
                />
                <circle cx="154" cy="85" r="2" /> {/* Chair */}
                {/* Labels and Annotations (Floor Plan Details) */}
                <text
                  x="28"
                  y="24"
                  fill="currentColor"
                  fontSize="4.5"
                  className="font-sans font-bold opacity-60"
                >
                  MEETING ROOM
                </text>
                <text
                  x="86"
                  y="24"
                  fill="currentColor"
                  fontSize="4.5"
                  className="font-sans font-bold opacity-60"
                >
                  RECEPTION
                </text>
                <text
                  x="136"
                  y="24"
                  fill="currentColor"
                  fontSize="4.5"
                  className="font-sans font-bold opacity-60"
                >
                  EXECUTIVE SUITE
                </text>
                <text
                  x="32"
                  y="73"
                  fill="currentColor"
                  fontSize="3.5"
                  className="font-sans opacity-40"
                >
                  SCREED: SR2 CLASS
                </text>
                <text
                  x="136"
                  y="122"
                  fill="currentColor"
                  fontSize="3.5"
                  className="font-sans opacity-40"
                >
                  PLASTER LEVEL: Q4
                </text>
                <text
                  x="86"
                  y="112"
                  fill="currentColor"
                  fontSize="3.5"
                  className="font-sans opacity-40"
                >
                  FALL TO DRAIN: 1:80
                </text>
                {/* Dimension measurement lines */}
                {/* Horizontal dimension */}
                <path
                  d="M 20 143 L 180 143 M 20 140 L 20 146 M 180 140 L 180 146"
                  strokeWidth="0.5"
                />
                <text
                  x="94"
                  y="141"
                  fill="currentColor"
                  fontSize="5"
                  className="font-sans font-bold"
                >
                  16.0m
                </text>
                {/* Vertical dimension */}
                <path
                  d="M 10 15 L 10 135 M 7 15 L 13 15 M 7 135 L 13 135"
                  strokeWidth="0.5"
                />
                <text
                  x="4"
                  y="78"
                  fill="currentColor"
                  fontSize="5"
                  className="font-sans font-bold"
                  transform="rotate(-90 4 78)"
                >
                  12.0m
                </text>
              </svg>
            </div>
          </div>

          {/* Right Column: Narrative & Real Image */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:mt-16 about-reveal opacity-0">
            <div className="flex flex-col gap-6">
              <p className="text-[#475569] text-sm md:text-base leading-relaxed">
                At Blume Technical Services, each specialist trade is run by
                its own crews and supervision — screeding, block work,
                plastering, gypsum and false ceilings, painting and MEP. That
                depth is what lets us take a space from bare structure to
                finished handover under one contract, with fewer interfaces,
                fewer delays and one accountable party.
              </p>

              <Link
                href="/about"
                className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-navy rounded-full shadow-lg hover:bg-brand-accent transition-all duration-300 w-fit flex items-center gap-2 group"
              >
                Learn More
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Premium finished office interior image */}
            <div
              className="aspect-[16/9] w-full rounded-3xl bg-cover bg-center shadow-lg border border-black/[0.04]"
              style={{
                backgroundImage: `url('/img/office-interior.jpg')`,
              }}
            />
          </div>
        </div>

        {/* Dual Cards side-by-side (Our Mission / Our Vision) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 about-reveal opacity-0">
          {/* Mission Card */}
          <div className="group rounded-3xl bg-white border border-black/[0.06] p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover-float shimmer-hover transition-all duration-300">
            <div
              className="w-full md:w-32 aspect-square rounded-2xl bg-cover bg-center shrink-0 border border-black/[0.04]"
              style={{
                backgroundImage: `url('/img/mission-interior.jpg')`,
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold">▪</span> Our Mission
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                &ldquo;In our industry, there is no substitute for experience. We
                combine an experienced team with extensive resources to
                consistently deliver superior project results.&rdquo; We pursue a
                philosophy of perfectionism at every stage — from substrate
                preparation to final finish — within strictly controlled
                time and budgetary parameters.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-3xl bg-white border border-black/[0.06] p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover-float shimmer-hover transition-all duration-300">
            <div
              className="w-full md:w-32 aspect-square rounded-2xl bg-cover bg-center shrink-0 border border-black/[0.04]"
              style={{
                backgroundImage: `url('/img/vision-interior.jpg')`,
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold">▪</span> Our Vision
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To be the partner developers and main contractors call first
                for floor screeding — and to grow that trust into complete
                fit-out, MEP and renovation delivery, one accountable party
                under one contract, on every site we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. SERVICES SECTION — Glassmorphic Grids
      ───────────────────────────────────────── */}
      <span id="services" className="block -mt-20 pt-20" />
      <section className="relative py-28 overflow-hidden">
        {/* Full-width dramatic building outline context background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/img/office-interior.jpg')`,
          }}
        />
        {/* Soft frosted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FCFCFD]/95 via-[#FCFCFD]/90 to-[#FCFCFD]/75 backdrop-blur-sm" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              What We Do
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
              Specialised Trade Works, Start To Finish
            </h2>
          </div>

          {/* Gorgeous grid of 6 service cards with glassmorphic designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            {[
              {
                num: "01",
                title: "Floor Screeding",
                desc: "Bonded, unbonded, floating and heated screeds — sand-cement, semi-dry, fibre-reinforced and self-levelling systems, laser-guided to SR1–SR3 tolerance.",
                link: "/services/screeding",
              },
              {
                num: "02",
                title: "Block Work & Masonry",
                desc: "Concrete block walls, internal partitions, boundary walls and structural elements, with reinforced lintels cast to engineering drawings.",
                link: "/services/block-work",
              },
              {
                num: "03",
                title: "Plastering & Painting",
                desc: "Internal and external cement plastering, three-coat render and Q4 gypsum skim, finished with a full range of colours and decorative techniques.",
                link: "/services/plastering",
              },
              {
                num: "04",
                title: "Gypsum & False Ceilings",
                desc: "Custom gypsum ceilings, wall panels, partitions, cornicing and ornate mouldings — from sleek modern to traditional, crafted in-house.",
                link: "/services/gypsum",
              },
              {
                num: "05",
                title: "Interior Fit-Out & Renovation",
                desc: "Space planning, layouts, finishes and furniture installation for new fit-outs — plus structural modification and refurbishment of existing spaces.",
                link: "/services/fit-out",
              },
              {
                num: "06",
                title: "MEP Services",
                desc: "Electrical, plumbing, HVAC, firefighting and low current systems — coordinated with the civil and fit-out programme.",
                link: "/services/mep",
              },
            ].map((serv, index) => (
              <Link
                key={index}
                href={serv.link}
                className="service-card group relative rounded-3xl bg-white/45 backdrop-blur-md border border-white/60 p-8 shadow-sm hover-float hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Animated card background shine */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent group-hover:animate-[spin_4s_linear_infinite] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6 h-full justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-black text-4xl text-brand-navy/10 group-hover:text-brand-gold transition-colors duration-300">
                      {serv.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <h3 className="font-sans font-black text-lg md:text-xl text-brand-navy group-hover:text-brand-accent transition-colors duration-300 leading-snug">
                      {serv.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. OUR PROCESS SECTION — Grid & Steps
      ───────────────────────────────────────── */}
      <span id="process" className="block -mt-20 pt-20" />
      <section className="py-24 bg-white border-y border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Headline and Team Image */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                  Our Process
                </span>
                <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                  A Clear, Structured Project Process
                </h2>
              </div>

              <div
                className="aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-lg border border-black/[0.04]"
                style={{
                  backgroundImage: `url('/img/site-team.jpg')`,
                }}
              />
            </div>

            {/* Right Column: Description & Steps */}
            <div className="lg:col-span-6 flex flex-col gap-8 lg:mt-6">
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                A clear, structured process keeps every project on time, on
                budget and true to the client&apos;s vision — from first
                conversation to final handover.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "Understanding your brief, budget, programme and floor loadings.",
                  },
                  {
                    step: "02",
                    title: "Design & Drawings",
                    desc: "In-house design and AutoCAD draughting turn ideas into detailed plans and build-ups.",
                  },
                  {
                    step: "03",
                    title: "Approval & Planning",
                    desc: "Authority approvals, mix design, procurement and resource scheduling.",
                  },
                  {
                    step: "04",
                    title: "Execution",
                    desc: "Site mobilisation, screeding, construction and MEP works to specification.",
                  },
                  {
                    step: "05",
                    title: "Handover",
                    desc: "Testing, quality inspection, snagging and final handover of your space.",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="process-step flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50/70 border border-transparent hover:border-black/[0.03] transition-all duration-300"
                  >
                    <div className="font-sans font-black text-xl text-brand-gold shrink-0">
                      {step.step}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-sans font-black text-lg text-brand-navy">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. FEATURED PROJECTS — Premium Asymmetrical Showcase
      ───────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-3">
              <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                Our Showcase
              </span>
              <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                Featured Projects
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                Explore a selection of our screeding, fit-out and civil execution works delivered for developers and main contractors across the UAE.
              </p>
            </div>
            <Link
              href="/projects"
              className="group/btn inline-flex items-center gap-2 px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-brand-navy hover:text-white bg-white hover:bg-brand-navy border border-black/[0.06] hover:border-brand-navy rounded-full shadow-sm hover:shadow transition-all duration-300 whitespace-nowrap"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch projects-grid">
            {[
              {
                id: 1,
                title: "Dragon Palace Hotel",
                category: "Floor Screeding & Fit-Out",
                client: "Mr. Peng Hung",
                location: "Dubai, UAE",
                img: "/projects/screed-team-pour.jpg",
                desc: "Demolition, floor screeding and full interior fit-out of 80 apartments — one of our largest single-site mobilisations to date.",
                tags: ["80 Apartments", "Floor Screeding", "Demolition"],
                colSpan: "lg:col-span-8 min-h-[450px]",
              },
              {
                id: 2,
                title: "Chorisia 1 & Chorisia 2",
                category: "Floor Screeding",
                client: "Al Barari",
                location: "Al Barari, Dubai",
                img: "/projects/screed-rebar-columns.jpg",
                desc: "Floor screeding and interior fit-out across 110 villas, resourced with dedicated screeding crews for villa-by-villa sequencing.",
                tags: ["110 Villas", "Floor Screeding", "Interior Fit-Out"],
                colSpan: "lg:col-span-4 min-h-[450px]",
              },
              {
                id: 3,
                title: "Wilton Park Residence",
                category: "Interior Fit-Out",
                client: "Ellington Properties",
                location: "Dubai, UAE",
                img: "/projects/gypsum-ceiling-medallion.jpg",
                desc: "Interior work across a G+2P+12 residential building — floor screeding, plaster, tile, ceiling and paint.",
                tags: ["Plaster", "Tile", "Ceiling & Paint"],
                colSpan: "lg:col-span-4 min-h-[450px]",
              },
              {
                id: 7,
                title: "Boulevard Heights",
                category: "Resin & Protective Coatings",
                client: "Target Engineering (Emaar)",
                location: "Downtown Dubai",
                img: "/img/carpark-coating.jpg",
                desc: "Supply and application of traffic deck coating on the Boulevard Heights main contract works, approved by Holfords Project Management / GCI.",
                tags: ["Traffic Deck Coating", "Emaar", "Approved Applicator"],
                colSpan: "lg:col-span-8 min-h-[450px]",
              },
            ].map((project, idx) => (
              <Link
                key={idx}
                href={`/projects/${project.id}`}
                className={`project-card group relative rounded-3xl overflow-hidden flex flex-col justify-end border border-black/[0.04] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${project.colSpan}`}
              >
                {/* Visual Background Frame */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[8s]"
                  style={{
                    backgroundImage: `url('${project.img}')`,
                  }}
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Floating Category Badge & Location (Top) */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 text-[9px] font-sans font-bold uppercase tracking-widest text-[#FCFCFD] bg-brand-navy/60 border border-white/[0.12] rounded-full backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-300 uppercase tracking-wider backdrop-blur-sm bg-black/25 px-2.5 py-1 rounded-full border border-white/[0.05]">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    {project.location}
                  </span>
                </div>

                {/* Content Overlay (Bottom) */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col gap-4 text-[#FCFCFD]">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-black tracking-widest uppercase text-brand-gold">
                      Client: {project.client}
                    </span>
                    <h3 className="font-sans font-black text-2xl md:text-3xl uppercase leading-tight tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Right Corner Interactive Arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 group-hover:bg-brand-gold border border-white/[0.12] group-hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 z-10">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. CTA SECTION — Full Bleed Dark Landmark (Cost Estimator & Contact)
      ───────────────────────────────────────── */}
      <span id="contact" className="block" />
      <section className="relative py-28 overflow-hidden bg-[#050A18] border-t border-white/[0.04] text-[#FCFCFD] cta-section">
        {/* Glowing visual ambient light backdrops */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left side: Coordinates and Brand Slogan */}
            <div className="lg:col-span-5 flex flex-col gap-8 cta-reveal opacity-0">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  Estimating Desk Open
                </span>
                <h2 className="font-sans font-black text-4xl md:text-5xl uppercase leading-tight tracking-tight text-white mt-2">
                  Ready to transform your space?
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Submit your brief, floor plan or layout file directly to our estimating desk. We provide comprehensive, itemized pricing and timeline audits within 48 hours.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    val: "Al Zarooni Building, Office 412, Frij Murar, Deira, Dubai, UAE",
                    link: null,
                  },
                  {
                    icon: Phone,
                    label: "Direct Estimation Desk",
                    val: "+971 58 525 2114",
                    link: "tel:+971585252114",
                  },
                  {
                    icon: Mail,
                    label: "Engineering & Estimating",
                    val: "blumetec0@gmail.com",
                    link: "mailto:blumetec0@gmail.com",
                  },
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  const CardWrapper = item.link ? "a" : "div";
                  const extraProps = item.link ? { href: item.link } : {};
                  return (
                    // @ts-ignore
                    <CardWrapper
                      key={idx}
                      {...extraProps}
                      className={`flex gap-5 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-sm hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-300 group/item ${
                        item.link ? "cursor-pointer" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover/item:border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 transition-colors">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-slate-200 mt-1 transition-colors group-hover/item:text-white">
                          {item.val}
                        </span>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>

            {/* Right side: Elegant Interactive Form */}
            <div className="lg:col-span-7 bg-[#070D1D]/90 border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl cta-reveal opacity-0">
              {estSubmitted && (
                <div className="absolute inset-0 bg-[#070D1D]/98 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-4 text-center px-6 transition-all duration-300 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/35 flex items-center justify-center text-brand-gold shadow-lg animate-bounce">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-black text-xl text-white uppercase tracking-wider">
                    Estimate Request Sent
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm max-w-sm leading-relaxed">
                    Thank you. Your request is being routed to our senior project engineers. Check your email for confirmation.
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-6 mb-8">
                <span className="text-[10px] font-black tracking-widest uppercase text-brand-gold">
                  Cost Estimation Calculator
                </span>
                <h3 className="font-sans font-black text-xl md:text-2xl text-white uppercase leading-none">
                  Request Site Survey &amp; Quote
                </h3>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setEstIsSubmitting(true);
                  setEstError("");

                  const serviceLabels: Record<string, string> = {
                    screeding: "Floor Screeding",
                    "fit-out": "Interior Fit-Out",
                    renovation: "Renovation Works",
                    "block-work": "Block Work & Gypsum",
                    plastering: "Plastering & Painting",
                    mep: "MEP Services",
                  };

                  const locationLabels: Record<string, string> = {
                    dubai: "Dubai",
                    "abu-dhabi": "Abu Dhabi",
                    fujairah: "Fujairah",
                    other: "Other Emirate",
                  };

                  try {
                    await submitContactForm({
                      name: estName,
                      email: estEmail,
                      phone: estPhone,
                      message: estMessage,
                      service: serviceLabels[estService] || estService,
                      location: locationLabels[estLocation] || estLocation,
                      source: "home-estimate",
                    });

                    setEstSubmitted(true);
                    setEstName("");
                    setEstEmail("");
                    setEstPhone("");
                    setEstMessage("");
                    setEstService("fit-out");
                    setEstLocation("business-bay");

                    setTimeout(() => setEstSubmitted(false), 6000);
                  } catch (err) {
                    setEstError(
                      err instanceof Error
                        ? err.message
                        : "Failed to send your request. Please try again.",
                    );
                  } finally {
                    setEstIsSubmitting(false);
                  }
                }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={estName}
                      onChange={(e) => setEstName(e.target.value)}
                      placeholder="Ahmed Al Mansoor"
                      className="bg-white/[0.03] border border-white/[0.08] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 rounded-xl py-3.5 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={estEmail}
                      onChange={(e) => setEstEmail(e.target.value)}
                      placeholder="ahmed@company.ae"
                      className="bg-white/[0.03] border border-white/[0.08] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 rounded-xl py-3.5 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={estPhone}
                      onChange={(e) => setEstPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="bg-white/[0.03] border border-white/[0.08] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 rounded-xl py-3.5 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      value={estService}
                      onChange={(e) => setEstService(e.target.value)}
                      className="bg-white/[0.03] border border-white/[0.08] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 rounded-xl py-3.5 px-4 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 cursor-pointer"
                    >
                      <option value="screeding" className="bg-[#070D1D] text-white">
                        Floor Screeding
                      </option>
                      <option value="fit-out" className="bg-[#070D1D] text-white">
                        Interior Fit-Out
                      </option>
                      <option value="renovation" className="bg-[#070D1D] text-white">
                        Renovation Works
                      </option>
                      <option value="block-work" className="bg-[#070D1D] text-white">
                        Block Work &amp; Gypsum
                      </option>
                      <option value="plastering" className="bg-[#070D1D] text-white">
                        Plastering &amp; Painting
                      </option>
                      <option value="mep" className="bg-[#070D1D] text-white">
                        MEP Services
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-wider">
                      Project Location
                    </label>
                    <select
                      value={estLocation}
                      onChange={(e) => setEstLocation(e.target.value)}
                      className="bg-white/[0.03] border border-white/[0.08] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 rounded-xl py-3.5 px-4 text-xs md:text-sm text-white focus:outline-none transition-all duration-300 cursor-pointer"
                    >
                      <option value="dubai" className="bg-[#070D1D] text-white">
                        Dubai
                      </option>
                      <option value="abu-dhabi" className="bg-[#070D1D] text-white">
                        Abu Dhabi
                      </option>
                      <option value="fujairah" className="bg-[#070D1D] text-white">
                        Fujairah
                      </option>
                      <option value="other" className="bg-[#070D1D] text-white">
                        Other Emirate
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-400 text-[10px] font-black uppercase tracking-wider">
                    Brief Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={estMessage}
                    onChange={(e) => setEstMessage(e.target.value)}
                    placeholder="Describe your space details, dimensions, or design style specifications..."
                    className="bg-white/[0.03] border border-white/[0.08] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 rounded-xl py-3.5 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {estError && (
                  <div className="bg-red-950/40 border border-red-800/40 text-red-300 text-xs py-3.5 px-4 rounded-xl font-bold uppercase tracking-wider">
                    {estError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={estIsSubmitting}
                  className="w-full bg-brand-gold hover:bg-white hover:text-brand-navy disabled:bg-slate-600 disabled:cursor-not-allowed text-[#0A1128] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md flex items-center justify-center gap-2 group transition-all duration-300 mt-2"
                >
                  <span>
                    {estIsSubmitting
                      ? "Sending Request..."
                      : "Request Design Consultation"}
                  </span>
                  {!estIsSubmitting && (
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          8. FAQ SECTION — Dynamic Accordions
      ───────────────────────────────────────── */}
      <span id="faq" className="block -mt-20 pt-20" />
      <section className="py-24 bg-white border-y border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading and Contact button */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                  FAQ
                </span>
                <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Have specific queries about our engineering certifications,
                materials procurement, or project budgets? Get in touch with our
                commercial coordination team for a deep-dive response.
              </p>

              <Link
                href="/contact"
                className="px-6 py-3.5 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-navy rounded-full shadow-lg hover:bg-brand-accent transition-all duration-300 w-fit flex items-center gap-3.5"
              >
                <span>Contact Us</span>
                <div className="w-5 h-5 rounded-full bg-white text-brand-navy flex items-center justify-center shadow-md">
                  <span className="text-[10px]">▶</span>
                </div>
              </Link>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-black/[0.06] border-y border-black/[0.06]">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="font-sans font-black text-base md:text-lg text-brand-navy group-hover:text-brand-accent transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 shrink-0 ${
                        activeFaq === idx
                          ? "rotate-180 bg-brand-navy text-white"
                          : ""
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeFaq === idx
                        ? "max-h-[300px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-500 text-sm leading-relaxed pl-1 pr-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
