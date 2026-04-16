const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
