/*
 * PROJECT DETAIL PAGE — DISABLED FOR NOW
 *
 * This folder is named `_id` rather than `[id]`. Next treats a leading
 * underscore as a private folder and leaves it out of routing entirely, so
 * /projects/1, /projects/2 ... no longer resolve. The code below is kept
 * intact and is not deleted.
 *
 * To switch the detail pages back on: rename this folder back to `[id]`,
 * restore the card link on the home page and the title link on the projects
 * page, and put the per-project entries back in app/sitemap.ts.
 */

"use client";

import React, { use } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Clock,
  Wrench,
} from "lucide-react";
import { findProject } from "@/lib/projects";
import BackgroundImage from "@/app/components/BackgroundImage";



export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const project = findProject(resolvedParams.id);

  if (!project) {
    return (
      <div className="flex-1 w-full bg-[#FCFCFD] min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-sans font-black text-3xl text-brand-navy">
          Project Not Found
        </h1>
        <p className="text-slate-500 text-sm max-w-md text-center">
          The project you are looking for does not exist or has been archived.
          Check our other selected works.
        </p>
        <Link
          href="/projects"
          className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* ─────────────────────────────────────────
          1. PARALLAX HERO BANNER
      ───────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-28 pb-16">
        <BackgroundImage
            src={project.img}
            className="transition-transform duration-[10s] scale-105"
          />
        {/* Navy dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFD] via-[#0A1128]/70 to-[#0A1128]/30" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full z-10 flex flex-col gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit text-white hover:bg-white hover:text-brand-navy transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-brand-gold text-white font-sans font-bold text-[10px] uppercase tracking-widest rounded-full border border-brand-gold/20 shadow-sm">
              {project.category}
            </span>
          </div>

          <h1 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-brand-navy uppercase tracking-tight leading-none drop-shadow-md">
            {project.title}
          </h1>

          <div className="flex gap-4 items-center text-slate-700 text-xs md:text-sm font-semibold mt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-brand-gold" />
              {project.location}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-brand-gold" />
              {project.status}
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. DETAILED NARRATIVE & METADATA CARD
      ───────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Extensive Case Study Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-sans font-black text-2xl md:text-3xl text-brand-navy uppercase tracking-tight border-l-4 border-brand-gold pl-4">
                Project Overview
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2">
                {project.desc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-extrabold text-lg text-brand-navy uppercase">
                Technical Execution
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {project.technicalDetails}
              </p>
            </div>

            {/* Scope of Work Bulletpoints */}
            <div className="flex flex-col gap-4 bg-slate-50 border border-slate-100 p-8 rounded-3xl">
              <h4 className="font-sans font-black text-xs uppercase tracking-widest text-brand-navy mb-1 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-gold" />
                Scope of Works
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-slate-600 text-xs md:text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Project Facts Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white border border-black/[0.06] shadow-lg p-8 flex flex-col gap-6">
              <h3 className="font-sans font-black text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-4">
                Project Key Facts
              </h3>

              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Client / Contractor",
                    value: project.client,
                    icon: User,
                  },
                  {
                    label: "Location",
                    value: project.location,
                    icon: MapPin,
                  },
                  {
                    label: "Category",
                    value: project.category,
                    icon: Building,
                  },
                  {
                    label: "Project Status",
                    value: project.status,
                    icon: Clock,
                  },
                  {
                    label: "Verification",
                    value: project.auditStatus,
                    icon: ShieldCheck,
                  },
                ].map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          {fact.label}
                        </span>
                        <span className="font-sans font-black text-xs md:text-sm text-brand-navy">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. ACCORDION / ADDITIONAL SPECS — Structural Compliance
      ───────────────────────────────────────── */}
      <section className="bg-slate-50/70 border-y border-black/[0.04] py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center flex flex-col gap-6 items-center">
          <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
            Quality Assurance
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-brand-navy uppercase tracking-tight">
            How We Verified Quality On This Project
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Quality is planned before work starts, verified during execution
            and evidenced at handover — not inspected in afterwards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                01
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Level & Survey Checks
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Straightedge and laser level checks recorded bay by bay against
                the specified surface regularity class.
              </p>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                02
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Soundness & Moisture Testing
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Drop-hammer soundness checks and moisture testing verified
                before any moisture-sensitive finish is laid.
              </p>
            </div>

            <div className="bg-white border border-black/[0.04] rounded-3xl p-8 flex flex-col gap-4 text-left shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold font-sans font-black text-sm">
                03
              </span>
              <h4 className="font-sans font-black text-base text-brand-navy">
                Documented Handover
              </h4>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Joint inspection, snagging and a full handover pack with test
                records issued and accepted for every area released.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. FOOTER CALL TO ACTION — Sleek Card
      ───────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative rounded-3xl bg-brand-navy p-8 md:p-16 text-center text-white overflow-hidden shadow-xl border border-white/[0.08] group">
          {/* Subtle gold decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6 items-center max-w-2xl mx-auto">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
              Get an Estimate
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase leading-tight tracking-tight">
              Ready to Start a Project Like This?
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Contact our engineering and screeding coordination team to
              review your floor plans, screed build-up requirements, or
              fit-out specifications.
            </p>

            <Link
              href="/#contact"
              className="px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-gold hover:bg-white hover:text-brand-navy rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn mt-4"
            >
              Consult an Engineer
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
