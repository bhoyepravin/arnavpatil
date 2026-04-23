"use client";

import { motion } from "framer-motion";
import { Mic, Headphones, Monitor } from "lucide-react";

const items = [
  {
    id: 1,
    icon: <Mic size={30} className="text-[var(--orange-dark)]" />,
    title: "Podcast",
    desc: "Catch inspiring stories of success, resilience, and growth from leaders who built their empires from scratch.",
    btn: "Watch & Listen",
  },
  {
    id: 2,
    icon: <Headphones size={30} className="text-[var(--orange-dark)]" />,
    title: "Insights",
    desc: "Short, impactful ideas to help you think smarter, act faster, and grow your business—without spending hours learning.",
    btn: "Explore Now",
  },
  {
    id: 3,
    icon: <Monitor size={30} className="text-[var(--orange-dark)]" />,
    title: "Watch",
    desc: "Binge-watch my YouTube videos to get case studies, business lessons, techniques, and a lot more.",
    btn: "Watch Now",
  },
];

export default function FreeHelpSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-xl font-montserrat font-black text-[var(--dark)] leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
        >
          Looking For Free Help?{" "}
          <span className="heading">- Here You Go!</span>
        </motion.h2>

        {/* Subheading */}
        <p className="font-montserrat text-lg sm:text-xl tracking-wide text-[var(--dark-2)] mb-3">
          READ. INSIGHTS. WATCH  
        </p>

        <p className="text-gray-800 font-medium text-sm sm:text-base max-w-2xl mx-auto mb-12">
          And get lots of insights, case studies, and business strategies absolutely for free.
        </p>

        {/* Cards Grid with Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--gray-border)] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >

              {/* Circle Icon */}
              <div className="
                w-20 h-20 flex items-center justify-center
                rounded-full bg-white
                shadow-md mb-6
                border border-[var(--orange-dark)]
              ">
                {item.icon}
              </div>

              {/* Divider Line (desktop only) */}
              <div className="hidden lg:block w-full h-[1px] bg-[var(--gray-border)] mb-6" />

              {/* Title */}
              <h3 className="text-xl font-montserrat font-bold text-[var(--dark)] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 font-inter text-sm leading-relaxed mb-6 max-w-xs">
                {item.desc}
              </p>

              {/* Button - Now properly inline and full width on mobile */}
              <button  className="btn-primary text-sm px-6 py-3 w-auto whitespace-nowrap">
                {item.btn}
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}