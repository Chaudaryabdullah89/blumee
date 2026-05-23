"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, FileText, CheckSquare, Shield } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Parallax Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 via-[#0A1128]/85 to-[#FCFCFD]" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-8 w-full z-10 text-center flex flex-col gap-4 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-navy transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-sans font-black text-3xl md:text-5xl text-white uppercase drop-shadow-md tracking-tight">
            Terms of <span className="text-brand-gold">Service</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 tracking-wide uppercase">
            Effective Date: May 23, 2026 — Dubai, UAE
          </p>
        </div>
      </section>

      {/* Editorial Content Layout */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-10 bg-white border border-black/[0.05] p-8 md:p-12 rounded-3xl shadow-sm">
          
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-sans font-black text-lg text-brand-navy uppercase tracking-tight">
                Contractual Framework
              </h2>
              <p className="text-slate-400 text-xs font-semibold">
                Governed by UAE Civil Transactions Law (Federal Law No. 5 of 1985)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              Welcome to the website of <strong>Blume Technical Services</strong>. By browsing this website, requesting spatial quotes, or entering into building service agreements, you acknowledge and agree to abide by the following terms.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase flex items-center gap-2 text-sm md:text-base">
                <FileText className="w-5 h-5 text-brand-gold" />
                1. Quotation Validity & Material Cost
              </h3>
              <p>
                Due to market fluctuations in high-end materials (such as imported Italian marble, concrete masonry block units, and seasoned timber doors), all digital or physical technical estimates issued by Blume Technical Services are valid for exactly <strong>30 calendar days</strong> from the date of issuance.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase flex items-center gap-2 text-sm md:text-base">
                <CheckSquare className="w-5 h-5 text-brand-gold" />
                2. Site Access & Building Permissions
              </h3>
              <p>
                Clients must secure all necessary building management permissions (such as gate passes, NOCs, work permits, and security approvals) prior to Blume Technical Services mobilization. Our technical crews (masons, carpenters, and fit-out teams) require clear, safe access to the premises during working hours approved by the local building code or developers (such as Emaar, Nakheel, or Dubai Properties).
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase flex items-center gap-2 text-sm md:text-base">
                <Shield className="w-5 h-5 text-brand-gold" />
                3. Milestone Payment Framework
              </h3>
              <p>
                Unless stated otherwise in the final project contract, technical works (fit-out, block masonry, custom doors supply, tiling) are executed under structured milestone schedules:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1 text-slate-500 text-xs md:text-sm">
                <li>Mobilization fee (Required before structural block layouts or material orders begin).</li>
                <li>Mid-term milestones (Invoiced upon successful plaster leveling and waterproofing sign-offs).</li>
                <li>Final retention release (Payable upon laser-flatness checks and final inspector approvals).</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-sans font-black text-brand-navy uppercase text-sm md:text-base">
                4. Delays & Force Majeure
              </h3>
              <p>
                Blume Technical Services executes all site operations inside professional, pre-agreed schedules. We are not held liable for delays caused by government authority inspection hold-ups (such as unexpected Dubai Municipality or Civil Defense audits), developer gate-pass delays, or extreme natural events (such as heavy sandstorms or unseasonable rainfall).
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-4 border-t border-slate-100 pt-6">
              <h3 className="font-sans font-black text-brand-navy uppercase text-sm md:text-base">
                5. Legal Jurisdiction
              </h3>
              <p>
                Any dispute, claim, or transaction arising from our building contracts or website estimation coordinates shall be resolved exclusively within the jurisdiction of the competent courts of Dubai, United Arab Emirates.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
