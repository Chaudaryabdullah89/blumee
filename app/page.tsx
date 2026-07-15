"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Send,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  Star,
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
  const [estService, setEstService] = useState("fit-out");
  const [estLocation, setEstLocation] = useState("business-bay");
  const [estMessage, setEstMessage] = useState("");
  const [estSubmitted, setEstSubmitted] = useState(false);
  const [estIsSubmitting, setEstIsSubmitting] = useState(false);
  const [estError, setEstError] = useState("");

  // State for Testimonials Carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const testimonials = [
    {
      quote:
        "Blume Technical Services delivered a stunning corporate office fit-out for our new headquarters. Their team managed the entire process from design brief to final handover — on time and within budget. The space truly reflects our brand.",
      author: "Tariq Al Futtaim",
      role: "Managing Director",
      company: "Al Futtaim Group",
      rating: 5,
      location: "Business Bay, Dubai",
    },
    {
      quote:
        "We engaged Blume to design and fit-out our flagship retail boutique. Their attention to detail, material sourcing, and project coordination was exceptional. The store has become a destination in itself — customers love the ambiance.",
      author: "Elena Petrova",
      role: "Brand Director",
      company: "Luxe Retail Group",
      rating: 5,
      location: "Downtown Dubai",
    },
    {
      quote:
        "Blume's design consultancy team helped us reimagine our healthcare facility. They understood our operational needs and translated them into a calming, functional environment. Their end-to-end management was truly stress-free.",
      author: "Dr. Marcus Vance",
      role: "Head of Operations",
      company: "Dubai Medical Centre",
      rating: 5,
      location: "Jumeirah, Dubai",
    },
  ];

  const faqs = [
    {
      q: "What core technical and finishing services does Blume specialize in?",
      a: "We specialize in 6 core civil and finishing disciplines: Turnkey Fit-Out & Renovation, Custom Tiling & Stonework, Bespoke Joinery & Doors, Professional Plastering & Finishes, Precision Block Masonry, and Interior Design & Space Planning.",
    },
    {
      q: "What quality tolerances do you guarantee for tiling and stonework?",
      a: "We execute all tiling strictly under BS 5385 British standards. Using digital rotary lasers, we maintain floor and wall flatnesses with a variance tolerance of under +/- 0.5mm to eliminate all lippage across large-format porcelain and marble slabs. We also conduct mandatory 24-hour liquid flood tests before tiling wet zones.",
    },
    {
      q: "Are your custom joinery and door installations certified?",
      a: "Yes. All bespoke timber door assemblies can be supplied with certified fire ratings (60-minute and 90-minute options) complying with Dubai Civil Defense (DCD) requirements. We manufacture using solid woods like ash and walnut, complete with drop-down soundproof gaskets and smoke seals.",
    },
    {
      q: "How do you handle developer NOCs and municipality approvals in Dubai?",
      a: "We provide complete turnkey approval coordination. Our engineering team prepares and submits detailed structural, architectural, and MEP layout drawings to secure NOCs from developers (Emaar, Nakheel, Dubai Properties) and approvals from Dubai Municipality (DM), Civil Defense (DCD), and Concordia/TECOM.",
    },
    {
      q: "How fast can you mobilize for masonry block work and plastering?",
      a: "Once NOC approvals and work permits are in place, our specialized in-house crews can mobilize to site within 3 to 5 business days. All concrete masonry units (CMU) and plaster binders are sourced from certified regional suppliers to guarantee raw material density and anti-cracking compliance.",
    },
    {
      q: "Do you work with third-party designers, architects, and main contractors?",
      a: "Absolutely. While we provide full design-and-build services, we frequently collaborate as specialist contractors or direct fit-out partners — executing detailed shop drawings, plaster skimming (Q1 to Q4 finishes), and architectural stone details matching design guidelines.",
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
                Premium Interior Standards
              </span>
            </div>

            <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-xl leading-relaxed tracking-wide hero-reveal opacity-0">
              Blume Technical Services is an Interior Design and Fit-Out
              management company that exists to help bring brands and spaces to
              life — combining planning, design, manufacturing, and renovations
              into one seamless experience.
            </p>

            {/* Giant Title */}
            <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-white drop-shadow-xl mt-4 overflow-hidden">
              <span className="block hero-title-line opacity-0">BUILT</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#cbd5e1] block hero-title-line opacity-0">
                TOGETHER
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
                  <span className="text-brand-gold">AED 15 Million +</span>{" "}
                  Delivered Value
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  Our portfolio represents our unwavering commitment to
                  redefining urban landscapes with engineering excellence.
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
            Starting from corporate offices to hotels, retail shops to
            <span
              className="capsule-image capsule-img"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=200')`,
              }}
            ></span>
            healthcare environments, our focus is on creating inspired designs
            to provide our clients with
            <span
              className="capsule-image capsule-img"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=200')`,
              }}
            ></span>
            an environment of lasting value, driven by senior staff expertise
            and unparalleled cross-industry know-how.
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
                Interior Design
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Turnkey Fit-Out Solutions
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                FF&E Procurement
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Project Management
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Design Consultancy
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Manufacturing & Joinery
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
                We Bring Brands & Spaces To Life
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
                  TILING REF: ST-04
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
                  BLOCK WORK: 200MM
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
                At Blume Technical Services, we combine creative spatial
                planning, fine interior partitions, high-density block work, and
                master plaster finishes. Our dedicated team of space planners,
                detail managers, and skilled tradespeople ensure that every
                project is delivered on time, strictly within budget, and with
                uncompromising aesthetic quality.
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
                backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800')`,
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
                backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300')`,
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold">▪</span> Our Mission
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To win the hearts and trust of all our clients by offering
                operational and strategic support at all stages of the project.
                From concept to execution — we aim for strict control on
                time-line, budget and quality to ensure repeat customers and
                avenues to making new clients.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-3xl bg-white border border-black/[0.06] p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover-float shimmer-hover transition-all duration-300">
            <div
              className="w-full md:w-32 aspect-square rounded-2xl bg-cover bg-center shrink-0 border border-black/[0.04]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=300')`,
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold">▪</span> Our Vision
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To redefine the very essence of living spaces, founded on the
                principles of creativity, innovation, and a deep appreciation
                for aesthetics — transforming houses into homes, offices into
                inspiring workspaces, and every space into a reflection of
                individuality.
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
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')`,
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
              One-Stop Interior Design &amp; Fit-Out Solutions
            </h2>
          </div>

          {/* Gorgeous grid of 6 service cards with glassmorphic designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            {[
              {
                num: "01",
                title: "Interior Design & Space Planning",
                desc: "Strategic 2D/3D layouts, structural floor plans, material specs, and complete developer/authority approvals management (DM, DCD, Concordia).",
                link: "/services#interior-design",
              },
              {
                num: "02",
                title: "Turnkey Fit-Out & Renovation",
                desc: "Complete interior fit-out execution for commercial and high-end residential spaces, drywalls, ceilings, MEP, and fast-track NOC delivery.",
                link: "/services#fit-out",
              },
              {
                num: "03",
                title: "Precision Block Masonry",
                desc: "Laser-aligned laying of concrete blocks, partition walls, and boundary structures utilizing heavy-duty CMU units and reinforced lintels.",
                link: "/services#block-masonry",
              },
              {
                num: "04",
                title: "Professional Plastering & Finishes",
                desc: "Flawless multi-layer interior and exterior plastering skewing to Q4 levels, ready for custom paint or specialty Venetian wall textures.",
                link: "/services#plastering",
              },
              {
                num: "05",
                title: "Custom Tiling & Stonework",
                desc: "Laser-leveled large-format marble, natural stone, and porcelain installations with BS 5385 alignment limits and complete wet zone sealing.",
                link: "/services#tiling",
              },
              {
                num: "06",
                title: "Bespoke Joinery & Doors",
                desc: "Craftsmanship joinery fabrication, fire-rated ashwood doors, architraves, flush wall panels, custom wardrobes, and high-end wood fitting.",
                link: "/services#doors",
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
                  Our Simple, Transparent Design & Build Process
                </h2>
              </div>

              <div
                className="aspect-[4/3] w-full rounded-3xl bg-cover bg-center shadow-lg border border-black/[0.04]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800')`,
                }}
              />
            </div>

            {/* Right Column: Description & Steps */}
            <div className="lg:col-span-6 flex flex-col gap-8 lg:mt-6">
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                We are committed to making it simpler and easier for you to
                access the information and services you need — from one place.
                Whether you choose a single service or the complete end-to-end
                package, you can feel confident we will deliver quality work on
                an accurate, cost-managed budget, every time.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Briefing",
                    desc: "We start by understanding your vision, requirements, budget and timeline. Our consultants perform a detailed site survey and produce a comprehensive design brief.",
                  },
                  {
                    step: "02",
                    title: "Design & Material Selection",
                    desc: "Our designers develop concepts, mood boards, 2D/3D layouts and material palettes tailored to your brand. We present value-added options at every price point.",
                  },
                  {
                    step: "03",
                    title: "Build & Handover",
                    desc: "Our project managers coordinate all trades, manufacturing and custom fit-out installation. We maintain strict quality control throughout, delivering your space on time and on budget.",
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
                Explore our selection of premier technical, fit-out, and civil execution works delivered across Dubai&apos;s most prestigious locations.
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
                title: "Executive Office Fit-Out",
                category: "Fit-Out",
                client: "Al Futtaim Offices",
                location: "Business Bay, Dubai",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
                desc: "Complete interior fit-out for corporate headquarters, featuring precise drywall partitions, acoustically optimized ceilings, and high-end timber door sets.",
                tags: ["Acoustic Ceilings", "Timber Doors", "Drywalls"],
                colSpan: "lg:col-span-8 min-h-[450px]",
              },
              {
                id: 2,
                title: "Luxury Beachfront Villa Tiling",
                category: "Tiling & Stonework",
                client: "Private Elite Villa",
                location: "Palm Jumeirah, Dubai",
                img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
                desc: "Laser-leveled installation of large-format Italian Calacatta marble slab tiles with micro-joint epoxy grouting and complete wet area waterproofing.",
                tags: ["Italian Marble", "Epoxy Grout", "Waterproofing"],
                colSpan: "lg:col-span-4 min-h-[450px]",
              },
              {
                id: 3,
                title: "Bespoke Penthouse Joinery",
                category: "Bespoke Joinery",
                client: "Marina Heights Penthouse",
                location: "Dubai Marina, Dubai",
                img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
                desc: "Craftsmanship wood joinery including fire-rated solid ash doors, customized walk-in wardrobes, and veneered feature wall panels.",
                tags: ["Solid Ash", "Fire-Rated Doors", "Wardrobes"],
                colSpan: "lg:col-span-4 min-h-[450px]",
              },
              {
                id: 5,
                title: "High-End Retail Store Fit-Out",
                category: "Fit-Out & Execution",
                client: "Vogue Boutique",
                location: "Downtown Dubai",
                img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
                desc: "Premium commercial setup showcasing custom brass structural framings, flawless venetian wall rendering, and micro-bevel porcelain floor tiling.",
                tags: ["Brass Framings", "Venetian Plaster", "Porcelain Tile"],
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
                  Submit your brief or layout file directly to our estimation engineers. We provide comprehensive, itemized pricing and timeline audits within 48 hours.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: MapPin,
                    label: "Headquarters",
                    val: "Exchange Tower Business Bay, Dubai, UAE",
                    link: null,
                  },
                  {
                    icon: Phone,
                    label: "Direct Estimation Desk",
                    val: "+971 58 5252114",
                    link: "tel:+971585252114",
                  },
                  {
                    icon: Mail,
                    label: "Engineering & Estimating",
                    val: "info@blume.ae",
                    link: "mailto:info@blume.ae",
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
                    "interior-design": "Interior Design & Space Planning",
                    "fit-out": "Turnkey Fit-Out & Renovation",
                    "block-masonry": "Precision Block Masonry",
                    plastering: "Professional Plastering & Finishes",
                    tiling: "Custom Tiling & Stonework",
                    doors: "Bespoke Joinery & Doors",
                  };

                  const locationLabels: Record<string, string> = {
                    "business-bay": "Business Bay",
                    "palm-jumeirah": "Palm Jumeirah",
                    "downtown-dubai": "Downtown Dubai",
                    "al-quoz": "Al Quoz Site",
                    other: "Other District",
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
                      <option value="interior-design" className="bg-[#070D1D] text-white">
                        Interior Design &amp; Space Planning
                      </option>
                      <option value="fit-out" className="bg-[#070D1D] text-white">
                        Turnkey Fit-Out &amp; Renovation
                      </option>
                      <option value="block-masonry" className="bg-[#070D1D] text-white">
                        Precision Block Masonry
                      </option>
                      <option value="plastering" className="bg-[#070D1D] text-white">
                        Professional Plastering &amp; Finishes
                      </option>
                      <option value="tiling" className="bg-[#070D1D] text-white">
                        Custom Tiling &amp; Stonework
                      </option>
                      <option value="doors" className="bg-[#070D1D] text-white">
                        Bespoke Joinery &amp; Doors
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
                      <option value="business-bay" className="bg-[#070D1D] text-white">
                        Business Bay
                      </option>
                      <option value="palm-jumeirah" className="bg-[#070D1D] text-white">
                        Palm Jumeirah
                      </option>
                      <option value="downtown-dubai" className="bg-[#070D1D] text-white">
                        Downtown Dubai
                      </option>
                      <option value="al-quoz" className="bg-[#070D1D] text-white">
                        Al Quoz Site
                      </option>
                      <option value="other" className="bg-[#070D1D] text-white">
                        Other District
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
          7.5 CLIENT TESTIMONIALS — Sleek Carousel (Light Slate Theme)
      ───────────────────────────────────────── */}
      {/* <section className="py-24 bg-slate-50 text-brand-navy overflow-hidden relative border-b border-black/[0.04]">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Client Feedback
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-brand-navy">
              Trusted by Dubai's Visionaries
            </h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto">
              Read how Blume Technical Services brings brands and spaces to
              life across offices, hotels, retail shops, and healthcare
              environments throughout Dubai and the UAE.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-6 md:px-12">
           
            <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-lg flex flex-col gap-6 relative transition-all duration-500 transform hover:scale-[1.01]">
             
              <div className="flex gap-1">
                {Array.from({
                  length: testimonials[activeTestimonial].rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold animate-pulse"
                  />
                ))}
              </div>

           
              <p className="font-serif italic text-lg md:text-xl text-slate-700 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>

 
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4 pt-6 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="font-sans font-black text-sm md:text-base text-brand-navy">
                    {testimonials[activeTestimonial].author}
                  </span>
                  <span className="text-slate-500 text-xs mt-0.5">
                    {testimonials[activeTestimonial].role},{" "}
                    <strong className="text-brand-navy font-bold">
                      {testimonials[activeTestimonial].company}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-500 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{testimonials[activeTestimonial].location}</span>
                </div>
              </div>
            </div>

    
            <div className="flex justify-between items-center mt-8">
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx
                        ? "bg-brand-gold w-8"
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

    
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  className="p-3 rounded-full bg-white border border-slate-150 text-brand-navy hover:bg-[#0A1128] hover:text-white transition-all shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="p-3 rounded-full bg-white border border-slate-150 text-brand-navy hover:bg-[#0A1128] hover:text-white transition-all shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
