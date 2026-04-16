"use client";

const logos = [
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=200",
  "https://images.unsplash.com/photo-1612832021030-1d5f45b6f4cb?w=200",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200",
  "https://images.unsplash.com/photo-1581090700227-1e8a4b3b2d1d?w=200",
  "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=200",
];

// duplicate for infinite loop
const loopLogos = [...logos, ...logos];

export default function ClientsSection() {
  return (
    <section className="relative w-full pb-32">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-white font-montserrat font-bold leading-tight
            text-[clamp(1.6rem,4vw,2.8rem)]">
            India’s Best Business Coach who has trained over{" "}
            <span className="gradient-text">4,00,000+</span> Businessmen
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-10" />

        {/* Middle */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <span className="section-label mb-3 inline-flex">
              Our Clients
            </span>

            <h3 className="text-white font-montserrat font-bold
              text-[clamp(1.5rem,3vw,2.2rem)]">
              Brands That We Have Worked With
            </h3>
          </div>

          <p className="text-[var(--gray-light)] font-inter text-sm sm:text-base">
            Our clients include leading brands and ambitious startups across industries.
            Discover our portfolio featuring successful collaborations with industry giants
            and innovative startups.
          </p>
        </div>
      </div>

      {/* 🔥 Floating Logo Strip */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
        
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[var(--gray-border)] py-6 sm:py-8">

            <div className="marquee-wrapper">
              <div className="marquee-track marquee-left-fast gap-4 sm:gap-6 px-4">

                {loopLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="
                      min-w-[140px] sm:min-w-[180px] md:min-w-[220px]
                      h-[80px] sm:h-[100px] md:h-[120px]
                      flex items-center justify-center
                      bg-[var(--off-white)]
                      rounded-xl border border-[var(--gray-border)]
                      overflow-hidden
                    "
                  >
                    <img
                      src={logo}
                      alt="client"
                      className="
                        w-full h-full object-cover
                        grayscale hover:grayscale-0 transition duration-300
                      "
                    />
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}