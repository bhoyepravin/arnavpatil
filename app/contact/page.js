import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { coachInfo } from "@/lib/data";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <span className="section-label mb-5 inline-flex">Contact Us</span>
          <h1
            className="font-montserrat font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
          >
            Let&apos;s Start Your{" "}
            <span className="gradient-text-orange">Transformation</span>
          </h1>
          <p className="text-slate-500 font-inter text-lg">
            Reach out for coaching, masterclass registration, corporate training, or keynote speaking.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Contact Info */}
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-8">
                Get in Touch
              </h2>

              {/* Primary WhatsApp CTA */}
              <div
                className="rounded-3xl p-7 mb-6 text-white"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
              >
                <h3 className="font-montserrat font-bold text-xl mb-2">Book on WhatsApp</h3>
                <p className="text-orange-100 text-sm font-inter mb-5">
                  The fastest way to connect with Arnav Sir — get a response within hours.
                </p>
                <a
                  href={coachInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#F97316] rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors font-inter"
                >
                  <FaWhatsapp size={17} className="text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-3xl border border-slate-100 p-7 space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    val: coachInfo.phone,
                    href: `tel:${coachInfo.phone}`,
                    color: "#F97316",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    val: coachInfo.email,
                    href: `mailto:${coachInfo.email}`,
                    color: "#0891B2",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    val: "India · Active in 5 Countries",
                    href: null,
                    color: "#F97316",
                  },
                  {
                    icon: Clock,
                    label: "Availability",
                    val: "Mon–Sat, 9 AM – 7 PM IST",
                    href: null,
                    color: "#0891B2",
                  },
                ].map(({ icon: Icon, label, val, href, color }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-inter">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-[#0F172A] hover:text-[#F97316] transition-colors font-inter">
                          {val}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-[#0F172A] font-inter">{val}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-6 flex gap-3">
                <a
                  href={coachInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 text-sm font-inter font-medium"
                >
                  <FaInstagram size={15} /> Instagram
                </a>
                <a
                  href={coachInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 justify-center px-4 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-200 font-inter"
                >
                  <FaWhatsapp size={15} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Inquiry form */}
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-[#0F172A] mb-8">
                Send an Enquiry
              </h2>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
