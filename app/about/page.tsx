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
            We Shape <span className="text-brand-gold font-black">Spaces</span>{" "}
            & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Standards
            </span>
          </h1>

          <p className="font-sans font-medium text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed tracking-wide">
            Blume Technical Services is a premier Interior Design, Fit-Out, and
            Technical Services company that exists to help bring brands and
            spaces to life. We combine design, space planning, precision block
            masonry, professional plastering, custom tiling, bespoke joinery,
            and turnkey fit-out management to deliver pragmatic, end-to-end
            solutions.
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
                  Our Journey
                </span>
                <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
                  Founded on Vision, Driven by Design
                </h2>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Blume Technical Services is a premier Interior Design, Fit-Out,
                and Technical Services company that exists to help bring brands
                and spaces to life. Uniquely, we combine design, space planning,
                precision block masonry, professional plastering, custom tiling,
                bespoke joinery, and turnkey fit-out management to deliver
                pragmatic, end-to-end solutions. Our cross-industry experience
                means all our services are based on an unparalleled
                understanding of real-world success.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Our senior technical staff brings extensive industry experience
                in value-engineering and space management. We offer proven expertise
                in design consultations and material selection, ensuring smooth
                project delivery within tight budgets and challenging timelines.
                Working on diverse projects has honed our ability to find creative,
                high-quality solutions within set parameters.
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
                      Quality Certified
                    </span>
                  </div>
                  <p className="text-slate-700 text-[11px] md:text-xs leading-relaxed">
                    Every project is managed under ISO 9001 and ISO 45001
                    international building standards.
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
              desc: "Honesty, integrity and humility are our key strengths. They help us build a reputation that in turn will help us achieve our mission of repeat clientele and long-term relationships that make us key players in the market.",
              icon: ShieldCheck,
            },
            {
              title: "Creativity",
              desc: "We approach every project with fresh eyes, searching for design solutions and material options that deliver exceptional value — even within tight budgets and challenging parameters.",
              icon: Ruler,
            },
            {
              title: "Innovation",
              desc: "We bring innovative design thinking and structural expertise to every space, combining cutting-edge spatial concepts with proven engineering, installation, and renovation techniques.",
              icon: Cpu,
            },
            {
              title: "Excellence",
              desc: "From corporate offices to hotels, retail shops to healthcare environments, our focus is on creating inspired designs that provide our clients with an environment of lasting value.",
              icon: HardHat,
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
            Milestones
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-brand-navy leading-tight tracking-tight uppercase">
            Our Historic Path
          </h2>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 flex flex-col gap-16">
          {[
            {
              year: "2017",
              title: "Blume Technical Services is Founded",
              desc: "Opened our design studio in Dubai, UAE, with a dedicated team of design and fit-out professionals — prioritizing Interior Design, Fit-Out, and specialized technical services for premium commercial spaces.",
            },
            {
              year: "2019",
              title: "Cross-Industry Expansion",
              desc: "Expanded our portfolio to serve hotels, retail chains, and healthcare facilities — developing deep cross-industry expertise in design-led, end-to-end fit-out solutions.",
            },
            {
              year: "2021",
              title: "Technical Services & Renovations",
              desc: "Expanded our scope to offer specialized technical services — including precision block masonry, professional plastering, and custom large-format tiling to deliver complete design and refurbishment packages.",
            },
            {
              year: "2024",
              title: "Portfolio Excellence",
              desc: "Established a leading position as a premier technical contractor in Dubai, executing high-profile commercial and residential projects with a reputation for inspired design and disciplined execution.",
            },
          ].map((mil, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Year flag floating on left (only visible on medium screens and up) */}
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
                {/* Year flag fallback for mobile */}
                <span className="font-sans font-black text-sm text-brand-gold md:hidden">
                  {mil.year}
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
