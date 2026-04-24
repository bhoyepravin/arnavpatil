// import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
// import { coachInfo } from "@/lib/data";
// import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import ContactForm from "@/components/contact/ContactForm";

// export const metadata = buildMetadata("contact");

// export default function ContactPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Contact", href: "/contact" },
//   ]);

//   const contactSchema = {
//     "@context": "https://schema.org",
//     "@type": "ContactPage",
//     name: "Contact Arnav Patil — Business Coach",
//     url: `${siteSEO.baseUrl}/contact`,
//     mainEntity: {
//       "@type": "Person",
//       name: siteSEO.coach,
//       telephone: siteSEO.phone,
//       email: siteSEO.email,
//       sameAs: [siteSEO.instagram],
//     },
//   };

//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

//       {/* Hero */}
//       <section className="pt-26 pb-16 bg-white text-center px-6">
//         <div className="max-w-2xl mx-auto">
//           <span className="section-label mb-5 inline-flex">Contact Us</span>
//           <h1
//             className="font-montserrat font-extrabold leading-tight mb-5"
//             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
//           >
//             Let&apos;s Start Your{" "}
//             <span className="gradient-text-orange">Transformation</span>
//           </h1>
//           <p className="text-slate-500 font-inter text-lg">
//             Reach out for coaching, masterclass registration, corporate training, or keynote speaking.
//           </p>
//         </div>
//       </section>

//       {/* Main content */}
//       <section className="pb-24 bg-[#F8FAFC]">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">

//             {/* Left — Contact Info */}
//             <div>
//               <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-8">
//                 Get in Touch
//               </h2>

//               {/* Primary WhatsApp CTA */}
//               <div
//                 className="rounded-3xl p-7 mb-6 text-white"
//                 style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
//               >
//                 <h3 className="font-montserrat font-bold text-xl mb-2">Book on WhatsApp</h3>
//                 <p className="text-orange-100 text-sm font-inter mb-5">
//                   The fastest way to connect with Arnav Sir — get a response within hours.
//                 </p>
//                 <a
//                   href={coachInfo.whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#F97316] rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors font-inter"
//                 >
//                   <FaWhatsapp size={17} className="text-[#25D366]" />
//                   Chat on WhatsApp
//                 </a>
//               </div>

//               {/* Contact details */}
//               <div className="bg-white rounded-3xl border border-slate-100 p-7 space-y-5">
//                 {[
//                   {
//                     icon: Phone,
//                     label: "Phone",
//                     val: coachInfo.phone,
//                     href: `tel:${coachInfo.phone}`,
//                     color: "#F97316",
//                   },
//                   {
//                     icon: Mail,
//                     label: "Email",
//                     val: coachInfo.email,
//                     href: `mailto:${coachInfo.email}`,
//                     color: "#0891B2",
//                   },
//                   {
//                     icon: MapPin,
//                     label: "Location",
//                     val: "India · Active in 5 Countries",
//                     href: null,
//                     color: "#F97316",
//                   },
//                   {
//                     icon: Clock,
//                     label: "Availability",
//                     val: "Mon–Sat, 9 AM – 7 PM IST",
//                     href: null,
//                     color: "#0891B2",
//                   },
//                 ].map(({ icon: Icon, label, val, href, color }) => (
//                   <div key={label} className="flex items-center gap-4">
//                     <div
//                       className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
//                       style={{ background: `${color}15` }}
//                     >
//                       <Icon size={18} style={{ color }} />
//                     </div>
//                     <div>
//                       <div className="text-xs text-slate-400 font-inter">{label}</div>
//                       {href ? (
//                         <a href={href} className="text-sm font-medium text-[#0F172A] hover:text-[#F97316] transition-colors font-inter">
//                           {val}
//                         </a>
//                       ) : (
//                         <div className="text-sm font-medium text-[#0F172A] font-inter">{val}</div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Social */}
//               <div className="mt-6 flex gap-3">
//                 <a
//                   href={coachInfo.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 text-sm font-inter font-medium"
//                 >
//                   <FaInstagram size={15} /> Instagram
//                 </a>
//                 <a
//                   href={coachInfo.whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-200 font-inter"
//                 >
//                   <FaWhatsapp size={15} /> WhatsApp
//                 </a>
//               </div>
//             </div>

