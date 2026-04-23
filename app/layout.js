// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import FloatingButtons from "@/components/common/FloatingButtons";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import { siteSEO } from "@/utils/seoConfig";
// import { montserrat, inter } from "./fonts";
// import "./globals.css";

// export const metadata = {
//   metadataBase: new URL(siteSEO.baseUrl),
//   title: {
//     template: `%s | ${siteSEO.shortName}`,
//     default: siteSEO.defaultTitle,
//   },
//   description: siteSEO.defaultDescription,
//   keywords: [
//     "arnav patil",
//     "business coach india",
//     "jewellery business coach",
//     "jewellers masterclass",
//     "business scaling india",
//     "vyapari to CEO",
//     "business coach maharashtra",
//     "international business coach india",
//     "jewellery business automation",
//     "arnav patil and co",
//   ],
//   authors: [{ name: siteSEO.coach }],
//   creator: siteSEO.company,
//   publisher: siteSEO.company,
//   formatDetection: { email: false, address: false, telephone: false },
//   openGraph: {
//     title: siteSEO.defaultTitle,
//     description: siteSEO.defaultDescription,
//     url: siteSEO.baseUrl,
//     siteName: siteSEO.siteName,
//     images: [
//       {
//         url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
//         width: 1200,
//         height: 630,
//         alt: siteSEO.defaultTitle,
//       },
//     ],
//     locale: siteSEO.locale,
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteSEO.defaultTitle,
//     description: siteSEO.defaultDescription,
//     images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: [{ url: "/favicon.ico" }],
//     apple: [{ url: "/apple-touch-icon.png" }],
//   },
//   verification: { google: "your-google-verification-code" },
//   category: "business",
// };

// export default function RootLayout({ children }) {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Person",
//         "@id": `${siteSEO.baseUrl}/#person`,
//         name: siteSEO.coach,
//         url: siteSEO.baseUrl,
//         image: `${siteSEO.baseUrl}/images/arnavpatil_logo.png`,
//         jobTitle: "International Business Coach, Strategist & Keynote Speaker",
//         description: siteSEO.defaultDescription,
//         email: siteSEO.email,
//         telephone: siteSEO.phone,
//         sameAs: [siteSEO.instagram, siteSEO.whatsapp],
//         knowsAbout: [
//           "Business Coaching",
//           "Jewellery Business",
//           "Business Automation",
//           "Leadership",
//           "Business Scaling",
//           "Entrepreneurship",
//         ],
//         worksFor: {
//           "@type": "Organization",
//           name: siteSEO.company,
//           url: siteSEO.baseUrl,
//         },
//       },
//       {
//         "@type": "Organization",
//         "@id": `${siteSEO.baseUrl}/#org`,
//         name: siteSEO.company,
//         url: siteSEO.baseUrl,
//         logo: {
//           "@type": "ImageObject",
//           url: `${siteSEO.baseUrl}/images/arnavpatil_logo.png`,
//         },
//         founder: { "@type": "Person", name: siteSEO.coach },
//         contactPoint: {
//           "@type": "ContactPoint",
//           telephone: siteSEO.phone,
//           contactType: "Customer Support",
//           availableLanguage: ["Marathi", "Hindi", "English"],
//         },
//         sameAs: [siteSEO.instagram],
//       },
//     ],
//   };

//   return (
//     <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
//       <head>
//         <meta name="geo.region" content="IN-MH" />
//         <meta name="geo.placename" content="India" />
//         <meta name="theme-color" content="#F97316" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </head>
//       <body className="font-inter antialiased min-h-screen bg-white" suppressHydrationWarning>
//         <FloatingButtons />
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//         {siteSEO.gaMeasurementId !== "G-XXXXXXXXXX" && (
//           <GoogleAnalytics gaId={siteSEO.gaMeasurementId} />
//         )}
//       </body>
//     </html>
//   );
// }


import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteSEO } from "@/utils/seoConfig";
import { montserrat, inter } from "./fonts";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(siteSEO.baseUrl),
  title: {
    template: `%s | ${siteSEO.shortName}`,
    default: siteSEO.defaultTitle,
  },
  description: siteSEO.defaultDescription,
  keywords: [
    "arnav patil",
    "business coach india",
    "jewellery business coach",
    "jewellers masterclass",
    "business scaling india",
    "vyapari to CEO",
    "business coach maharashtra",
    "international business coach india",
    "jewellery business automation",
    "arnav patil and co",
  ],
  authors: [{ name: siteSEO.coach }],
  creator: siteSEO.company,
  publisher: siteSEO.company,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    url: siteSEO.baseUrl,
    siteName: siteSEO.siteName,
    images: [
      {
        url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        width: 1200,
        height: 630,
        alt: siteSEO.defaultTitle,
      },
    ],
    locale: siteSEO.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: { google: "your-google-verification-code" },
  category: "business",
};

export default function RootLayout({ children }) {
  const jsonLd = {
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
        knowsAbout: [
          "Business Coaching",
          "Jewellery Business",
          "Business Automation",
          "Leadership",
          "Business Scaling",
          "Entrepreneurship",
        ],
        worksFor: {
          "@type": "Organization",
          name: siteSEO.company,
          url: siteSEO.baseUrl,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#org`,
        name: siteSEO.company,
        url: siteSEO.baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteSEO.baseUrl}/images/arnavpatil_logo.png`,
        },
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

  return (
    <html 
      lang="en" 
      className={`${montserrat.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="India" />
        <meta name="theme-color" content="#F97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className="font-inter antialiased min-h-screen bg-white" 
        suppressHydrationWarning
      >
        <FloatingButtons />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {siteSEO.gaMeasurementId && siteSEO.gaMeasurementId !== "G-XXXXXXXXXX" && (
          <GoogleAnalytics gaId={siteSEO.gaMeasurementId} />
        )}
      </body>
    </html>
  );
}