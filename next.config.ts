import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.170", "localhost:3000"],
  output: "export",
  basePath: "/polsci-study-suite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
