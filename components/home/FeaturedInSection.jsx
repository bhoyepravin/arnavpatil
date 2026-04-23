"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logosRow1 = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=400",
    alt: "Business Logo 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=400",
    alt: "Business Logo 2",
  },
];

const logosRow2 = [
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400",
    alt: "Business Logo 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    alt: "Business Logo 4",
  },
];

export default function FeaturedInSection() {
  return (
    <section className="w-full py-20 bg-white pt-46">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE — Text */}
        <div>
          <span className="section-label mb-3 inline-block">Featured In</span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-montserrat font-black text-[var(--dark)] leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem,3.3vw,2.6rem)" }}
          >
            As Featured In: <br />
            <span className="heading">Trusted Platforms</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[var(--gray)] max-w-xl font-inter text-sm sm:text-base leading-relaxed"
          >
            Recognized by leading business media houses for excellence in
            innovation, leadership, and transforming entrepreneurial success
            across industries.
          </motion.p>
        </div>

        {/* RIGHT SIDE — Auto Sliding Logos */}
        <div className="space-y-10">

          {/* Row 1 — sliding left */}
          <div className="marquee-wrapper gray">
            <div className="marquee-track marquee-left flex gap-10">
              {[...logosRow1, ...logosRow1].map((logo, i) => (
                <div key={i} className="w-[180px] h-[90px] flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={80}
                    className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — sliding right */}
          <div className="marquee-wrapper gray">
            <div className="marquee-track marquee-right flex gap-10">
              {[...logosRow2, ...logosRow2].map((logo, i) => (
                <div key={i} className="w-[180px] h-[90px] flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={80}
                    className="object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}