// ─── Site-wide SEO ────────────────────────────────────────────────────────────
export const siteSEO = {
  siteName: "Arnav Patil — Business Coach",
  shortName: "Arnav Patil",
  defaultTitle: "Arnav Patil | International Business Coach & Strategist",
  defaultDescription:
    "Mr. Arnav Patil — International Business Coach, Strategist & Keynote Speaker. 1000+ coaching clients, 10+ years experience, 5 countries. Specialising in jewellery business automation and scaling.",
  tagline: "Transform Your Business. Transform Your Life.",
  baseUrl: "https://www.coacharnavpatil.com",
  defaultImage: "/og-arnav-patil.jpg",
  locale: "en_IN",
  email: "arnav1721@gmail.com",
  phone: "+917972051204",
  whatsapp: "https://wa.me/917972051204",
  instagram: "https://www.instagram.com/coacharnavpatil",
  coach: "Arnav Patil",
  company: "Arnav Patil & Co.",
  foundingYear: "2015",
  gaMeasurementId: "G-XXXXXXXXXX",
};

// ─── Page SEO ─────────────────────────────────────────────────────────────────
export const pageSEO = {
  home: {
    title: "Arnav Patil | International Business Coach & Jewellery Business Expert India",
    description:
      "Mr. Arnav Patil — India's leading Business Coach for Jewellers. 1000+ clients, 10+ years experience, 5 countries. Transform your business with proven strategies.",
    keywords:
      "business coach india, jewellery business coach, arnav patil, jewellers masterclass, business scaling, vyapari to CEO, business coach nashik, jewellery business automation",
    canonical: "/",
  },
  about: {
    title: "About Arnav Patil | International Business Coach & Strategist",
    description:
      "Meet Mr. Arnav Patil — International Business Coach, Strategist, and Keynote Speaker. Learn his journey and how he's transformed 1000+ businesses across 5 countries.",
    keywords:
      "arnav patil biography, about arnav patil, business coach profile, jewellery business expert india",
    canonical: "/about",
  },
  programs: {
    title: "Programs | Business Coaching Programmes | Arnav Patil",
    description:
      "Explore all coaching programmes by Arnav Patil: Jewellers Masterclass, Business Scaling Program, Leadership Mastery, Women Entrepreneurs. Join 1000+ transformed businesses.",
    keywords:
      "arnav patil programs, jewellers masterclass, business scaling program, leadership training india, women entrepreneurs programme",
    canonical: "/programs",
  },
  events: {
    title: "Events & Masterclasses | Arnav Patil | Business Coach India",
    description:
      "Upcoming events, masterclasses, and webinars by Arnav Patil. Register now for the Jewellers Masterclass, Business Growth Webinar, and Leadership Summit.",
    keywords:
      "arnav patil events, jewellers masterclass dates, business masterclass india, business coaching webinar",
    canonical: "/events",
  },
  gallery: {
    title: "Gallery | Events & Client Moments | Arnav Patil",
    description:
      "Photos from Arnav Patil's masterclasses, events, and client transformations across India. See the energy, learning, and breakthroughs from 1000+ coaching sessions.",
    keywords: "arnav patil gallery, coaching events photos, jewellers masterclass gallery",
    canonical: "/gallery",
  },
  blog: {
    title: "Blog | Business Growth Tips & Strategies | Arnav Patil",
    description:
      "Business growth insights, jewellery business strategies, leadership tips, and mindset guides from Business Coach Arnav Patil.",
    keywords:
      "business growth blog, jewellery business tips, arnav patil articles, business coaching blog india",
    canonical: "/blog",
  },
  contact: {
    title: "Contact & Book | Arnav Patil | Business Coach",
    description:
      "Connect with Arnav Patil for coaching, masterclasses, keynote speaking, and consulting. Book your free consultation on WhatsApp today.",
    keywords:
      "contact arnav patil, book business coach, arnav patil consulting, coaching inquiry india",
    canonical: "/contact",
  },
};

// ─── Build page metadata ──────────────────────────────────────────────────────
export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

// ─── Build program metadata ───────────────────────────────────────────────────
export function buildProgramMetadata(program) {
  const title = `${program.title} | Arnav Patil Business Coaching`;
  const description = program.description;
  return {
    title,
    description,
    keywords: `${program.title.toLowerCase()}, arnav patil ${program.title.toLowerCase()}, ${program.audience}, business coaching india`,
    alternates: { canonical: `${siteSEO.baseUrl}/programs/${program.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteSEO.baseUrl}/programs/${program.slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [{ url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

// ─── Build blog metadata ──────────────────────────────────────────────────────
export function buildBlogMetadata(post) {
  const title = `${post.title} | Arnav Patil Blog`;
  return {
    title,
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(", ") : siteSEO.defaultTitle,
    alternates: { canonical: `${siteSEO.baseUrl}/blog/${post.slug}` },
    openGraph: {
      title,
      description: post.excerpt,
      url: `${siteSEO.baseUrl}/blog/${post.slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "article",
      publishedTime: post.date,
      authors: [siteSEO.coach],
      images: [{ url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

// ─── Schema.org: Person + LocalBusiness ──────────────────────────────────────
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteSEO.baseUrl}/#person`,
        name: siteSEO.coach,
        url: siteSEO.baseUrl,
        image: `${siteSEO.baseUrl}/images/arnavpatil_logo.png`,
        jobTitle: "International Business Coach, Strategist & Keynote Speaker",
        description: siteSEO.defaultDescription,
        email: siteSEO.email,
        telephone: siteSEO.phone,
        sameAs: [siteSEO.instagram, siteSEO.whatsapp],
        worksFor: {
          "@type": "Organization",
          name: siteSEO.company,
          url: siteSEO.baseUrl,
        },
        knowsAbout: [
          "Business Coaching",
          "Jewellery Business",
          "Business Automation",
          "Leadership",
          "Business Scaling",
          "Entrepreneurship",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#org`,
        name: siteSEO.company,
        url: siteSEO.baseUrl,
        logo: { "@type": "ImageObject", url: `${siteSEO.baseUrl}/images/arnavpatil_logo.png` },
        founder: { "@type": "Person", name: siteSEO.coach },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "Customer Support",
          availableLanguage: ["Marathi", "Hindi", "English"],
        },
        sameAs: [siteSEO.instagram],
      },
    ],
  };
}

// ─── Breadcrumb schema ────────────────────────────────────────────────────────
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}

// ─── FAQ schema ───────────────────────────────────────────────────────────────
export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
