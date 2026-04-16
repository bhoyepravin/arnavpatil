"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">

          {/* Label */}
          <span className="section-label mb-4 inline-block">
            Transformative Journeys
          </span>

          {/* Heading */}
          <h2 className="font-montserrat font-black leading-tight text-[var(--dark)]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
            Coaching Programs{" "}
            <span className="gradient-text">
              Built for Results
            </span>
          </h2>

        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="px-6 py-2 rounded-full bg-[var(--orange)] text-white font-montserrat font-semibold shadow">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-[var(--gray-light)] text-[var(--gray)] font-montserrat font-semibold">
            Recorded
          </button>
          <button className="px-6 py-2 rounded-full bg-[var(--gray-light)] text-[var(--gray)] font-montserrat font-semibold">
            Live
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((prog) => (
            <div
              key={prog.slug}
              className="bg-white rounded-2xl border border-[var(--gray-border)] shadow-sm overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">

                <h3 className="text-xl font-montserrat font-bold text-[var(--dark)]">
                  {prog.title}
                </h3>

                <p className="text-sm text-[var(--gray)] font-inter leading-relaxed line-clamp-2">
                  {prog.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-[var(--gray)] mt-1">
                  <span className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[var(--dark)]" />
                    {prog.lessons}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-[var(--dark)]" />
                    {prog.duration}
                  </span>
                </div>

                {/* Price + Buttons */}
                <div className="mt-auto pt-4">
                  <p className="text-lg font-montserrat font-bold text-[var(--dark)] mb-4">
                    ₹ {prog.price}
                  </p>

                  <div className="flex justify-between items-center">
                    <Link href={`/programs/${prog.slug}`} className="btn-secondary">
                      Explore
                    </Link>

                    <Link href={`/programs/${prog.slug}`} className="btn-primary">
                      Enroll Now →
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