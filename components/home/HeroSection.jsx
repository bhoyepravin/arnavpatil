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


// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

// // Dynamic slider data - only title and subtitle
// const sliderData = [
//   {
//     id: 1,
//   image: "/herosection/arnav_patil_sir_01.webp",
//   mobileImage: "/herosection/arnav_patil_sir_01.webp",
//   tag: "Business Transformation",
//   title: "Transform Yourself",
//   highlight: "INTO A TRUE CEO",
//   subtitle: "Achieve The Freedom For Which You Actually Started The Business",
//   time: "Time: 10:00 AM – 01:00 PM | Sunday, 26 April 2026"
//   },
//   {
//     id: 2,
//     image: "/herosection/arnav_patil_sir_02.webp",
//     mobileImage: "/herosection/arnav_patil_sir_02.webp",
//     tag: "Business Growth",
//     title: "Scale Your Business",
//     highlight: "TO NEW HEIGHTS",
//     subtitle: "Implement proven systems to grow faster and smarter",
//     time: "Limited Seats Available"
//   },
//   {
//     id: 3,
//     image: "/herosection/arnav_patil_sir_03.webp",
//     mobileImage: "/herosection/arnav_patil_sir_03.webp",
//     tag: "Leadership",
//     title: "Become The Leader",
//     highlight: "YOU WERE MEANT TO BE",
//     subtitle: "Develop leadership mindset and decision-making power",
//     time: "Join Our Next Workshop"
//   },
//   {
//     id: 4,
//     image: "/herosection/arnav_patil_sir_04.webp",
//     mobileImage: "/herosection/arnav_patil_sir_04.webp",
//     tag: "Global Vision",
//     title: "Strategic Growth",
//     highlight: "GLOBAL SUCCESS",
//     subtitle: "Expand your business with strong systems and strategy",
//     time: "Start Your Journey Today"
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
//     }, 2000);
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
//                 className="object-fit"
//                 unoptimized
//               />
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Dark Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

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
//         {/* Content - Left Side */}
// <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

//   {/* Shadow Background */}
//   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent blur-2xl" />

//       <div className="max-w-xl relative text-white space-y-1 font-montserrat">

//   {/* Tag */}
//   {slide.tag && (
//     <motion.span
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="section-label mb-2"
//     >
//       {slide.tag}
//     </motion.span>
//   )}

//   {/* Title */}
//   <motion.h1
//     initial={{ opacity: 0, y: 25 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: 0.1 }}
//     className="font-medium leading-tight"
//     style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
//   >
//     {slide.title}
//   </motion.h1>

//   {/* Highlight */}
//   {slide.highlight && (
//     <motion.h1
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.15 }}
//       className="font-bold tracking-wide mb-2"
//       style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
//     >
//       {slide.highlight}
//     </motion.h1>
//   )}

//   {/* Subtitle */}
//   <motion.p
//     initial={{ opacity: 0, y: 25 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: 0.2 }}
//     className="text-white/90 leading-snug mb-2"
//     style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
//   >
//     {slide.subtitle}
//   </motion.p>

//   {/* Time */}
//   {slide.time && (
//     <motion.p
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.25 }}
//       className="font-semibold mb-4"
//       style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
//     >
//       {slide.time}
//     </motion.p>
//   )}

//   {/* Buttons */}
//   <motion.div
//     initial={{ opacity: 0, y: 15 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.3 }}
//     className="flex flex-wrap gap-3"
//   >
//     <button className="btn-primary text-sm px-5 py-2.5">
//       Access Now
//     </button>

//     <button className="btn-white text-sm px-5 py-2.5">
//       Explore All Courses
//     </button>
//   </motion.div>

// </div>
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

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

