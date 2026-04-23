// import { Montserrat, Inter } from "next/font/google";

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   variable: "--font-montserrat",
//   display: "swap",
// });

// export const inter = Inter({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-inter",
//   display: "swap",
// });

// app/fonts.js or lib/fonts.js
import { Montserrat, Inter } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});