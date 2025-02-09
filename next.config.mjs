// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false, // Disable React Strict Mode to avoid duplicate data issues in development
//   images: {
//     domains: [
//       'cdn.sanity.io', // Allow Sanity image URLs
//       'cdn.builder.io', // Allow Builder.io image URLs (if needed)
//       'next-ecommerce-template-4.vercel.app', // Allow your Vercel domain for product images
//     ],
//   },
//   env: {
//     SHIPPO_API_KEY: process.env.SHIPPO_API_KEY, // Add Shippo API Key to the environment variables
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        hostname: "next-ecommerce-template-4.vercel.app",
      },
    ],
  },
  env: {
    SHIPPO_API_KEY: process.env.SHIPPO_API_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_STRIPE_SECRET_KEY: process.env.NEXT_STRIPE_SECRET_KEY,
  },
};

export default nextConfig;



