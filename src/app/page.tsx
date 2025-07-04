import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function Home() {
    return (
        <>
            <header className="bg-[#f2f2f2] w-full py-4 px-10">
                <div className="flex items-center justify-between">
                    <Image src={"/images/LOGO.svg"} alt={""} width={150} height={40} style={{ objectFit: "cover" }} />
                    <div>
                        <nav className="flex space-x-72">
                            <a href="#projects" className="text-xl">
                                <h4>Projets</h4>
                            </a>
                            <a href="#about" className="text-xl">
                                <h4>À propos</h4>
                            </a>
                            <a href="#contact" className="text-xl">
                                <h4>Contact</h4>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            <h1 className="text-center py-28">Portfolio</h1>

            <section className="pb-32" id="about">
                <div className="flex items-center justify-between">
                    <div className="px-30">
                        <Image src={"/images/photo_2_2025-06-30_23-21-45.jpg"}
                               alt={""}
                               className="w-[90vw] h-auto object-cover rounded-tr-[100px]"
                               width={500}
                               height={500}
                        />
                    </div>
                    <div className={"px-10"}>
                        <div className="flex justify-end px-30">
                            <div className="w-[13vw] h-1 bg-black"></div>
                        </div>
                        <h2 className="text-right pb-8 px-30 pt-10">Gaëtan Rogeron</h2>
                        <h3 className="text-right pb-8 px-30">Développeur Web Fullstack Freelance</h3>
                        <p className="text-right pl-60 px-30">
                            Je m&apos;appelle Gaëtan Rogeron, développeur web
                            fullstack et freelance basé en France.
                            Étudiant en double licence Mathématiques et
                            Informatique à l&apos;Université Côte d&apos;Azur,
                            je travaille principalement avec Next.js,
                            Payload CMS, Docker et PostgreSQL.
                            Je porte une attention particulière à la qualité du code,
                            à la sécurité des applications et à la performance.
                            Je m&apos;intéresse également à Rust et à la cybersécurité,
                            dans une démarche d&apos;amélioration continue.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#f2f2f2]" id="projects">
                <div className="flex justify-center pb-15">
                    <div className="w-[13vw] h-1 bg-black"></div>
                </div>
                <h2 className="text-center pb-20">Projets</h2>
                <div className="relative pb-44">
                    <Carousel opts={{ loop: true }} >
                        <CarouselContent className="relative flex">

                            <CarouselItem className="basis-1/3 px-4 flex flex-col items-center">
                                <a href="#flitewatch">
                                    <img src="/images/FliteWatch/FliteWatch_1.png" className="rounded-3xl object-cover w-full h-72" />
                                    <p className="text-center mt-4">Flite Watch</p>
                                </a>
                            </CarouselItem>

                            <CarouselItem className="basis-1/3 px-4 flex flex-col items-center">
                                <a href="#emmazepter">
                                    <img src="/images/EmmaZepter/EmmaZepter_1.png" className="rounded-3xl object-cover w-full h-72" />
                                    <p className="text-center mt-4">Emma Zepter</p>
                                </a>
                            </CarouselItem>

                            <CarouselItem className="basis-1/3 px-4 flex flex-col items-center">
                                <a href="#rendezvousai">
                                    <img src="/images/Rendez-vous-ai/rdv_1.png" className="rounded-3xl object-cover w-full h-72" />
                                    <p className="text-center mt-4">Rendez-vous.ia</p>
                                </a>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 px-4 flex flex-col items-center">
                                <a href="#absolumentparfumeur">
                                    <img src="/images/Absolument-Parfumeur/AP_2.png" className="rounded-3xl object-cover w-full h-72" />
                                    <p className="text-center mt-4">Absolument Parfumeur</p>
                                </a>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious variant="default"/>
                        <CarouselNext variant="default"/>
                    </Carousel>
                </div>
            </section>

            <section className="bg-[#262626] text-white px-30 pb-10" id="flitewatch">
                <div className="flex items-center justify-between py-15">
                    <h2>Flite Watch</h2>
                    <div className="flex justify-end">
                        <div className="w-[60vw] h-1 bg-white"></div>
                    </div>
                </div>
                <p className="pb-10 pr-52 text-left">
                    Développement de pages statiques pour le site vitrine de la
                    compagnie Flite Watch.
                    Travail axé sur la performance, le responsive et la clarté de navigation.
                </p>

                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img src={"/images/FliteWatch/FliteWatch_1.png"} alt={""}/></CarouselItem>
                        <CarouselItem><img src={"/images/FliteWatch/FliteWatch_2.png"} alt={""}/></CarouselItem>
                        <CarouselItem><img src={"/images/FliteWatch/FliteWatch_3.png"} alt={""}/></CarouselItem>
                    </CarouselContent>
                    <div className="text-black">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>

                <a href={"https://www.flitewatch.aero/"} target="_blank" ><p className="py-8 hover:underline">visitez le site</p></a>
            </section>

            <section className="px-30 py-32" id="emmazepter">
                <div className="flex items-center justify-between py-15">
                    <div className="flex justify-end">
                        <div className="w-[60vw] h-1 bg-black"></div>
                    </div>
                    <h2>Emma Zepter</h2>
                </div>
                <p className="text-right pb-6">Création du site temporaire &quot;Launching Soon&quot; pour Emma Zepter,
                    avec intégration d&apos;un système d&apos;inscription
                    à la newsletter via formulaire d&apos;email</p>
                <div className="flex items-center">
                    <Image src={"/images/EmmaZepter/EmmaZepter_1.png"} alt={""} width={2000} height={2000} style={{ objectFit: "contain" }} />
                </div>
                <a href="https://www.emmazepter.com/" target="_blank" className="flex py-4 hover:underline justify-end">
                    <p>visitez le site</p>
                </a>
            </section>

            <section className="px-30 py-32 bg-[#f2f2f2]" id="rendezvousai">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl font-bold">Rendez-vous.ai</h2>
                    <div className="flex justify-end">
                        <div className="w-[55vw] h-1 bg-black"></div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-start gap-8">

                    <div className="flex flex-col gap-6 w-[full] lg:w-[40%]">
                        <img
                            src="/images/Rendez-vous-ai/rdv_3.png"
                            alt="Dashboard Rendez-vous.ai"
                            className="rounded-tr-[100px] object-cover w-full"
                        />
                        <img
                            src="/images/Rendez-vous-ai/rdv_2.png"
                            alt="Calendrier Rendez-vous.ai"
                            className="object-cover w-full"
                        />
                        <p>
                            J&apos;ai également contribué au développement des outils permettant à l&apos;IA de connaître en temps réel les créneaux disponibles et de gérer automatiquement la prise de rendez-vous.
                        </p>
                        <p>
                            En complément, j&apos;ai pris en charge les fonctionnalités suivantes :
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Intégration d&apos;un chatbot intelligent relié à l&apos;IA avec accès aux outils internes via le serveur Node.js</li>
                            <li>Développement d&apos;une page de chat permettant aux utilisateurs de visualiser l&apos;historique des conversations</li>
                            <li>Création de la page de paramètres (langue, avatar, informations personnelles)</li>
                            <li>Internationalisation complète du dashboard en 5 langues</li>
                            <li>Développement de la page de connexion (signin)</li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-[40%] text-justify flex flex-col gap-6">
                        <p>
                            Participation au développement du dashboard SaaS de Rendez-vous.ai, une plateforme d&apos;automatisation des appels et de la prise de rendez-vous par IA.
                        </p>
                        <p>
                            J&apos;ai conçu et développé l&apos;ensemble de la gestion des événements en interne, reposant sur Payload CMS :
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Calendrier personnalisable (vues jour, semaine, mois)</li>
                            <li>Gestion avancée des catégories</li>
                            <li>Création, modification et suppression des événements via des interfaces dédiées</li>
                            <li>Stockage structuré des événements dans la base de données interne</li>
                            <li>Option de synchronisation avec les agendas Outlook pour les utilisateurs qui le souhaitent</li>
                        </ul>
                        <img
                            src="/images/Rendez-vous-ai/rdv_5.png"
                            alt="Calendrier Rendez-vous.ai"
                            className="object-cover w-full pt-12"
                        />

                    </div>
                </div>
                <div className="px-70 pt-20">
                    <p className="pb-6">
                        Pour l&apos;ensemble de ces fonctionnalités, j&apos;ai assuré le développement frontend, backend et infrastructure, sans recourir à des solutions clés-en-main, afin de garantir flexibilité, sécurité et maîtrise technique.
                    </p>
                    <p>
                        Ces réalisations s&apos;inscrivent dans le cadre plus large de Rendez-vous.ai, qui propose un agent vocal intelligent disponible 24/7 pour automatiser la prise d&apos;appels et de rendez-vous.
                    </p>
                    <a href="https://rendez-vous.ai/" target="_blank" className="hover:underline"><p>Site vitrine</p></a>
                </div>
            </section>

            <section className="px-30 pb-32" id="absolumentparfumeur">
                <div className="flex items-center justify-between py-15">
                    <div className="flex justify-end">
                        <div className="w-[40vw] h-1 bg-black"></div>
                    </div>
                    <h2>Absolument Parfumeur</h2>
                </div>
                <div className="text-right pb-32 pl-96">
                    <p className="pb-6">
                        Développement complet du site e-commerce pour la maison de parfumerie
                        Absolument Parfumeur.
                    </p>
                    <h5 className="pl-60">
                        J&apos;ai pris en charge l&apos;architecture technique et le développement fullstack :
                        Le design a été fourni par le client, et j&apos;ai assuré l&apos;intégration technique et le développement de l&apos;ensemble du site
                        jusqu&apos;à sa finalisation.
                    </h5>
                </div>


                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img src={"/images/Absolument-Parfumeur/AP_2.png"} alt={""}/></CarouselItem>
                        <CarouselItem><img src={"/images/Absolument-Parfumeur/AP_1.png"} alt={""}/></CarouselItem>
                        <CarouselItem><img src={"/images/Absolument-Parfumeur/AP_3.png"} alt={""}/></CarouselItem>
                    </CarouselContent>
                    <div className="text-black">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>

                <h5 className="text-right py-6">Le déploiement est en cours, la mise en ligne est prévue</h5>
                <ul className="list-disc list-inside py-12">
                    <li>Mise en place du backend avec PostgreSQL et Payload CMS</li>
                    <li>Création des pages produits et collections entièrement dynamiques</li>
                    <li>Formulaire de contact intégré pour faciliter les échanges avec les clients</li>
                    <li>Gestion multilingue du site en Français et Anglais</li>
                    <li>Optimisation SEO côté code pour améliorer la visibilité en ligne</li>
                </ul>
            </section>

            <footer className="bg-[#262626] text-white px-30 py-17" id="contact">
                <h3>Contact</h3>
                <h4>Vous avez un projet ou une question ? N&apos;hésitez pas à me contacter :</h4>

                <div className="flex flex-wrap items-center justify-between py-4 px-40">
                    <a href="https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/" target="_blank" className="flex items-center gap-4 hover:opacity-80">
                        <img src="/images/linkedin-logo-vector.svg" alt="LinkedIn" className="w-15 h-15 rounded-full p-1" />
                        <span>Linkedin</span>
                    </a>

                    <a href="https://github.com/gaetan-rogeron" target="_blank" className="flex items-center gap-4 hover:opacity-80">
                        <img src="/images/icons8-github.svg" alt="GitHub" className="w-15 h-15 rounded-full  p-1" />
                        <span>GitHub</span>
                    </a>

                    <a href="mailto:gaetan.dev@pm.me" className="flex items-center gap-4 hover:opacity-80">
                        <img src="/images/mail%20logo.svg" alt="Email" className="w-15 h-15 rounded-full p-1" />
                        <span>gaetan.dev@pm.me</span>
                    </a>
                </div>

            </footer>
        </>
    );
}