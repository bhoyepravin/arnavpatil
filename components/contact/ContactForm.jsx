// "use client";

// import { useState } from "react";
// import { Send } from "lucide-react";

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Wire to Formspree / EmailJS / any backend here
//     setSubmitted(true);
//   }

//   if (submitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-16 text-center">
//         <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
//           <Send size={24} className="text-green-600" />
//         </div>
//         <h3 className="font-montserrat font-bold text-xl text-[#0F172A] mb-2">
//           Enquiry Sent!
//         </h3>
//         <p className="text-slate-500 font-inter text-sm">
//           Thank you! Arnav Sir&apos;s team will reach out shortly. For a faster response, WhatsApp us directly.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div className="grid sm:grid-cols-2 gap-5">
//         <div>
//           <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Your Name *</label>
//           <input
//             type="text"
//             required
//             placeholder="Rahul Sharma"
//             className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all placeholder-slate-400"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Phone Number *</label>
//           <input
//             type="tel"
//             required
//             placeholder="+91 98765 43210"
//             className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all placeholder-slate-400"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Email Address</label>
//         <input
//           type="email"
//           placeholder="rahul@example.com"
//           className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all placeholder-slate-400"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Enquiry About</label>
//         <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all bg-white">
//           <option value="">Select a programme…</option>
//           <option>Jewellers Masterclass</option>
//           <option>Business Scaling Program</option>
//           <option>Leadership Mastery</option>
//           <option>Women Entrepreneurs Program</option>
//           <option>1-on-1 Coaching</option>
//           <option>Corporate Training / Keynote</option>
//           <option>General Enquiry</option>
//         </select>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-slate-700 font-inter mb-2">Your Message</label>
//         <textarea
//           rows={4}
//           placeholder="Tell us about your business and what you're looking to achieve…"
//           className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-inter outline-none focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 transition-all resize-none placeholder-slate-400"
//         />
//       </div>

//       <button type="submit" className="btn-primary w-full justify-center">
//         <Send size={16} />
//         Send Enquiry
//       </button>

//       <p className="text-center text-xs text-slate-400 font-inter">
//         Or reach us directly via WhatsApp for a faster response.
//       </p>
//     </form>
//   );
// }



"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    contactNumber: "",
    country: "",
    city: "",
    product: "",
    message: "",
    agreeTerms: false
  });

  const products = [
    "Jewellers Masterclass",
    "Business Scaling Program",
    "Leadership Mastery",
    "Women Entrepreneurs Program",
    "1-on-1 Coaching",
    "Corporate Training / Keynote",
    "General Enquiry"
  ];

  const countries = ["India", "USA", "UK", "Canada", "Australia", "UAE", "Singapore", "Other"];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <Send size={24} className="text-green-600" />
        </div>
        <h3 className="font-montserrat font-bold text-xl text-[var(--dark)] mb-2">
          Enquiry Sent!
        </h3>
        <p className="text-[var(--gray)] font-inter text-sm">
          Thank you! Arnav Sir's team will reach out shortly. For a faster response, WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
          Full Name <span className="text-[var(--orange)]">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
        />
      </div>

      {/* Business Email */}
      <div>
        <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
          Business Email <span className="text-[var(--orange)]">*</span>
        </label>
        <input
          type="email"
          name="businessEmail"
          required
          value={formData.businessEmail}
          onChange={handleChange}
          placeholder="business@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
        />
      </div>

      {/* Contact Number */}
      <div>
        <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
          Contact Number <span className="text-[var(--orange)]">*</span>
        </label>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="10 Digit Mobile Number"
          pattern="[0-9]{10}"
          maxLength={10}
          className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
        />
        <p className="text-xs text-[var(--gray)] font-inter mt-1">Enter 10-digit mobile number</p>
      </div>

      {/* Country and City - 2 Column Grid */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
            Country <span className="text-[var(--orange)]">*</span>
          </label>
          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
            City <span className="text-[var(--orange)]">*</span>
          </label>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
          />
        </div>
      </div>

      {/* Products Dropdown */}
      <div>
        <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
          Select a Product <span className="text-[var(--orange)]">*</span>
        </label>
        <select
          name="product"
          required
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
        >
          <option value="">Select a Programme</option>
          {products.map((product) => (
            <option key={product} value={product}>{product}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
          Message <span className="text-[var(--orange)]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business and what you're looking to achieve…"
          className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all resize-none placeholder:text-[var(--gray)]"
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="agreeTerms"
          required
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-[var(--gray-border)] text-[var(--orange)] focus:ring-[var(--orange)] focus:ring-2 cursor-pointer"
        />
        <label className="text-xs text-[var(--gray)] font-inter leading-relaxed cursor-pointer">
            

          By clicking this, you agree to disclose your personal information to <span className="font-semibold text-[var(--orange)]">Arnasoft Solutions</span> for contacting you via SMS, Email, RCS Messages, Calls and WhatsApp.
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={16} />
        Send Enquiry
      </button>

      <p className="text-center text-xs text-[var(--gray)] font-inter">
        Or reach us directly via WhatsApp for a faster response.
      </p>
    </form>
  );
}