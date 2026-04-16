import { notFound } from "next/navigation";
import { programs, testimonials, coachInfo } from "@/lib/data";
import { buildProgramMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft, CheckCircle2, Clock, Globe, Users, Star } from "lucide-react";

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const prog = programs.find((p) => p.slug === params.slug);
  if (!prog) return {};
  return buildProgramMetadata(prog);
}

export default function ProgramDetailPage({ params }) {
  const prog = programs.find((p) => p.slug === params.slug);
  if (!prog) notFound();

  const progTestimonials = testimonials.filter((t) => prog.testimonialIds.includes(t.id));
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: prog.title, href: `/programs/${prog.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-20"
            style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 opacity-15"
            style={{ background: "radial-gradient(circle, #0891B2 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 font-inter transition-colors"
          >
            <ArrowLeft size={14} /> Back to Programs
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: "rgba(249,115,22,0.2)" }}
            >
              {prog.icon}
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F97316]/20 text-orange-300 font-inter">
              {prog.badge}
            </span>
          </div>

          <h1
            className="font-montserrat font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            {prog.title}
          </h1>
          <p className="text-orange-300 text-lg font-medium font-inter mb-6">{prog.tagline}</p>
          <p className="text-slate-400 text-base leading-relaxed font-inter max-w-3xl mb-8">
            {prog.description}
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Clock, val: prog.duration, label: "Duration" },
              { icon: Globe, val: prog.mode, label: "Mode" },
              { icon: Users, val: prog.language, label: "Language" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-sm text-slate-300 font-inter border border-white/10">
                <Icon size={14} className="text-[#F97316]" />
                <span className="text-slate-400 text-xs">{label}:</span>
                <span className="font-medium text-white text-xs">{val}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={coachInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp size={17} /> Book Now on WhatsApp
            </a>
            <a
              href={`tel:${coachInfo.phone}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-all duration-200 font-inter"
            >
              {coachInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* What you'll learn */}
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-8">
                What You&apos;ll Learn
              </h2>
              <ul className="space-y-4">
                {prog.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#F97316] flex-shrink-0 mt-0.5"
                      fill="rgba(249,115,22,0.1)"
                    />
                    <span className="text-slate-600 font-inter">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-8">
                Who This Is For
              </h2>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-100">
                <p className="text-slate-600 font-inter leading-relaxed mb-6">{prog.audience}</p>
                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-400 font-inter mb-4">Language of instruction:</p>
                  <div className="flex flex-wrap gap-2">
                    {prog.language.split(" & ").map((lang) => (
                      <span key={lang} className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-700 border border-slate-200 font-inter">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book CTA card */}
              <div
                className="mt-6 rounded-3xl p-7 text-white"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
              >
                <h3 className="font-montserrat font-bold text-lg mb-2">Ready to Enrol?</h3>
                <p className="text-orange-100 text-sm font-inter mb-5">
                  Message Arnav Sir directly on WhatsApp for availability, schedule, and fees.
                </p>
                <a
                  href={coachInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#F97316] rounded-xl text-sm font-bold hover:bg-orange-50 transition-colors font-inter"
                >
                  <FaWhatsapp size={16} className="text-[#25D366]" />
                  Chat with Arnav Sir
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials for this program */}
      {progTestimonials.length > 0 && (
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-10 text-center">
              What Attendees Say
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {progTestimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={14} fill="#F97316" className="text-[#F97316]" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-inter mb-6" lang={t.language === "mr" ? "mr" : "en"}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
                    >
                      {t.name.charAt(t.name.indexOf(" ") + 1)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#0F172A] font-montserrat">{t.name}</div>
                      <div className="text-xs text-slate-400 font-inter">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More programs */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-4">Explore Other Programs</h2>
        <p className="text-slate-500 font-inter mb-8">
          Discover the full range of coaching programmes by Arnav Patil.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/programs" className="btn-secondary inline-flex">
            <ArrowLeft size={15} /> All Programs
          </Link>
          <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
            <FaWhatsapp size={16} /> Book Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
