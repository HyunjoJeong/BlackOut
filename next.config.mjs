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
        hostname: 'i.namu.wiki',
      },
    ],
  },
};

export default nextConfig;
