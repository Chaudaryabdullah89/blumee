"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Ruler,
  Cpu,
  HardHat,
  ArrowRight,
  Award,
  Calendar,
} from "lucide-react";
import BackgroundImage from "@/app/components/BackgroundImage";

export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. HERO SECTION — Premium Dark Banner
      ───────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background office interior */}
        <BackgroundImage
            src="/img/office-interior.jpg"
            priority
            className="transition-transform duration-[10s] scale-105"
          />
        {/* Navy dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 via-[#0A1128]/80 to-[#FCFCFD]" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-8 w-full z-10 text-center flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] w-fit shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-brand-gold">
              Who We Are
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter text-white uppercase drop-shadow-lg max-w-4xl">
            Craftsmanship In{" "}
            <span className="text-brand-gold font-black">Every Detail</span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            Blume Technical Services L.L.C. is a specialist trade contractor
            delivering floor screeding, block work, plastering, gypsum and
            false ceilings, interior fit-out and MEP turnkey solutions for
            commercial offices, residential developments and hospitality
            spaces across Dubai and the wider United Arab Emirates.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. COMPANY PROFILE — Editorial Layout
      ───────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Deep Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                  Our Experience
                </span>
                <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                  Specialist Trades, End-to-End Delivery
                </h2>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Blume Technical Services provides end-to-end turnkey solutions
                for commercial offices, residential developments and
                hospitality spaces across Dubai and the wider United Arab
                Emirates. Our work spans six specialist disciplines — floor
                screeding, block work and masonry, plastering and painting,
                gypsum works and false ceilings, interior fit-out and
                renovation, and MEP — each run by its own crews and
                supervision.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                With an extensive track record and a dedicated team of
                engineers, supervisors and skilled tradespeople, we serve a
                diverse client base of developers, main contractors and
                private owners. That depth lets us take a space from bare
                structure to finished handover under one contract. At Blume,
                full client satisfaction is our standard — delivered through
                high-quality craftsmanship and on-time project completion.
              </p>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5 relative">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-4 border border-brand-gold/30 rounded-3xl -rotate-1 pointer-events-none" />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-xl border border-black/[0.04]">
                <BackgroundImage
                    src="/img/mission-interior.jpg"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                {/* Floating glass overlay card inside the image */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Award className="w-5 h-5 text-brand-gold" />
                    <span className="font-sans font-black text-xs text-brand-navy uppercase tracking-wider">
                      Approved Applicator
                    </span>
                  </div>
                  <p className="text-slate-700 text-[11px] md:text-xs leading-relaxed">
                    Registered approved applicator for Fosroc, MAPEI,
                    Flowcrete and Master Builders Solutions flooring &amp;
                    coating systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. CORE VALUES SECTION — Grid Layout
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Our Pillars
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
            Values That Guide Our Foundations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Integrity",
              desc: "Honest, transparent dealings with every client and partner — the reputation that wins us repeat clientele and long-term relationships across the UAE construction industry.",
              icon: ShieldCheck,
            },
            {
              title: "Excellence",
              desc: "Meticulous craftsmanship and high standards on every project — from substrate preparation to final finish, executed within strictly controlled time and budgetary parameters.",
              icon: HardHat,
            },
            {
              title: "Collaboration",
              desc: "Open communication that keeps clients involved at every stage. Your input shapes each stage of the process, from consultation through to handover.",
              icon: Ruler,
            },
            {
              title: "Innovation",
              desc: "Fresh design thinking paired with practical, buildable solutions — bringing cutting-edge spatial concepts together with proven engineering and installation techniques.",
              icon: Cpu,
            },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-black/[0.05] p-8 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-extrabold text-lg text-brand-navy group-hover:text-brand-accent transition-colors duration-200">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. OUR TEAM & MANPOWER — Real resourced figures
      ───────────────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-black/[0.04] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Our Strength
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
              Our Team &amp; Manpower
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Blume fields a dedicated, on-the-ground workforce for fast,
              reliable execution across every active site — backed by hands-on
              engineering supervision from planning through handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { count: "70", label: "Skilled Labourers", desc: "Screed, epoxy and finishing trades" },
              { count: "3", label: "Site Supervisors", desc: "Daily toolbox talks and site control" },
              { count: "2", label: "Project Engineers", desc: "Method statements and quality control" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-black/[0.05] p-8 flex flex-col gap-2 items-center text-center shadow-sm hover-float transition-all duration-300"
              >
                <span className="font-sans font-black text-5xl text-brand-gold">
                  {stat.count}
                </span>
                <h3 className="font-sans font-black text-base text-brand-navy uppercase tracking-tight">
                  {stat.label}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-xs md:text-sm max-w-2xl mx-auto mt-10 leading-relaxed">
            A total deployed workforce of <strong className="text-brand-navy">75</strong>, allocated
            flexibly across residential, commercial and hospitality sites throughout the UAE.
            Project-specific allocation is confirmed on award.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. MILESTONES — Chronological Timeline
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Our Journey
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
            Comprehensive Service, Start to Finish
          </h2>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 flex flex-col gap-16">
          {[
            {
              year: "01",
              title: "Foundation Established",
              desc: "Launched with a vision to transform spaces across the region, licensed as Blume Technical Services under Dubai's Department of Economy and Tourism.",
            },
            {
              year: "02",
              title: "First Major Project",
              desc: "Successfully completed our first commercial fit-out project, building the track record that would grow into a diverse portfolio of developers and main contractors.",
            },
            {
              year: "03",
              title: "Screeding Division Formed",
              desc: "Dedicated screeding crews and plant established as a standalone specialist capability — with forced-action mixers, screed pumps and rotary laser levels for fast, flat, high-volume floor placement.",
            },
            {
              year: "04",
              title: "Expanded Service Offering",
              desc: "Integrated comprehensive MEP services into our design and fit-out solutions, becoming an approved applicator for leading manufacturers including Fosroc, MAPEI and Flowcrete.",
            },
          ].map((mil, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Phase flag floating on left (only visible on medium screens and up) */}
              <div className="absolute hidden md:block -left-36 top-1.5 w-24 text-right">
                <span className="font-sans font-black text-2xl text-brand-navy group-hover:text-brand-gold transition-colors duration-200">
                  {mil.year}
                </span>
              </div>

              {/* Connector dot with Lucide Calendar icon inside */}
              <div className="absolute -left-[14px] top-1.5 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-navy group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-200 z-10 shadow-sm">
                <Calendar className="w-3.5 h-3.5" />
              </div>

              <div className="flex flex-col gap-1.5">
                {/* Phase flag fallback for mobile */}
                <span className="font-sans font-black text-sm text-brand-gold md:hidden">
                  Phase {mil.year}
                </span>
                <h4 className="font-sans font-black text-lg md:text-xl text-brand-navy">
                  {mil.title}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl">
                  {mil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. CALL TO ACTION — Sleek Card
      ───────────────────────────────────────── */}
      <section className="pb-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-3xl bg-brand-navy p-8 md:p-16 text-center text-white overflow-hidden shadow-xl border border-white/[0.08] group">
          {/* Subtle gold decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 items-center max-w-2xl mx-auto">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Let&apos;s Build Together
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
              Ready to Realize Your Structural Vision?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Contact our engineering and design coordination team to review
              your development requirements, architectural blueprints, or
              materials planning.
            </p>

            <Link
              href="/#contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