//             {/* Right — Inquiry form */}
//             <div>
//               <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-8">
//                 Send an Enquiry
//               </h2>
//               <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
//                 <ContactForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
// import { coachInfo } from "@/lib/data";
// import { Mail, Phone, MapPin } from "lucide-react";
// import ContactForm from "@/components/contact/ContactForm";

// export const metadata = buildMetadata("contact");

// export default function ContactPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Contact", href: "/contact" },
//   ]);

//   const contactSchema = {
//     "@context": "https://schema.org",
//     "@type": "ContactPage",
//     name: "Contact Arnav Patil — Business Coach",
//     url: `${siteSEO.baseUrl}/contact`,
//     mainEntity: {
//       "@type": "Person",
//       name: siteSEO.coach,
//       telephone: siteSEO.phone,
//       email: siteSEO.email,
//       sameAs: [siteSEO.instagram],
//     },
//   };

//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

//       {/* Hero Section */}
//       <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white text-center px-4 sm:px-6">
//         <div className="max-w-3xl mx-auto">
//           <span className="section-label mb-4 sm:mb-5 inline-flex">Contact Us</span>
//           <h1
//             className="heading-xl font-montserrat font-extrabold leading-tight mb-4 sm:mb-5"
//             style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "var(--dark)" }}
//           >
//             Let's Start Your{" "} <span className="heading">Transformation</span>
            
//           </h1>   
//           <p className="text-[var(--gray)] text-base sm:text-lg font-inter max-w-2xl mx-auto">
//             Got questions or need assistance? Contact us today. 
//             We're here to help you grow.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="pb-20 bg-white px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Form and Info Grid */}
//           <div className="grid lg:grid-cols-2 gap-12 mb-16">
//             {/* Contact Form - Left Side */}
//             <div className="order-2 lg:order-1">
//               <ContactForm />
//             </div>

//             {/* Contact Info - Right Side */}
//             <div className="order-1 lg:order-2">
//               <div className="space-y-6">
//                 <div className="text-center lg:text-left">
//                   <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-2">
//                     Get in Touch
//                   </h2>
//                   <p className="text-[var(--gray)] text-sm font-inter">
//                     We'd love to hear from you
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   {/* Email */}
//                   <div className="flex items-center gap-4 p-4 border border-[var(--gray-border)] rounded-xl hover:border-[var(--orange)]/30 transition-all hover:bg-[var(--orange-pale)]/30">
//                     <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0">
//                       <Mail size={18} className="text-[var(--orange)]" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-[var(--gray)] font-inter">Email</p>
//                       <a href={`mailto:${coachInfo.email}`} className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter">
//                         {coachInfo.email}
//                       </a>
//                        <p className="text-xs text-[var(--gray)] font-inter"></p>
//                       <a href={`mailto:${coachInfo.email}`} className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter">
//                         {coachInfo.email2}
//                       </a>
//                     </div>
                    
//                   </div>

//                   {/* Phone */}
//                   <div className="flex items-center gap-4 p-4 border border-[var(--gray-border)] rounded-xl hover:border-[var(--orange)]/30 transition-all hover:bg-[var(--orange-pale)]/30">
//                     <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0">
//                       <Phone size={18} className="text-[var(--orange)]" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-[var(--gray)] font-inter">Phone</p>
//                       <a href={`tel:${coachInfo.phone}`} className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter">
//                         {coachInfo.phone}
//                       </a>
//                     </div>
//                   </div>

