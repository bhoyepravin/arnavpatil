import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { events, coachInfo } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

export const metadata = buildMetadata("events");

export default function EventsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
  ]);

  const badgeStyle = {
    "Flagship Event": "bg-orange-100 text-orange-700",
    "Free Event":     "bg-emerald-100 text-emerald-700",
    "Premium Event":  "bg-cyan-100 text-cyan-700",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-5 inline-flex">Events & Masterclasses</span>
          <h1
            className="font-montserrat font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
          >
            Upcoming{" "}
            <span className="gradient-text-orange">Events</span>
          </h1>
          <p className="text-slate-500 font-inter text-lg">
            Join Arnav Patil live at masterclasses, workshops, and online webinars — across India and beyond.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="pb-24 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {events.map((ev, i) => {
              const dateObj = new Date(ev.date);
              const endObj = ev.endDate !== ev.date ? new Date(ev.endDate) : null;
              const day = dateObj.getDate();
              const month = dateObj.toLocaleDateString("en-IN", { month: "short" });
              const year = dateObj.getFullYear();
              const badge = badgeStyle[ev.badge] || "bg-slate-100 text-slate-700";

              return (
                <div
                  key={ev.slug}
                  id={ev.slug}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Top accent */}
                  <div
                    className="h-1.5"
                    style={{
                      background: i === 0
                        ? "linear-gradient(90deg, #F97316, #FB923C)"
                        : i === 1
                        ? "linear-gradient(90deg, #10B981, #059669)"
                        : "linear-gradient(90deg, #0891B2, #06B6D4)",
                    }}
                  />
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Date block */}
                      <div
                        className="w-20 h-20 rounded-3xl flex flex-col items-center justify-center flex-shrink-0 shadow-sm"
                        style={{
                          background: i === 0
                            ? "linear-gradient(135deg, #F97316, #EA580C)"
                            : i === 1
                            ? "linear-gradient(135deg, #10B981, #059669)"
                            : "linear-gradient(135deg, #0891B2, #0E7490)",
                        }}
                      >
                        <span className="text-white text-2xl font-extrabold font-montserrat leading-none">{day}</span>
                        <span className="text-white/80 text-xs font-inter">{month} {year}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge}`}>
                            {ev.badge}
                          </span>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-inter">
                            {ev.mode}
                          </span>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-inter">
                            {ev.seats}
                          </span>
                        </div>

                        <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-2">{ev.title}</h2>
                        <p className="text-slate-500 text-sm leading-relaxed font-inter mb-5">{ev.description}</p>

                        {/* Meta */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 text-sm text-slate-500 font-inter">
                          <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-[#F97316]" /> {ev.venue}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={14} className="text-[#0891B2]" /> {ev.time}
                          </span>
                          <span className="flex items-center gap-2">
                            <Users size={14} className="text-slate-400" /> {ev.language}
                          </span>
                        </div>

                        {/* Highlights */}
                        <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                          {ev.highlights.map((h, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <a
                          href={coachInfo.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex"
                        >
                          <FaWhatsapp size={16} />
                          Register via WhatsApp
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A] text-center px-6">
        <h2 className="font-montserrat font-extrabold text-3xl text-white mb-4">
          Want a Private Session or Corporate Training?
        </h2>
        <p className="text-slate-400 font-inter mb-8 max-w-xl mx-auto">
          Contact Arnav Sir directly for customised workshops, corporate training, or keynote sessions.
        </p>
        <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
          <FaWhatsapp size={17} /> Get in Touch
        </a>
      </section>
    </>
  );
}
