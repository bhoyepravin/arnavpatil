"use client";

import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { coachInfo } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={coachInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 rounded-2xl bg-[#25D366] text-white shadow-lg shadow-green-300/40 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        style={{ width: 52, height: 52 }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-pulse-ring opacity-60" />
        <FaWhatsapp size={24} className="relative z-10" />
        {/* Tooltip */}
        <span className="absolute right-14 bg-[#0F172A] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call */}
      <a
        href={`tel:${coachInfo.phone}`}
        aria-label="Call Arnav Patil"
        className="flex items-center justify-center rounded-2xl bg-[#F97316] text-white shadow-lg shadow-orange-300/40 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        style={{ width: 52, height: 52 }}
      >
        <Phone size={20} className="relative z-10" />
        <span className="absolute right-14 bg-[#0F172A] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Call Now
        </span>
      </a>
    </div>
  );
}
