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



// "use client";

// import { useState } from "react";
// import { Send } from "lucide-react";

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     businessEmail: "",
//     contactNumber: "",
//     country: "",
//     city: "",
//     product: "",
//     message: "",
//     agreeTerms: false
//   });

//   const products = [
//     "Physical Business Training ",
//     "Online Business Training ",
//     "One-to-One Physical Training",
//     "Online One-to-One Business Consultation ",
//   ];

//   const countries = ["India", "USA", "UK", "Canada", "Australia", "UAE", "Singapore", "Other"];

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 5000);
//   }

//   if (submitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
//         <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
//           <Send size={24} className="text-green-600" />
//         </div>
//         <h3 className="font-montserrat font-bold text-xl text-[var(--dark)] mb-2">
//           Enquiry Sent!
//         </h3>
//         <p className="text-[var(--gray)] font-inter text-sm">
//           Thank you! Arnav Sir's team will reach out shortly. For a faster response, WhatsApp us directly.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       {/* Full Name */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Full Name <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="text"
//           name="fullName"
//           required
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Enter your full name"
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Business Email */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Business Email <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="email"
//           name="businessEmail"
//           required
//           value={formData.businessEmail}
//           onChange={handleChange}
//           placeholder="business@example.com"
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Contact Number */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Contact Number <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="tel"
//           name="contactNumber"
//           required
//           value={formData.contactNumber}
//           onChange={handleChange}
//           placeholder="10 Digit Mobile Number"
//           pattern="[0-9]{10}"
//           maxLength={10}
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//         <p className="text-xs text-[var(--gray)] font-inter mt-1">Enter 10-digit mobile number</p>
//       </div>

//       {/* Country and City - 2 Column Grid */}
//       <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//         <div>
//           <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//             Country <span className="text-[var(--orange)]">*</span>
//           </label>
//           <select
//             name="country"
//             required
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
//           >
//             <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country} value={country}>{country}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//             City <span className="text-[var(--orange)]">*</span>
//           </label>
//           <input
//             type="text"
//             name="city"
//             required
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Enter your city"
//             className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//           />
//         </div>
//       </div>

//       {/* Products Dropdown */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Select a Product <span className="text-[var(--orange)]">*</span>
//         </label>
//         <select
//           name="product"
//           required
//           value={formData.product}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
//         >
//           <option value="">Select a Programme</option>
//           {products.map((product) => (
//             <option key={product} value={product}>{product}</option>
//           ))}
//         </select>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Message <span className="text-[var(--orange)]">*</span>
//         </label>
//         <textarea
//           name="message"
//           required
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Tell us about your business and what you're looking to achieve…"
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all resize-none placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Terms Checkbox */}
//       <div className="flex items-start gap-3">
//         <input
//           type="checkbox"
//           name="agreeTerms"
//           required
//           checked={formData.agreeTerms}
//           onChange={handleChange}
//           className="mt-1 w-4 h-4 rounded border-[var(--gray-border)] text-[var(--orange)] focus:ring-[var(--orange)] focus:ring-2 cursor-pointer"
//         />
//         <label className="text-xs text-[var(--gray)] font-inter leading-relaxed cursor-pointer">
            

//           By clicking this, you agree to disclose your personal information to <span className="font-semibold text-[var(--orange)]">Arnasoft Solutions</span> for contacting you via SMS, Email, RCS Messages, Calls and WhatsApp.
//         </label>
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="btn-primary w-full justify-center">
//         <Send size={16} />
//         Send Enquiry
//       </button>

//       <p className="text-center text-xs text-[var(--gray)] font-inter">
//         Or reach us directly via WhatsApp for a faster response.
//       </p>
//     </form>
//   );
// }


// components/contact/ContactForm.jsx
// "use client";

// import { useState } from "react";
// import { Send, CheckCircle } from "lucide-react";

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     businessEmail: "",
//     contactNumber: "",
//     country: "",
//     city: "",
//     product: "",
//     message: "",
//     agreeTerms: false,
//   });

//   const products = [
//     "Physical Business Training",
//     "Online Business Training",
//     "One-to-One Physical Training",
//     "Online One-to-One Business Consultation",
//   ];

