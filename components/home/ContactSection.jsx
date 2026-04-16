"use client";

export default function ContactSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full h-[260px] sm:h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
              alt="consulting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl border border-[var(--gray-border)] p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <span className="section-label mb-3 inline-flex">
                Contact Us
              </span>

              <h2 className="font-montserrat font-black text-[clamp(1.6rem,3vw,2.4rem)] text-[var(--dark)] leading-tight">
                Request for <span className="gradient-text">Consulting</span>
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4 sm:space-y-5">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray-border)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray-border)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition"
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray-border)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition"
                />

                <select
                  className="w-full px-4 py-3 rounded-lg border border-[var(--gray-border)] bg-[var(--white)] text-[var(--gray)] focus:outline-none focus:border-[var(--orange)] transition"
                >
                  <option>Choose A Service</option>
                  <option>Business Consulting</option>
                  <option>Marketing Strategy</option>
                  <option>Growth Coaching</option>
                  <option>Startup Mentorship</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg border border-[var(--gray-border)] bg-[var(--white)] focus:outline-none focus:border-[var(--orange)] transition resize-none"
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