//                   {/* Address */}
//                   <div className="flex items-center gap-4 p-4 border border-[var(--gray-border)] rounded-xl hover:border-[var(--orange)]/30 transition-all hover:bg-[var(--orange-pale)]/30">
//                     <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0">
//                       <MapPin size={18} className="text-[var(--orange)]" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-[var(--gray)] font-inter">Address</p>
//                       <p className="text-sm font-medium text-[var(--dark)] font-inter">
//                         Nashik , Maharashtra.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* WhatsApp CTA */}
//                 <a
//                   href={coachInfo.whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 w-full p-3 border border-[var(--gray-border)] rounded-xl hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
//                 >
//                   <FaWhatsapp size={18} className="text-[#25D366]" />
//                   <span className="text-sm font-medium text-[var(--dark)] group-hover:text-[#25D366] transition-colors font-inter">
//                     Chat on WhatsApp
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info Strip - 3 Columns */}
//           <div className="grid sm:grid-cols-3 gap-6 py-10 border-t border-b border-[var(--gray-border)] mb-16">
//             {[
//               {
//                 icon: Mail,
//                 label: "Email Us",
//                 value: coachInfo.email,
//                 detail: "We respond within 24 hours",
//               },
//               {
//                 icon: Phone,
//                 label: "Call Us",
//                 value: coachInfo.phone,
//                 detail: "Mon-Fri, 9AM - 7PM IST",
//               },
//               {
//                 icon: MapPin,
//                 label: "Visit Us",
//                 value: "Nashik, Maharashtra India",
//                 detail: "Virtual sessions worldwide",
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="text-center group">
//                 <div className="w-14 h-14 rounded-2xl bg-[var(--gray-light)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--orange-pale)] transition-all">
//                   <item.icon size={22} className="text-[var(--orange)]" />
//                 </div>
//                 <h3 className="font-montserrat font-semibold text-sm text-[var(--dark)] mb-1">
//                   {item.label}
//                 </h3>
//                 <p className="text-[var(--dark)] text-sm font-medium mb-1 font-inter">
//                   {item.value}
//                 </p>
//                 <p className="text-[var(--gray)] text-xs font-inter">
//                   {item.detail}
//                 </p>
//               </div>
//             ))}
//           </div>

          
//         </div>
//       </section>
//     </>
//   );
// }

// // Add missing import
// import { FaWhatsapp } from "react-icons/fa";

// app/contact/page.jsx
// import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
// import { coachInfo } from "@/lib/data";
// import { Mail, Phone, MapPin, Clock, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
// import ContactForm from "@/components/contact/ContactForm";
// import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

// export const metadata = buildMetadata("contact");

// export default function ContactPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Contact", href: "/contact" },
//   ]);

//   const contactSchema = {
//     "@context": "https://schema.org",
//     "@type": "ContactPage",
//     name: "Contact Arnav Patil — Business Coach",
//     url: `${siteSEO.baseUrl}/contact`,
//     mainEntity: {
//       "@type": "Person",
//       name: siteSEO.coach,
//       telephone: siteSEO.phone,
//       email: siteSEO.email,
//       sameAs: [siteSEO.instagram],
//     },
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
//       />

//       {/* Hero Section - Enhanced */}
//       <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-white text-center px-4 sm:px-6 overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--orange-pale)] rounded-full blur-3xl opacity-40 -z-10" />
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--orange)]/5 rounded-full blur-3xl opacity-40 -z-10" />
        
//         <div className="max-w-4xl mx-auto relative">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--orange-pale)] border border-[var(--orange)]/20 mb-6">
//             <Sparkles size={14} className="text-[var(--orange)]" />
//             <span className="text-xs font-medium text-[var(--orange)] uppercase tracking-wide">Get in Touch</span>
//           </div>
//           <h1 className="font-montserrat font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
//             Let's Start Your{" "}
//             <span className="relative inline-block">
//               <span className="heading relative z-10">Transformation</span>
              