//   const countries = [
//     "India",
//     "USA",
//     "UK",
//     "Canada",
//     "Australia",
//     "UAE",
//     "Singapore",
//     "Other",
//   ];

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 5000);
//   }

//   if (submitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
//         <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-bounce">
//           <CheckCircle size={28} className="text-green-600" />
//         </div>
//         <h3 className="font-montserrat font-bold text-xl text-[var(--dark)] mb-2">
//           Enquiry Sent! 🎉
//         </h3>
//         <p className="text-[var(--gray)] font-inter text-sm">
//           Thank you! Arnav Sir's team will reach out shortly. For a faster
//           response, WhatsApp us directly.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       {/* Full Name */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Full Name <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="text"
//           name="fullName"
//           required
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Enter your full name"
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Business Email */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Business Email <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="email"
//           name="businessEmail"
//           required
//           value={formData.businessEmail}
//           onChange={handleChange}
//           placeholder="business@example.com"
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Contact Number */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Contact Number <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="tel"
//           name="contactNumber"
//           required
//           value={formData.contactNumber}
//           onChange={handleChange}
//           placeholder="10 Digit Mobile Number"
//           pattern="[0-9]{10}"
//           maxLength={10}
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//         <p className="text-xs text-[var(--gray)] font-inter mt-1">
//           Enter 10-digit mobile number
//         </p>
//       </div>

//       {/* Country and City - 2 Column Grid */}
//       <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//         <div>
//           <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//             Country <span className="text-[var(--orange)]">*</span>
//           </label>
//           <select
//             name="country"
//             required
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
//           >
//             <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//             City <span className="text-[var(--orange)]">*</span>
//           </label>
//           <input
//             type="text"
//             name="city"
//             required
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Enter your city"
//             className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//           />
//         </div>
//       </div>

//       {/* Products Dropdown */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Select a Product <span className="text-[var(--orange)]">*</span>
//         </label>
//         <select
//           name="product"
//           required
//           value={formData.product}
//           onChange={handleChange}
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
//         >
//           <option value="">Select a Programme</option>
//           {products.map((product) => (
//             <option key={product} value={product}>
//               {product}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block text-sm font-medium text-[var(--dark)] font-inter mb-2">
//           Message <span className="text-[var(--orange)]">*</span>
//         </label>
//         <textarea
//           name="message"
//           required
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Tell us about your business and what you're looking to achieve…"
//           className="w-full px-4 py-3 rounded-xl border border-[var(--gray)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all resize-none placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Terms Checkbox */}
//       <div className="flex items-start gap-3">
//         <input
//           type="checkbox"
//           name="agreeTerms"
//           required
//           checked={formData.agreeTerms}
//           onChange={handleChange}
//           className="mt-1 w-4 h-4 rounded border-[var(--gray)] text-[var(--orange)] focus:ring-[var(--orange)] focus:ring-2 cursor-pointer"
//         />
//         <label className="text-xs text-[var(--gray)] font-inter leading-relaxed cursor-pointer">
//           By clicking this, you agree to disclose your personal information to{" "}
//           <span className="font-semibold text-[var(--orange)]">
//             Arnasoft Solutions
//           </span>{" "}
//           for contacting you via SMS, Email, RCS Messages, Calls and WhatsApp.
//         </label>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="btn-primary w-full justify-center group relative overflow-hidden"
//       >
//         <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <span className="relative flex items-center gap-2">
//           <Send size={16} className="group-hover:translate-x-1 transition-transform" />
//           Send Enquiry
//         </span>
//       </button>

//       <p className="text-center text-xs text-[var(--gray)] font-inter">
//         Or reach us directly via WhatsApp for a faster response.
//       </p>
//     </form>
//   );
// }

// components/contact/ContactForm.jsx
// "use client";

// import { useState } from "react";
// import { Send, CheckCircle } from "lucide-react";

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     businessEmail: "",
//     contactNumber: "",
//     country: "",
//     city: "",
//     product: "",
//     message: "",
//     agreeTerms: false,
//   });

//   const products = [
//     "Physical Business Training",
//     "Online Business Training",
//     "One-to-One Physical Training",
//     "Online One-to-One Business Consultation",
//   ];

