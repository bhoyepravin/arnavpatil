"use client";

import { motion } from "framer-motion";
import { whyChoose } from "@/lib/data";

export default function WhySection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 inline-flex"
          >
            Why Arnav Patil
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0B0F1A" }}
          >
            Why Business Owners{" "}
            <span className="gradient-text">Choose Arnav</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="group relative p-7 rounded-2xl border border-slate-100 hover:border-[#F97316]/30 bg-white hover:shadow-xl overflow-hidden transition-all duration-400"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] to-[#0891B2] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* <div className="text-4xl mb-5">{item.icon}</div> */}
              <h3 className="font-montserrat font-black text-lg text-[#0B0F1A] mb-3 group-hover:text-[#F97316] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-inter">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
