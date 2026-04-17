"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/oSzMps4GhcQ",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/_YszSMpla3s",
  },
  {
    id: 3,
    video: "https://www.youtube.com/embed/RUt9ZFntWq4",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
  className="w-full py-16 sm:py-20 lg:py-28 border-t border-[var(--orange-light)]"
  style={{
    background:
      "linear-gradient(180deg, var(--orange-pale) 0%, var(--white) 60%)",
  }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="font-montserrat font-bold leading-tight text-[clamp(1.8rem,5vw,3rem)] text-[var(--dark)]">
            Our <span className="gradient-text">Testimonials</span>
          </h2>

          <p className="text-[var(--gray)] font-inter text-base sm:text-lg mt-3 sm:mt-4">
            Stories of Impact
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full flex justify-center">

          {/* Glow effect */}
          <div className="absolute w-full max-w-2xl h-full bg-[var(--orange-pale)] blur-2xl opacity-40 rounded-3xl" />

          {/* Video Card */}
          <iframe
  key={testimonials[current].id}
  src={testimonials[current].video}
  className="
    relative z-10
    w-full 
    max-w-xl 
    sm:max-w-2xl 
    h-[220px] 
    sm:h-[320px] 
    md:h-[420px] 
    lg:h-[500px] 
    rounded-2xl sm:rounded-3xl 
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    border border-[var(--gray-border)]
    bg-black
  "
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

          {/* Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20">

            <button
              onClick={prevSlide}
              className="
                bg-white/90 backdrop-blur
                text-[var(--dark)]
                w-9 h-9 sm:w-11 sm:h-11
                flex items-center justify-center
                rounded-full shadow-lg
                border border-[var(--gray-border)]
                hover:bg-[var(--orange-pale)]
                hover:scale-110
                transition
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="
                bg-white/90 backdrop-blur
                text-[var(--dark)]
                w-9 h-9 sm:w-11 sm:h-11
                flex items-center justify-center
                rounded-full shadow-lg
                border border-[var(--gray-border)]
                hover:bg-[var(--orange-pale)]
                hover:scale-110
                transition
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 flex gap-2 z-20">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "w-6 bg-[var(--orange)]"
                    : "w-2 bg-[var(--gray-border)]"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}