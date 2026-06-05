"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ShieldCheck,
} from "lucide-react";
import { submitContactForm } from "@/lib/submit-contact-form";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Fit-Out",
    location: "Business Bay",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const data = await submitContactForm({
        ...formData,
        source: "contact-page",
      });

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Fit-Out",
        location: "Business Bay",
        message: "",
      });

      // Reset success notification overlay after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error("Estimate Request submission error:", err);
      setErrorMessage(err.message || "An unexpected connection error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 w-full bg-[#FCFCFD]">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')`,
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
            Contact Our <span className="text-brand-gold">Engineers</span>
          </h1>
          <p className="font-sans font-medium text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed uppercase tracking-wide">
            Plot 45-B, Al Quoz Industrial Area 3, Dubai, UAE
          </p>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates & Blueprint specs */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-sans font-black text-xs uppercase tracking-widest text-brand-gold">
                Blume Technical Services
              </span>
              <h2 className="font-sans font-black text-2xl md:text-3xl text-brand-navy uppercase tracking-tight">
                Submit Your Specifications
              </h2>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                If you have architectural designs, CAD floorplans, or bills of
                quantities ready, please submit your files. Our engineering desk
                provides detailed itemized estimates for tiling, masonry,
                plaster, and door systems.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-white border border-black/[0.04] p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Office Address
                  </span>
                  <span className="font-sans font-black text-xs md:text-sm text-brand-navy mt-0.5">
                    Plot 45-B, Al Quoz Industrial Area 3,
                    <br />
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>

              <div className="bg-white border border-black/[0.04] p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Direct Landline
                  </span>
                  <a
                    href="tel:+97141234567"
                    className="font-sans font-black text-xs md:text-sm text-brand-navy hover:text-brand-gold transition-colors mt-0.5"
                  >
                    +971 4 123 4567
                  </a>
                </div>
              </div>

              <div className="bg-white border border-black/[0.04] p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:info@blume.ae"
                    className="font-sans font-black text-xs md:text-sm text-brand-navy hover:text-brand-gold transition-colors mt-0.5"
                  >
                    info@blume.ae
                  </a>
                </div>
              </div>

              <div className="bg-white border border-black/[0.04] p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <span className="font-sans font-black text-xs md:text-sm text-brand-navy mt-0.5">
                    Monday — Saturday: 8:00 AM — 6:00 PM
                    <br />
                    Sunday: Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-white border border-black/[0.05] rounded-3xl p-8 md:p-10 shadow-lg relative">
            {submitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl z-20 flex flex-col items-center justify-center gap-4 text-center px-6 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-md">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-sans font-black text-xl text-brand-navy uppercase">
                  Message Submitted
                </h3>
                <p className="text-slate-500 text-xs md:text-sm max-w-sm">
                  Thank you! Your request has been sent to our team and a
                  confirmation email is on its way to your inbox.
                </p>
              </div>
            )}

            <h3 className="font-sans font-black text-lg text-brand-navy uppercase border-b border-slate-100 pb-4 mb-6">
              Estimate Request Form
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Tariq Al Maktoum"
                    className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Emaar Properties"
                    className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="tariq@emaar.ae"
                    className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+971 50 123 4567"
                    className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy focus:outline-none focus:border-brand-gold transition-all"
                  >
                    <option value="Fit-Out">Premium Interior Fit-Out</option>
                    <option value="Tiling">Custom Tiling & Stonework</option>
                    <option value="Masonry">Precision Block Masonry</option>
                    <option value="Doors">High-End Door Installations</option>
                    <option value="Plastering">
                      Partition Walls & Plastering
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    Site Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy focus:outline-none focus:border-brand-gold transition-all"
                  >
                    <option value="Business Bay">Business Bay</option>
                    <option value="Downtown Dubai">Downtown Dubai</option>
                    <option value="Palm Jumeirah">Palm Jumeirah</option>
                    <option value="Dubai Marina">Dubai Marina</option>
                    <option value="Al Quoz">Al Quoz</option>
                    <option value="Other UAE">Other / Rest of Dubai</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  Message & Specifications Summary *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your wall partition layout dimensions, tile areas, door quantities, or general fit-out specifications..."
                  className="bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-xs md:text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-all resize-none"
                />
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-150 text-red-600 text-xs py-3.5 px-4 rounded-xl font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 animate-pulse"></span>
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F172A] hover:bg-brand-gold disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-sans font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-full shadow-md flex items-center justify-center gap-2 group transition-all duration-300 mt-2"
              >
                <span>{isSubmitting ? "Routing Specifications..." : "Submit Request"}</span>
                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
