/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Crucial for small Docker image sizes
};

export default nextConfig;
