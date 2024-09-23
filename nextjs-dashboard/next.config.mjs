/** @type {import('next').NextConfig} */

const nextConfig = {
    // basePath: "/nextjs-dashboard",
    // output: "export",  // <=== enables static exports
    // reactStrictMode: true,
    experimental: {
     ppr: 'incremental',
    },
};

export default nextConfig;
