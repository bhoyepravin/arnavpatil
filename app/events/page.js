// import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
// import { events, coachInfo } from "@/lib/data";
// import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaArrowRight } from "react-icons/fa";
// import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
// import Image from "next/image";

// export const metadata = buildMetadata("events");

// export default function EventsPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Events", href: "/events" },
//   ]);

//   const badgeStyle = {
//     "Flagship Event": "bg-gradient-to-r from-orange-500 to-orange-600 text-white",
//     "Free Event": "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
//     "Premium Event": "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white",
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />

//       {/* Hero Section */}
//       <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-white to-orange-50/30 text-center px-4 sm:px-6">
//         <div className="max-w-3xl mx-auto">
//           <span className="section-label mb-4 sm:mb-5 inline-flex">Events & Masterclasses</span>
//           <h1
//             className="font-montserrat font-extrabold leading-tight mb-4 sm:mb-5"
//             style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#0F172A" }}
//           >
//             Upcoming{" "}
//             <span className="gradient-text">Events</span>
//           </h1>
//           <p className="text-slate-600 text-base sm:text-lg font-inter max-w-2xl mx-auto">
//             Join <span className="font-semibold text-[#F97316]">Arnasoft Solutions</span> live at masterclasses, 
//             workshops, and online webinars — across India and beyond.
//           </p>
//         </div>
//       </section>

//       {/* Events Grid Section - 3 Columns */}
//       <section className="py-16 sm:py-20 bg-gradient-to-b from-orange-50/30 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {events.map((ev, i) => {
//               const dateObj = new Date(ev.date);
//               const day = dateObj.getDate();
//               const month = dateObj.toLocaleDateString("en-IN", { month: "short" });
//               const year = dateObj.getFullYear();
//               const badge = badgeStyle[ev.badge] || "bg-gradient-to-r from-slate-500 to-slate-600 text-white";

//               return (
//                 <div
//                   key={ev.slug}
//                   className="group bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full"
//                 >
//                   {/* Card Header with Image or Gradient */}
//                   <div className="relative h-48 sm:h-52 overflow-hidden">
//                     {ev.image ? (
//                       <>
//                         <Image
//                           src={ev.image}
//                           alt={ev.title}
//                           fill
//                           className="object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                       </>
//                     ) : (
//                       <div 
//                         className="absolute inset-0 bg-gradient-to-br opacity-90"
//                         style={{
//                           background: i % 3 === 0
//                             ? "linear-gradient(135deg, #F97316, #EA580C)"
//                             : i % 3 === 1
//                             ? "linear-gradient(135deg, #10B981, #059669)"
//                             : "linear-gradient(135deg, #0891B2, #0E7490)",
//                         }}
//                       />
//                     )}
                    
//                     {/* Date Badge */}
//                     <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg z-10">
//                       <div className="text-center">
//                         <div className="text-2xl font-extrabold font-montserrat" style={{ color: i % 3 === 0 ? "#F97316" : i % 3 === 1 ? "#10B981" : "#0891B2" }}>
//                           {day}
//                         </div>
//                         <div className="text-xs font-semibold text-slate-600 font-inter uppercase">
//                           {month} {year}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Mode Badge */}
//                     <div className="absolute top-4 right-4 z-10">
//                       <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-slate-700 shadow-sm">
//                         {ev.mode}
//                       </span>
//                     </div>

//                     {/* Event Icon (only if no image) */}
//                     {!ev.image && (
//                       <div className="absolute bottom-4 right-4 text-white/20 text-6xl">
//                         {i % 3 === 0 ? "🎯" : i % 3 === 1 ? "🚀" : "💡"}
//                       </div>
//                     )}
//                   </div>

//                   {/* Card Body */}
//                   <div className="p-5 sm:p-6 flex flex-col flex-1">
//                     {/* Badge and Seats */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${badge} shadow-sm`}>
//                         {ev.badge}
//                       </span>
//                       <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-inter">
//                         {ev.seats}
//                       </span>
//                     </div>

//                     {/* Title */}
//                     <h2 className="font-montserrat font-bold text-lg sm:text-xl text-[#0F172A] mb-2 leading-tight group-hover:text-[#F97316] transition-colors line-clamp-2">
//                       {ev.title}
//                     </h2>