//             </span>
//           </h1>
//           <p className="text-[var(--gray)] text-base sm:text-lg font-inter max-w-2xl mx-auto">
//             Got questions or need assistance? Contact us today. We're here to help you grow.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="pb-24 bg-white px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Floating Contact Cards */}
//           <div className="grid sm:grid-cols-3 gap-6 mb-16 -mt-8 relative z-10">
//             {[
//               {
//                 icon: Phone,
//                 label: "Call Us",
//                 value: coachInfo.phone,
//                 detail: "Mon-Fri, 9AM - 7PM IST",
//                 action: `tel:${coachInfo.phone}`,
//                 gradient: "from-[#F97316]/10 to-[#EA580C]/5",
//                 iconBg: "bg-[#F97316]",
//               },
//               {
//                 icon: Mail,
//                 label: "Email Us",
//                 value: coachInfo.email,
//                 detail: "We respond within 24 hours",
//                 action: `mailto:${coachInfo.email}`,
//                 gradient: "from-[#F97316]/10 to-[#F97316]/5",
//                 iconBg: "bg-[#F97316]",
//               },
//               {
//                 icon: MessageCircle,
//                 label: "WhatsApp",
//                 value: "Quick Response",
//                 detail: "Chat with Arnav's team",
//                 action: coachInfo.whatsapp,
//                 gradient: "from-[#F97316]/10 to-[#F97316]/5",
//                 iconBg: "bg-[#F97316]",
//               },
//             ].map((item, idx) => (
//               <a
//                 key={idx}
//                 href={item.action}
//                 target={item.label === "WhatsApp" ? "_blank" : undefined}
//                 rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
//                 className={`group block bg-gradient-to-br ${item.gradient} rounded-2xl p-6 border border-[var(--gray-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                     <item.icon size={20} className="text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-xs text-[var(--gray)] font-inter mb-1">{item.label}</p>
//                     <p className="text-[var(--dark)] font-semibold font-inter text-base mb-1">{item.value}</p>
//                     <p className="text-xs text-[var(--gray)] font-inter flex items-center gap-1 group-hover:text-[var(--orange)] transition-colors">
//                       {item.detail} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
//                     </p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* Form and Info Grid - Equal Height */}
//           <div className="grid lg:grid-cols-2 gap-10 mb-16">
//             {/* Contact Form - Left Side */}
//             <div className="order-2 lg:order-1 bg-[#F8FAFC] rounded-3xl  p-6 sm:p-8 shadow-sm border border-gray-500 h-full flex flex-col">
//               <div className="mb-6">
//                 <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-2">Send an Enquiry</h2>
//                 <p className="text-[var(--gray)] text-sm font-inter">Fill out the form and we'll get back to you shortly</p>
//               </div>
//               <div className="flex-1">
//                 <ContactForm />
//               </div>
//             </div>

//             {/* Contact Info - Right Side */}
//             <div className="order-1 lg:order-2 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-500  h-full flex flex-col">
//               <div className="mb-6">
//                 <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-2">Get in Touch</h2>
//                 <p className="text-[var(--gray)] text-sm font-inter">We'd love to hear from you</p>
//               </div>
//               <div className="flex-1 space-y-6">
//                 {/* Contact Details */}
//                 <div className="space-y-3">
//                   {[
//                     {
//                       icon: Mail,
//                       label: "Email",
//                       primary: coachInfo.email,
//                       secondary: coachInfo.email2,
//                       href: `mailto:${coachInfo.email}`,
//                     },
//                     {
//                       icon: Phone,
//                       label: "Phone",
//                       primary: coachInfo.phone,
//                       secondary: null,
//                       href: `tel:${coachInfo.phone}`,
//                     },
//                     {
//                       icon: MapPin,
//                       label: "Address",
//                       primary: "Nashik, Maharashtra",
//                       secondary: "Virtual sessions worldwide",
//                       href: null,
//                     },
//                   ].map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="group flex items-start gap-4 p-5 rounded-2xl border border-[var(--gray-border)] hover:border-[var(--orange)]/30 transition-all hover:bg-gradient-to-r hover:from-[var(--orange-pale)]/20 hover:to-transparent bg-white"
//                     >
//                       <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--orange-pale)] transition-all">
//                         <item.icon size={18} className="text-[var(--orange)] group-hover:scale-110 transition-transform" />
//                       </div>
//                       <div>
//                         <p className="text-xs text-[var(--gray)] font-inter mb-0.5">{item.label}</p>
//                         {item.href ? (
//                           <a
//                             href={item.href}
//                             className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter block"
//                           >
//                             {item.primary}
//                           </a>
//                         ) : (
//                           <p className="text-sm font-medium text-[var(--dark)] font-inter">{item.primary}</p>
//                         )}
//                         {item.secondary && (
//                           <p className="text-xs text-[var(--gray)] font-inter mt-0.5 flex items-center gap-1">
//                             <span className="inline-block w-1 h-1 rounded-full bg-[var(--orange)]"></span>
//                             {item.secondary}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* WhatsApp CTA */}
//                 <a
//                   href={coachInfo.whatsapp}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-between gap-2 w-full p-4 rounded-2xl border border-[var(--gray-border)] hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group bg-white"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
//                       <FaWhatsapp size={18} className="text-[#25D366] group-hover:text-white transition-all" />
//                     </div>
//                     <div className="text-left">
//                       <p className="text-sm font-semibold text-[var(--dark)] group-hover:text-[#25D366] transition-colors font-inter">
//                         Chat on WhatsApp
//                       </p>
//                       <p className="text-xs text-[var(--gray)] font-inter">Get response within hours</p>
//                     </div>
//                   </div>
//                   <ArrowRight size={16} className="text-[var(--gray)] group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
//                 </a>

