import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
    return (
        <>
            <header className="mb-12">
                <h1 className="text-3xl font-bold mb-4">
                    Gaëtan Rogeron — Développeur Web Fullstack Freelance
                </h1>
                <div className="flex space-x-6 text-xl">
                    <div>Projets</div>
                    <div>À propos</div>
                    <div>Contact</div>
                </div>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Projets</h2>

                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-2">Flite Watch</h3>
                    <p className="mb-2">
                        Développement de pages statiques pour le site vitrine de la compagnie Flite Watch. Travail axé sur la performance, le responsive et la clarté de navigation.
                    </p>
                    <a href="https://www.flitewatch.aero/" target="_blank" className="text-blue-500 underline">
                        Visiter le site
                    </a>
                    <div className="w-[80vh] px-10">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem><img src="/images/FliteWatch/FliteWatch_1.png"/></CarouselItem>
                            <CarouselItem><img src="/images/FliteWatch/FliteWatch_2.png"/></CarouselItem>
                            <CarouselItem><img src="/images/FliteWatch/FliteWatch_3.png"/></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-2">Emma Zepter</h3>
                    <p className="mb-2">
                        Création du site temporaire "Launching Soon" pour Emma Zepter, avec intégration d'un système d'inscription à la newsletter via formulaire d'email.
                    </p>
                    <a href="https://www.emmazepter.com/" target="_blank" className="text-blue-500 underline">
                        Visiter le site
                    </a>
                    <div className="w-[80vh] px-10">
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem><img src="/images/EmmaZepter/EmmaZepter_1.png"/></CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-2">Rendez-vous.ai</h3>
                    <p className="mb-2">
                        Participation au développement du dashboard SaaS de Rendez-vous.ai, une plateforme d'automatisation des appels et de la prise de rendez-vous par IA.
                    </p>
                    <p className="mb-2">
                        J'ai conçu et développé l'ensemble de la gestion des événements en interne, reposant sur Payload CMS :
                    </p>
                    <ul className="list-disc ml-5 mb-2">
                        <li>Calendrier personnalisable (vues jour, semaine, mois)</li>
                        <li>Gestion avancée des catégories</li>
                        <li>Création, modification et suppression des événements et catégories via des interfaces dédiées</li>
                        <li>Stockage structuré des événements dans la base de données interne</li>
                        <li>Option de synchronisation avec les agendas Outlook pour les utilisateurs qui le souhaitent</li>
                    </ul>
                    <p className="mb-2">
                        J'ai également contribué au développement des outils permettant à l'IA de connaître en temps réel les créneaux disponibles et de gérer automatiquement la prise de rendez-vous.
                    </p>
                    <p className="mb-2">
                        En complément, j'ai pris en charge les fonctionnalités suivantes :
                    </p>
                    <ul className="list-disc ml-5 mb-2">
                        <li>Intégration d'un chatbot intelligent relié à l'IA avec accès aux outils internes via le serveur Node.js</li>
                        <li>Développement d'une page de chat permettant aux utilisateurs de visualiser l'historique des conversations stockées en base de données</li>
                        <li>Création de la page de paramètres du dashboard (langue, avatar, informations personnelles, changement d'email)</li>
                        <li>Internationalisation complète du dashboard en 5 langues (Français, Anglais, Espagnol, Allemand, Russe)</li>
                        <li>Développement de la page de connexion (signin) du dashboard</li>
                    </ul>
                    <p className="mb-2">
                        Pour l'ensemble de ces fonctionnalités, j'ai assuré le développement frontend, backend et infrastructure, sans recourir à des solutions clés-en-main, afin de garantir flexibilité, sécurité et maîtrise technique.
                    </p>
                    <p className="italic text-sm">
                        Ces réalisations s'inscrivent dans le cadre plus large de Rendez-vous.ai, qui propose un agent vocal intelligent disponible 24/7 pour automatiser la prise d'appels et de rendez-vous.
                    </p>
                    <a href="https://rendez-vous.ai/" target="_blank" className="text-blue-500 underline">
                        Site vitrine
                    </a>
                    <div className="w-[80vh] px-10">
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem><img src="/images/Rendez-vous-ai/rdv_1.png"/></CarouselItem>
                                <CarouselItem><img src="/images/Rendez-vous-ai/rdv_2.png"/></CarouselItem>
                                <CarouselItem><img src="/images/Rendez-vous-ai/rdv_6.png"/></CarouselItem>
                                <CarouselItem><img src="/images/Rendez-vous-ai/rdv_5.png"/></CarouselItem>
                                <CarouselItem><img src="/images/Rendez-vous-ai/rdv_3.png"/></CarouselItem>
                                <CarouselItem><img src="/images/Rendez-vous-ai/rdv_4.png"/></CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-2">Absolument Parfumeur</h3>
                    <p className="mb-2">
                        Développement complet du site e-commerce pour la maison de parfumerie Absolument Parfumeur.
                    </p>
                    <p className="mb-2">
                        J'ai pris en charge l'architecture technique et le développement fullstack :
                    </p>
                    <ul className="list-disc ml-5 mb-2">
                        <li>Mise en place du backend avec PostgreSQL et Payload CMS</li>
                        <li>Création des pages produits et collections entièrement dynamiques</li>
                        <li>Formulaire de contact intégré pour faciliter les échanges avec les clients</li>
                        <li>Gestion multilingue du site en Français et Anglais</li>
                        <li>Optimisation SEO côté code pour améliorer la visibilité en ligne</li>
                    </ul>
                    <p className="mb-2">
                        Le design a été fourni par le client, et j'ai assuré l'intégration technique et le développement de l'ensemble du site jusqu'à sa finalisation.
                    </p>
                    <p className="italic text-sm">
                        Le déploiement est en cours, la mise en ligne est prévue prochainement.
                    </p>
                    {/* Carousel ici */}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-4">À propos</h2>
                <p>
                    Je m'appelle Gaëtan Rogeron, développeur web fullstack et freelance basé en France.
                    Étudiant en double licence Mathématiques et Informatique à l'Université Côte d'Azur,
                    je travaille principalement avec Next.js, Payload CMS, Docker et PostgreSQL.
                    Je porte une attention particulière à la qualité du code, à la sécurité des applications et à la performance.
                    Je m'intéresse également à Rust et à la cybersécurité, dans une démarche d'amélioration continue.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="mb-2">Vous avez un projet ou une question ? N'hésitez pas à me contacter :</p>
                <ul className="space-y-2">
                    <li>
                        <a href="https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/" target="_blank" className="text-blue-500 underline">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/gaetan-rogeron" target="_blank" className="text-blue-500 underline">
                            GitHub
                        </a>
                    </li>
                    <li>
                        Par email :{" "}
                        <a href="mailto:gaetan.dev@pm.me" className="text-blue-500 underline">
                            gaetan.dev@pm.me
                        </a>
                    </li>
                </ul>
                {/* <p>Formulaire de contact en cours d'intégration.</p> */}
            </section>
        </>
    );
}
