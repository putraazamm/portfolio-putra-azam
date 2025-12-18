import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-putra-azam",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
