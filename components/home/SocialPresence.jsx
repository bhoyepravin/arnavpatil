"use client";

import { motion } from "framer-motion";
import {
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

const socialStats = [
  {
    id: 1,
    icon: <Youtube className="text-red-500" size={28} />,
    value: "6.9M",
    label: "Subscribers",
  },
  {
    id: 2,
    icon: <Facebook className="text-blue-600" size={28} />,
    value: "6M",
    label: "Followers",
  },
  {
    id: 3,
    icon: <Instagram className="text-pink-500" size={28} />,
    value: "1.9M",
    label: "Followers",
  },
  {
    id: 4,
    icon: <Linkedin className="text-blue-700" size={28} />,
    value: "23K",
    label: "Followers",
  },
  {
    id: 5,
    icon: <Send className="text-sky-500" size={28} />,
    value: "13.4K",
    label: "Followers",
  },
  {
    id: 6,
    icon: <Twitter className="text-black" size={28} />,
    value: "5K",
    label: "Followers",
  },
];

export default function SocialPresence() {
  return (
    <section className="py-10  sm:py-20 lg:py-28 bg-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-3 inline-flex"
          >
            My Presence
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat font-black leading-tight tracking-tight text-[var(--dark)]"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            }}
          >
            Social Media{" "}
            <span className="heading">Presence</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-6 
          gap-4 sm:gap-6
        ">
          {socialStats.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-[var(--orange)]/30 bg-white hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] sm:h-1 bg-gradient-to-r from-[var(--orange)] to-[var(--teal)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center rounded-lg sm:rounded-xl bg-[var(--gray-light)] mb-3 sm:mb-4 group-hover:scale-105 transition">
                {item.icon}
              </div>

              {/* Value */}
              <h3 className="font-montserrat font-black text-lg sm:text-xl md:text-2xl text-[var(--dark)] mb-0.5 sm:mb-1">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-xs sm:text-sm text-[var(--gray)] font-inter">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}