//                     {/* Description */}
//                     <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter mb-4 line-clamp-2">
//                       {ev.description}
//                     </p>

//                     {/* Event Details */}
//                     <div className="space-y-2 mb-4 pt-2 border-t border-slate-100">
//                       <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
//                         <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
//                         <span className="text-xs line-clamp-1">{ev.venue}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
//                         <Clock size={14} className="text-[#0891B2] flex-shrink-0" />
//                         <span className="text-xs">{ev.time}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
//                         <Users size={14} className="text-slate-400 flex-shrink-0" />
//                         <span className="text-xs">{ev.language}</span>
//                       </div>
//                     </div>

//                     {/* Highlights */}
//                     <div className="mb-5 flex-1">
//                       <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 font-inter">
//                         Key Highlights
//                       </h4>
//                       <div className="space-y-1.5">
//                         {ev.highlights?.slice(0, 2).map((h, j) => (
//                           <div key={j} className="flex items-start gap-2">
//                             <CheckCircle2 size={11} className="text-[#F97316] flex-shrink-0 mt-0.5" />
//                             <span className="text-xs text-slate-600 font-inter leading-relaxed line-clamp-1">
//                               {h}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* CTA Button */}
//                     <a
//                       href={coachInfo.whatsapp}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-full btn-primary inline-flex items-center justify-center gap-2 text-sm py-2.5 sm:py-3 group/btn"
//                     >
//                       <FaWhatsapp size={15} />
//                       Register via WhatsApp
//                       <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
//                     </a>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Attend Arnasoft Events Section */}
//       <section className="py-16 sm:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14">
//             <span className="section-label mb-3 sm:mb-4 inline-flex">Why Attend</span>
//             <h2
//               className="font-montserrat font-extrabold leading-tight px-2"
//               style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
//             >
//               What Makes <span className="gradient-text">Arnasoft Events</span> Special?
//             </h2>
//             <p className="text-slate-600 text-sm sm:text-base font-inter mt-3 max-w-2xl mx-auto">
//               Experience world-class learning and networking opportunities
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//             {[
//               {
//                 icon: "🎤",
//                 title: "Expert Speakers",
//                 desc: "Learn from industry leaders and successful entrepreneurs"
//               },
//               {
//                 icon: "🤝",
//                 title: "Networking",
//                 desc: "Connect with like-minded professionals and business owners"
//               },
//               {
//                 icon: "💼",
//                 title: "Actionable Insights",
//                 desc: "Take home strategies you can implement immediately"
//               },
//               {
//                 icon: "🏆",
//                 title: "Certification",
//                 desc: "Receive participation certificates and learning materials"
//               }
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
//                 <h3 className="font-montserrat font-bold text-[#0F172A] text-sm sm:text-base mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-500 text-xs sm:text-sm font-inter leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Brand Showcase */}
//       <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-50 to-teal-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm mb-6">
//             <span className="text-xs sm:text-sm font-semibold text-[#F97316]">Powered by Excellence</span>
//           </div>
//           <h3 className="font-montserrat font-black text-2xl sm:text-3xl md:text-4xl text-[#0F172A] mb-3">
//             Arnasoft <span className="gradient-text">Solutions</span>
//           </h3>
//           <p className="text-slate-600 text-sm sm:text-base font-inter max-w-2xl mx-auto">
//             Creating transformative experiences through world-class events and coaching
//           </p>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 sm:py-20 bg-orange-50 text-center px-4 sm:px-6">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#0F172A] mb-3 sm:mb-4">
//             Want a Private Session or Corporate Training?
//           </h2>
//           <p className="text-slate-600 text-sm sm:text-base font-inter mb-6 sm:mb-8 max-w-xl mx-auto px-4">
//             Contact Arnav Sir directly for customised workshops, corporate training, or keynote sessions.
//           </p>
//           <a 
//             href={coachInfo.whatsapp} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8"
//           >
//             <FaWhatsapp size={17} className="mr-2" /> Get in Touch
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }

