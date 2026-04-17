// import { siteSEO } from "@/utils/seoConfig";

// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//         disallow: ["/api/"],
//       },
//     ],
//     sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
//   };
// }

import { siteSEO } from "@/utils/seoConfig";

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
  };
}