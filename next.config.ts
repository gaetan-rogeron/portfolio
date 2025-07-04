/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimisations de performance
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },

    // Configuration des images
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000, // 1 an de cache
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: [], // Ajoutez vos domaines d'images externes si nécessaire
    },

    // Optimisations générales
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,

    // Headers de sécurité
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()'
                    }
                ],
            },
            // Cache optimisé pour les assets statiques
            {
                source: '/images/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/fonts/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            }
        ]
    },

    // Redirections si nécessaire
    async redirects() {
        return [
            // Exemple de redirection
            // {
            //   source: '/old-page',
            //   destination: '/new-page',
            //   permanent: true,
            // },
        ]
    },

    // Variables d'environnement publiques
    env: {
        SITE_URL: process.env.SITE_URL || 'https://gaetan-rogeron.com',
    },

    // Optimisations webpack
    webpack: (config, { dev, isServer }) => {
        // Optimisations pour la production
        if (!dev && !isServer) {
            config.optimization.splitChunks.chunks = 'all';
        }

        // Support pour les fichiers SVG en tant que composants
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },

    // Analyse du bundle (activez si nécessaire)
    // bundleAnalyzer: {
    //   enabled: process.env.ANALYZE === 'true',
    // },
}

module.exports = nextConfig;