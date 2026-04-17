import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { Mail, Phone, MapPin, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata("terms-and-conditions");

export default function TermsAndConditionsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ]);

  const lastUpdated = "January 15, 2025";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 sm:mb-5 inline-flex">Legal</span>
          <h1
            className="font-montserrat font-extrabold leading-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "var(--dark)" }}
          >
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-[var(--gray)] text-base sm:text-lg font-inter">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 bg-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none">
            {/* Agreement to Terms */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Agreement to Terms
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-4">
                By accessing or using the website of <span className="font-semibold text-[var(--orange)]">Arnasoft Solutions</span> 
                ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you disagree with any part 
                of these terms, you may not access the website or use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Services Description
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                Arnasoft Solutions provides business coaching, leadership training, corporate workshops, keynote speaking, 
                and consulting services. The specific details of each service, including pricing, duration, and deliverables, 
                will be outlined in separate agreements or proposals.
              </p>
              <div className="bg-[var(--orange-pale)] rounded-2xl p-5 border border-[var(--orange-light)]">
                <p className="text-sm text-[var(--dark)] font-inter font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle size={16} className="text-[var(--orange)]" />
                  Important Note:
                </p>
                <p className="text-sm text-[var(--gray)] font-inter">
                  All coaching programs and services are subject to availability and may be modified or discontinued 
                  at our discretion with reasonable notice.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                User Responsibilities
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                By using our website and services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--gray)] font-inter">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Not use our website for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt our website or servers</li>
                <li>Respect the intellectual property rights of our content and materials</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4 flex items-center gap-2">
                <FileText size={20} className="text-[var(--orange)]" />
                Intellectual Property
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                All content on this website, including text, graphics, logos, images, videos, course materials, and software, 
                is the property of Arnasoft Solutions or its content suppliers and is protected by copyright and intellectual 
                property laws.
              </p>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or transmit any 
                content without our prior written consent.
              </p>
            </div>

            {/* Payments and Refunds */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Payments and Refunds
              </h2>
              <div className="space-y-3">
                <p className="text-[var(--gray)] font-inter leading-relaxed">
                  <span className="font-semibold text-[var(--dark)]">Payment Terms:</span> All fees for coaching programs 
                  and services are due at the time of registration unless otherwise specified in a separate agreement.
                </p>
                <p className="text-[var(--gray)] font-inter leading-relaxed">
                  <span className="font-semibold text-[var(--dark)]">Refund Policy:</span> Refunds are handled on a 
                  case-by-case basis. Generally, refunds may be available within 7 days of purchase if no services have 
                  been rendered. After services commence, no refunds will be issued.
                </p>
                <div className="bg-[var(--gray-light)] rounded-2xl p-5">
                  <p className="text-sm text-[var(--gray)] font-inter">
                    <span className="font-semibold text-[var(--dark)]">Note:</span> For specific refund terms, please 
                    refer to your individual program agreement or contact us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4 flex items-center gap-2">
                <Scale size={20} className="text-[var(--orange)]" />
                Limitation of Liability
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                To the maximum extent permitted by law, Arnasoft Solutions shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[var(--gray)] font-inter">
                <li>Your use or inability to use our website or services</li>
                <li>Any conduct or content of any third party on our website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations 
                or warranties of any kind, express or implied, regarding the operation or availability of our website, 
                or the information, content, materials, or products included.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Third-Party Links
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by us. 
                We have no control over and assume no responsibility for the content, privacy policies, or practices of 
                any third-party websites. You acknowledge and agree that we shall not be responsible or liable for any 
                damage or loss caused by or in connection with the use of such websites.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Termination
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                We may terminate or suspend your access to our website and services immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Governing Law
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its 
                conflict of law provisions. Any legal action arising out of or related to these Terms shall be filed 
                exclusively in the courts located in Mumbai, Maharashtra.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Changes to Terms
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
                provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use 
                our website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Contact Us
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-[var(--gray-light)] rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[var(--orange)]" />
                  <a href="mailto:support@arnavpatil.com" className="text-[var(--dark)] font-inter hover:text-[var(--orange)] transition-colors">
                    support@arnavpatil.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[var(--orange)]" />
                  <a href="tel:+919272056528 " className="text-[var(--dark)] font-inter hover:text-[var(--orange)] transition-colors">
                    +91 9272056528 
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[var(--orange)]" />
                  <span className="text-[var(--dark)] font-inter">S. No. 01/840/5 Tapovan Road, Dwarka, Nashik-422011.</span>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-6 border-t border-[var(--gray-border)] text-center">
              <p className="text-sm text-[var(--gray)] font-inter">
                By using our website, you acknowledge that you have read, understood, and agree to be bound by these 
                Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}