// // Dynamic slider data - only title and subtitle
// const sliderData = [
//   {
//     id: 1,
//     image: "/herosection/arnav_patil_sir_01.webp",
//     mobileImage: "/herosection/arnav_patil_sir_01.webp",
//     tag: "Business Transformation",
//     title: "Transform Yourself",
//     highlight: "INTO A TRUE CEO",
//     subtitle: "Achieve The Freedom For Which You Actually Started The Business",
//     time: "Time: 10:00 AM – 01:00 PM | Sunday, 26 April 2026"
//   },
//   {
//     id: 2,
//     image: "/herosection/arnav_patil_sir_02.webp",
//     mobileImage: "/herosection/arnav_patil_sir_02.webp",
//     tag: "Business Growth",
//     title: "Scale Your Business",
//     highlight: "TO NEW HEIGHTS",
//     subtitle: "Implement proven systems to grow faster and smarter",
//     time: "Limited Seats Available"
//   },
//   {
//     id: 3,
//     image: "/herosection/arnav_patil_sir_03.webp",
//     mobileImage: "/herosection/arnav_patil_sir_03.webp",
//     tag: "Leadership",
//     title: "Become The Leader",
//     highlight: "YOU WERE MEANT TO BE",
//     subtitle: "Develop leadership mindset and decision-making power",
//     time: "Join Our Next Workshop"
//   },
//   {
//     id: 4,
//     image: "/herosection/arnav_patil_sir_04.webp",
//     mobileImage: "/herosection/arnav_patil_sir_04.webp",
//     tag: "Global Vision",
//     title: "Strategic Growth",
//     highlight: "GLOBAL SUCCESS",
//     subtitle: "Expand your business with strong systems and strategy",
//     time: "Start Your Journey Today"
//   }
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [imagesPreloaded, setImagesPreloaded] = useState(false);

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

//   // Preload all images to prevent white screen
//   useEffect(() => {
//     const preloadImages = async () => {
//       const imageUrls = sliderData.flatMap(item => [
//         item.image,
//         item.mobileImage
//       ]).filter(Boolean);
      
//       const loadPromises = imageUrls.map((url) => {
//         return new Promise((resolve) => {
//           const img = new window.Image();
//           img.onload = resolve;
//           img.onerror = resolve;
//           img.src = url;
//         });
//       });
      
//       await Promise.all(loadPromises);
//       setImagesPreloaded(true);
//     };
    
//     preloadImages();
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

//   // Auto-slide every 4 seconds (faster)
//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000); // Changed from 6000 to 4000 for faster sliding
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
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0
//     })
//   };

//   // Don't render until images are preloaded to prevent white screen
//   if (!imagesPreloaded) {
//     return (
//       <div className="relative w-full min-h-screen flex items-center justify-center bg-black">
//         <div className="text-white">Loading...</div>
//       </div>
//     );
//   }

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
//               x: { duration: 0.6, ease: "easeInOut" },
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
//                 className="object-fit"
//                 unoptimized
//               />
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Dark Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

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
//           {/* Shadow Background */}
//           <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent blur-2xl" />

//           <div className="max-w-xl relative text-white space-y-1 font-montserrat">
//             {/* Tag */}
//             {slide.tag && (
//               <motion.span
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="section-label mb-2"
//               >
//                 {slide.tag}
//               </motion.span>
//             )}

//             {/* Title */}
//             <motion.h1
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="font-medium leading-tight"
//               style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
//             >
//               {slide.title}
//             </motion.h1>

//             {/* Highlight */}
//             {slide.highlight && (
//               <motion.h1
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.15 }}
//                 className="font-bold tracking-wide mb-2"
//                 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
//               >
//                 {slide.highlight}
//               </motion.h1>
//             )}

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-white/90 leading-snug mb-2"
//               style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
//             >
//               {slide.subtitle}
//             </motion.p>

//             {/* Time */}
//             {slide.time && (
//               <motion.p
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.25 }}
//                 className="font-semibold mb-4"
//                 style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
//               >
//                 {slide.time}
//               </motion.p>
//             )}

