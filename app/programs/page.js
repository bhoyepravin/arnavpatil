// import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
// import { programs } from "@/lib/data";
// import { coachInfo } from "@/lib/data";
// import Link from "next/link";
// import { FaWhatsapp } from "react-icons/fa";
// import { ArrowRight, Clock, Globe, Users, CheckCircle2 } from "lucide-react";

// export const metadata = buildMetadata("programs");

// export default function ProgramsPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Programs", href: "/programs" },
//   ]);

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />

//       {/* Hero Section */}
//       <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white text-center px-4 sm:px-6">
//         <div className="max-w-3xl mx-auto">
//           <span className="section-label mb-4 sm:mb-5 inline-flex">Our Programs</span>
//           <h1
//             className="font-montserrat font-extrabold leading-tight tracking-tight mb-4 sm:mb-5"
//             style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", color: "#0F172A" }}
//           >
//             Coaching Programmes{" "}
//             <span className="heading">Built for Results</span>
//           </h1>
//           <p className="text-slate-500 text-base sm:text-lg font-inter max-w-2xl mx-auto px-2">
//             Every programme is crafted from 10+ years of real-world business transformation. 
//             Choose what fits your stage and start growing with <span className="font-semibold text-[#F97316]">Arnasoft Solutions</span>.
//           </p>
//         </div>
//       </section>

//       {/* Programs Grid Section */}
//       <section className="pb-16 sm:pb-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
//             {programs.map((prog, i) => (
//               <div
//                 key={prog.slug}
//                 className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 overflow-hidden flex flex-col"
//               >
//                 {/* Top bar */}
//                 <div
//                   className="h-1.5"
//                   style={{
//                     background: i % 2 === 0
//                       ? "linear-gradient(90deg, #F97316, #FB923C)"
//                       : "linear-gradient(90deg, #0891B2, #06B6D4)",
//                   }}
//                 />
                
//                 <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
//                   {/* Icon + badge */}
//                   <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
//                     <div
//                       className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-sm"
//                       style={{
//                         background: i % 2 === 0
//                           ? "linear-gradient(135deg, #FFF7ED, #FED7AA)"
//                           : "linear-gradient(135deg, #F0FDFF, #CFFAFE)",
//                       }}
//                     >
//                       {prog.icon}
//                     </div>
//                     <span
//                       className={`text-xs font-semibold px-3 py-1.5 rounded-full self-start sm:self-center ${
//                         prog.badge === "Flagship"
//                           ? "bg-orange-100 text-orange-700"
//                           : prog.badge === "Most Popular"
//                           ? "bg-teal-100 text-teal-700"
//                           : prog.badge === "New"
//                           ? "bg-violet-100 text-violet-700"
//                           : "bg-pink-100 text-pink-700"
//                       }`}
//                     >
//                       {prog.badge}
//                     </span>
//                   </div>

//                   <h2 className="font-montserrat font-bold text-xl sm:text-2xl text-[#0F172A] mb-1 sm:mb-2">
//                     {prog.title}
//                   </h2>
//                   <p className="text-[#F97316] text-xs sm:text-sm font-medium font-inter mb-3 sm:mb-4">
//                     {prog.tagline}
//                   </p>
//                   <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter mb-4 sm:mb-6">
//                     {prog.description}
//                   </p>

