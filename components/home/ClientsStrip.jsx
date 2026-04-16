"use client";

import { motion } from "framer-motion";

// Client/company names - replace with actual logo images when available
const clients = [
  { name: "Tanishq", sector: "Jewellery" },
  { name: "Malabar Gold", sector: "Jewellery" },
  { name: "PNG Jewellers", sector: "Jewellery" },
  { name: "Senco Gold", sector: "Jewellery" },
  { name: "Kalyan Jewellers", sector: "Jewellery" },
  { name: "PC Jeweller", sector: "Jewellery" },
  { name: "TBZ Jewellers", sector: "Jewellery" },
  { name: "CaratLane", sector: "Jewellery" },
  { name: "Joyalukkas", sector: "Jewellery" },
  { name: "GRT Jewellers", sector: "Retail" },
];

// Duplicate for seamless loop
const clientsLoop = [...clients, ...clients];

function ClientLogo({ client }) {
  return (
    <div className="flex-shrink-0 mx-5 flex items-center justify-center">
      <div className="bg-white border border-slate-100 rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#F97316]/30 transition-all duration-300 min-w-[150px] text-center">
        <div className="font-montserrat font-bold text-sm text-slate-700">{client.name}</div>
        <div className="text-xs text-slate-400 font-inter mt-0.5">{client.sector}</div>
      </div>
    </div>
  );
}

export default function ClientsStrip() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 text-xs font-montserrat font-bold uppercase tracking-widest mb-3"
        >
          Trusted by business owners across India
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat font-black text-[#0B0F1A] mb-2"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
        >
          1000+ Businesses <span className="gradient-text">Transformed</span>
        </motion.h2>
      </div>

      {/* Scrolling strip */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-left py-3">
          {clientsLoop.map((client, i) => (
            <ClientLogo key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
