/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ `appDir` not needed anymore, App Router is default in Next.js 13+
  
  serverExternalPackages: ["mongoose"], // ✅ updated key name

  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
