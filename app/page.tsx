"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Send, Phone, Mail, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  // State for FAQ Accordion
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // State for Cost Estimator Form
  const [estName, setEstName] = useState("");
  const [estPhone, setEstPhone] = useState("");
  const [estService, setEstService] = useState("fit-out");
  const [estLocation, setEstLocation] = useState("business-bay");
  const [estMessage, setEstMessage] = useState("");
  const [estSubmitted, setEstSubmitted] = useState(false);

  // State for Testimonials Carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Context for scoping selectors to prevent selecting outside this page
    let ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
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
          delay: 0.1,
        }
      );

      gsap.to(".hero-video-card", {
        y: -40,
        scale: 1.04,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
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
          }
        }
      );

      // 3. Stats Counter Animation
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
          }
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
          }
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
          }
        }
      );

      // 6. Why Choose Us Cards Parallax Entrance
      gsap.fromTo(
        ".why-choose-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".why-choose-grid",
            start: "top 80%",
          }
        }
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
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "Blume Technical Services delivered a flawless retail fit-out for our boutique showroom in Downtown. Their masonry block borders and double-leaf fire-rated doors were absolutely perfect. Their technical team managed all NOC and Civil Defense approvals perfectly within 21 days.",
      author: "Tariq Al Futtaim",
      role: "Managing Director",
      company: "Al Futtaim Offices",
      rating: 5,
      location: "Downtown Dubai"
    },
    {
      quote: "We engaged Blume for over 650 sqm of Calacatta marble tiling across our beachfront luxury villa. The flatness tolerances they achieved (under 0.5mm lippage) with laser-level alignments were staggering. Truly world-class craftsmanship.",
      author: "Elena Petrova",
      role: "Lead Project Architect",
      company: "Palm Jumeirah Residences",
      rating: 5,
      location: "Palm Jumeirah"
    },
    {
      quote: "Our corporate headquarters drywall partitioning and fine plaster renders required precise soundproofing coordinates. Blume executed the Q4 level glass-flat plastering beautifully, complete with full ISO certifications.",
      author: "Marcus Vance",
      role: "Head of Infrastructure Development",
      company: "Apex Financial Center",
      rating: 5,
      location: "DIFC, Dubai"
    }
  ];

  const faqs = [
    {
      q: "What types of projects do you specialize in?",
      a: "We specialize in premium commercial development, including corporate office complexes, retail shopping destinations, high-tech industrial parks, and advanced institutional buildings. We also provide structural block masonry, precision plastering, and bespoke corporate interior design services.",
    },
    {
      q: "How do you ensure project safety and quality?",
      a: "Blume Technical Services operates under rigorous international safety and engineering standards. We employ certified professional structural engineers, maintain comprehensive zero-accident safety protocols, and execute daily quality control checks and materials auditing throughout the construction lifecycle.",
    },
    {
      q: "Can you work with our existing architects?",
      a: "Absolutely. We are highly collaborative and regularly work with our clients' existing architectural teams, project managers, and interior designers. We bring our advanced structural engineering, cost control systems, and construction expertise to realize your exact plans.",
    },
    {
      q: "What is your typical project development schedule?",
      a: "Project schedules vary based on scale and structural complexity. During our strategic planning phase, we provide a detailed Gantt chart outlining milestones from site evaluation, planning approvals, foundation laying, structural framework, shell building, down to bespoke interior finishing.",
    },
    {
      q: "How do you handle potential budget overrides?",
      a: "We combat budget overrides through 'Precision Estimating'. Our initial structural analysis and quantity surveying ensure highly accurate cost projections. Any client-approved modifications during building are calculated in real-time, maintaining complete transparency.",
    },
    {
      q: "Do you provide post-construction services?",
      a: "Yes. We stand by our work. We provide full post-construction handovers, standard maintenance warranties, structural certifications, operational training for building mechanical systems, and long-term facility support packages.",
    },
  ];

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. HERO SECTION — Cinematic Video Background
      ───────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 pb-28 hero-section">
        {/* Full-bleed cinematic video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] w-fit shadow-md hero-reveal">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-brand-gold">
                Solidus Architectural Standard
              </span>
            </div>

            <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-xl leading-relaxed tracking-wide hero-reveal">
              Blume Technical Services provides premier commercial construction and
              infrastructure solutions for modern enterprises and big visions.
              We build with unbreakable integrity.
            </p>

            {/* Giant Title */}
            <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-white drop-shadow-xl mt-4 overflow-hidden">
              <span className="block hero-title-line">BUILT</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#cbd5e1] block hero-title-line">
                TOGETHER
              </span>
            </h1>
          </div>

          {/* Right Column — Live Video Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="hero-video-card relative w-full max-w-md p-6 rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-2xl overflow-hidden group">
              {/* Decorative radial lighting inside card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/20 blur-3xl group-hover:bg-brand-gold/30 transition-colors duration-500" />

              {/* Embedded video player */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.08] shadow-inner">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/hero-video.mov" type="video/quicktime" />
                  <source src="/hero-video.mov" type="video/mp4" />
                </video>
              </div>

              {/* Card stats text */}
              <div className="mt-6 flex flex-col gap-2">
                <h3 className="font-sans font-black text-2xl text-white tracking-tight flex items-center gap-2">
                  <span className="text-brand-gold">$100k+</span> Delivered
                  Value
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  Our portfolio represents our unwavering commitment to
                  redefining urban landscapes with structural planning and
                  engineering excellence.
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
            Starting from the 2017, as the intricacy of structures
            <span
              className="capsule-image capsule-img"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200')`,
              }}
            ></span>
            continued to evolve, architecture transformed into a
            multi-disciplinary field with various specializations. We blend
            creativity,
            <span
              className="capsule-image capsule-img"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=200')`,
              }}
            ></span>
            technical skill, and an unwavering attention to detail to deliver
            thoughtful, high-quality spaces.
          </h2>

          {/* Stats grid section with divider lines */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 mt-20 pt-16 border-t border-black/[0.06] stats-container">
            {[
              { val: 150, suffix: "+", label: "Clients Served" },
              { val: 210, suffix: "+", label: "Successful Projects" },
              { val: 9, prefix: "0", label: "Prestigious Awards" },
              { val: 18, suffix: "+", label: "Years Experience" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 ${
                  i < 3 ? "md:border-r border-black/[0.06]" : ""
                }`}
              >
                <span
                  className="font-sans font-black text-4xl md:text-5xl text-brand-navy tracking-tight stat-counter"
                  data-target={stat.val}
                  data-prefix={stat.prefix || ""}
                  data-suffix={stat.suffix || ""}
                >
                  {stat.prefix || ""}{stat.val}{stat.suffix || ""}
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#64748b]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
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
                Dubai Municipality Approved
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                ISO 9001 Quality Certified
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Laser-Level Tiling Accuracy
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Civil Defense Compliant
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Zero-Accident Site Standard
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-slate-300 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                Premium Drywall & Gypsum
              </span>
              <span className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-brand-gold whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Bespoke Joinery & Carpentry
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────
          3. OUR STORY SECTION — Blueprint Skyscraper
      ───────────────────────────────────────── */}
      <span id="about" className="block -mt-20 pt-20" />
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sketch Outline */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                Our Story
              </span>
              <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                We Build Foundations For Future Businesses
              </h2>
            </div>

            {/* Minimal SVG Skyscraper blueprint wireframe - super high premium detail */}
            <div className="relative aspect-[4/3] w-full border border-black/[0.05] rounded-3xl bg-[#f8fafc] flex items-center justify-center p-8 overflow-hidden shadow-inner group blueprint-container">
              {/* Grid background in wireframe */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #000000 1px, transparent 1px),
                    linear-gradient(to bottom, #000000 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
              <svg
                className="w-full h-full text-brand-navy/15 group-hover:text-brand-navy/25 transition-colors duration-500"
                viewBox="0 0 200 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
              >
                {/* Ground grid lines */}
                <line className="blueprint-path" x1="10" y1="135" x2="190" y2="135" />
                <line
                  className="blueprint-path"
                  x1="20"
                  y1="140"
                  x2="180"
                  y2="140"
                  strokeDasharray="2 2"
                />
                {/* Highrise main columns */}
                <rect className="blueprint-path" x="50" y="20" width="100" height="115" />
                <rect className="blueprint-path" x="65" y="10" width="70" height="125" />
                <rect className="blueprint-path" x="80" y="5" width="40" height="130" />
                {/* Structural truss details */}
                <line className="blueprint-path" x1="50" y1="20" x2="150" y2="135" strokeWidth="0.5" />
                <line className="blueprint-path" x1="150" y1="20" x2="50" y2="135" strokeWidth="0.5" />
                <line className="blueprint-path" x1="65" y1="10" x2="135" y2="135" strokeWidth="0.5" />
                <line className="blueprint-path" x1="135" y1="10" x2="65" y2="135" strokeWidth="0.5" />
                {/* Levels markers */}
                {Array.from({ length: 13 }).map((_, idx) => (
                  <line
                    key={idx}
                    className="blueprint-path"
                    x1="45"
                    y1={15 + idx * 10}
                    x2="155"
                    y2={15 + idx * 10}
                    strokeWidth="0.25"
                    strokeDasharray="1 1"
                  />
                ))}
                {/* Foundation measurements */}
                <path
                  className="blueprint-path"
                  d="M 30 135 L 30 20 M 27 20 L 33 20 M 27 135 L 33 135"
                  strokeWidth="0.5"
                />
                <text
                  x="20"
                  y="80"
                  fill="currentColor"
                  fontSize="5"
                  className="font-sans font-bold"
                  transform="rotate(-90 20 80)"
                >
                  120.0m
                </text>
                <path
                  className="blueprint-path"
                  d="M 50 145 L 150 145 M 50 142 L 50 148 M 150 142 L 150 148"
                  strokeWidth="0.5"
                />
                <text
                  x="92"
                  y="148"
                  fill="currentColor"
                  fontSize="5"
                  className="font-sans font-bold"
                  >
                  50.0m
                </text>
              </svg>
            </div>
          </div>

          {/* Right Column: Narrative & Real Image */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:mt-16">
            <div className="flex flex-col gap-6">
              <p className="text-[#475569] text-sm md:text-base leading-relaxed">
                At Blume Technical Services, we combine cutting-edge structural engineering with
                sustainable green practices. Our team of seasoned builders,
                managers, and designers ensure that every project is delivered
                precisely on time, strictly within budget, and with
                uncompromising quality.
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

            {/* Skyscraper looking up image */}
            <div
              className="aspect-[16/9] w-full rounded-3xl bg-cover bg-center shadow-lg border border-black/[0.04]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800')`,
              }}
            />
          </div>
        </div>

        {/* Dual Cards side-by-side (Our Mission / Our Vision) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Mission Card */}
          <div className="group rounded-3xl bg-white border border-black/[0.06] p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover-float shimmer-hover transition-all duration-300">
            <div
              className="w-full md:w-32 aspect-square rounded-2xl bg-cover bg-center shrink-0 border border-black/[0.04]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=300')`,
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold">▪</span> Our Mission
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To build long-term partnerships with institutional clients
                through structural transparency and consistently flawless
                craftsmanship.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-3xl bg-white border border-black/[0.06] p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm hover-float shimmer-hover transition-all duration-300">
            <div
              className="w-full md:w-32 aspect-square rounded-2xl bg-cover bg-center shrink-0 border border-black/[0.04]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=300')`,
              }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy flex items-center gap-2">
                <span className="text-brand-gold">▪</span> Our Vision
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To stand as the absolute premier technical solutions and custom
                fit-out partner across Dubai and the UAE—delivering unparalleled
                craftsmanship in premium tiling, precise block work, high-end
                door installations, and superior interior finishing.
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
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600')`,
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
              From Concept To Completion, We Master Every Square Foot.
            </h2>
          </div>

          {/* Gorgeous grid of 4 service cards with glassmorphic designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 services-grid">
            {[
              {
                num: "01",
                title: "Office Complexes",
                desc: "Grade-A corporate office towers, corporate plazas, and business parks engineered for high performance, flexible work layouts, and energy efficiency.",
              },
              {
                num: "02",
                title: "Retail & Malls",
                desc: "High-traffic modern shopping malls, flagship retail stores, and commercial strips featuring luxury facades and structural optimization for shopper circulation.",
              },
              {
                num: "03",
                title: "Industrial Hubs",
                desc: "Heavy-duty manufacturing plants, automated logistics centers, and large-scale industrial warehouses boasting customized floor loading capacities.",
              },
              {
                num: "04",
                title: "Institutional Building",
                desc: "High-specification university campuses, governmental office buildings, and state-of-the-art hospitals complying with rigorous safety codes.",
              },
            ].map((serv, index) => (
              <div
                key={index}
                className="service-card group relative rounded-3xl bg-white/45 backdrop-blur-md border border-white/60 p-8 md:p-10 shadow-sm hover-float shimmer-hover transition-all duration-500 overflow-hidden"
              >
                {/* Animated card background shine */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent group-hover:animate-[spin_4s_linear_infinite] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-sans font-black text-4xl text-brand-navy/10 group-hover:text-brand-gold transition-colors duration-300">
                      {serv.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
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
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-black text-xl text-brand-navy group-hover:text-brand-accent transition-colors duration-300">
                      {serv.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                </div>
              </div>
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
                  Explore The Strategic Way Our Process Is Done
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
                Explore our portfolio of high-impact commercial developments,
                where structural integrity meets architectural innovation. Each
                project represents our commitment to redefining urban
                landscapes.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    step: "01",
                    title: "Strategic Planning",
                    desc: "Before break ground, we evaluate topographical maps, run zoning regulatory checks, perform environmental impact surveys, and craft full structural specifications.",
                  },
                  {
                    step: "02",
                    title: "Precision Estimating",
                    desc: "Our quantity surveyors build micro-cost matrices tracking material specifications down to individual blocks and plaster mixes, guaranteeing zero hidden costs.",
                  },
                  {
                    step: "03",
                    title: "Masterful Building",
                    desc: "We coordinate site teams using sophisticated project management software, maintaining consistent speed while passing weekly external safety audits.",
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
          6. WHY CHOOSE US — Asymmetric Visual Layout
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Why Choose Us
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
            Strategic Excellence In Every Square Foot.
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            We are a full-service construction studio committed to delivering
            thoughtful, high-quality spaces. Our work blends creativity,
            technical skill, and an unwavering attention to detail.
          </p>
        </div>

        {/* Asymmetrical Grid layout matching user image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch why-choose-grid">
          {/* Left tall card */}
          <div className="why-choose-card lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0 border border-black/[0.04] shadow-sm hover-float transition-all duration-500 group">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[6s]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-[#FCFCFD]">
              <span className="font-sans font-black text-3xl block text-brand-gold mb-2">
                150+
              </span>
              <h3 className="font-sans font-extrabold text-xl mb-2">
                Clients Served
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                We build long-term partnerships through structural transparency
                and consistent, certified structural delivery.
              </p>
            </div>
          </div>

          {/* Middle column (two stacked text cards) */}
          <div className="lg:col-span-4 flex flex-col gap-8 justify-between">
            <div className="why-choose-card bg-white rounded-3xl border border-black/[0.06] p-8 flex-1 flex flex-col justify-center gap-2 hover-float shimmer-hover transition-all duration-300">
              <span className="font-sans font-black text-3xl text-brand-gold">
                15+
              </span>
              <h4 className="font-sans font-black text-lg text-brand-navy">
                Years Experience
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every customized blueprint meets national and international
                engineering regulations for durability.
              </p>
            </div>

            <div className="why-choose-card bg-white rounded-3xl border border-black/[0.06] p-8 flex-1 flex flex-col justify-center gap-2 hover-float shimmer-hover transition-all duration-300">
              <span className="font-sans font-black text-3xl text-brand-gold">
                99%
              </span>
              <h4 className="font-sans font-black text-lg text-brand-navy">
                Success Rate
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Streamlined administrative project scheduling and site
                coordination to minimize budget overrides.
              </p>
            </div>
          </div>

          {/* Right tall card */}
          <div className="why-choose-card lg:col-span-4 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0 border border-black/[0.04] shadow-sm hover-float transition-all duration-500 group">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[6s]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-[#FCFCFD]">
              <span className="font-sans font-black text-3xl block text-brand-gold mb-2">
                200+
              </span>
              <h3 className="font-sans font-extrabold text-xl mb-2">
                Projects Done
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Delivering high-performance corporate infrastructure designed to
                accommodate complex organizational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. CTA SECTION — Full Bleed Dark Landmark (Cost Estimator & Contact)
      ───────────────────────────────────────── */}
      <span id="contact" className="block" />
      <section className="relative py-24 overflow-hidden bg-[#0A1128] border-t border-white/[0.04] text-[#FCFCFD]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Coordinates and Brand Slogan */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                  Contact Estimators
                </span>
                <h2 className="font-sans font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight text-white">
                  Ready to start your next project?
                </h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2">
                  Request an on-site laser survey or submit your CAD plans
                  directly to our engineering coordinators. We offer quick
                  turnaround block masonry, custom joinery, and flat marble
                  laying quotes.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                      Office Site
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-slate-300 mt-0.5">
                      Plot 45-B, Al Quoz Industrial Area 3, Dubai, UAE
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-sm">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                      Direct Hotline
                    </span>
                    <a
                      href="tel:+97141234567"
                      className="text-xs md:text-sm font-bold text-white hover:text-brand-gold transition-colors mt-0.5"
                    >
                      +971 4 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] shadow-sm">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                      Direct Email
                    </span>
                    <a
                      href="mailto:info@blume.ae"
                      className="text-xs md:text-sm font-bold text-slate-300 hover:text-white transition-colors mt-0.5"
                    >
                      info@blume.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Elegant Interactive Form */}
            <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {estSubmitted && (
                <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-md z-30 flex flex-col items-center justify-center gap-4 text-center px-6 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold shadow-lg animate-pulse">
                    <Send className="w-6 h-6 animate-bounce" />
                  </div>
                  <h3 className="font-sans font-black text-lg text-white uppercase tracking-wider">Formatting Estimate Specs</h3>
                  <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
                    Connecting to Blume Technical Services engineering desk on WhatsApp... Redirecting you now to complete dispatch.
                  </p>
                </div>
              )}

              <h3 className="font-sans font-black text-sm uppercase tracking-widest text-brand-gold border-b border-slate-800 pb-4 mb-6">
                Direct Cost Estimate Request
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEstSubmitted(true);
                  
                  const serviceLabels: Record<string, string> = {
                    "fit-out": "Premium Fit-Out & Gypsum",
                    "tiling": "Custom Large-Format Tiling",
                    "masonry": "Precise Masonry Block Work",
                    "doors": "Bespoke Timber Door Sets"
                  };
                  
                  const locationLabels: Record<string, string> = {
                    "business-bay": "Business Bay",
                    "palm-jumeirah": "Palm Jumeirah",
                    "downtown-dubai": "Downtown Dubai",
                    "al-quoz": "Al Quoz Site",
                    "other": "Other District"
                  };

                  const formattedMsg = `*Blume Technical Services - New Estimate Request*\n\n` +
                    `👤 *Client Name:* ${estName}\n` +
                    `📞 *Phone Number:* ${estPhone}\n` +
                    `🛠️ *Required Service:* ${serviceLabels[estService] || estService}\n` +
                    `📍 *Project Location:* ${locationLabels[estLocation] || estLocation}\n\n` +
                    `💬 *Specifications Summary:*\n${estMessage}`;

                  const waUrl = `https://wa.me/97141234567?text=${encodeURIComponent(formattedMsg)}`;
                  
                  setTimeout(() => {
                    window.open(waUrl, "_blank");
                    setEstSubmitted(false);
                    setEstName("");
                    setEstPhone("");
                    setEstMessage("");
                  }, 2000);
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={estName}
                      onChange={(e) => setEstName(e.target.value)}
                      placeholder="Ahmed Al Mansoor"
                      className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/35 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={estPhone}
                      onChange={(e) => setEstPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/35 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      value={estService}
                      onChange={(e) => setEstService(e.target.value)}
                      className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-xs md:text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/35 transition-all"
                    >
                      <option value="fit-out" className="bg-slate-900 text-white">Premium Fit-Out & Gypsum</option>
                      <option value="tiling" className="bg-slate-900 text-white">Custom Large-Format Tiling</option>
                      <option value="masonry" className="bg-slate-900 text-white">
                        Precise Masonry Block Work
                      </option>
                      <option value="doors" className="bg-slate-900 text-white">Bespoke Timber Door Sets</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                      Project Location
                    </label>
                    <select
                      value={estLocation}
                      onChange={(e) => setEstLocation(e.target.value)}
                      className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-xs md:text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/35 transition-all"
                    >
                      <option value="business-bay" className="bg-slate-900 text-white">Business Bay</option>
                      <option value="palm-jumeirah" className="bg-slate-900 text-white">Palm Jumeirah</option>
                      <option value="downtown-dubai" className="bg-slate-900 text-white">Downtown Dubai</option>
                      <option value="al-quoz" className="bg-slate-900 text-white">Al Quoz Site</option>
                      <option value="other" className="bg-slate-900 text-white">Other District</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                    Brief Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={estMessage}
                    onChange={(e) => setEstMessage(e.target.value)}
                    placeholder="Enter estimated floor dimensions, tile requirements, or partition schedules..."
                    className="bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/35 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-white hover:text-brand-navy text-[#0A1128] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md flex items-center justify-center gap-2 group transition-all duration-300 mt-2"
                >
                  <span>Request Estimate Schedule</span>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7.5 CLIENT TESTIMONIALS — Sleek Carousel (Light Slate Theme)
      ───────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 text-brand-navy overflow-hidden relative border-b border-black/[0.04]">
        {/* Dynamic decorative backdrop */}
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
              Read how Blume Technical Services coordinates structural masonry, bespoke door fittings, and premium fit-outs for major enterprises.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-6 md:px-12">
            {/* Active Testimonial Card */}
            <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-lg flex flex-col gap-6 relative transition-all duration-500 transform hover:scale-[1.01]">
              {/* Rating stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold animate-pulse" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-lg md:text-xl text-slate-700 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4 pt-6 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="font-sans font-black text-sm md:text-base text-brand-navy">
                    {testimonials[activeTestimonial].author}
                  </span>
                  <span className="text-slate-500 text-xs mt-0.5">
                    {testimonials[activeTestimonial].role}, <strong className="text-brand-navy font-bold">{testimonials[activeTestimonial].company}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-500 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{testimonials[activeTestimonial].location}</span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-between items-center mt-8">
              {/* Slider pagination dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeTestimonial === idx ? "bg-brand-gold w-8" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Left/Right buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  }
                  className="p-3 rounded-full bg-white border border-slate-150 text-brand-navy hover:bg-[#0A1128] hover:text-white transition-all shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  }
                  className="p-3 rounded-full bg-white border border-slate-150 text-brand-navy hover:bg-[#0A1128] hover:text-white transition-all shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
