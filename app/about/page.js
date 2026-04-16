import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { coachInfo, stats, whyChoose } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = buildMetadata("about");

const timeline = [
  { year: "2014", event: "Started career as a business consultant in Maharashtra" },
  { year: "2016", event: "Launched first Jewellers Business Workshop — 50 attendees" },
  { year: "2018", event: "Expanded coaching to 3 states across India" },
  { year: "2020", event: "Went digital — online coaching during the pandemic, reached 500+ clients" },
  { year: "2022", event: "International expansion — coaching clients in 5 countries" },
  { year: "2024", event: "1000+ clients milestone. Launched Women Entrepreneurs Programme" },
  { year: "2025", event: "Arnav Patil & Co. — expanding presence across India and abroad" },
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <span className="section-label mb-5 inline-flex">About the Coach</span>
              <h1
                className="font-montserrat font-extrabold leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#0F172A" }}
              >
                Meet{" "}
                <span className="gradient-text-orange">Mr. Arnav Patil</span>
              </h1>
              <p className="text-xl text-slate-500 font-inter mb-4">{coachInfo.title}</p>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#F97316] to-[#0891B2] mb-6" />
              <p className="text-slate-500 text-base leading-relaxed font-inter mb-4">
                {coachInfo.bio.split("\n\n")[0]}
              </p>
              <p className="text-slate-500 text-base leading-relaxed font-inter mb-6">
                {coachInfo.bio.split("\n\n")[1]}
              </p>
              <p className="text-slate-500 text-base leading-relaxed font-inter mb-8">
                {coachInfo.bio.split("\n\n")[2]}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaWhatsapp size={16} /> Book Free Consultation
                </a>
                <a
                  href={coachInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex"
                >
                  <FaInstagram size={16} /> Follow on Instagram
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className="w-[320px] sm:w-[380px] aspect-square rounded-3xl shadow-2xl overflow-hidden"
                style={{ background: "linear-gradient(145deg, #FFF7ED 0%, #F0FDFF 100%)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <Image
                    src="/images/arnavpatil_logo.png"
                    alt="Mr. Arnav Patil — Business Coach"
                    width={260}
                    height={260}
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </div>
              {/* Accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#F97316]/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div
                  className="text-4xl font-extrabold font-montserrat mb-2"
                  style={{ color: i % 2 === 0 ? "#F97316" : "#38BDF8" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">The Journey</span>
            <h2
              className="font-montserrat font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#0F172A" }}
            >
              Arnav&apos;s Story
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F97316] to-[#0891B2]" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-0">
                  {/* Dot */}
                  <div
                    className="w-16 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm font-inter"
                    style={{
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #F97316, #EA580C)"
                        : "linear-gradient(135deg, #0891B2, #0E7490)",
                    }}
                  >
                    {item.year}
                  </div>
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100 flex-1">
                    <p className="text-slate-600 text-sm font-inter">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Values & Approach</span>
            <h2
              className="font-montserrat font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#0F172A" }}
            >
              The Arnav Patil Difference
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl border border-slate-100 hover:border-orange-100 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-montserrat font-bold text-lg text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-inter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC] text-center px-6">
        <h2 className="font-montserrat font-extrabold text-3xl text-[#0F172A] mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-slate-500 font-inter mb-8 max-w-xl mx-auto">
          Connect with Arnav Patil for coaching, masterclasses, or keynote speaking engagements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaWhatsapp size={17} /> Book on WhatsApp
          </a>
          <Link href="/programs" className="btn-secondary inline-flex">
            View Programs <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
