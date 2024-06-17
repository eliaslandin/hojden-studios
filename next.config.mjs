import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eisvdiypdhqebatccxpr.supabase.co",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/media/:path*",
        destination:
          "https://eisvdiypdhqebatccxpr.supabase.co/storage/v1/object/public/venue-platform-media-public-dev/:path*",
      },
      {
        source: "/api/:path*",
        destination: `${process.env.API_ROOT}/api/:path*`,
      },
    ];
  },
};
 
export default withNextIntl(nextConfig);