/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['rafaelf.dev', 'upload.wikimedia.org', 'img.freepik.com'],
    },
}

module.exports = nextConfig
