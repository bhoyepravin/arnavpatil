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

import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { coachInfo } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 sm:mb-5 inline-flex">Contact Us</span>
          <h1
            className="font-montserrat font-extrabold leading-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "var(--dark)" }}
          >
            Let's Start Your{" "} <span className="gradient-text">Transformation</span>
            
          </h1>   
          <p className="text-[var(--gray)] text-base sm:text-lg font-inter max-w-2xl mx-auto">
            Got questions or need assistance? Contact us today. 
            We're here to help you grow.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form - Left Side */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Info - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-[var(--gray)] text-sm font-inter">
                    We'd love to hear from you
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 border border-[var(--gray-border)] rounded-xl hover:border-[var(--orange)]/30 transition-all hover:bg-[var(--orange-pale)]/30">
                    <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[var(--orange)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--gray)] font-inter">Email</p>
                      <a href={`mailto:${coachInfo.email}`} className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter">
                        {coachInfo.email}
                      </a>
                       <p className="text-xs text-[var(--gray)] font-inter"></p>
                      <a href={`mailto:${coachInfo.email}`} className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter">
                        {coachInfo.email2}
                      </a>
                    </div>
                    
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-4 border border-[var(--gray-border)] rounded-xl hover:border-[var(--orange)]/30 transition-all hover:bg-[var(--orange-pale)]/30">
                    <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[var(--orange)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--gray)] font-inter">Phone</p>
                      <a href={`tel:${coachInfo.phone}`} className="text-sm font-medium text-[var(--dark)] hover:text-[var(--orange)] transition-colors font-inter">
                        {coachInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4 p-4 border border-[var(--gray-border)] rounded-xl hover:border-[var(--orange)]/30 transition-all hover:bg-[var(--orange-pale)]/30">
                    <div className="w-11 h-11 rounded-xl bg-[var(--gray-light)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[var(--orange)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--gray)] font-inter">Address</p>
                      <p className="text-sm font-medium text-[var(--dark)] font-inter">
                        Nashik , Maharashtra.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={coachInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full p-3 border border-[var(--gray-border)] rounded-xl hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
                >
                  <FaWhatsapp size={18} className="text-[#25D366]" />
                  <span className="text-sm font-medium text-[var(--dark)] group-hover:text-[#25D366] transition-colors font-inter">
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Strip - 3 Columns */}
          <div className="grid sm:grid-cols-3 gap-6 py-10 border-t border-b border-[var(--gray-border)] mb-16">
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: coachInfo.email,
                detail: "We respond within 24 hours",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: coachInfo.phone,
                detail: "Mon-Fri, 9AM - 7PM IST",
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "Nashik, Maharashtra India",
                detail: "Virtual sessions worldwide",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--gray-light)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--orange-pale)] transition-all">
                  <item.icon size={22} className="text-[var(--orange)]" />
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-[var(--dark)] mb-1">
                  {item.label}
                </h3>
                <p className="text-[var(--dark)] text-sm font-medium mb-1 font-inter">
                  {item.value}
                </p>
                <p className="text-[var(--gray)] text-xs font-inter">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="w-full h-[300px] overflow-hidden rounded-2xl border border-[var(--gray-border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433247217!2d72.7411014549518!3d19.082522335147225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}

// Add missing import
import { FaWhatsapp } from "react-icons/fa";