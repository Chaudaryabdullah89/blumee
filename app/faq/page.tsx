"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What trades does Blume cover?",
      a: "We are a specialist trade contractor across six disciplines: floor screeding, block work and masonry, plastering and painting, gypsum works and false ceilings, interior fit-out and renovation, and MEP. Each is run by its own crews and supervision, so a space can go from bare structure to finished handover under one contract."
    },
    {
      q: "What tolerances do you guarantee on screeded floors?",
      a: "Surface regularity is measured as the maximum permissible gap beneath a 2m straightedge: SR1 (3mm) for high-specification floors, SR2 (5mm) for normal-specification floors, and SR3 (10mm) for utility-specification floors — verified with a level and SR survey on every bay, plus soundness and moisture testing before handover."
    },
    {
      q: "Are you a licensed and approved contractor?",
      a: "Yes. Blume Technical Services L.L.C. holds Professional Trade License No. 959319 issued by Dubai's Department of Economy and Tourism, is VAT registered (TRN 100564723300003), and is a reviewed and approved subcontractor / applicator for leading UAE consultants including Arcadis, National Engineering Bureau, Dewan Architects + Engineers and KEO International."
    },
    {
      q: "Are you certified by the material manufacturers you install?",
      a: "Yes. We are a registered approved applicator for Al Gurg Fosroc, MAPEI Construction Chemicals, Master Builders Solutions, Flowcrete Middle East and NYA Technical Services / SBI Industries — for epoxy, polyurethane, traffic deck and screed systems, executed under manufacturer specification and, where required, their site supervision."
    },
    {
      q: "How fast can you mobilize crews to site?",
      a: "Each trade operates with its own crews, supervision and plant — forced-action mixers, screed pumps and rotary laser levels for screeding, plus masonry, plastering and gypsum gangs. Once approvals and access are in place, we mobilise quickly and hold programme on repetitive floor-by-floor and villa-by-villa sequences."
    },
    {
      q: "Which locations do you cover?",
      a: "From our base in Dubai, our teams mobilise across the Emirates — with completed and ongoing work in Dubai, Abu Dhabi and Fujairah — to deliver screeding, fit-out and renovation projects wherever our clients need us."
    }
  ];

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('/img/office-workspace.jpg')`,
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
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed uppercase tracking-wide">
            Answers on Tolerances, Approvals, and Mobilization Timelines in Dubai
          </p>
        </div>
      </section>

      {/* FAQs List Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-black/[0.05] rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                      <HelpCircle className="w-4.5 h-4.5 text-brand-gold" />
                    </div>
                    <span className="font-sans font-black text-sm md:text-base text-brand-navy leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-188" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-50" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 md:p-8 text-slate-500 text-xs md:text-sm leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Help Card */}
      <section className="pb-24 max-w-4xl mx-auto px-6 md:px-8">
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-sm shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-sans font-black text-sm md:text-base text-brand-navy">
                Have a Specific Technical Question?
              </h4>
              <p className="text-slate-400 text-xs font-semibold">
                Speak directly with an estimating engineer today.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-5 py-3 font-sans font-bold text-xs uppercase tracking-widest text-[#FCFCFD] bg-brand-navy hover:bg-brand-gold rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group/btn shrink-0"
          >
            Ask a Question
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
