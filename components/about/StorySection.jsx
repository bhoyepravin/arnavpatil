"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export default function StorySection() {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            The Story
          </span>
          <h2 className="heading-xl text-3xl sm:text-4xl font-extrabold text-[var(--dark)] font-montserrat">
            A Journey Of <span className="heading">Transformation</span>
          </h2>
          <p className="text-gray-800 font-medium text-xs sm:text-base mt-3 max-w-2xl mx-auto">
            From humble beginnings to transforming thousands of businesses
          </p>
        </motion.div>

        {/* SECTION 1 - Early Life */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--orange)]/10 to-[#0891B2]/10 rounded-2xl blur-xl" />
            <Image
              src="/images/arnav_patil_sir.jpeg"
              alt="Arnav Patil - Early Life"
              width={500}
              height={400}
              className="w-full object-cover rounded-2xl shadow-xl relative z-10"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="w-12 h-0.5 bg-[var(--orange)] mb-4" />
            <p className="heading font-semibold tracking-wider text-sm mb-2 uppercase">
              Early Life
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--dark)] mb-4 font-montserrat">
              A Foundation Built on <span className="heading">Values</span> 
            </h3>
            <p className="text-[var(--gray)] leading-relaxed mb-4 font-inter">
              Arnav Patil grew up with a deep understanding of business challenges, 
              witnessing firsthand the struggles of small business owners in India. 
              His upbringing instilled in him the values of discipline, integrity, 
              and relentless pursuit of excellence.
            </p>
            <p className="text-[var(--gray)] leading-relaxed font-inter">
              During his early career, he worked closely with entrepreneurs across 
              various industries, observing their financial challenges and operational 
              bottlenecks. These experiences became the foundation of his coaching philosophy.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--gray-border)]" />
          </div>
          <div className="relative flex justify-center">
            <div className="w-12 h-12 bg-white border border-[var(--gray-border)] rounded-full flex items-center justify-center">
              <span className="text-[var(--orange)] text-sm font-bold">✦</span>
            </div>
          </div>
        </div>

        {/* SECTION 2 - The Struggle */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="w-12 h-0.5 bg-[var(--orange)] mb-4" />
            <p className="heading font-semibold tracking-wider text-sm mb-2 uppercase">
              The Struggle
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--dark)] mb-4 font-montserrat">
              Failures and the <span className="heading">Turning Point</span>     
            </h3>
            <p className="text-[var(--gray)] leading-relaxed mb-4 font-inter">
              Arnav's journey wasn't free of setbacks. Like many entrepreneurs, he faced 
              his share of failures — from failed business attempts to financial struggles. 
              But instead of giving up, he used these experiences as learning opportunities.
            </p>
            <p className="text-[var(--gray)] leading-relaxed font-inter">
              During these tough years, he discovered a truth that changed his life: 
              "Small business owners don't need more work — they need better systems." 
              This realization became the cornerstone of his coaching methodology.
            </p>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0891B2]/10 to-[var(--orange)]/10 rounded-2xl blur-xl" />
            <Image
              src="/images/story2.jpg"
              alt="Struggle and Growth"
              width={500}
              height={400}
              className="w-full object-cover rounded-2xl shadow-xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--gray-border)]" />
          </div>
          <div className="relative flex justify-center">
            <div className="w-12 h-12 bg-white border border-[var(--gray-border)] rounded-full flex items-center justify-center">
              <span className="text-[var(--orange)] text-sm font-bold">✦</span>
            </div>
          </div>
        </div>

        {/* SECTION 3 - Transformation */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--orange)]/10 to-[#0891B2]/10 rounded-2xl blur-xl" />
            <Image
              src="/images/story3.jpg"
              alt="Transformation Success"
              width={500}
              height={400}
              className="w-full object-cover rounded-2xl shadow-xl relative z-10"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="w-12 h-0.5 bg-[var(--orange)] mb-4" />
            <p className="heading font-semibold tracking-wider text-sm mb-2 uppercase">
              The Transformation
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--dark)] mb-4 font-montserrat">
              The Rise of a <span className="heading">Business Mentor</span>
            </h3>
            <p className="text-[var(--gray)] leading-relaxed mb-4 font-inter">
              When Arnav began coaching entrepreneurs, he focused on systems, not stress. 
              His unique approach — combining automation with human leadership — helped 
              hundreds of business owners break free from daily chaos and scale sustainably.
            </p>
            <p className="text-[var(--gray)] leading-relaxed font-inter">
              Today, Arnav Patil is recognized as one of India's leading business coaches, 
              having transformed over 1000+ businesses across 10+ cities. His mission 
              continues: To turn Vyapari into CEOs and make India "Sone ki Chidiya" again.
            </p>
            
            {/* Stats highlight */}
            <div className="mt-6 flex gap-6">
              <div>
                <div className="text-2xl font-bold text-[var(--orange)]">1000+</div>
                <div className="text-xs text-[var(--gray)]">Businesses Transformed</div>
              </div>
              <div className="w-px bg-[var(--gray-border)]" />
              <div>
                <div className="text-2xl font-bold text-[var(--orange)]">10+</div>
                <div className="text-xs text-[var(--gray)]">Cities Covered</div>
              </div>
              <div className="w-px bg-[var(--gray-border)]" />
              <div>
                <div className="text-2xl font-bold text-[var(--orange)]">5+</div>
                <div className="text-xs text-[var(--gray)]">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}