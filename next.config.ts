import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats cut the photographic payload substantially versus JPEG.
    formats: ["image/avif", "image/webp"],
    // Widths the site actually renders at, so phones never fetch desktop-sized
    // files. Kept tight to limit the number of generated variants.
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600],
    imageSizes: [96, 160, 256, 384],
    // Next 16 rejects any quality not declared here, so the values used by
    // BackgroundImage must be listed or every optimised request 400s.
    qualities: [75, 80],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
