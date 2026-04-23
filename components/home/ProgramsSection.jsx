// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { BookOpen, Clock } from "lucide-react";
// import { programs } from "@/lib/data";

// export default function ProgramsSection() {
//   return (
//     <section className="py-16 sm:py-20 lg:py-28 bg-[var(--off-white)]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* Header */}
//         <div className="text-center mb-10 sm:mb-14">

//           <span className="section-label mb-3 sm:mb-4 inline-block">
//             Transformative Journeys
//           </span>

//           <h2
//             className="font-montserrat font-black leading-tight text-[var(--dark)]"
//             style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
//           >
//             Coaching Programs{" "}
//             <span className="gradient-text">
//               Built for Results
//             </span>
//           </h2>

//         </div>

//         {/* Tabs (Scrollable on mobile) */}
//         <div className="flex justify-start sm:justify-center gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar px-1">

//           {["All", "Recorded", "Live"].map((tab, i) => (
//             <button
//               key={i}
//               className={`
//                 whitespace-nowrap px-5 py-2 rounded-full 
//                 font-montserrat font-semibold text-sm
//                 ${
//                   i === 0
//                     ? "bg-[var(--orange)] text-white shadow"
//                     : "bg-[var(--gray-light)] text-[var(--gray)]"
//                 }
//               `}
//             >
//               {tab}
//             </button>
//           ))}

//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

//           {programs.map((prog) => (
//             <div
//               key={prog.slug}
//               className="
//                 bg-white rounded-2xl 
//                 border border-[var(--gray-border)] 
//                 shadow-sm overflow-hidden 
//                 flex flex-col
//                 hover:shadow-lg transition
//               "
//             >

//               {/* Image */}
//               <div className="h-44 sm:h-48 w-full overflow-hidden">
//                 <Image
//                   src={prog.image}
//                   alt={prog.title}
//                   width={600}
//                   height={350}
//                   className="w-full h-full object-cover hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">

//                 <h3 className="text-base sm:text-lg lg:text-xl font-montserrat font-bold text-[var(--dark)]">
//                   {prog.title}
//                 </h3>

//                 <p className="text-xs sm:text-sm text-[var(--gray)] font-inter leading-relaxed line-clamp-2">
//                   {prog.description}
//                 </p>

//                 <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--gray)] mt-1">
//                   <span className="flex items-center gap-1 sm:gap-2">
//                     <BookOpen size={14} className="text-[var(--dark)]" />
//                     {prog.lessons}
//                   </span>

//                   <span className="flex items-center gap-1 sm:gap-2">
//                     <Clock size={14} className="text-[var(--dark)]" />
//                     {prog.duration}
//                   </span>
//                 </div>

//                 {/* Price + Buttons */}
//                 <div className="mt-auto pt-4">

//   {/* <p className="text-base sm:text-lg font-montserrat font-bold text-[var(--dark)] mb-3 sm:mb-4">
//     ₹ {prog.price}
//   </p> */}

//   {/* Buttons responsive */}
//   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">

//   <Link
//     href={`${prog.link}`}
//     className="btn-secondary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
//   >
//     Explore
//   </Link>

//   <Link
//     href={`${prog.contact}`}
//     className="btn-primary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
//   >
//     Enroll Now 
//   </Link>

// </div>

// </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BookOpen, Clock } from "lucide-react";
// import { programs } from "@/lib/data";

// export default function ProgramsSection() {
//   const [activeTab, setActiveTab] = useState("All");

//   // Filter programs based on active tab
//   const filteredPrograms = programs.filter((prog) => {
//     if (activeTab === "All") return true;
//     if (activeTab === "Recorded") return prog.mode === "Online";
//     if (activeTab === "Live") return prog.mode === "Offline";
//     return true;
//   });

//   return (
//     <section className="py-16 sm:py-20 lg:py-28 bg-[var(--off-white)]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* Header */}
//         <div className="text-center mb-10 sm:mb-14">

//           <span className="section-label mb-3 sm:mb-4 inline-block">
//             Transformative Journeys
//           </span>

//           <h2
//             className="font-montserrat font-black leading-tight text-[var(--dark)]"
//             style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
//           >
//             Coaching Programs{" "}
//             <span className="gradient-text">
//               Built for Results
//             </span>
//           </h2>

//         </div>

//         {/* Tabs (Scrollable on mobile) */}
//         <div className="flex justify-start sm:justify-center gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar px-1">

