"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { events } from "@/lib/data";

const badgeStyle = {
  "Flagship Event": { bg: "bg-orange-100 text-orange-700" },
  "Free Event":     { bg: "bg-emerald-100 text-emerald-700" },
  "Premium Event":  { bg: "bg-[#0891B2]/10 text-[#0891B2]" },
};

export default function EventsPreview() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 inline-flex"
            >
              Events & Masterclasses
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl font-montserrat font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0F172A" }}
            >
              Upcoming{" "}
              <span className="heading">Events</span>
            </motion.h2>
          </div>
          <Link href="/events" className="btn-secondary inline-flex text-sm shrink-0">
            All Events <ArrowRight size={14} />
          </Link>
        </div>

        {/* Events list */}
        <div className="space-y-5">
          {upcomingEvents.map((ev, i) => {
            const dateObj = new Date(ev.date);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleDateString("en-IN", { month: "short" });
            const badge = badgeStyle[ev.badge] || badgeStyle["Premium Event"];

            return (
              <motion.div
                key={ev.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group bg-white rounded-3xl border border-slate-100 hover:border-orange-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7">
                  {/* Date block */}
                  <div
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-sm"
                    style={{
                      background: i === 0
                        ? "linear-gradient(135deg, #F97316, #EA580C)"
                        : i === 1
                        ? "linear-gradient(135deg, #10B981, #059669)"
                        : "linear-gradient(135deg, #0891B2, #0E7490)",
                    }}
                  >
                    <span className="text-white text-xl font-extrabold font-montserrat leading-none">{day}</span>
                    <span className="text-white/80 text-xs font-inter uppercase tracking-wide">{month}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge.bg}`}>
                        {ev.badge}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                        {ev.mode}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-bold text-lg text-[#0F172A] group-hover:text-[#F97316] transition-colors duration-200 mb-2">
                      {ev.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-inter">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-[#F97316]" />
                        {ev.venue}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-[#0891B2]" />
                        {ev.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-slate-400" />
                        {ev.language}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/events#${ev.slug}`}
                    className="btn-primary shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl  text-white text-sm font-semibold hover:bg-[#F97316] transition-all duration-300 font-inter"
                  >
                    Register Now
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