//             {/* Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-wrap gap-3"
//             >
//               <button className="btn-primary text-sm px-5 py-2.5">
//                 Access Now
//               </button>

//               <button className="btn-white text-sm px-5 py-2.5">
//                 Explore All Courses
//               </button>
//             </motion.div>
//           </div>
//         </div>

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
    image: "/herosection/hero_img_arnav_patil_1_sir.webp",
    mobileImage: "/herosection/hero_img_arnav_patil_1_sir.webp",
    tag: "Business Transformation",
    title: "Transform Yourself",
    highlight: "INTO A TRUE CEO",
    subtitle: "Achieve The Freedom For Which You Actually Started The Business",
    time: "Time: 10:00 AM – 01:00 PM | Sunday, 26 April 2026"
  },
  {
    id: 2,
    image: "/herosection/hero_img_arnav_patil_2_sir.webp",
    mobileImage: "/herosection/hero_img_arnav_patil_2_sir.webp",
    tag: "Business Growth",
    title: "Scale Your Business",
    highlight: "TO NEW HEIGHTS",
    subtitle: "Implement proven systems to grow faster and smarter",
    time: "Limited Seats Available"
  },
  {
    id: 3,
    image: "/herosection/hero_img_arnav_patil_3_sir.webp",
    mobileImage: "/herosection/hero_img_arnav_patil_3_sir.webp",
    tag: "Leadership",
    title: "Become The Leader",
    highlight: "YOU WERE MEANT TO BE",
    subtitle: "Develop leadership mindset and decision-making power",
    time: "Join Our Next Workshop"
  },
  {
    id: 4,
    image: "/herosection/hero_img_arnav_patil_4_sir.webp",
    mobileImage: "/herosection/hero_img_arnav_patil_4_sir.webp",
    tag: "Global Vision",
    title: "Strategic Growth",
    highlight: "GLOBAL SUCCESS",
    subtitle: "Expand your business with strong systems and strategy",
    time: "Start Your Journey Today"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

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

  // Preload all images
  useEffect(() => {
    sliderData.forEach((item) => {
      const desktopImg = new window.Image();
      desktopImg.src = item.image;
      if (item.mobileImage) {
        const mobileImg = new window.Image();
        mobileImg.src = item.mobileImage;
      }
    });
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

  // Auto-slide every 3 seconds (even faster)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Changed to 3 seconds for faster slides
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Get image based on device
  const getImageUrl = (item) => {
    if (isMobile && item.mobileImage) {
      return item.mobileImage;
    }
    return item.image;
  };

  // FAST transition variants - no slow animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
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
        {/* Background Image with FAST Zoom Effect */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.35, ease: "easeOut" }, // FAST: 0.35 seconds
              opacity: { duration: 0.2 } // VERY FAST fade
            }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Shadow Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent blur-2xl" />

          <div className="max-w-xl relative text-white space-y-1 font-montserrat">
            {/* Tag - FASTER animation */}
            {slide.tag && (
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="section-label mb-2"
              >
                {slide.tag}
              </motion.span>
            )}

            {/* Title - FASTER animation */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="font-medium leading-tight"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
            >
              {slide.title}
            </motion.h1>

            {/* Highlight - FASTER animation */}
            {slide.highlight && (
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.08 }}
                className="font-bold tracking-wide mb-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                {slide.highlight}
              </motion.h1>
            )}

            {/* Subtitle - FASTER animation */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              className="text-white/90 leading-snug mb-2"
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
            >
              {slide.subtitle}
            </motion.p>

            {/* Time - FASTER animation */}
            {slide.time && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.12 }}
                className="font-semibold mb-4"
                style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
              >
                {slide.time}
              </motion.p>
            )}

            {/* Buttons - FASTER animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <button className="btn-primary text-sm px-5 py-2.5">
                Access Now
              </button>

              <button className="btn-white text-sm px-5 py-2.5">
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
          transition={{ delay: 0.5, duration: 0.5 }}
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