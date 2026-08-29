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

export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. HERO SECTION — Premium Dark Banner
      ───────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background office interior */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')`,
          }}
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
            The Floor Sets{" "}
            <span className="text-brand-gold font-black">The Standard</span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            Blume Technical Services L.L.C. provides end-to-end floor
            screeding, interior design and fit-out turnkey solutions for
            commercial offices, residential developments and hospitality
            spaces across Dubai and the wider United Arab Emirates. Floor
            screeding is our core specialisation — the flat, sound, correctly
            cured floor base that every finish above it depends on.
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
                  Specialist Screeding, End-to-End Delivery
                </h2>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Blume Technical Services provides end-to-end floor screeding,
                interior design and fit-out turnkey solutions for commercial
                offices, residential developments and hospitality spaces
                across Dubai and the wider United Arab Emirates. Floor
                screeding is our core specialisation. From bonded and unbonded
                sand-cement screeds to floating, heated and self-levelling
                systems, we deliver the flat, sound, correctly cured floor
                base that every finish above it depends on — at volume, and
                to programme.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                With an extensive track record and a dedicated team of
                engineers, supervisors and trained screeding crews, we serve a
                diverse client base of developers, main contractors and
                private owners. At Blume, full client satisfaction is our
                standard — delivered through high-quality craftsmanship and
                on-time project completion.
              </p>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5 relative">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-4 border border-brand-gold/30 rounded-3xl -rotate-1 pointer-events-none" />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 shadow-xl border border-black/[0.04]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800')`,
                  }}
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
          4. LEADERSHIP TEAM — Portraits Grid
      ───────────────────────────────────────── */}
      {/* <section className="bg-slate-50/70 border-y border-black/[0.04] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Leadership
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
              Meet Our Visionaries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tariq Mahmood",
                role: "CEO & Founder",
                img: "photo-1560250097-0b93528c311a",
                desc: "A visionary leader with 20+ years of experience in Interior Design and Fit-Out management across the UAE, bringing brands and spaces to life with an unparalleled eye for design and execution."
              },
              {
                name: "Sara Rahman",
                role: "Lead Interior Designer",
                img: "photo-1573496359142-b8d87734a5a2",
                desc: "Specializes in concept development, spatial planning, mood boards and material selection — crafting spaces that perfectly reflect client brand identities and operational needs."
              },
              {
                name: "Zain Malik",
                role: "Head of Fit-Out & Execution",
                img: "photo-1519085360753-af0119f7cbe7",
                desc: "Expert in end-to-end fit-out delivery, managing contractors, timelines, and quality control across corporate, retail, hospitality, and healthcare environments."
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-black/[0.06] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden shrink-0 border-b border-black/[0.03]">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/${member.img}?auto=format&fit=crop&q=80&w=600')`,
                    }}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest text-white bg-brand-navy rounded-full border border-white/[0.08]">
                    {member.role}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 gap-3">
                  <h3 className="font-sans font-black text-xl text-brand-navy">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed flex-1">
                    {member.desc}
                  </p>
                  

                  <div className="flex gap-3 mt-4 border-t border-slate-100 pt-4">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-brand-accent tracking-wider hover:underline">
                      <svg className="w-4 h-4 text-brand-accent fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
