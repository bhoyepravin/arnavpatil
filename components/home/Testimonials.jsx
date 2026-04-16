"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    video: "/videos/testimonial1.mp4",
  },
  {
    id: 2,
    video: "/videos/testimonial2.mp4",
  },
  {
    id: 3,
    video: "/videos/testimonial3.mp4",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full h-full bg-[var(--dark-2)] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-white font-montserrat font-black text-[clamp(2rem,4vw,3rem)] leading-tight">
            Our <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-[var(--gray-light)] font-inter text-lg mt-3">
            Stories of Impact
          </p>
        </div>

        {/* RIGHT VIDEO SLIDER */}
        <div className="relative w-full flex justify-center">

          {/* Video */}
          <video
            key={testimonials[current].id}
            controls
            className="w-full max-w-xl rounded-2xl shadow-xl border border-[var(--gray-border)] overflow-hidden"
          >
            <source src={testimonials[current].video} type="video/mp4" />
          </video>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-35px] top-1/2 -translate-y-1/2 bg-white shadow-md text-[var(--dark)] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--orange-pale)] border border-[var(--gray-border)] transition"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-35px] top-1/2 -translate-y-1/2 bg-white shadow-md text-[var(--dark)] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--orange-pale)] border border-[var(--gray-border)] transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}