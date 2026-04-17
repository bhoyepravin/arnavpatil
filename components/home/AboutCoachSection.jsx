"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutCoachSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full flex justify-center">

          {/* Background Layer */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-[var(--gray-light)] rounded-2xl hidden sm:block z-0" />

          {/* Image Wrapper */}
          <div className="
            relative z-10
            w-full max-w-md sm:max-w-lg lg:max-w-xl
            h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]
            rounded-2xl overflow-hidden shadow-xl
          ">
            <Image
  src="/images/arnav_patil_sir.jpeg"
  alt="Arnav Patil"
  fill
  priority
  className="object-contain"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="
            absolute z-20
            bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8
            bg-white
            px-4 py-3 sm:px-6 sm:py-4
            rounded-xl shadow-xl border border-[var(--gray-border)]
          ">
            <p className="text-xs sm:text-sm font-inter text-[var(--gray)]">
              <span className="font-bold text-[var(--dark)]">10+ Years</span>
            </p>
            <p className="text-base sm:text-lg font-montserrat font-bold text-[var(--orange)]">
              Experience
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="section-label">About the Coach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat font-black text-[var(--dark)] leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
          >
            Meet <span className="gradient-text">Mr. Arnav Patil</span>
          </motion.h2>

          <p className="text-lg font-semibold text-[var(--dark-2)] mb-4 font-montserrat">
            Your Business Partner
          </p>

          <p className="text-[var(--gray)] font-inter text-sm sm:text-base leading-relaxed mb-6">
            A self-made entrepreneur and passionate business coach with 10+ years
            of experience transforming businesses across India and 5 countries.
            Specialising in jewellery business automation and scaling strategies.
          </p>

          <p className="text-[var(--gray)] font-inter text-sm sm:text-base leading-relaxed mb-6">
            At Arnav Patil & Co., the mission is simple — create lasting,
            measurable impact through proven systems that work in the real world.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              "10+ Years helping businesses scale across India",
              "Jewellery business automation specialist",
              "Coaching clients in 5 countries internationally",
              "Keynote speaker at major business summits",
              "Mentor for young entrepreneurs & women",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-[var(--gray)] font-inter">
                <span className="mt-1 w-2 h-2 bg-[var(--orange)] rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Read Full Story</button>
            <button className="btn-secondary">Book Free Call</button>
          </div>

        </div>
      </div>
    </section>
  );
}