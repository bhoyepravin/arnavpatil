// const nextConfig = {
//   images: {
    
//     formats: ["image/avif", "image/webp"],
//     domains: ["images.unsplash.com"],
//   },
//   experimental: {
//     workerThreads: false,
//     cpus: 1,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static HTML export
  images: {
    unoptimized: true, // Required when using output: 'export'
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;