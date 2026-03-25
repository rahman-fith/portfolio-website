/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for better performance and error catching
  reactStrictMode: true,
};

export default nextConfig;
