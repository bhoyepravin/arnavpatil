"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, ArrowRight } from "lucide-react";
import { coachInfo } from "@/lib/data";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)" }}
      />
      {/* Orange glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
      />
      {/* Teal glow */}
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0891B2 0%, transparent 70%)" }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange-300 text-xs font-semibold uppercase tracking-widest mb-8 border border-white/10 font-inter">
            ✦ Start Your Transformation
          </span>

          {/* Headline */}
          <h2
            className="font-montserrat font-extrabold leading-tight text-white mb-6"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            Ready to Take Your Business{" "}
            <span className="text-[#F97316]">to the Next Level?</span>
          </h2>

          <p className="text-slate-400 text-lg font-inter leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 1000+ business owners who have already transformed their businesses with Arnav Patil&apos;s proven strategies. Your breakthrough starts with one call.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={coachInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#F97316] text-white font-semibold text-base hover:bg-[#EA6A0A] transition-all duration-300 shadow-2xl shadow-orange-900/30 hover:scale-105 font-inter"
            >
              <FaWhatsapp size={20} />
              Book Free Consultation on WhatsApp
            </a>
            <a
              href={`tel:${coachInfo.phone}`}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold text-base hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105 font-inter"
            >
              <Phone size={18} />
              {coachInfo.phone}
            </a>
          </div>

          {/* Trust line */}
          <p className="text-slate-500 text-sm font-inter mt-8">
            Free consultation · No commitment · 100% personalised advice
          </p>
        </motion.div>
      </div>
    </section>
  );
}
