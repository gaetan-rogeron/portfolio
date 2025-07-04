import Head from "next/head";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { memo } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from '@/components/ErrorBoundary';


// Types pour TypeScript
interface ProjectImage {
    src: string;
    alt: string;
}

interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    url: string;
    images?: string[];
}

interface ProjectCardProps {
    project: Project;
}

// Données des projets pour éviter la duplication
const projects: Project[] = [
    {
        id: "flitewatch",
        name: "Flite Watch",
        image: "/images/FliteWatch/FliteWatch_1.png",
        description: "Développement de pages statiques pour le site vitrine de la compagnie Flite Watch. Travail axé sur la performance, le responsive et la clarté de navigation.",
        url: "https://www.flitewatch.aero/",
        images: [
            "/images/FliteWatch/FliteWatch_1.png",
            "/images/FliteWatch/FliteWatch_2.png",
            "/images/FliteWatch/FliteWatch_3.png"
        ]
    },
    {
        id: "emmazepter",
        name: "Emma Zepter",
        image: "/images/EmmaZepter/EmmaZepter_1.png",
        description: "Création du site temporaire \"Launching Soon\" pour Emma Zepter, avec intégration d'un système d'inscription à la newsletter via formulaire d'email",
        url: "https://www.emmazepter.com/"
    },
    {
        id: "rendezvousai",
        name: "Rendez-vous.ia",
        image: "/images/Rendez-vous-ai/rdv_1.png",
        description: "Participation au développement du dashboard SaaS de Rendez-vous.ai, une plateforme d'automatisation des appels et de la prise de rendez-vous par IA.",
        url: "https://rendez-vous.ai/"
    },
    {
        id: "absolumentparfumeur",
        name: "Absolument Parfumeur",
        image: "/images/Absolument-Parfumeur/AP_2.png",
        url: "#",
        description: "Développement complet du site e-commerce pour la maison de parfumerie Absolument Parfumeur.",
        images: [
            "/images/Absolument-Parfumeur/AP_2.png",
            "/images/Absolument-Parfumeur/AP_1.png",
            "/images/Absolument-Parfumeur/AP_3.png"
        ]
    }
];

// Composant Header mémorisé
const Header = memo(() => (
    <header className="bg-gray-100 w-full py-4 px-4 md:px-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Image
                src="/images/LOGO.svg"
                alt="Logo Gaëtan Rogeron - Développeur Web Fullstack"
                width={150}
                height={40}
                priority
                className="object-contain"
            />
            <nav className="hidden md:block">
                <ul className="flex space-x-8 lg:space-x-16">
                    <li><a href="#projects" className="hover:text-gray-600 transition-colors font-europa"><h4>Projets</h4></a></li>
                    <li><a href="#about" className="hover:text-gray-600 transition-colors font-europa"><h4>À propos</h4></a></li>
                    <li><a href="#contact" className="hover:text-gray-600 transition-colors font-europa"><h4>Contact</h4></a></li>
                </ul>
            </nav>
            {/* Menu mobile */}
            <button className="md:hidden p-2" aria-label="Menu de navigation">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>
));

Header.displayName = 'Header';

// Composant Hero Section
const HeroSection = memo(() => (
    <section className="py-16 md:py-28 text-center">
        <h1 className="font-arboria">Portfolio</h1>
    </section>
));

HeroSection.displayName = 'HeroSection';

// Composant About Section
const AboutSection = memo(() => (
    <section className="pb-16 md:pb-32" id="about">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 order-2 lg:order-1">
                    <Image
                        src="/images/photo_2_2025-06-30_23-21-45.jpg"
                        alt="Photo de profil de Gaëtan Rogeron, développeur web fullstack"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover rounded-tr-[100px] shadow-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        priority
                    />
                </div>
                <div className="flex-1 order-1 lg:order-2 text-center lg:text-right">
                    <div className="flex justify-center lg:justify-end mb-4">
                        <div className="w-32 h-1 bg-black"></div>
                    </div>
                    <h2 className="mb-4 font-arboria">Gaëtan Rogeron</h2>
                    <h3 className="mb-6 text-gray-600 font-arboria">Développeur Web Fullstack Freelance</h3>
                    <p className="leading-relaxed max-w-2xl mx-auto lg:mx-0 font-objektiv">
                        Je m&apos;appelle Gaëtan Rogeron, développeur web fullstack et freelance basé en France.
                        Étudiant en double licence Mathématiques et Informatique à l&apos;Université Côte d&apos;Azur,
                        je travaille principalement avec Next.js, Payload CMS, Docker et PostgreSQL.
                        Je porte une attention particulière à la qualité du code, à la sécurité des applications et à la performance.
                        Je m&apos;intéresse également à Rust et à la cybersécurité, dans une démarche d&apos;amélioration continue.
                    </p>
                </div>
            </div>
        </div>
    </section>
));