//           {["All", "Recorded", "Live"].map((tab, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveTab(tab)}
//               className={`
//                 whitespace-nowrap px-5 py-2 rounded-full 
//                 font-montserrat font-semibold text-sm
//                 ${
//                   activeTab === tab
//                     ? "bg-[var(--orange)] text-white shadow"
//                     : "bg-[var(--gray-light)] text-[var(--gray)]"
//                 }
//               `}
//             >
//               {tab}
//             </button>
//           ))}

//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

//           {filteredPrograms.map((prog) => (
//             <div
//               key={prog.slug}
//               className="
//                 bg-white rounded-2xl 
//                 border border-[var(--gray-border)] 
//                 shadow-sm overflow-hidden 
//                 flex flex-col
//                 hover:shadow-lg transition
//               "
//             >

//               {/* Image */}
//               <div className="h-44 sm:h-48 w-full overflow-hidden">
//                 <Image
//                   src={prog.image}
//                   alt={prog.title}
//                   width={600}
//                   height={350}
//                   className="w-full h-full object-cover hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4 sm:p-6 flex flex-col gap-3 flex-1">

//                 <h3 className="text-base sm:text-lg lg:text-xl font-montserrat font-bold text-[var(--dark)]">
//                   {prog.title}
//                 </h3>

//                 <p className="text-xs sm:text-sm text-[var(--gray)] font-inter leading-relaxed line-clamp-2">
//                   {prog.description}
//                 </p>

//                 <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--gray)] mt-1">
//                   <span className="flex items-center gap-1 sm:gap-2">
//                     <BookOpen size={14} className="text-[var(--dark)]" />
//                     {prog.duration}
//                   </span>

//                   <span className="flex items-center gap-1 sm:gap-2">
//                     <Clock size={14} className="text-[var(--dark)]" />
//                     {prog.mode}
//                   </span>
//                 </div>

//                 {/* Price + Buttons */}
//                 <div className="mt-auto pt-4">

//   {/* <p className="text-base sm:text-lg font-montserrat font-bold text-[var(--dark)] mb-3 sm:mb-4">
//     ₹ {prog.price}
//   </p> */}

//   {/* Buttons responsive */}
//   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">

//   <Link
//     href={prog.link || "#"}
//     className="btn-secondary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
//   >
//     Explore
//   </Link>

//   <Link
//     href={prog.contact || "#"}
//     className="btn-primary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
//   >
//     Enroll Now 
//   </Link>

// </div>

// </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock } from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("All");

  // Get unique categories dynamically from programs data with custom order
  const categories = useMemo(() => {
    const uniqueCategories = new Set();
    
    programs.forEach((program) => {
      if (program.category) {
        uniqueCategories.add(program.category);
      }
    });
    
    // Define the desired order
    const categoryOrder = ["All", "Recorded", "Live"];
    
    // Convert Set to Array and sort according to categoryOrder
    const categoriesArray = Array.from(uniqueCategories);
    
    // Sort categories based on the defined order
    const sortedCategories = categoryOrder.filter(cat => 
      cat === "All" || categoriesArray.includes(cat)
    );
    
    // Add any additional categories that might not be in the predefined order
    const remainingCategories = categoriesArray.filter(
      cat => !categoryOrder.includes(cat)
    );
    
    return [...sortedCategories, ...remainingCategories];
  }, []);

  // Filter programs based on active tab
  const filteredPrograms = useMemo(() => {
    if (activeTab === "All") return programs;
    return programs.filter((prog) => prog.category === activeTab);
  }, [activeTab]);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label mb-3 sm:mb-4 inline-block">
            Transformative Journeys
          </span>

          <h2
            className="font-montserrat font-bold leading-tight text-[var(--dark)]"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
          >
            Coaching Programs{" "}
            <span className="heading">
              Built for Results
            </span>
          </h2>
        </div>

        {/* Dynamic Tabs - Auto updates from data with custom order */}
        <div className="flex justify-start sm:justify-center gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar px-1">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`
                whitespace-nowrap px-5 py-2 rounded-full 
                font-montserrat font-semibold text-sm
                transition-all duration-300
                ${
                  activeTab === category
                    ? "bg-[var(--orange)] text-white shadow-md"
                    : "bg-[var(--gray-light)] text-[var(--gray)] hover:bg-[var(--gray-border)]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* No Programs Message */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--gray)] text-lg">
              No programs found in {activeTab} category.
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredPrograms.map((prog) => (
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
                      href={prog.link || "#"}
                      className="btn-secondary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
                    >
                      Explore
                    </Link>

                    <Link
                      href={prog.contact || "#"}
                      className="btn-primary w-full sm:w-auto flex-1 text-center flex items-center justify-center text-xs sm:text-sm py-2 sm:py-2.5"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}