/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'pt-BR'],
        defaultLocale: 'en-US',
    },
    images: {
        dangerouslyAllowSVG: true,
        domains: ['tailwindui.com', 'flowbite.com'],
    },
}

module.exports = nextConfig
