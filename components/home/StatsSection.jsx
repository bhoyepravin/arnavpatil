"use client";

import { Users, Building2, Factory, PlayCircle } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users size={38} className="text-[var(--orange)]" />,
    value: "400,000+",
    label: "Businessmen Trained",
  },
  {
    id: 2,
    icon: <Building2 size={38} className="text-[var(--orange)]" />,
    value: "476+",
    label: "Cities",
  },
  {
    id: 3,
    icon: <Factory size={38} className="text-[var(--orange)]" />,
    value: "300+",
    label: "Industries",
  },
  {
    id: 4,
    icon: <PlayCircle size={38} className="text-[var(--orange)]" />,
    value: "911M+",
    label: "Views",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-20 bg-[var(--off-white)] border-t border-[var(--gray-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center gap-4 animate-[fade-in-up_0.8s_ease-out]"
          >
            {/* Icon wrapper */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[var(--orange-pale)] border border-[var(--orange-light)] shadow-sm">
              {stat.icon}
            </div>

            {/* Value */}
            <h3 className="text-4xl font-bold text-[var(--dark)] font-montserrat">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="text-[var(--gray)] text-base font-inter">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}