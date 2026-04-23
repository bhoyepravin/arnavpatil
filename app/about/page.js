// import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
// import { coachInfo, stats, whyChoose } from "@/lib/data";
// import Image from "next/image";
// import Link from "next/link";
// import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { CheckCircle2, ArrowRight } from "lucide-react";

// export const metadata = buildMetadata("about");

// const timeline = [
//   { year: "2014", event: "Started career as a business consultant in Maharashtra" },
//   { year: "2016", event: "Launched first Jewellers Business Workshop — 50 attendees" },
//   { year: "2018", event: "Expanded coaching to 3 states across India" },
//   { year: "2020", event: "Went digital — online coaching during the pandemic, reached 500+ clients" },
//   { year: "2022", event: "International expansion — coaching clients in 5 countries" },
//   { year: "2024", event: "1000+ clients milestone. Launched Women Entrepreneurs Programme" },
//   { year: "2025", event: "Arnav Patil & Co. — expanding presence across India and abroad" },
// ];

// export default function AboutPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//   ]);

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />

//       {/* Hero */}
//       <section className="pt-32 pb-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Content */}
//             <div>
//               <span className="section-label mb-5 inline-flex">About the Coach</span>
//               <h1
//                 className="font-montserrat font-extrabold leading-tight tracking-tight mb-6"
//                 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#0F172A" }}
//               >
//                 Meet{" "}
//                 <span className="gradient-text-orange">Mr. Arnav Patil</span>
//               </h1>
//               <p className="text-xl text-slate-500 font-inter mb-4">{coachInfo.title}</p>
//               <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#F97316] to-[#0891B2] mb-6" />
//               <p className="text-slate-500 text-base leading-relaxed font-inter mb-4">
//                 {coachInfo.bio.split("\n\n")[0]}
//               </p>
//               <p className="text-slate-500 text-base leading-relaxed font-inter mb-6">
//                 {coachInfo.bio.split("\n\n")[1]}
//               </p>
//               <p className="text-slate-500 text-base leading-relaxed font-inter mb-8">
//                 {coachInfo.bio.split("\n\n")[2]}
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
//                   <FaWhatsapp size={16} /> Book Free Consultation
//                 </a>
//                 <a
//                   href={coachInfo.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-secondary inline-flex"
//                 >
//                   <FaInstagram size={16} /> Follow on Instagram
//                 </a>
//               </div>
//             </div>

//             {/* Photo */}
//             <div className="relative flex justify-center lg:justify-end">
//               <div
//                 className="w-[320px] sm:w-[380px] aspect-square rounded-3xl shadow-2xl overflow-hidden"
//                 style={{ background: "linear-gradient(145deg, #FFF7ED 0%, #F0FDFF 100%)" }}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center p-10">
//                   <Image
//                     src="/images/arnav_patil_sir.jpeg"
//                     alt="Mr. Arnav Patil — Business Coach"
//                     width={260}
//                     height={260}
//                     className="w-85 h-auto object-contain"
//                   />
//                 </div>
//               </div>
//               {/* Accent border */}
//               <div className="absolute -bottom-8 -right-4 w-full h-115 rounded-3xl border-2 border-[#F97316]/20 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-orange-50">
//   <div className="max-w-7xl mx-auto px-6 lg:px-8">
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//       {stats.map((stat, i) => (
//         <div key={i}>
//           <div
//             className="text-4xl font-extrabold font-montserrat mb-2"
//             style={{ color: i % 2 === 0 ? "#F97316" : "#38BDF8" }}
//           >
//             {stat.value}
//           </div>
//           <div className="text-slate-600 text-sm font-inter">{stat.label}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Journey timeline */}
//       <section className="py-24 bg-[#F8FAFC]">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-14">
//             <span className="section-label mb-4 inline-flex">The Journey</span>
//             <h2
//               className="font-montserrat font-extrabold leading-tight"
//               style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#0F172A" }}
//             >
//               Arnav&apos;s Story
//             </h2>
//           </div>

//           <div className="relative">
//             {/* Vertical line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F97316] to-[#0891B2]" />

