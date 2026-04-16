"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { coachInfo, stats } from "@/lib/data";

const achievements = [
  "10+ Years helping businesses scale across India",
  "Jewellery business automation specialist",
  "Coaching clients in 5 countries internationally",
  "Keynote speaker at major business summits",
  "Mentor for young entrepreneurs & women",
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0B0F1A] overflow-hidden relative">
      {/* Orange glow */}
      <div className="absolute top-0 left-0 w-[50%] h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(249,115,22,0.07) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-[40%] h-[60%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(8,145,178,0.07) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Photo frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main frame */}
            <div
              className="w-full aspect-square rounded-3xl overflow-hidden relative"
              style={{
                background: "linear-gradient(145deg, #1A2035, #0D1322)",
                border: "1px solid rgba(249,115,22,0.15)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <Image
                  src="/images/arnavpatil_logo.png"
                  alt="Mr. Arnav Patil — Business Coach"
                  width={280}
                  height={220}
                  className="w-52 h-auto object-contain"
                />
              </div>
              {/* Orange glow overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: "linear-gradient(to top, rgba(249,115,22,0.08), transparent)" }} />
            </div>

            {/* Stats pill — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-[#F97316] text-white rounded-2xl px-6 py-4 shadow-2xl"
            >
              <div className="text-3xl font-black font-montserrat leading-none">1000+</div>
              <div className="text-orange-200 text-xs font-inter mt-1">Lives Transformed</div>
            </motion.div>

            {/* Countries badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -top-5 -left-5 bg-white text-[#0B0F1A] rounded-2xl px-5 py-3 shadow-2xl"
            >
              <div className="text-2xl font-black font-montserrat leading-none text-[#0891B2]">5</div>
              <div className="text-slate-500 text-xs font-inter mt-0.5">Countries</div>
            </motion.div>

            {/* Orange vertical accent */}
            <div className="absolute -left-3 top-12 bottom-12 w-1 rounded-full bg-gradient-to-b from-[#F97316] to-[#0891B2] opacity-60" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-orange-400 font-montserrat mb-5">
              About the Coach
            </span>

            <h2
              className="font-montserrat font-black leading-tight tracking-tight mb-6 text-white"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Meet{" "}
              <span className="gradient-text">Mr. Arnav Patil</span>
              <br />
              <span className="text-[#0891B2]">Your Business Partner</span>
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-5 font-inter">
              A self-made entrepreneur and passionate business coach with <strong className="text-white">10+ years</strong> of experience transforming businesses across India and 5 countries. Specialising in jewellery business automation and scaling strategies.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-inter">
              At <strong className="text-white">Arnav Patil & Co.</strong>, the mission is simple — create lasting, measurable impact through proven systems that work in the real world.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={17} className="text-[#F97316] flex-shrink-0" fill="rgba(249,115,22,0.15)" />
                  <span className="text-slate-300 text-sm font-inter">{ach}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary inline-flex">
                Read Full Story <ArrowRight size={16} />
              </Link>
              <a
                href={coachInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white inline-flex"
              >
                Book Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
