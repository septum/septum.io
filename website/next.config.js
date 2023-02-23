// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
    experimental: {
        outputStandalone: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        dirs: ['src/pages', 'src/sections', 'src/components'],
    },
    images: {
        domains: [process.env.PUBLIC_ASSETS_DOMAIN],
    },
}