//             <div className="space-y-8">
//               {timeline.map((item, i) => (
//                 <div key={i} className="flex gap-6 items-start pl-0">
//                   {/* Dot */}
//                   <div
//                     className="w-16 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm font-inter"
//                     style={{
//                       background: i % 2 === 0
//                         ? "linear-gradient(135deg, #F97316, #EA580C)"
//                         : "linear-gradient(135deg, #0891B2, #0E7490)",
//                     }}
//                   >
//                     {item.year}
//                   </div>
//                   <div className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100 flex-1">
//                     <p className="text-slate-600 text-sm font-inter">{item.event}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why choose */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-14">
//             <span className="section-label mb-4 inline-flex">Values & Approach</span>
//             <h2
//               className="font-montserrat font-extrabold leading-tight"
//               style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#0F172A" }}
//             >
//               The Arnav Patil Difference
//             </h2>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyChoose.map((item, i) => (
//               <div
//                 key={i}
//                 className="p-7 rounded-3xl border border-slate-100 hover:border-orange-100 hover:shadow-md transition-all duration-300"
//               >
//                 <div className="text-3xl mb-4">{item.icon}</div>
//                 <h3 className="font-montserrat font-bold text-lg text-[#0F172A] mb-2">{item.title}</h3>
//                 <p className="text-slate-500 text-sm leading-relaxed font-inter">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-[#F8FAFC] text-center px-6">
//         <h2 className="font-montserrat font-extrabold text-3xl text-[#0F172A] mb-4">
//           Ready to Transform Your Business?
//         </h2>
//         <p className="text-slate-500 font-inter mb-8 max-w-xl mx-auto">
//           Connect with Arnav Patil for coaching, masterclasses, or keynote speaking engagements.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
//             <FaWhatsapp size={17} /> Book on WhatsApp
//           </a>
//           <Link href="/programs" className="btn-secondary inline-flex">
//             View Programs <ArrowRight size={15} />
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }

import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import { coachInfo, stats, whyChoose } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CheckCircle2, ArrowRight } from "lucide-react";
import TimelineSection from "@/components/about/TimelineSection";
import StorySection from "@/components/about/StorySection";

export const metadata = buildMetadata("about");