//                 {/* Social Links */}
//                 <div className="pt-4 flex gap-3">
//                   <a
//                     href={coachInfo.instagram}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--gray)] hover:text-[var(--orange)] hover:border-[var(--orange)]/30 hover:bg-[var(--orange-pale)]/20 transition-all text-sm font-inter font-medium bg-white"
//                   >
//                     <FaInstagram size={16} /> Instagram
//                   </a>
//                   <a
//                     href={coachInfo.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--gray-border)] text-[var(--gray)] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition-all text-sm font-inter font-medium bg-white"
//                   >
//                     <FaLinkedin size={16} /> LinkedIn
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// app/contact/page.jsx
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { coachInfo } from "@/lib/data";
import { Mail, Phone, MapPin, Clock, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Arnav Patil — Business Coach",
    url: `${siteSEO.baseUrl}/contact`,
    mainEntity: {
      "@type": "Person",
      name: siteSEO.coach,
      telephone: siteSEO.phone,
      email: siteSEO.email,
      sameAs: [siteSEO.instagram],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white text-center px-4 sm:px-6 overflow-hidden">
        {/* Decorative elements - hidden on mobile for better performance */}
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[var(--orange-pale)] rounded-full blur-3xl opacity-30 sm:opacity-40 -z-10" />
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--orange)]/5 rounded-full blur-3xl opacity-30 sm:opacity-40 -z-10" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--orange-pale)] border border-[var(--orange)]/20 mb-4 sm:mb-6">
            <Sparkles size={12} className="text-[var(--orange)] sm:text-[14px]" />
            <span className="text-[10px] sm:text-xs font-medium text-[var(--orange)] uppercase tracking-wide">Get in Touch</span>
          </div>
          <h1 className="font-montserrat font-extrabold leading-tight mb-4 sm:mb-5 px-2" style={{ fontSize: "clamp(2rem, 8vw, 4rem)" }}>
            Let's Start Your{" "}
            <span className="relative inline-block">
              <span className="heading relative z-10">Transformation</span>
              <svg className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 -z-0" viewBox="0 0 200 10" preserveAspectRatio="none">
                
              </svg>
            </span>
          </h1>
          <p className="text-[var(--gray)] text-sm sm:text-base md:text-lg font-inter max-w-2xl mx-auto px-4">
            Got questions or need assistance? Contact us today. We're here to help you grow.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-20 md:pb-24 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Floating Contact Cards - Stack on mobile, grid on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 -mt-6 sm:-mt-8 relative z-10">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: coachInfo.phone,
                detail: "Mon-Fri, 9AM - 7PM IST",
                action: `tel:${coachInfo.phone}`,
                gradient: "from-[#F97316]/10 to-[#EA580C]/5",
                iconBg: "bg-[#F97316]",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: coachInfo.email,
                detail: "We respond within 24 hours",
                action: `mailto:${coachInfo.email}`,
                gradient: "from-[#F97316]/10 to-[#F97316]/5",
                iconBg: "bg-[#F97316]",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Quick Response",
                detail: "Chat with Arnav's team",
                action: coachInfo.whatsapp,
                gradient: "from-[#F97316]/10 to-[#F97316]/5",
                iconBg: "bg-[#F97316]",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.action}
                target={item.label === "WhatsApp" ? "_blank" : undefined}
                rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className={`group block bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[var(--gray-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${item.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={16} className="text-white sm:text-[20px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] sm:text-xs text-[var(--gray)] font-inter mb-0.5 sm:mb-1">{item.label}</p>
                    <p className="text-[var(--dark)] font-semibold font-inter text-sm sm:text-base mb-0.5 sm:mb-1 truncate">{item.value}</p>
                    <p className="text-[10px] sm:text-xs text-[var(--gray)] font-inter flex items-center gap-1 group-hover:text-[var(--orange)] transition-colors">
                      {item.detail} <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 sm:text-[12px]" />
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form and Info Grid - Stack on mobile, grid on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {/* Contact Form - Left Side */}
            <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-[var(--gray-border)] h-full flex flex-col">
              <div className="mb-4 sm:mb-6">
                <h2 className="heading-xl font-montserrat font-bold text-xl sm:text-2xl text-[var(--dark)] mb-2">Send an Enquiry</h2>
                <p className="text-[var(--gray)] text-xs sm:text-sm font-inter">Fill out the form and we'll get back to you shortly</p>
              </div>
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info - Right Side */}
            <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-[var(--gray-border)] h-full flex flex-col">
              <div className="mb-4 sm:mb-6">
                <h2 className="heading-xl font-montserrat font-bold text-xl sm:text-2xl text-[var(--dark)] mb-2">Get in Touch</h2>
                <p className="text-[var(--gray)] text-xs sm:text-sm font-inter">We'd love to hear from you</p>
              </div>
              <div className="flex-1 space-y-4 sm:space-y-6">
                {/* Contact Details */}
                <div className="space-y-2 sm:space-y-3">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      primary: coachInfo.email,
                      secondary: coachInfo.email2,
                      href: `mailto:${coachInfo.email}`,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      primary: coachInfo.phone,
                      secondary: null,
                      href: `tel:${coachInfo.phone}`,
                    },
                    {
                      icon: MapPin,
                      label: "Address",
                      primary: "Nashik, Maharashtra",
                      secondary: "Virtual sessions worldwide",
                      href: null,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-[var(--gray-border)] hover:border-[var(--orange)]/30 transition-all hover:bg-gradient-to-r hover:from-[var(--orange-pale)]/20 hover:to-transparent bg-white"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--orange-pale)] transition-all">
                        <item.icon size={16} className="text-[var(--orange)] sm:text-[18px] group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] sm:text-xs text-[var(--gray)] font-inter mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-xs sm:text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter break-words block"
                          >
                            {item.primary}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-medium text-[var(--dark)] font-inter break-words">{item.primary}</p>
                        )}
                        {item.secondary && (
                          <p className="text-[10px] sm:text-xs text-[var(--gray)] font-inter mt-0.5 flex items-center gap-1 flex-wrap">
                            <span className="inline-block w-1 h-1 rounded-full bg-[var(--orange)] flex-shrink-0"></span>
                            {item.secondary}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={coachInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[var(--gray-border)] hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group bg-white"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all flex-shrink-0">
                      <FaWhatsapp size={14} className="text-[#25D366] group-hover:text-white transition-all sm:text-[16px] md:text-[18px]" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-[var(--dark)] group-hover:text-[#25D366] transition-colors font-inter truncate">
                        Chat on WhatsApp
                      </p>
                      <p className="text-[10px] sm:text-xs text-[var(--gray)] font-inter truncate">Get response within hours</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-[var(--gray)] group-hover:text-[#25D366] group-hover:translate-x-1 transition-all flex-shrink-0 sm:text-[16px]" />
                </a>

                {/* Social Links */}
                  <div className="pt-2 sm:pt-4 flex gap-2 sm:gap-3">
  <a
    href={coachInfo.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-3 px-2 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[#E4405F] hover:text-[#E4405F] hover:border-[#E4405F] transition-all text-xs sm:text-sm font-inter font-medium bg-white"
  >
    <FaInstagram size={20} className="sm:text-[14px] md:text-[16px]" /> 
    <span className="hidden xs:inline">Instagram</span>
  </a>

  <a
    href={coachInfo.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-3 px-2 rounded-lg sm:rounded-xl border border-[var(--gray-border)] text-[#0A66C2] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all text-xs sm:text-sm font-inter font-medium bg-white"
  >
    <FaLinkedin size={20} className="sm:text-[14px] md:text-[16px]" />
    <span className="hidden xs:inline">LinkedIn</span>
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}