import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { events, coachInfo } from "@/lib/data";
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaUsers, FaArrowRight, FaChalkboardTeacher, FaHandshake, FaLightbulb, FaTrophy } from "react-icons/fa";
import { Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = buildMetadata("events");

export default function EventsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
  ]);

  const badgeStyle = {
    "Flagship Event": "bg-gradient-to-r from-orange-500 to-orange-600 text-white",
    "Free Event": "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
    "Premium Event": "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white",
  };

  // Filter events based on current date
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  // Function to get image URL or return null
  const getEventImage = (ev) => {
    if (ev.image) return ev.image;
    // You can add default images based on event type
    if (ev.badge === "Flagship Event") return "/images/events/flagship-default.jpg";
    if (ev.badge === "Free Event") return "/images/events/webinar-default.jpg";
    return null;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-white to-orange-50/30 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 sm:mb-5 inline-flex">Events & Masterclasses</span>
          <h1
            className="heading-xl font-montserrat font-extrabold leading-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#0F172A" }}
          >
            Upcoming{" "}
            <span className="heading">& Past Events</span>
          </h1>
          <p className="text-gray-800 text-xs sm:text-lg font-medium max-w-2xl mx-auto">
            Join <span className="font-semibold text-[#F97316]">Arnasoft Solutions</span> live at masterclasses, 
            workshops, and online webinars — across India and beyond.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 sm:py-2 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className=" font-montserrat font-extrabold text-2xl sm:text-4xl text-[#0F172A] mb-2">
              Upcoming Events 
            </h2>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingEvents.map((ev, i) => {
                const dateObj = new Date(ev.date);
                const day = dateObj.getDate();
                const month = dateObj.toLocaleDateString("en-IN", { month: "short" });
                const year = dateObj.getFullYear();
                const badge = badgeStyle[ev.badge] || "bg-gradient-to-r from-slate-500 to-slate-600 text-white";
                const eventImage = getEventImage(ev);

                return (
                  <div
                    key={ev.slug}
                    className="group bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full"
                  >
                    {/* Card Header with Image or Gradient */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      {eventImage ? (
                        <>
                          <Image
                            src={eventImage}
                            alt={ev.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                        </>
                      ) : (
                        <div 
                          className="absolute inset-0 bg-gradient-to-br opacity-90"
                          style={{
                            background: i % 3 === 0
                              ? "linear-gradient(135deg, #F97316, #EA580C)"
                              : i % 3 === 1
                              ? "linear-gradient(135deg, #10B981, #059669)"
                              : "linear-gradient(135deg, #0891B2, #0E7490)",
                          }}
                        />
                      )}
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg z-10">
                        <div className="text-center">
                          <div className="text-2xl font-extrabold font-montserrat" style={{ color: i % 3 === 0 ? "#F97316" : i % 3 === 1 ? "#10B981" : "#0891B2" }}>
                            {day}
                          </div>
                          <div className="text-xs font-semibold text-slate-600 font-inter uppercase">
                            {month} {year}
                          </div>
                        </div>
                      </div>

                      {/* Mode Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-slate-700 shadow-sm">
                          {ev.mode}
                        </span>
                      </div>

                      {/* Event Icon (only if no image) */}
                      {!eventImage && (
                        <div className="absolute bottom-4 right-4 text-white/20 text-6xl">
                          {i % 3 === 0 ? "🎯" : i % 3 === 1 ? "🚀" : "💡"}
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      {/* Badge and Seats */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${badge} shadow-sm`}>
                          {ev.badge}
                        </span>
                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-inter">
                          {ev.seats}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-montserrat font-bold text-lg sm:text-xl text-[#0F172A] mb-2 leading-tight group-hover:text-[#F97316] transition-colors line-clamp-2">
                        {ev.title}
                      </h2>

                      {/* Description */}
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter mb-4 line-clamp-2">
                        {ev.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4 pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                          <FaMapMarkerAlt size={14} className="text-[#F97316] flex-shrink-0" />
                          <span className="text-xs line-clamp-1">{ev.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                          <FaClock size={14} className="text-[#0891B2] flex-shrink-0" />
                          <span className="text-xs">{ev.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                          <FaUsers size={14} className="text-slate-400 flex-shrink-0" />
                          <span className="text-xs">{ev.language}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-5 flex-1">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 font-inter">
                          Key Highlights
                        </h4>
                        <div className="space-y-1.5">
                          {ev.highlights?.slice(0, 3).map((h, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <CheckCircle2 size={11} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-600 font-inter leading-relaxed line-clamp-1">
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={coachInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-primary inline-flex items-center justify-center gap-2 text-sm py-2.5 sm:py-3 group/btn"
                      >
                        <FaWhatsapp size={15} />
                        Register via WhatsApp
                        <FaArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center">
              <h3 className="font-montserrat font-bold text-xl text-[#0F172A]">
                Coming Soon...
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-16 sm:py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <span className="section-label mb-3 sm:mb-4 inline-flex">Past Events</span>
              <h2 className=" font-extrabold text-2xl sm:text-4xl text-[#0F172A] mb-2">
                Past Events
              </h2>
              <p className="text-gray-800 text-xs sm:text-base font-medium">
                Glimpses of our transformative events
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastEvents.map((ev, i) => {
                const dateObj = new Date(ev.date);
                const day = dateObj.getDate();
                const month = dateObj.toLocaleDateString("en-IN", { month: "short" });
                const year = dateObj.getFullYear();
                const eventImage = getEventImage(ev);

                return (
                  <div
                    key={ev.slug}
                    className="group bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full opacity-90"
                  >
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      {eventImage ? (
                        <>
                          <Image
                            src={eventImage}
                            alt={ev.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110 "
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                      )}
                      
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg z-10">
                        <div className="text-center">
                          <div className="heading text-2xl font-extrabold font-montserrat text-gray-600">
                            {day}
                          </div>
                          <div className="heading text-xs font-semibold text-slate-600 font-inter uppercase">
                            {month} {year}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h2 className="font-montserrat font-bold text-lg sm:text-xl text-[#0F172A] mb-2 leading-tight">
                        {ev.title}
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-inter mb-4 line-clamp-2">
                        {ev.description}
                      </p>
                      
                      <div className="space-y-2 mb-4 pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                          <FaMapMarkerAlt size={14} className="text-[#F97316] flex-shrink-0" />
                          <span className="text-xs line-clamp-1">{ev.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                          <FaClock size={14} className="text-[#0891B2] flex-shrink-0" />
                          <span className="text-xs">{ev.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why Attend Arnasoft Events Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label mb-3 sm:mb-4 inline-flex">Why Attend</span>
            <h2
              className="heading-xl font-montserrat font-extrabold leading-tight px-2"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#0F172A" }}
            >
              What Makes <span className="heading">Arnasoft Events</span> Special?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-inter mt-3 max-w-2xl mx-auto">
              Experience world-class learning and networking opportunities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                icon: FaChalkboardTeacher,
                title: "Expert Guidance ",
                desc: "Learn the proven systems implemented by the successful entrepreneurs in the industry from Armav sir."
              },
              {
                icon: FaHandshake,
                title: "Networking",
                desc: "Connect with like-minded professionals and business owners"
              },
              {
                icon: FaLightbulb,
                title: "Actionable Insights",
                desc: "Take home strategies you can implement immediately"
              },
              {
                icon: FaTrophy,
                title: "Rewards and Achievements",
                desc: "Receive amazing rewards and certifications for your work and effort throughout the program"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <item.icon size={28} className="text-[#F97316]" />
                </div>
                <h3 className="font-montserrat font-bold text-[#0F172A] text-sm sm:text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-inter leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      {/* <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm mb-6">
            <span className="text-xs sm:text-sm font-semibold text-[#F97316]">Powered by Excellence</span>
          </div>
          <h3 className="heading-xl font-montserrat font-black text-2xl sm:text-3xl md:text-4xl text-[#0F172A] mb-3">
            Arnasoft <span className="heading">Solutions</span>
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-inter max-w-2xl mx-auto">
            Creating transformative experiences through world-class events and coaching
          </p>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-orange-50 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-xl font-montserrat font-extrabold text-2xl sm:text-3xl md:text-3xl text-[#0F172A] mb-3 sm:mb-4">
            Want a Private Session or <span className="heading">Corporate Training?</span>  
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-inter mb-6 sm:mb-8 max-w-xl mx-auto px-4">
            Contact Arnav Sir directly for customised workshops, corporate training, or keynote sessions.
          </p>
          <a 
            href={coachInfo.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8"
          >
            <FaWhatsapp size={17} className="mr-2" /> Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}