"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

// Duplicate cards for seamless infinite loop
const row1 = [...testimonials, ...testimonials];
const row2 = [...[...testimonials].reverse(), ...[...testimonials].reverse()];

function TestimonialCard({ t, i }) {
  return (
    <div
      className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-6 mx-3 shadow-sm border border-slate-100 flex flex-col"
      style={{ minHeight: 200 }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(t.rating)].map((_, s) => (
          <Star key={s} size={13} fill="#F97316" className="text-[#F97316]" />
        ))}
      </div>

      {/* Text */}
      <p
        className="text-slate-600 text-sm leading-relaxed flex-1 font-inter"
        lang={t.language === "mr" ? "mr" : "en"}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold font-montserrat flex-shrink-0"
          style={{
            background: i % 2 === 0
              ? "linear-gradient(135deg, #F97316, #EA580C)"
              : "linear-gradient(135deg, #0891B2, #0E7490)",
          }}
        >
          {t.name.charAt(t.name.indexOf(" ") + 1)}
        </div>
        <div>
          <div className="font-bold text-sm text-[#0B0F1A] font-montserrat">{t.name}</div>
          <div className="text-xs text-slate-400 font-inter">{t.program} · {t.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4 inline-flex"
        >
          Client Stories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat font-black leading-tight tracking-tight mb-3"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0B0F1A" }}
        >
          What Our <span className="gradient-text">Clients Say</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 font-inter"
        >
          Real words from 1000+ business owners who transformed with Arnav Sir.
        </motion.p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-wrapper gray mb-4">
        <div className="marquee-track marquee-left py-2">
          {row1.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-wrapper gray">
        <div className="marquee-track marquee-right py-2">
          {row2.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
