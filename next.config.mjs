const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.unsplash.com"],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