//   const countries = [
//     "India",
//     "USA",
//     "UK",
//     "Canada",
//     "Australia",
//     "UAE",
//     "Singapore",
//     "Other",
//   ];

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 5000);
//   }

//   if (submitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 text-center">
//         <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center mb-3 sm:mb-4 animate-bounce">
//           <CheckCircle size={20} className="text-green-600 sm:text-[24px] md:text-[28px]" />
//         </div>
//         <h3 className="font-montserrat font-bold text-lg sm:text-xl text-[var(--dark)] mb-2">
//           Enquiry Sent! 🎉
//         </h3>
//         <p className="text-[var(--gray)] font-inter text-xs sm:text-sm px-4">
//           Thank you! Arnav Sir's team will reach out shortly. For a faster
//           response, WhatsApp us directly.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//       {/* Full Name */}
//       <div>
//         <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//           Full Name <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="text"
//           name="fullName"
//           required
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Enter your full name"
//           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Business Email */}
//       <div>
//         <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//           Business Email <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="email"
//           name="businessEmail"
//           required
//           value={formData.businessEmail}
//           onChange={handleChange}
//           placeholder="business@example.com"
//           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Contact Number */}
//       <div>
//         <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//           Contact Number <span className="text-[var(--orange)]">*</span>
//         </label>
//         <input
//           type="tel"
//           name="contactNumber"
//           required
//           value={formData.contactNumber}
//           onChange={handleChange}
//           placeholder="10 Digit Mobile Number"
//           pattern="[0-9]{10}"
//           maxLength={10}
//           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//         />
//         <p className="text-[10px] sm:text-xs text-[var(--gray)] font-inter mt-1">
//           Enter 10-digit mobile number
//         </p>
//       </div>

//       {/* Country and City - 2 Column Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//         <div>
//           <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//             Country <span className="text-[var(--orange)]">*</span>
//           </label>
//           <select
//             name="country"
//             required
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
//           >
//             <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//             City <span className="text-[var(--orange)]">*</span>
//           </label>
//           <input
//             type="text"
//             name="city"
//             required
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Enter your city"
//             className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)]"
//           />
//         </div>
//       </div>

//       {/* Products Dropdown */}
//       <div>
//         <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//           Select a Product <span className="text-[var(--orange)]">*</span>
//         </label>
//         <select
//           name="product"
//           required
//           value={formData.product}
//           onChange={handleChange}
//           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white"
//         >
//           <option value="">Select a Programme</option>
//           {products.map((product) => (
//             <option key={product} value={product}>
//               {product}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Message */}
//       <div>
//         <label className="block text-xs sm:text-sm font-medium text-[var(--dark)] font-inter mb-1.5 sm:mb-2">
//           Message <span className="text-[var(--orange)]">*</span>
//         </label>
//         <textarea
//           name="message"
//           required
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Tell us about your business and what you're looking to achieve…"
//           className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[var(--dark)] text-xs sm:text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all resize-none placeholder:text-[var(--gray)]"
//         />
//       </div>

//       {/* Terms Checkbox */}
//       <div className="flex items-start gap-2 sm:gap-3">
//         <input
//           type="checkbox"
//           name="agreeTerms"
//           required
//           checked={formData.agreeTerms}
//           onChange={handleChange}
//           className="mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-[var(--gray-border)] text-[var(--orange)] focus:ring-[var(--orange)] focus:ring-2 cursor-pointer flex-shrink-0"
//         />
//         <label className="text-[10px] sm:text-xs text-[var(--gray)] font-inter leading-relaxed cursor-pointer">
//           By clicking this, you agree to disclose your personal information to{" "}
//           <span className="font-semibold text-[var(--orange)]">
//             Arnasoft Solutions
//           </span>{" "}
//           for contacting you via SMS, Email, RCS Messages, Calls and WhatsApp.
//         </label>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="btn-primary w-full justify-center group relative overflow-hidden text-sm sm:text-base py-2.5 sm:py-3"
//       >
//         <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         <span className="relative flex items-center gap-2 justify-center">
//           <Send size={14} className="group-hover:translate-x-1 transition-transform sm:text-[16px]" />
//           Send Enquiry
//         </span>
//       </button>

