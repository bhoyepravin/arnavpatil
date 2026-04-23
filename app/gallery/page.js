import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import { galleryItems, coachInfo } from "@/lib/data";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = buildMetadata("gallery");

const categories = ["All", "Events", "Clients", "Media"];

export default function GalleryPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-5 inline-flex">Gallery</span>
          <h1
            className="font-montserrat font-extrabold leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
          >
            Moments of{" "}
            <span className="heading">Transformation</span>
          </h1>
          <p className="text-slate-500 font-inter text-lg">
            A glimpse into the energy, learning, and breakthroughs from Arnav Patil&apos;s masterclasses and coaching sessions.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category filter — static (add interactivity with client component if needed) */}
          {/* <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all font-inter ${
                  cat === "All"
                    ? "bg-[#F97316] text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-[#F97316] hover:text-[#F97316]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {galleryItems.map((item) => (
    <div
      key={item.id}
      className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square bg-white border border-slate-100"
    >
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.caption}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs font-semibold text-orange-300 mb-2 font-inter uppercase tracking-wide inline-block">
            {item.category}
          </span>
          <p className="text-white font-montserrat font-semibold text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

          
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="font-montserrat font-extrabold text-2xl text-[#0F172A] mb-4">
          Follow Arnav on <span className="heading">Instagram for More</span>
        </h2>
        <p className="text-slate-500 font-inter mb-8">
          Stay updated with the latest events, client stories, and business insights.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={coachInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Follow @coacharnavpatil
          </a>
          <a href={coachInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
            <FaWhatsapp size={16} /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
