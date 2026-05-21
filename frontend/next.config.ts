import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "polialfaexpertcontab-backend.ddev.site",
      },
    ],
  },
};

export default nextConfig;
