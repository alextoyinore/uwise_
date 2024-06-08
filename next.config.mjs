/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {},
    experimental: {
        serverComponentsExternalPackages: ['node-appwrite'],
    },
};

export default nextConfig;
