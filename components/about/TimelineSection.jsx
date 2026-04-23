"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, TrendingUp, Users, Rocket, Star } from "lucide-react";

const timeline = [
  {
    year: "2020",
    event: "Founded Arnasoft with a vision to revolutionize business automation and coaching for small business owners.",
    icon: Rocket,
    color: "orange"
  },
  {
    year: "2021",
    event: "Launched first flagship program 'Business Scaling Program' helping 100+ business owners transform their operations.",
    icon: TrendingUp,
    color: "teal"
  },
  {
    year: "2022",
    event: "Expanded to 3 cities with 500+ successful transformations and 1M+ YouTube views.",
    icon: Users,
    color: "orange"
  },
  {
    year: "2023",
    event: "Recognized as Top Business Coach in Maharashtra and launched Jewellers Masterclass.",
    icon: Award,
    color: "teal"
  },
  {
    year: "2024",
    event: "Reached 1000+ business transformations and expanded international presence.",
    icon: Star,
    color: "orange"
  }
];

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0891B2]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#F97316]/3 to-transparent blur-xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="section-label mb-3 sm:mb-4 inline-flex gap-2">
            <Calendar size={14} className="text-[var(--orange)]" />
            The Journey
          </span>
          <h2
            className="heading-xl font-montserrat font-extrabold leading-tight px-2"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
          >
            The <span className="heading">Arnasoft</span> Story
          </h2>
          <p className="text-gray-800 text-sm sm:text-base font-medium mt-3 max-w-2xl mx-auto">
            From vision to reality — the journey of excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={sectionRef}>
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F97316] via-[#0891B2] to-[#F97316] rounded-full"
          />

          <div className="space-y-5 sm:space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start group"
              >
                {/* Year Badge with Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full sm:w-28 h-28 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg transition-all duration-300 overflow-hidden group-hover:shadow-xl"
                  style={{
                    background: item.color === "orange"
                      ? "linear-gradient(135deg, #F97316, #EA580C)"
                      : "linear-gradient(135deg, #0891B2, #0E7490)",
                  }}
                >
                  {/* Animated background shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <item.icon size={24} className="text-white" />
                  <span className="text-white text-base font-bold font-inter">
                    {item.year}
                  </span>
                </motion.div>

                {/* Event Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-md border border-slate-100 flex-1 relative overflow-hidden group/card transition-all duration-300 hover:shadow-xl"
                >
                  {/* Card accent border */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{
                      background: item.color === "orange"
                        ? "linear-gradient(180deg, #F97316, #EA580C)"
                        : "linear-gradient(180deg, #0891B2, #0E7490)",
                    }}
                  />
                  
                  {/* Year on mobile */}
                  <div className="sm:hidden text-xs font-bold mb-2" style={{ color: item.color === "orange" ? "#F97316" : "#0891B2" }}>
                    {item.year}
                  </div>
                  
                  <p className="text-slate-600 text-xs sm:text-sm font-inter leading-relaxed">
                    {item.event}
                  </p>
                  
                  {/* Optional: Read more link */}
                  <button className="mt-3 text-xs font-semibold opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" style={{ color: item.color === "orange" ? "#F97316" : "#0891B2" }}>
                    Read more →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 pt-6 border-t border-slate-100"
        >
          <p className="text-gray-800 text-sm lg:text-base font-inter mb-4">
            Be a part of our growing success story
          </p>
          <button className="btn-primary text-sm px-6 py-2.5">
            Join Our Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}