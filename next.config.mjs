/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stlgehffhjwkneboewar.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'namu.wiki',
      },
    ],
  },
};

export default nextConfig;