//       <p className="text-center text-[10px] sm:text-xs text-[var(--gray)] font-inter">
//         Or reach us directly via WhatsApp for a faster response.
//       </p>
//     </form>
//   );
// }

// components/contact/ContactForm.jsx
"use client";

import { useState } from "react";
import { Send, CheckCircle, ChevronDown } from "lucide-react";

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
    agreeTerms: false,
  });

  const products = [
    "Physical Business Training",
    "Online Business Training",
    "One-to-One Physical Training",
    "Online One-to-One Business Consultation",
  ];

  const countries = [
    "India",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "UAE",
    "Singapore",
    "Other",
  ];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      <div className="flex flex-col items-center justify-center py-8 sm:py-10 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center mb-3 animate-bounce">
          <CheckCircle size={22} className="text-green-600 sm:text-[24px]" />
        </div>
        <h3 className="font-montserrat font-bold text-base sm:text-lg text-[var(--dark)] mb-1">
          Enquiry Sent! 🎉
        </h3>
        <p className="text-[var(--gray)] font-inter text-xs sm:text-sm">
          Thank you! Team will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Full Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)] placeholder:text-sm"
          />
        </div>
        <div>
          <input
            type="email"
            name="businessEmail"
            required
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="Business Email *"
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)] placeholder:text-sm"
          />
        </div>
      </div>

      {/* Row 2: Contact Number (Full width) */}
      <div>
        <input
          type="tel"
          name="contactNumber"
          required
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number *"
          pattern="[0-9]{10}"
          maxLength={10}
          className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)] placeholder:text-sm"
        />
      </div>

      {/* Row 3: Country + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23F97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "14px",
            }}
          >
            <option value="" disabled className="text-[var(--gray)]">Select Country *</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="City *"
            className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all placeholder:text-[var(--gray)] placeholder:text-sm"
          />
        </div>
      </div>

      {/* Row 4: Service Selection - Enhanced Dropdown */}
      <div className="relative">
        <label className="block text-xs font-medium text-[var(--dark)] font-inter mb-1.5">
          Select Service for Consulting <span className="text-[var(--orange)]">*</span>
        </label>
        <select
          name="product"
          required
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all bg-white appearance-none cursor-pointer hover:border-[var(--orange)]/50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23F97316' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "14px",
          }}
        >
          <option value="" disabled className="text-[var(--gray)]">Choose a consulting service *</option>
          {products.map((product) => (
            <option key={product} value={product} className="py-2">
              {product}
            </option>
          ))}
        </select>
        <p className="text-[10px] text-[var(--gray)] font-inter mt-1">
          Select the service you're interested in
        </p>
      </div>

      {/* Row 5: Message */}
      <div>
        <textarea
          name="message"
          required
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business and what you're looking to achieve... *"
          className="w-full px-4 py-2.5 rounded-lg border border-[var(--gray-border)] text-[var(--dark)] text-sm font-inter outline-none focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20 transition-all resize-none placeholder:text-[var(--gray)] placeholder:text-sm"
        />
      </div>

      {/* Row 6: Terms Checkbox */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="agreeTerms"
          required
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 rounded border-[var(--gray-border)] text-[var(--orange)] focus:ring-[var(--orange)] focus:ring-2 cursor-pointer flex-shrink-0"
        />
        <label className="text-[11px] sm:text-xs text-[var(--gray)] font-inter leading-relaxed cursor-pointer">
          By clicking, you agree to disclose info to <span className="font-semibold text-[var(--orange)]">Arnasoft Solutions</span> for contact via SMS, Email, Calls & WhatsApp.
        </label>
      </div>

      {/* Row 7: Submit Button */}
      <button
        type="submit"
        className="btn-primary w-full justify-center group relative overflow-hidden text-sm py-2.5"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative flex items-center gap-2 justify-center">
          <Send size={15} className="group-hover:translate-x-1 transition-transform" />
          Send Enquiry
        </span>
      </button>

      <p className="text-center text-[11px] sm:text-xs text-[var(--gray)] font-inter">
        Or WhatsApp for faster response
      </p>
    </form>
  );
}
