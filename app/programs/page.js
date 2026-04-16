import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { programs } from "@/lib/data";
import { coachInfo } from "@/lib/data";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Clock, Globe, Users, CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata("programs");

export default function ProgramsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-5 inline-flex">Our Programs</span>
          <h1
            className="font-montserrat font-extrabold leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", color: "#0F172A" }}
          >
            Coaching Programmes{" "}
            <span className="gradient-text-orange">Built for Results</span>
          </h1>
          <p className="text-slate-500 text-lg font-inter max-w-2xl mx-auto">
            Every programme is crafted from 10+ years of real-world business transformation. Choose what fits your stage and start growing.
          </p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <div
                key={prog.slug}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Top bar */}
                <div
                  className="h-1.5"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(90deg, #F97316, #FB923C)"
                      : "linear-gradient(90deg, #0891B2, #06B6D4)",
                  }}
                />
                <div className="p-8 flex flex-col flex-1">
                  {/* Icon + badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                      style={{
                        background: i % 2 === 0
                          ? "linear-gradient(135deg, #FFF7ED, #FED7AA)"
                          : "linear-gradient(135deg, #F0FDFF, #CFFAFE)",
                      }}
                    >
                      {prog.icon}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                        prog.badge === "Flagship"
                          ? "bg-orange-100 text-orange-700"
                          : prog.badge === "Most Popular"
                          ? "bg-teal-100 text-teal-700"
                          : prog.badge === "New"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {prog.badge}
                    </span>
                  </div>

                  <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-2">{prog.title}</h2>
                  <p className="text-[#F97316] text-sm font-medium font-inter mb-4">{prog.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-inter mb-6">{prog.description}</p>

                  {/* Meta */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-[#F8FAFC] rounded-2xl">
                    {[
                      { icon: Clock, label: "Duration", val: prog.duration },
                      { icon: Globe, label: "Mode", val: prog.mode },
                      { icon: Users, label: "For", val: prog.audience.split(",")[0] },
                    ].map(({ icon: Icon, label, val }) => (
                      <div key={label} className="text-center">
                        <Icon size={15} className="mx-auto mb-1 text-[#F97316]" />
                        <div className="text-xs text-slate-400 font-inter">{label}</div>
                        <div className="text-xs font-semibold text-slate-700 font-inter mt-0.5">{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {prog.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600 font-inter">
                        <CheckCircle2 size={16} className="text-[#F97316] flex-shrink-0" fill="rgba(249,115,22,0.1)" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex gap-3 flex-wrap">
                    <Link
                      href={`/programs/${prog.slug}`}
                      className="btn-primary flex-1 justify-center"
                    >
                      Learn More <ArrowRight size={15} />
                    </Link>
                    <a
                      href={coachInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-teal flex-1 justify-center"
                    >
                      <FaWhatsapp size={15} /> Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F172A] text-center px-6">
        <h2 className="font-montserrat font-extrabold text-3xl text-white mb-4">
          Not Sure Which Program Is Right?
        </h2>
        <p className="text-slate-400 font-inter mb-8 max-w-xl mx-auto">
          Connect with Arnav Sir directly on WhatsApp for a free consultation and personalised recommendation.
        </p>
        <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
          <FaWhatsapp size={17} /> Get a Free Recommendation
        </a>
      </section>
    </>
  );
}
