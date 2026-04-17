"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">

          <span className="section-label mb-3 sm:mb-4 inline-block">
            Transformative Journeys
          </span>

          <h2
            className="font-montserrat font-black leading-tight text-[var(--dark)]"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
          >
            Coaching Programs{" "}
            <span className="gradient-text">
              Built for Results
            </span>
          </h2>

        </div>

        {/* Tabs (Scrollable on mobile) */}
        <div className="flex justify-start sm:justify-center gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar px-1">

          {["All", "Recorded", "Live"].map((tab, i) => (
            <button
              key={i}
              className={`
                whitespace-nowrap px-5 py-2 rounded-full 
                font-montserrat font-semibold text-sm
                ${
                  i === 0
                    ? "bg-[var(--orange)] text-white shadow"
                    : "bg-[var(--gray-light)] text-[var(--gray)]"
                }
              `}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

          {programs.map((prog) => (
            <div
              key={prog.slug}
              className="
                bg-white rounded-2xl 
                border border-[var(--gray-border)] 
                shadow-sm overflow-hidden 
                flex flex-col
                hover:shadow-lg transition
              "
            >

              {/* Image */}
              <div className="h-44 sm:h-48 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">

                <h3 className="text-base sm:text-lg lg:text-xl font-montserrat font-bold text-[var(--dark)]">
                  {prog.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--gray)] font-inter leading-relaxed line-clamp-2">
                  {prog.description}
                </p>

                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--gray)] mt-1">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <BookOpen size={14} className="text-[var(--dark)]" />
                    {prog.lessons}
                  </span>

                  <span className="flex items-center gap-1 sm:gap-2">
                    <Clock size={14} className="text-[var(--dark)]" />
                    {prog.duration}
                  </span>
                </div>

                {/* Price + Buttons */}
                <div className="mt-auto pt-4">

  {/* <p className="text-base sm:text-lg font-montserrat font-bold text-[var(--dark)] mb-3 sm:mb-4">
    ₹ {prog.price}
  </p> */}

  {/* Buttons responsive */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">

  <Link
    href={`/programs/${prog.slug}`}
    className="btn-secondary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
  >
    Explore
  </Link>

  <Link
    href={`${prog.contact}`}
    className="btn-primary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
  >
    Enroll Now 
  </Link>

</div>

</div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}