//                   {/* Meta Info Cards */}
//                   <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6 p-3 sm:p-4 bg-[#F8FAFC] rounded-2xl">
//                     {[
//                       { icon: Clock, label: "Duration", val: prog.duration },
//                       { icon: Globe, label: "Mode", val: prog.mode },
//                       { icon: Users, label: "For", val: prog.audience?.split(",")[0] || "All Levels" },
//                     ].map(({ icon: Icon, label, val }) => (
//                       <div key={label} className="text-center">
//                         <Icon size={14} className="mx-auto mb-1 text-[#F97316]" />
//                         <div className="text-[10px] sm:text-xs text-slate-400 font-inter">{label}</div>
//                         <div className="text-[10px] sm:text-xs font-semibold text-slate-700 font-inter mt-0.5 leading-tight">
//                           {val}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Highlights List */}
//                   <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-7 flex-1">
//                     {prog.highlights?.slice(0, 4).map((h, j) => (
//                       <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-inter">
//                         <CheckCircle2 size={14} className="text-[#F97316] flex-shrink-0 mt-0.5" />
//                         <span>{h}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* CTA Buttons */}
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <Link
//                       href={`/programs/${prog.slug}`}
//                       className="btn-primary flex-1 text-center justify-center text-sm sm:text-base py-2.5 sm:py-3"
//                     >
//                       Learn More <ArrowRight size={14} className="inline ml-1" />
//                     </Link>
//                     <a
//                       href={coachInfo.whatsapp}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-secondary flex-1 text-center justify-center text-sm sm:text-base py-2.5 sm:py-3"
//                     >
//                       <FaWhatsapp size={14} className="inline mr-2" /> Enquire Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Arnasoft Section */}
//       <section className="py-16 sm:py-20 bg-orange-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14">
//             <span className="section-label mb-3 sm:mb-4 inline-flex">Why Choose Us</span>
//             <h2
//               className="font-montserrat font-extrabold leading-tight px-2"
//               style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
//             >
//               The <span className="gradient-text">Arnasoft</span> Advantage
//             </h2>
//             <p className="text-slate-600 text-sm sm:text-base font-inter mt-3 max-w-2xl mx-auto">
//               What makes our coaching programs different and effective
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//             {[
//               {
//                 icon: "🎯",
//                 title: "Proven Framework",
//                 desc: "10+ years of real-world business experience"
//               },
//               {
//                 icon: "💡",
//                 title: "Practical Insights",
//                 desc: "Actionable strategies you can implement immediately"
//               },
//               {
//                 icon: "🤝",
//                 title: "Personal Mentorship",
//                 desc: "Direct access to Arnav Sir for guidance"
//               },
//               {
//                 icon: "📈",
//                 title: "Track Record",
//                 desc: "1000+ successful clients transformed"
//               }
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-5 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
//                 <h3 className="font-montserrat font-bold text-[#0F172A] text-sm sm:text-base mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-500 text-xs sm:text-sm font-inter">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Brand Showcase Section */}
//       <section className="py-12 sm:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm mb-6">
//             <span className="text-xs sm:text-sm font-semibold text-[#F97316]">Powered by Excellence</span>
//           </div>
//           <h3 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl text-[#0F172A] mb-3">
//             Arnasoft <span className="gradient-text">Solutions</span>
//           </h3>
//           <p className="text-slate-600 text-sm sm:text-base font-inter max-w-2xl mx-auto">
//             Transforming businesses through innovative coaching and digital solutions
//           </p>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 sm:py-20 bg-orange-50 text-center px-4 sm:px-6">
//   <div className="max-w-3xl mx-auto">
//     <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#0F172A] mb-3 sm:mb-4">
//       Not Sure Which Program Is Right?
//     </h2>
//     <p className="text-slate-600 text-sm sm:text-base font-inter mb-6 sm:mb-8 max-w-xl mx-auto px-4">
//       Connect with Arnav Sir directly on WhatsApp for a free consultation 
//       and personalised recommendation.
//     </p>
//     <a 
//       href={coachInfo.whatsapp} 
//       target="_blank" 
//       rel="noopener noreferrer" 
//       className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8"
//     >
//       <FaWhatsapp size={17} className="mr-2" /> Get a Free Recommendation
//     </a>
//   </div>
// </section>
//     </>
//   );
// }

import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { programs } from "@/lib/data";
import { coachInfo } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Clock, Globe, Users, CheckCircle2, BookOpen } from "lucide-react";
import { Target, Lightbulb, Handshake, TrendingUp } from "lucide-react";

export const metadata = buildMetadata("programs");

