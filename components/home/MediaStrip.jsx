"use client";

import { motion } from "framer-motion";

// Media/press mentions — replace with actual press logos
const media = [
  { name: "Times of India", type: "Newspaper" },
  { name: "Lokmat", type: "Marathi Newspaper" },
  { name: "Maharashtra Times", type: "Newspaper" },
  { name: "Sakal", type: "Marathi Newspaper" },
  { name: "Business Standard", type: "Business News" },
  { name: "Zee Business", type: "TV News" },
  { name: "ABP Majha", type: "Marathi TV" },
  { name: "ET Now", type: "Business TV" },
];

const mediaLoop = [...media, ...media];

export default function MediaStrip() {
  return (
    <section className="py-16 bg-[#0B0F1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-500 text-xs font-montserrat font-bold uppercase tracking-widest"
        >
          ✦ As Featured In ✦
        </motion.p>
      </div>

      {/* Scrolling media logos */}
      <div className="marquee-wrapper dark">
        <div className="marquee-track marquee-left-fast py-2">
          {mediaLoop.map((m, i) => (
            <div key={i} className="flex-shrink-0 mx-5">
              <div className="bg-white/5 border border-white/8 rounded-xl px-7 py-4 hover:bg-white/10 hover:border-[#F97316]/30 transition-all duration-300 min-w-[160px] text-center">
                <div className="font-montserrat font-bold text-sm text-white/80">{m.name}</div>
                <div className="text-xs text-slate-600 font-inter mt-0.5">{m.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
