// Types pour le portfolio

export interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    url: string;
    images?: string[];
    technologies?: string[];
    year?: string;
    category?: 'web' | 'mobile' | 'fullstack' | 'backend' | 'frontend';
}

export interface ProjectCardProps {
    project: Project;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    alt: string;
}

export interface ContactInfo {
    email: string;
    socialLinks: SocialLink[];
}

export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

export interface StructuredData {
    '@context': string;
    '@type': string;
    name: string;
    jobTitle: string;
    description: string;
    url: string;
    sameAs: string[];
    worksFor: {
        '@type': string;
        name: string;
    };
    address?: {
        '@type': string;
        addressLocality: string;
        addressRegion: string;
        addressCountry: string;
    };
}

// Props pour les composants mémorisés
export interface HeaderProps {
    className?: string;
}

export interface FooterProps {
    className?: string;
}

export interface SectionProps {
    className?: string;
    id?: string;
}

// Types pour les animations
export interface AnimationVariants {
    hidden: {
        opacity: number;
        y?: number;
        x?: number;
    };
    visible: {
        opacity: number;
        y?: number;
        x?: number;
        transition?: {
            duration: number;
            ease?: string;
        };
    };
}

// Types pour les configurations
export interface CarouselOptions {
    loop?: boolean;
    align?: 'start' | 'center' | 'end';
    autoplay?: boolean;
    autoplayInterval?: number;
}

export interface ImageConfig {
    domains: string[];
    formats: string[];
    minimumCacheTTL: number;
}

// Types pour les erreurs
export interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export interface ErrorProps {
    error: Error;
    reset: () => void;
}