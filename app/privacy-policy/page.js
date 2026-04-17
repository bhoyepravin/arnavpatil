import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { Mail, Phone, MapPin, Shield, Lock, Eye, Database, Cookie } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata("privacy-policy");

export default function PrivacyPolicyPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
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
            Privacy <span className="gradient-text">Policy</span>
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
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Introduction
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-4">
                At <span className="font-semibold text-[var(--orange)]">Arnasoft Solutions</span> ("we," "our," or "us"), 
                we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that 
                you have read, understood, and agree to be bound by the terms of this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-[var(--dark)] mb-2 flex items-center gap-2">
                    <Database size={18} className="text-[var(--orange)]" />
                    Personal Information
                  </h3>
                  <p className="text-[var(--gray)] font-inter leading-relaxed mb-2">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-[var(--gray)] font-inter">
                    <li>Fill out contact or enquiry forms</li>
                    <li>Register for events or programs</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request coaching or consultation services</li>
                    <li>Communicate with us via email, phone, or WhatsApp</li>
                  </ul>
                  <p className="text-[var(--gray)] font-inter mt-2">
                    This information may include your name, email address, phone number, company name, and any other details you provide.
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-[var(--dark)] mb-2 flex items-center gap-2">
                    <Eye size={18} className="text-[var(--orange)]" />
                    Automatically Collected Information
                  </h3>
                  <p className="text-[var(--gray)] font-inter leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, 
                    including your IP address, browser type, operating system, pages viewed, and the dates/times of your visits.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--gray)] font-inter">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your enquiries and requests</li>
                <li>Process registrations for events and programs</li>
                <li>Send you important updates and marketing communications (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4 flex items-center gap-2">
                <Cookie size={22} className="text-[var(--orange)]" />
                Cookies and Tracking Technologies
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4 flex items-center gap-2">
                <Lock size={20} className="text-[var(--orange)]" />
                Data Security
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive 
                to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Third-Party Disclosure */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Third-Party Disclosure
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as required by law or as necessary to provide our services (e.g., payment processors, email service providers).
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Your Rights
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[var(--gray)] font-inter">
                <li>Access and obtain a copy of your information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="font-montserrat font-bold text-2xl text-[var(--dark)] mb-4">
                Contact Us
              </h2>
              <p className="text-[var(--gray)] font-inter leading-relaxed mb-3">
                If you have questions or concerns about this Privacy Policy, please contact us:
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

            {/* Updates to Policy */}
            <div className="pt-6 border-t border-[var(--gray-border)]">
              <p className="text-sm text-[var(--gray)] font-inter">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
                Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}