const timeline = [
  { year: "2014", event: "Started career as a business consultant in Maharashtra" },
  { year: "2016", event: "Launched first Jewellers Business Workshop — 50 attendees" },
  { year: "2018", event: "Expanded coaching to 3 states across India" },
  { year: "2020", event: "Went digital — online coaching during the pandemic, reached 500+ clients" },
  { year: "2022", event: "International expansion — coaching clients in 5 countries" },
  { year: "2024", event: "1000+ clients milestone. Launched Women Entrepreneurs Programme" },
  { year: "2025", event: "Arnav Patil & Co. — expanding presence across India and abroad" },
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      {/* Content - Left Side */}
      <div className="text-center lg:text-left order-2 lg:order-1">
        <span className="section-label mb-4 sm:mb-5 inline-flex">About the Coach</span>
        <h1
          className="heading-xl font-montserrat font-extrabold leading-tight tracking-tight mb-4 sm:mb-6"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#0F172A" }}
        >
          Meet{" "}
          <span className="heading">Mr. Arnav Patil</span>{" "}
          {/* <span className="text-slate-500">(Arnasoft Solutions)</span> */}
        </h1>
        <p className="heading text-base sm:text-lg md:text-xl text-slate-500 font-bold mb-3 sm:mb-4">
          {coachInfo.title}
        </p>
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#480A62] to-[#480A62] mb-5 sm:mb-6 mx-auto lg:mx-0" />
        
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-inter mb-3 sm:mb-4">
          {coachInfo.bio.split("\n\n")[0]}
        </p>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-inter mb-3 sm:mb-4">
          {coachInfo.bio.split("\n\n")[1]}
        </p>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-inter mb-6 sm:mb-8">
          {coachInfo.bio.split("\n\n")[2]}
        </p>
        
        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <a 
            href={coachInfo.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-5 sm:px-6"
          >
            <FaWhatsapp size={16} className="mr-2" /> Book a Consultation
          </a>
          <a
            href={coachInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-5 sm:px-6"
          >
            <FaInstagram size={16} className="mr-2" /> Follow on Instagram
          </a>
        </div> */}
      </div>

      {/* Photo - Right Side - LARGER IMAGE, NO BORDER */}
      <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
        <div className="relative w-[360px] sm:w-[480px] md:w-[560px] aspect-square rounded-3xl shadow-2xl overflow-hidden mx-auto lg:mx-0">
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(145deg, #FFF7ED 0%, #F0FDFF 100%)" }}
          >
            <Image
              src="/images/arnav_patil_sir.jpeg"
              alt="Mr. Arnav Patil — Business Coach"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <StorySection/>

      {/* Stats Section - Light Orange Background */}
      <section className="py-12 sm:py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="px-2 sm:px-0">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-montserrat mb-1 sm:mb-2"
                  style={{ color: i % 2 === 0 ? "#F97316" : "#38BDF8" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-600 text-xs sm:text-sm font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      {/* Journey Timeline Section */}

      <TimelineSection/>
{/* <section className="py-16 sm:py-24 bg-[#F8FAFC]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10 sm:mb-14">
      <span className="section-label mb-3 sm:mb-4 inline-flex">The Journey</span>
      <h2
        className="font-montserrat font-extrabold leading-tight px-2"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
      >
        The <span className="gradient-text">Arnasoft</span> Story
      </h2>
      <p className="text-slate-500 text-sm sm:text-base font-inter mt-3 max-w-2xl mx-auto">
        From vision to reality — the journey of excellence
      </p>
    </div>

    <div className="relative">
      
      <div className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F97316] to-[#0891B2]" />

      <div className="space-y-5 sm:space-y-8">
        {timeline.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
            
            <div
              className="w-full sm:w-20 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm font-inter"
              style={{
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #F97316, #EA580C)"
                  : "linear-gradient(135deg, #0891B2, #0E7490)",
              }}
            >
              {item.year}
            </div>
            
            <div className="bg-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm border border-slate-100 flex-1">
              <p className="text-slate-600 text-xs sm:text-sm font-inter leading-relaxed">
                {item.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */}

      {/* Why Choose Section */}
      {/* Why Choose Section */}
{/* <section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10 sm:mb-14">
      <span className="section-label mb-3 sm:mb-4 inline-flex">Values & Approach</span>
      <h2
        className="font-montserrat font-extrabold leading-tight px-2"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
      >
        The <span className="gradient-text">Arnasoft</span> Difference
      </h2>
      <p className="text-slate-500 text-sm sm:text-base font-inter mt-3 max-w-2xl mx-auto">
        Powered by <span className="font-semibold text-[#F97316]">Arnasoft Solutions</span>
      </p>
    </div>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {whyChoose.map((item, i) => (
        <div
          key={i}
          className="p-5 sm:p-7 rounded-3xl border border-slate-100 hover:border-orange-100 hover:shadow-md transition-all duration-300"
        >
          
          <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0F172A] mb-2">
            {item.title}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section> */}

<section className="py-16 sm:py-24 bg-white relative overflow-hidden">
  {/* Subtle Background Decoration */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 right-20 w-64 h-64 bg-orange-50/30 rounded-full blur-2xl" />
    <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-50/30 rounded-full blur-2xl" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-10 sm:mb-14">
      <span className="section-label mb-3 sm:mb-4 inline-flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]"></span>
        Values & Approach
      </span>
      <h2
        className="heading-xl font-montserrat font-extrabold leading-tight px-2"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
      >
        The <span className="heading">Arnasoft</span> Difference
      </h2>
      <p className="text-gray-800 text-sm sm:text-base font-medium mt-3 max-w-2xl mx-auto">
        Powered by <span className="font-semibold text-[#F97316] relative inline-block">Arnasoft Solutions</span>
      </p>
    </div>
    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {whyChoose.map((item, i) => (
        <div
          key={i}
          className="group p-5 sm:p-7 rounded-3xl border-3 border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/30"
        >
          {/* Subtle accent line on hover */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#480A62] to-[#480A62] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <h3 className="font-montserrat font-bold text-base sm:text-lg text-[#0F172A] mb-2 group-hover:text-[#F97316] transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter group-hover:text-slate-600 transition-colors duration-300">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Brand Showcase Section - Arnasoft Solutions */}
      {/* <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm mb-6">
            <span className="text-xs sm:text-sm font-semibold text-[#F97316]">Proudly Powered by</span>
          </div>
          <h3 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-[#0F172A] mb-3">
            Arnasoft <span className="">Solutions</span>
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-inter max-w-2xl mx-auto">
            Innovative digital solutions for modern businesses
          </p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-xl font-montserrat font-extrabold text-2xl sm:text-4xl text-[#0F172A] mb-3 sm:mb-4 px-2">
            Ready to Transform <span className="heading">  Your Business?</span>
          </h2>
          <p className="text-gray-800 font-medium text-xs sm:text-base mb-6 sm:mb-8 px-4">
            Connect with Arnav Patil for coaching, masterclasses, or keynote speaking engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href={coachInfo.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8"
            >
              <FaWhatsapp size={17} className="mr-2" /> Book on WhatsApp
            </a>
            <Link 
              href="/contact" 
              className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8"
            >
              Book Consultation <ArrowRight size={15} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
