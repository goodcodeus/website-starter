/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['posthog-js'],
  images: {
    remotePatterns: [
      /*
      {
        protocol: 'https',
        hostname: 's3-us-west-2.amazonaws.com'
      }
      */
    ],
  },
};

export default nextConfig;
