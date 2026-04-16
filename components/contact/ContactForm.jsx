"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire to Formspree / EmailJS / any backend here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <Send size={24} className="text-green-600" />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-[#0F172A] mb-2">
          Enquiry Sent!
        </h3>
        <p className="text-slate-500 font-inter text-sm">
          Thank you! Arnav Sir&apos;s team will reach out shortly. For a faster response, WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Your Name *</label>
          <input
            type="text"
            required
            placeholder="Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all placeholder-slate-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all placeholder-slate-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Email Address</label>
        <input
          type="email"
          placeholder="rahul@example.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all placeholder-slate-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Enquiry About</label>
        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all bg-white">
          <option value="">Select a programme…</option>
          <option>Jewellers Masterclass</option>
          <option>Business Scaling Program</option>
          <option>Leadership Mastery</option>
          <option>Women Entrepreneurs Program</option>
          <option>1-on-1 Coaching</option>
          <option>Corporate Training / Keynote</option>
          <option>General Enquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Your Message</label>
        <textarea
          rows={4}
          placeholder="Tell us about your business and what you're looking to achieve…"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all resize-none placeholder-slate-400"
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={16} />
        Send Enquiry
      </button>

      <p className="text-center text-xs text-slate-400 font-inter">
        Or reach us directly via WhatsApp for a faster response.
      </p>
    </form>
  );
}
