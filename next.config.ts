import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The editorial site is fully pre-renderable and can run on a free static host.
  output: "export",
  poweredByHeader: false,
  compress: true,
  images: { unoptimized: true }
};

export default nextConfig;
