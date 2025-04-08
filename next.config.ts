import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env:{
    UNSPLASH: process.env.UNSPLASH_API_KEY,
    MEALDB: process.env.COCKTAILDB_API_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
