// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

// // Dynamic slider data - only title and subtitle
// const sliderData = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format",
//     mobileImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format",
//     title: "Transform Your Business",
//     subtitle: "Transform Your Life"
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format",
//     mobileImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format",
//     title: "Scale Your Business",
//     subtitle: "To New Heights"
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format",
//     mobileImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format",
//     title: "Become The Leader",
//     subtitle: "You Were Meant To Be"
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format",
//     mobileImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format",
//     title: "Strategic Growth",
//     subtitle: "Global Success"
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const slide = sliderData[currentSlide];

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
//   };

//   const selectSlide = (index) => {
//     if (index !== currentSlide) {
//       setDirection(index > currentSlide ? 1 : -1);
//       setCurrentSlide(index);
//     }
//   };

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, currentSlide]);

//   // Get image based on device
//   const getImageUrl = (item) => {
//     if (isMobile && item.mobileImage) {
//       return item.mobileImage;
//     }
//     return item.image;
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   return (
//     <div className="relative w-full">
//       {/* Hero Section */}
//       <div
//         className="relative w-full min-h-screen flex items-center justify-start text-white overflow-hidden"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         {/* Background Image with Zoom Effect */}
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={slide.id}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.4 }
//             }}
//             className="absolute inset-0"
//           >
//             <motion.div
//               className="absolute inset-0"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.15 }}
//               transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
//             >
//               <Image
//                 src={getImageUrl(slide)}
//                 alt={slide.title}
//                 fill
//                 priority
//                 className="object-cover"
//                 unoptimized
//               />
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Dark Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//         {/* Navigation Arrows */}
//         {sliderData.length > 1 && (
//           <>
//             <button 
//               onClick={prevSlide} 
//               className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
//             >
//               <ChevronLeft size={28} />
//             </button>
//             <button 
//               onClick={nextSlide} 
//               className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
//             >
//               <ChevronRight size={28} />
//             </button>
//           </>
//         )}

//         {/* Content - Left Side */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
  
//   {/* Shadow Background */}
//   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent blur-2xl" />

//   <div className="max-w-2xl relative">
    
//     <motion.h1
//       key={`title-${slide.id}`}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//       className="text-white font-bold leading-[1.2] mb-4"
//       style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
//     >
//       {slide.title}
//     </motion.h1>

//     <motion.h2
//       key={`subtitle-${slide.id}`}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//       className="text-white/80 font-medium"
//       style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
//     >
//       {slide.subtitle}
//     </motion.h2>

//   </div>
// </div>

        

//         {/* Dots Indicator */}
//         {sliderData.length > 1 && (
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//             {sliderData.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => selectSlide(idx)}
//                 className={`transition-all duration-300 rounded-full ${
//                   currentSlide === idx
//                     ? "w-8 h-1.5 bg-white"
//                     : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
//                 }`}
//               />
//             ))}
//           </div>
//         )}

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20"
//         >
//           <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
//           <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-2 bg-white rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Dynamic slider data - only title and subtitle
const sliderData = [
  {
    id: 1,
    image: "/herosection/arnav_patil_sir_01.webp",
    mobileImage: "/herosection/arnav_patil_sir_01.webp",
    title: "Transform Your Business",
    subtitle: "Transform Your Life"
  },
  {
    id: 2,
    image: "/herosection/arnav_patil_sir_02.webp",
    mobileImage: "/herosection/arnav_patil_sir_02.webp",
    title: "Scale Your Business",
    subtitle: "To New Heights"
  },
  {
    id: 3,
    image: "/herosection/arnav_patil_sir_03.webp",
    mobileImage: "/herosection/arnav_patil_sir_03.webp",
    title: "Become The Leader",
    subtitle: "You Were Meant To Be"
  },
  {
    id: 4,
    image: "/herosection/arnav_patil_sir_04.webp",
    mobileImage: "/herosection/arnav_patil_sir_04.webp",
    title: "Strategic Growth",
    subtitle: "Global Success"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const slide = sliderData[currentSlide];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const selectSlide = (index) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Get image based on device
  const getImageUrl = (item) => {
    if (isMobile && item.mobileImage) {
      return item.mobileImage;
    }
    return item.image;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex items-center justify-start text-white overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Image with Zoom Effect */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            >
              <Image
                src={getImageUrl(slide)}
                alt={slide.title}
                fill
                priority
                className="object-fit"
                unoptimized
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Navigation Arrows */}
        {sliderData.length > 1 && (
          <>
            <button 
              onClick={prevSlide} 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        {/* Content - Left Side */}
        {/* Content - Left Side */}
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

  {/* Shadow Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent blur-2xl" />

  <div className="max-w-2xl relative">

    <motion.h1
      key={`title-${slide.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-white font-bold leading-[1.2] mb-4"
      style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
    >
      {slide.title}
    </motion.h1>

    <motion.h2
      key={`subtitle-${slide.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-white/80 font-medium mb-8"
      style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
    >
      {slide.subtitle}
    </motion.h2>

    {/* ⭐ CTA BUTTONS ADDED HERE ⭐ */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="flex flex-wrap gap-4"
    >
      {/* Primary Button */}
      <button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition">
        Access Now
      </button>  

      {/* Secondary Button */}
      <button className="px-6 py-3 bg-white/90 hover:bg-white text-black font-semibold rounded-lg shadow-md transition">
        Explore All Courses
      </button>
    </motion.div>

  </div>
</div>

        

        {/* Dots Indicator */}
        {sliderData.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {sliderData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? "w-8 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20"
        >
          <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}