export default function ProgramsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-white text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 sm:mb-5 inline-flex">Our Programs</span>
          <h1
            className="heading-xl font-montserrat font-extrabold leading-tight tracking-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", color: "#0F172A" }}
          >
            Coaching Programmes{" "}
            <span className="heading">Built for Results</span>
          </h1>
          <p className="text-gray-800 text-xs sm:text-base font-medium max-w-2xl mx-auto px-2">
            Every programme is crafted from 10+ years of real-world business transformation. 
            Choose what fits your stage and start growing with <span className="font-semibold text-[#F97316]">Arnasoft Solutions</span>.
          </p>
        </div>
      </section>

      {/* Programs Grid Section - Updated Card Design */}
      <section className="pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((prog) => (
              <div
                key={prog.slug}
                className="
                  bg-white rounded-2xl 
                  border border-[var(--gray-border)] 
                  shadow-sm overflow-hidden 
                  flex flex-col
                  hover:shadow-lg transition-all duration-300
                  group
                "
              >
                {/* Image */}
                <div className="h-44 sm:h-48 w-full overflow-hidden relative">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    width={600}
                    height={350}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Category Badge */}
                  {prog.category && (
                    <span className="absolute top-3 right-3 bg-[var(--orange)] text-white text-xs px-2 py-1 rounded-full font-montserrat font-semibold">
                      {prog.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-montserrat font-bold text-[var(--dark)] line-clamp-2">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--gray)] font-inter leading-relaxed line-clamp-2">
                    {prog.description}
                  </p>

                  <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--gray)] mt-1">
                    <span className="flex items-center gap-1 sm:gap-2">
                      <BookOpen size={14} className="text-[var(--dark)]" />
                      {prog.duration}
                    </span>

                    <span className="flex items-center gap-1 sm:gap-2">
                      <Clock size={14} className="text-[var(--dark)]" />
                      {prog.mode}
                    </span>
                  </div>

                  {/* Price + Buttons */}
                  <div className="mt-auto pt-4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Link
                        href={`/programs/${prog.slug}`}
                        className="btn-secondary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
                      >
                        Explore
                      </Link>

                      <a
                        href={coachInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Arnasoft Section */}
     <section className="py-16 sm:py-20 bg-orange-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10 sm:mb-14">
      <span className="section-label mb-3 sm:mb-4 inline-flex">Why Choose Us</span>
      <h2
        className="heading-xl font-montserrat font-extrabold leading-tight px-2"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
      >
        The <span className="heading">Arnasoft</span> Advantage
      </h2>
      <p className="text-gray-800 text-xs sm:text-base font-medium mt-3 max-w-2xl mx-auto">
        What makes our coaching programs different and effective
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {[
        {
          icon: Target,
          title: "Proven Framework",
          desc: "10+ years of real-world business experience"
        },
        {
          icon: Lightbulb,
          title: "Practical Insights",
          desc: "Actionable strategies you can implement immediately"
        },
        {
          icon: Handshake,
          title: "Personal Mentorship",
          desc: "Direct access to Arnav Sir for guidance"
        },
        {
          icon: TrendingUp,
          title: "Track Record",
          desc: "1000+ successful clients transformed"
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-400 text-center hover:shadow-lg transition-all duration-300 group"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
            <item.icon size={28} className="text-[#F97316]" />
          </div>
          <h3 className="font-montserrat font-bold text-[#0F172A] text-sm sm:text-base mb-2">
            {item.title}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm font-inter">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Brand Showcase Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm mb-6">
            <span className="text-xs sm:text-sm font-semibold text-[#F97316]">Powered by Excellence</span>
          </div>
          <h3 className="heading-xl font-montserrat font-black text-2xl sm:text-3xl md:text-4xl text-[#0F172A] mb-3">
            Arnasoft <span className="heading">Solutions</span>
          </h3>
          <p className="text-gray-800 text-xs sm:text-base font-medium max-w-2xl mx-auto">
            Transforming businesses through innovative coaching and digital solutions
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-orange-50 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-xl font-montserrat font-extrabold text-2xl sm:text-3xl text-[#0F172A] mb-3 sm:mb-4">
            Not Sure Which <span className="heading">Program Is Right?</span> 
          </h2>
          <p className="text-gray-800 text-xs sm:text-base font-inter mb-6 sm:mb-8 max-w-xl mx-auto px-4">
            Connect with Arnav Sir directly on WhatsApp for a free consultation 
            and personalised recommendation.
          </p>
          <a 
            href={coachInfo.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8"
          >
            <FaWhatsapp size={17} className="mr-2" /> Get a Free Recommendation
          </a>
        </div>
      </section>
    </>
  );
}