AboutSection.displayName = 'AboutSection';

// Composant ProjectCard optimisé avec types
const ProjectCard = memo(({ project }: ProjectCardProps) => (
    <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 px-4 flex flex-col items-center">
        <a href={`#${project.id}`} className="group">
            <div className="relative overflow-hidden rounded-3xl">
                <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.name}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    loading="lazy"
                />
            </div>
            <p className="text-center mt-4 text-lg font-medium group-hover:text-gray-600 transition-colors">
                {project.name}
            </p>
        </a>
    </CarouselItem>
));

ProjectCard.displayName = 'ProjectCard';

// Section Projets Principal
const ProjectsMainSection = memo(() => (
    <section className="bg-gray-100 py-16" id="projects">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-center mb-8">
                <div className="w-32 h-1 bg-black"></div>
            </div>
            <h2 className="text-center mb-12 font-arboria">Projets</h2>
            <div className="relative">
                <Carousel opts={{ loop: true, align: "start" }}>
                    <CarouselContent className="-ml-4">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </div>
    </section>
));

ProjectsMainSection.displayName = 'ProjectsMainSection';

// Section détaillée Flite Watch
const FliteWatchSection = memo(() => {
    const fliteWatchProject = projects.find(p => p.id === "flitewatch");

    if (!fliteWatchProject || !fliteWatchProject.images) {
        return null;
    }

    return (
        <section className="bg-gray-900 text-white py-16" id="flitewatch">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <h2 className="font-arboria mb-4 md:mb-0">Flite Watch</h2>
                    <div className="w-full md:w-96 h-1 bg-white"></div>
                </div>
                <p className="font-objektiv mb-8 max-w-4xl">
                    Développement de pages statiques pour le site vitrine de la compagnie Flite Watch.
                    Travail axé sur la performance, le responsive et la clarté de navigation.
                </p>

                <div className="mb-8">
                    <Carousel>
                        <CarouselContent>
                            {fliteWatchProject.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={image}
                                        alt={`Capture d'écran ${index + 1} du site Flite Watch`}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        loading="lazy"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black" />
                        <CarouselNext className="text-white border-white hover:bg-white hover:text-black" />
                    </Carousel>
                </div>

                <a
                    href="https://www.flitewatch.aero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 hover:underline font-objektiv transition-all duration-300"
                >
                    Visitez le site →
                </a>
            </div>
        </section>
    );
});

FliteWatchSection.displayName = 'FliteWatchSection';

// Section Emma Zepter
const EmmaZepterSection = memo(() => (
    <section className="py-16 md:py-32" id="emmazepter">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="w-full md:w-96 h-1 bg-black mb-4 md:mb-0"></div>
                <h2 className="font-arboria">Emma Zepter</h2>
            </div>
            <p className="font-objektiv mb-6 text-right max-w-4xl ml-auto">
                Création du site temporaire &quot;Launching Soon&quot; pour Emma Zepter,
                avec intégration d&apos;un système d&apos;inscription à la newsletter via formulaire d&apos;email
            </p>
            <div className="mb-4">
                <Image
                    src="/images/EmmaZepter/EmmaZepter_1.png"
                    alt="Capture d'écran du site Emma Zepter - Page de lancement"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    loading="lazy"
                />
            </div>
            <div className="text-right">
                <a
                    href="https://www.emmazepter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 hover:underline font-objektiv transition-all duration-300"
                >
                    Visitez le site →
                </a>
            </div>
        </div>
    </section>
));

EmmaZepterSection.displayName = 'EmmaZepterSection';

// Section Rendez-vous.ai
const RendezVousAiSection = memo(() => (
    <section className="py-16 md:py-32 bg-gray-100" id="rendezvousai">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                <h2 className="font-arboria mb-4 md:mb-0">Rendez-vous.ai</h2>
                <div className="w-full md:w-96 h-1 bg-black"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <Image
                        src="/images/Rendez-vous-ai/rdv_3.png"
                        alt="Dashboard de Rendez-vous.ai - Interface utilisateur"
                        width={600}
                        height={400}
                        className="rounded-tr-[100px] object-cover w-full shadow-lg"
                        sizes="(max-width: 768px) 100vw, 600px"
                        loading="lazy"
                    />
                    <Image
                        src="/images/Rendez-vous-ai/rdv_2.png"
                        alt="Calendrier de Rendez-vous.ai - Gestion des événements"
                        width={600}
                        height={400}
                        className="object-cover w-full rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 100vw, 600px"
                        loading="lazy"
                    />
                    <div className="space-y-4">
                        <p className="font-objektiv">
                            J&apos;ai également contribué au développement des outils permettant à l&apos;IA de connaître en temps réel les créneaux disponibles et de gérer automatiquement la prise de rendez-vous.
                        </p>
                        <p className="font-objektiv">En complément, j&apos;ai pris en charge les fonctionnalités suivantes :</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Intégration d&apos;un chatbot intelligent relié à l&apos;IA avec accès aux outils internes via le serveur Node.js</li>
                            <li>Développement d&apos;une page de chat permettant aux utilisateurs de visualiser l&apos;historique des conversations</li>
                            <li>Création de la page de paramètres (langue, avatar, informations personnelles)</li>
                            <li>Internationalisation complète du dashboard en 5 langues</li>
                            <li>Développement de la page de connexion (signin)</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="font-objektiv">
                        Participation au développement du dashboard SaaS de Rendez-vous.ai, une plateforme d&apos;automatisation des appels et de la prise de rendez-vous par IA.
                    </p>
                    <p className="font-objektiv">
                        J&apos;ai conçu et développé l&apos;ensemble de la gestion des événements en interne, reposant sur Payload CMS :
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Calendrier personnalisable (vues jour, semaine, mois)</li>
                        <li>Gestion avancée des catégories</li>
                        <li>Création, modification et suppression des événements via des interfaces dédiées</li>
                        <li>Stockage structuré des événements dans la base de données interne</li>
                        <li>Option de synchronisation avec les agendas Outlook pour les utilisateurs qui le souhaitent</li>
                    </ul>
                    <Image
                        src="/images/Rendez-vous-ai/rdv_5.png"
                        alt="Interface calendrier de Rendez-vous.ai - Vue détaillée"
                        width={600}
                        height={400}
                        className="object-cover w-full rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 100vw, 600px"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto text-center space-y-6">
                <p className="font-objektiv">
                    Pour l&apos;ensemble de ces fonctionnalités, j&apos;ai assuré le développement frontend, backend et infrastructure, sans recourir à des solutions clés-en-main, afin de garantir flexibilité, sécurité et maîtrise technique.
                </p>
                <p className="font-objektiv">
                    Ces réalisations s&apos;inscrivent dans le cadre plus large de Rendez-vous.ai, qui propose un agent vocal intelligent disponible 24/7 pour automatiser la prise d&apos;appels et de rendez-vous.
                </p>
                <a
                    href="https://rendez-vous.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:underline font-objektiv transition-all duration-300"
                >
                    Site vitrine →
                </a>
            </div>
        </div>
    </section>
));

RendezVousAiSection.displayName = 'RendezVousAiSection';

// Section Absolument Parfumeur
const AbsolumentParfumeurSection = memo(() => {
    const absolumentParfumeurProject = projects.find(p => p.id === "absolumentparfumeur");

    if (!absolumentParfumeurProject || !absolumentParfumeurProject.images) {
        return null;
    }

    return (
        <section className="py-16 md:py-32" id="absolumentparfumeur">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="w-full md:w-64 h-1 bg-black mb-4 md:mb-0"></div>
                    <h2 className="font-arboria">Absolument Parfumeur</h2>
                </div>

                <div className="text-right mb-16 max-w-4xl ml-auto">
                    <p className="font-objektiv mb-6">
                        Développement complet du site e-commerce pour la maison de parfumerie Absolument Parfumeur.
                    </p>
                    <h3 className="font-objektiv max-w-2xl ml-auto">
                        J&apos;ai pris en charge l&apos;architecture technique et le développement fullstack :
                        Le design a été fourni par le client, et j&apos;ai assuré l&apos;intégration technique et le développement de l&apos;ensemble du site jusqu&apos;à sa finalisation.
                    </h3>
                </div>

                <div className="mb-8">
                    <Carousel>
                        <CarouselContent>
                            {absolumentParfumeurProject.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={image}
                                        alt={`Capture d'écran ${index + 1} du site Absolument Parfumeur`}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                        loading="lazy"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="text-right mb-8">
                    <p className="font-objektiv">Le déploiement est en cours, la mise en ligne est prévue</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>Mise en place du backend avec PostgreSQL et Payload CMS</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>Création des pages produits et collections entièrement dynamiques</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>Formulaire de contact intégré pour faciliter les échanges avec les clients</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>Gestion multilingue du site en Français et Anglais</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span>Optimisation SEO côté code pour améliorer la visibilité en ligne</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

AbsolumentParfumeurSection.displayName = 'AbsolumentParfumeurSection';

// Footer optimisé
const Footer = memo(() => (
    <footer className="bg-gray-900 text-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-8">
                <h3 className="font-arboria mb-4">Contact</h3>
                <p className="font-objektiv">Vous avez un projet ou une question ? N&apos;hésitez pas à me contacter :</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <a
                    href="https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/images/linkedin-logo-vector.svg"
                        alt="Logo LinkedIn"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-objektiv">LinkedIn</span>
                </a>

                <a
                    href="https://github.com/gaetan-rogeron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/images/icons8-github.svg"
                        alt="Logo GitHub"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-objektiv">GitHub</span>
                </a>

                <a
                    href="mailto:gaetan.dev@pm.me"
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                >
                    <Image
                        src="/images/mail%20logo.svg"
                        alt="Icône email"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="font-objektiv">gaetan.dev@pm.me</span>
                </a>
            </div>
        </div>
    </footer>
));

Footer.displayName = 'Footer';

// Composant principal
export default function Home() {
    return (
        <>
            <ErrorBoundary>
            <Head>
                <title>Gaëtan Rogeron - Développeur Web Fullstack Freelance | Portfolio</title>
                <meta name="description" content="Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL. Découvrez mes projets et réalisations." />
                <meta name="keywords" content="développeur web, fullstack, freelance, Next.js, React, JavaScript, TypeScript, Payload CMS, Docker, PostgreSQL" />
                <meta name="author" content="Gaëtan Rogeron" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph */}
                <meta property="og:title" content="Gaëtan Rogeron - Développeur Web Fullstack Freelance" />
                <meta property="og:description" content="Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/og-image.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gaëtan Rogeron - Développeur Web Fullstack Freelance" />
                <meta name="twitter:description" content="Développeur web fullstack freelance spécialisé en Next.js, Payload CMS, Docker et PostgreSQL." />

                {/* Preload critical fonts */}
                <link rel="preload" href="/fonts/Europa-Light.woff2.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/ObjektivMk1_Trial_Th.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/FontsFree-Net-arboria2.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

                {/* Preload critical resources */}
                <link rel="preload" href="/images/LOGO.svg" as="image" />
                <link rel="preload" href="/images/photo_2_2025-06-30_23-21-45.jpg" as="image" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data */}
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
                            "sameAs": [
                                "https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/",
                                "https://github.com/gaetan-rogeron"
                            ],
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance"
                            }
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-white">
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsMainSection />
                    <FliteWatchSection />
                    <EmmaZepterSection />
                    <RendezVousAiSection />
                    <AbsolumentParfumeurSection />
                </main>
                <Footer />
                <SpeedInsights />
            </div>
            </ErrorBoundary>
        </>
    );
}