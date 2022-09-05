/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: {
			unoptimized: true,
		},
	},
	basePath: '',
	assetPrefix: '/portfolio-nextjs/',
};

module.exports = nextConfig;
