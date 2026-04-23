// "use client";

// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     video: "https://www.youtube.com/embed/oSzMps4GhcQ",
//   },
//   {
//     id: 2,
//     video: "https://www.youtube.com/embed/_YszSMpla3s",
//   },
//   {
//     id: 3,
//     video: "https://www.youtube.com/embed/RUt9ZFntWq4",
//   },
// ];

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section
//   className="w-full py-16 sm:py-20 lg:py-28 border-t border-[var(--orange-light)]"
//   style={{
//     background: "#9874B5"
//   //   background:
//   //     "linear-gradient(180deg, var(--orange-pale) 0%, var(--white) 60%)",
//   }}
// >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div className="text-center lg:text-left">
//           <h2 className="font-montserrat font-bold leading-tight text-[clamp(1.8rem,5vw,3rem)] text-[var(--dark)]">
//             Our <span className="gradient-text">Testimonials</span>
//           </h2>

//           <p className="text-[var(--gray)] font-inter text-base sm:text-lg mt-3 sm:mt-4">
//             Stories of Impact
//           </p>
//         </div>

//         {/* RIGHT VIDEO */}
//         <div className="relative w-full flex justify-center">

//           {/* Glow effect */}
//           <div className="absolute w-full max-w-2xl h-full bg-[var(--orange-pale)] blur-2xl opacity-40 rounded-3xl" />

//           {/* Video Card */}
//           <iframe
//   key={testimonials[current].id}
//   src={testimonials[current].video}
//   className="
//     relative z-10
//     w-full 
//     max-w-xl 
//     sm:max-w-2xl 
//     h-[220px] 
//     sm:h-[320px] 
//     md:h-[420px] 
//     lg:h-[500px] 
//     rounded-2xl sm:rounded-3xl 
//     shadow-[0_20px_60px_rgba(0,0,0,0.15)]
//     border border-[var(--gray-border)]
//     bg-black
//   "
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// />

//           {/* Arrows */}
//           <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-20">

//             <button
//               onClick={prevSlide}
//               className="
//                 bg-white/90 backdrop-blur
//                 text-[var(--dark)]
//                 w-9 h-9 sm:w-11 sm:h-11
//                 flex items-center justify-center
//                 rounded-full shadow-lg
//                 border border-[var(--gray-border)]
//                 hover:bg-[var(--orange-pale)]
//                 hover:scale-110
//                 transition
//               "
//             >
//               <ArrowLeft size={18} />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="
//                 bg-white/90 backdrop-blur
//                 text-[var(--dark)]
//                 w-9 h-9 sm:w-11 sm:h-11
//                 flex items-center justify-center
//                 rounded-full shadow-lg
//                 border border-[var(--gray-border)]
//                 hover:bg-[var(--orange-pale)]
//                 hover:scale-110
//                 transition
//               "
//             >
//               <ArrowRight size={18} />
//             </button>
//           </div>

//           {/* Dots Indicator */}
//           <div className="absolute bottom-4 flex gap-2 z-20">
//             {testimonials.map((_, i) => (
//               <div
//                 key={i}
//                 className={`h-2 rounded-full transition-all ${
//                   i === current
//                     ? "w-6 bg-[var(--orange)]"
//                     : "w-2 bg-[var(--gray-border)]"
//                 }`}
//               />
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    video: "/testimonials/miss_divya_chaudhari.mp4",
  },
  {
    id: 2,
    video: "/testimonials/mr_rahul_dindorkar.mp4",     
  },
  {
    id: 3,
    video: "/testimonials/mr_avinash_kharote.mp4",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20" style={{ background: "#480A62" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold tracking-wider mb-4">
            Client Stories
          </span>
          
          <h2 className="font-montserrat font-bold leading-tight text-[clamp(1.6rem,4vw,2.5rem)] text-white">
  Our <span className="heading">Testimonials</span>
</h2>

          <p className="text-white/80 font-medium text-sm sm:text-base mt-3 leading-relaxed">
            Real transformations, real results. Watch success stories from business owners who have worked with Mr. Arnav Patil.
          </p> 

          {/* Optional: Add a small stat or quote */}
          <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-white/70 text-xs sm:text-sm">1000+ Success Stories</p>
          </div>
        </div>

        {/* RIGHT VIDEO - REEL SIZE (DECREASED HEIGHT) */}
        <div className="relative w-full flex justify-center">

          {/* Decorative glow effect */}
          <div className="absolute w-[260px] sm:w-[280px] md:w-[300px] h-[460px] sm:h-[480px] md:h-[520px] bg-[var(--orange)] blur-3xl opacity-20 rounded-3xl" />
          
          <div className="absolute w-[240px] sm:w-[260px] md:w-[280px] h-[420px] sm:h-[440px] md:h-[480px] bg-white/5 blur-xl rounded-2xl" />

          {/* Phone frame effect for reel */}
          <div className="relative z-10 p-2 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 shadow-2xl">
            <iframe
              key={testimonials[current].id}
              src={testimonials[current].video}
              className="
                w-[240px] 
                sm:w-[260px] 
                md:w-[300px] 
                h-[420px] 
                sm:h-[440px] 
                md:h-[550px]
                rounded-2xl 
                shadow-2xl
                bg-black
              "
              style={{ aspectRatio: "9/16" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4
              bg-white/20 backdrop-blur-md
              text-white
              w-7 h-7 sm:w-8 sm:h-8
              flex items-center justify-center
              rounded-full shadow-lg
              border border-white/30
              hover:bg-[var(--orange)]
              hover:scale-110
              transition-all duration-300
              z-20
            "
          >
            <ArrowLeft size={14} />
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4
              bg-white/20 backdrop-blur-md
              text-white
              w-7 h-7 sm:w-8 sm:h-8
              flex items-center justify-center
              rounded-full shadow-lg
              border border-white/30
              hover:bg-[var(--orange)]
              hover:scale-110
              transition-all duration-300
              z-20
            "
          >
            <ArrowRight size={14} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-5 h-1.5 bg-[var(--orange)]"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}