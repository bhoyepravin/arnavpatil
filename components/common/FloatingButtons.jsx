// "use client";

// import { FaWhatsapp } from "react-icons/fa";
// import { Phone } from "lucide-react";
// import { coachInfo } from "@/lib/data";

// export default function FloatingButtons() {
//   return (
//     <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
//       {/* WhatsApp */}
//       <a
//         href={coachInfo.whatsapp}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="relative flex items-center justify-center w-13 h-13 rounded-2xl bg-[#25D366] text-white shadow-lg shadow-green-300/40 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
//         style={{ width: 52, height: 52 }}
//       >
//         {/* Pulse ring */}
//         <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-pulse-ring opacity-60" />
//         <FaWhatsapp size={24} className="relative z-10" />
//         {/* Tooltip */}
//         <span className="absolute right-14 bg-[#0F172A] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
//           Chat on WhatsApp
//         </span>
//       </a>

//       {/* Call */}
//       <a
//         href={`tel:${coachInfo.phone}`}
//         aria-label="Call Arnav Patil"
//         className="flex items-center justify-center rounded-2xl bg-[#F97316] text-white shadow-lg shadow-orange-300/40 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
//         style={{ width: 52, height: 52 }}
//       >
//         <Phone size={20} className="relative z-10" />
//         <span className="absolute right-14 bg-[#0F172A] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
//           Call Now
//         </span>
//       </a>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { coachInfo } from "@/lib/data";

export default function FloatingButtons() {
  const buttons = [
    {
      id: "phone",
      icon: <Phone size={20} />,
      label: "Call Now",
      href: `tel:${coachInfo.phone.trim()}`,
      bgColor: "bg-[#0077B6]",
      hoverColor: "hover:bg-[#005f8e]",
      target: "_self",
      rel: "",
      aria: `Call ${coachInfo.name}: ${coachInfo.phone}`,
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      href: coachInfo.whatsapp.trim(),
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#20ba5a]",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: `Chat with ${coachInfo.name} on WhatsApp`,
    },
    {
      id: "instagram",
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      href: coachInfo.instagram,
      bgColor: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      hoverColor: "hover:brightness-110",
      target: "_blank",
      rel: "noopener noreferrer",
      aria: `Follow ${coachInfo.name} on Instagram`,
    },

    {
  id: "facebook",
  icon: <FaFacebook size={24} />,
  label: "Facebook",
  href: coachInfo.instagram,
  bgColor: "bg-[#1877F2]",
  hoverColor: "hover:brightness-110",
  target: "_blank",
  rel: "noopener noreferrer",
  aria: `Follow ${coachInfo.name} on Instagram`,
},
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {buttons.map((btn, index) => (
          <motion.a
            key={btn.id}
            href={btn.href}
            target={btn.target}
            rel={btn.rel}
            aria-label={btn.aria}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.12,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.94 }}
            className="relative group"
          >
            <div
              className={`
                flex items-center gap-0 group-hover:gap-2
                px-3 py-3 group-hover:px-4
                text-white rounded-full shadow-xl hover:shadow-2xl
                transition-all duration-300 ease-out
                ${btn.bgColor} ${btn.hoverColor}
              `}
            >
              {btn.icon}
              <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] whitespace-nowrap text-sm font-semibold transition-all duration-300">
                {btn.label}
              </span>
            </div>

            {btn.id === "whatsapp" && (
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
