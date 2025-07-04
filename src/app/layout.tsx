import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from 'next';

// Métadonnées optimisées pour le SEO
export const metadata: Metadata = {
    title: {
        default: 'Gaëtan Rogeron - Développeur Web Fullstack Freelance',
        template: '%s | Gaëtan Rogeron'
    },
    description: 'Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL. Découvrez mes projets et réalisations.',
    keywords: [
        'développeur web',
        'fullstack',
        'freelance',
        'Next.js',
        'React',
        'JavaScript',
        'TypeScript',
        'Payload CMS',
        'Docker',
        'PostgreSQL',
        'France',
        'Côte d\'Azur'
    ],
    authors: [{ name: 'Gaëtan Rogeron' }],
    creator: 'Gaëtan Rogeron',
    publisher: 'Gaëtan Rogeron',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://gaetan-rogeron.dev'), // Remplacez par votre domaine
    alternates: {
        canonical: '/',
        languages: {
            'fr-FR': '/fr',
            'en-US': '/en',
        },
    },
    openGraph: {
        title: 'Gaëtan Rogeron - Développeur Web Fullstack Freelance',
        description: 'Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL.',
        url: 'https://gaetan-rogeron.dev',
        siteName: 'Portfolio Gaëtan Rogeron',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Portfolio de Gaëtan Rogeron - Développeur Web Fullstack',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gaëtan Rogeron - Développeur Web Fullstack Freelance',
        description: 'Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL.',
        images: ['/images/og-image.jpg'],
        creator: '@gaetan_rogeron', // Remplacez par votre handle Twitter si vous en avez un
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'votre-code-verification-google', // Ajoutez votre code de vérification Google
        // yandex: 'votre-code-yandex',
        // yahoo: 'votre-code-yahoo',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
        <head>
            {/* Preconnect vers les domaines externes pour améliorer les performances */}
            <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
            <link rel="preconnect" href="https://va.vercel-scripts.com" />

            {/* DNS prefetch pour les ressources externes */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//www.linkedin.com" />
            <link rel="dns-prefetch" href="//github.com" />

            {/* Preload des polices critiques */}
            <link
                rel="preload"
                href="/fonts/Europa-Light.woff2.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/ObjektivMk1_Trial_Th.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/FontsFree-Net-arboria2.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
            />

            {/* Favicon optimisé */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />

            {/* Theme color pour les navigateurs mobiles */}
            <meta name="theme-color" content="#262626" />
            <meta name="msapplication-TileColor" content="#262626" />

            {/* Optimisations viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

            {/* Structured Data Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Gaëtan Rogeron",
                        "jobTitle": "Développeur Web Fullstack Freelance",
                        "description": "Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL",
                        "url": "https://gaetan-rogeron.dev",
                        "image": "https://gaetan-rogeron.dev/images/photo_2_2025-06-30_23-21-45.jpg",
                        "sameAs": [
                            "https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/",
                            "https://github.com/gaetan-rogeron"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Nice",
                            "addressRegion": "Provence-Alpes-Côte d'Azur",
                            "addressCountry": "FR"
                        },
                        "alumniOf": {
                            "@type": "EducationalOrganization",
                            "name": "Université Côte d'Azur"
                        },
                        "knowsAbout": [
                            "Next.js",
                            "React",
                            "JavaScript",
                            "TypeScript",
                            "Payload CMS",
                            "Docker",
                            "PostgreSQL",
                            "Rust",
                            "Cybersécurité"
                        ],
                        "offers": {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Développement Web Fullstack",
                                "description": "Services de développement web fullstack incluant frontend, backend et déploiement"
                            }
                        }
                    })
                }}
            />
        </head>
        <body className="antialiased">
        {/* Skip to main content pour l'accessibilité */}
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
            Aller au contenu principal
        </a>

        <div id="main-content">
            {children}
        </div>

        {/* Analytics et monitoring */}
        <SpeedInsights />
        <Analytics />

        {/* Service Worker pour le cache (optionnel) */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
            }}
        />
        </body>
        </html>
    );
}