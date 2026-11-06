const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    // Superset of the Next.js defaults — every width a srcset can ask for,
    // so the optimiser never 400s on an out-of-range value.
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1280, 1440, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
