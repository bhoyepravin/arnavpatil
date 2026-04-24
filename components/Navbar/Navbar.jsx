"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, coachInfo } from "@/lib/data";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

   const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 48);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Navbar background: blur initially, white when scrolled
  const navBg = scrolled
    ? "bg-white shadow-sm " // White when scrolled
    : "bg-white/10 backdrop-blur-xl "; // Blur initially

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <Link href="/" aria-label="Home" className="flex-shrink-0">
              <Image
                src="/images/arnavpatil_logo.png"
                alt="Logo"
                width={110}
                height={50}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Center Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
  key={item.href}
  href={item.href}
  className={`text-[1rem] font-semibold transition-all ${
    isActive
      ? scrolled
        ? "text-[#1E293B]"     // active when scrolled
        : isHomePage 
          ? "text-white"         // active on homepage top
          : "text-[#1E293B]"     // active on other pages top
      : scrolled
        ? "text-slate-800 hover:text-[#0891B2]"
        : isHomePage
          ? "text-white/90 hover:text-[#0891B2]"
          : "text-slate-800 hover:text-[#0891B2]"
  }`}
>
  {item.label}
</Link>
                );
              })}
            </div>

            {/* Right Side — Phone + Book Call + Login */}
            <div className="hidden lg:flex items-center gap-3">

  {/* Instagram */}
  {/* <a
    href={coachInfo.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-full 
    text-slate-500 hover:text-[#F97316] hover:bg-orange-50
    transition-all duration-200"
  >
    <FaInstagram size={15} />
  </a> */}

  <a
  href={`tel:${coachInfo.phone}`}
  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg 
  text-[0.9rem] font-extrabold transition-all duration-200 ${
    scrolled
      ? "text-slate-800 hover:text-[#0891B2]"   // after scroll (dark)
      : isHomePage
        ? "text-white/90 hover:text-[#0891B2]"   // before scroll on homepage (white)
        : "text-slate-800 hover:text-[#0891B2]"  // before scroll on other pages (dark)
  }`}
>
  <Phone size={13} />
  {coachInfo.phone}
</a>

  {/* Book Free Call */}
  <a
    href={coachInfo.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 rounded-xl 
    bg-[#F97316] text-white text-[0.85rem] font-semibold 
    hover:bg-[#EA6A0A] hover:scale-[1.03]
    transition-all duration-200 shadow-md shadow-orange-200"
  >
    <FaWhatsapp size={15} />
    Book a Call
  </a>

</div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <Image
              src="/images/arnavpatil_logo.png"
              alt="Logo"
              width={90}
              height={40}
              className="h-20 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="p-5 space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-orange-50 text-[#F97316]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#F97316]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="p-5 pt-0 space-y-3 border-t border-slate-100 mt-2">
            <a
              href={coachInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6A0A] transition-colors"
            >
              <FaWhatsapp size={16} />
              Book Free Consultation
            </a>

            <a
              href={`tel:${coachInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:border-[#0891B2] hover:text-[#0891B2] transition-colors"
            >
              <Phone size={14} />
              {coachInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}