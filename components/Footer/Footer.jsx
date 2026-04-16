import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { coachInfo, programs, navItems } from "@/lib/data";
import { siteSEO } from "@/utils/seoConfig";
import { MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#0891B2]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Arnav Patil — Home" className="inline-block mb-5">
              <Image
                src="/images/arnavpatil_logo.png"
                alt="Arnav Patil Business Coach"
                width={120}
                height={55}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              International Business Coach, Strategist & Keynote Speaker helping business owners scale, automate and grow — across India and 5 countries.
            </p>
            <p className="text-[#F97316] text-sm font-medium italic mb-5">
              &ldquo;Transform Your Business. Transform Your Life.&rdquo;
            </p>
            <div className="flex gap-3">
              <a
                href={coachInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#F97316] text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href={coachInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#25D366] text-slate-400 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5 pb-3 border-b border-white/10 tracking-wide uppercase">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-200 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#F97316] transition-opacity" />
                    {p.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5 pb-3 border-b border-white/10 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Arnav", href: "/about" },
                { label: "All Programs", href: "/programs" },
                { label: "Upcoming Events", href: "/events" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#F97316] text-sm transition-colors duration-200 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#F97316] transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5 pb-3 border-b border-white/10 tracking-wide uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${coachInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-[#F97316] text-sm transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 flex-shrink-0">
                    <FaPhone size={12} className="text-[#F97316]" />
                  </div>
                  {coachInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${coachInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-[#F97316] text-sm transition-colors break-all"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 flex-shrink-0">
                    <FaEnvelope size={12} className="text-[#0891B2]" />
                  </div>
                  {coachInfo.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 flex-shrink-0">
                    <MapPin size={13} className="text-[#F97316]" />
                  </div>
                  India · 5 Countries
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={coachInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6A0A] transition-all duration-200 shadow-lg shadow-orange-900/20"
              >
                <FaWhatsapp size={15} />
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {year} Arnav Patil & Co. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            International Business Coach · India & 5 Countries
          </p>
        </div>
      </div>
    </footer>
  );
}
