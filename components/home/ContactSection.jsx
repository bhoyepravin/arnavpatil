"use client";

export default function ContactSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--off-white)] pt-[-10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full h-[260px] sm:h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/contactus/contact_us_page.webp"
              alt="consulting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl border border-orange-400 p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <span className="section-label mb-3 inline-flex">
                Contact Us
              </span>

              <h2 className="heading-xl font-montserrat font-black text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--dark)] leading-tight">
                Request for <span className="heading font-bold">Consulting</span>
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4 sm:space-y-5">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition"
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition"
                />

                <div className="relative w-full">
    <select
      className="block w-full px-4 py-3 rounded-lg border border-[var(--gray)] bg-[var(--white)]
                 text-[var(--gray)] focus:outline-none focus:border-[var(--orange)] transition
                 relative z-[60] appearance-none"
      defaultValue=""
    >
      <option value="" disabled>
        Select a service for consultation
      </option>

      <option>Physical Business Training</option>
      <option>Online Business Training</option>
      <option>One-to-One Business Consultation</option>
      <option>Online One-to-One Business Consultation</option>
    </select>

    {/* Custom Dropdown Arrow */}
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
      ▼
    </span>
  </div>
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg border border-[var(--gray)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition resize-none"
              />

              {/* Submit */}
              <button type="submit" className="btn-primary w-full justify-center">
                Submit Now
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}