import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <header className="bg-[#f2f2f2] w-full py-[1vh] px-[1vw] lg:px-[2vw]">
                <div className="flex items-center justify-between">
                    <Image
                        src={"/images/LOGO.svg"}
                        alt={""}
                        width={120}
                        height={32}
                        className="lg:w-[10vw] lg:h-[9vh]"
                        style={{ objectFit: "cover" }}
                    />
                    <div>
                        <nav className="flex flex-col sm:flex-row space-y-[0.5vh] sm:space-y-0 sm:space-x-[2vw] lg:space-x-[8vw]">
                            <a href="#projects" className="text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]">
                                <h4>Projets</h4>
                            </a>
                            <a href="#about" className="text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]">
                                <h4>À propos</h4>
                            </a>
                            <a href="#contact" className="text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]">
                                <h4>Contact</h4>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            <h1 className="text-center py-[6vh] sm:py-[8vh] lg:py-[12vh] text-[3vh] sm:text-[4vh] lg:text-[5vh]">
                Portfolio
            </h1>

            <section className="pb-[8vh] sm:pb-[12vh] lg:pb-[16vh]" id="about">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[4vh] lg:gap-0">
                    <div className="px-[2vw] sm:px-[3vw] lg:px-[6vw] w-full lg:w-auto">
                        <Image
                            src={"/images/photo_2_2025-06-30_23-21-45.jpg"}
                            alt={""}
                            className="w-full lg:w-[90vw] h-auto object-cover rounded-tr-[3vh] lg:rounded-tr-[6vh]"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="px-[2vw] sm:px-[3vw] lg:px-[2vw] w-full lg:w-auto">
                        <div className="flex justify-center lg:justify-end px-[2vw] lg:px-[6vw]">
                            <div className="w-[20vw] sm:w-[15vw] lg:w-[13vw] h-[0.2vh] bg-black"></div>
                        </div>
                        <h2 className="text-center lg:text-right pb-[2vh] lg:pb-[4vh] px-[2vw] lg:px-[6vw] pt-[3vh] lg:pt-[5vh] text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">
                            Gaëtan Rogeron
                        </h2>
                        <h3 className="text-center lg:text-right pb-[2vh] lg:pb-[4vh] px-[2vw] lg:px-[6vw] text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]">
                            Développeur Web Fullstack Freelance
                        </h3>
                        <p className="text-center lg:text-right px-[2vw] sm:px-[3vw] lg:pl-[12vw] lg:px-[6vw] text-[1.8vh] sm:text-[2vh]">
                            Développeur web fullstack et freelance basé en France. Étudiant en double licence Mathématiques et
                            Informatique à l&apos;Université Côte d&apos;Azur, je travaille principalement avec Next.js, Payload CMS,
                            Docker et PostgreSQL. Je porte une attention particulière à la qualité du code, à la sécurité des
                            applications et à la performance. Je m&apos;intéresse également à Rust et à la cybersécurité, dans une
                            démarche d&apos;amélioration continue.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#f2f2f2] py-[4vh] lg:py-0" id="projects">
                <div className="flex justify-center pb-[4vh] lg:pb-[7vh] pt-[4vh] lg:pt-0">
                    <div className="w-[20vw] sm:w-[15vw] lg:w-[13vw] h-[0.2vh] bg-black"></div>
                </div>
                <h2 className="text-center pb-[6vh] lg:pb-[10vh] text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">Projets</h2>
                <div className="relative pb-[10vh] lg:pb-[22vh] px-[2vw] lg:px-0">
                    <Carousel opts={{ loop: true }} className="w-full">
                        <CarouselContent className="relative flex">
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
                                <a href="#flitewatch">
                                    <img
                                        src="/images/FliteWatch/FliteWatch_1.png"
                                        className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                                    />
                                    <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">Flite Watch</p>
                                </a>
                            </CarouselItem>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
                                <a href="#emmazepter">
                                    <img
                                        src="/images/EmmaZepter/EmmaZepter_1.png"
                                        className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                                    />
                                    <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">Emma Zepter</p>
                                </a>
                            </CarouselItem>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
                                <a href="#rendezvousai">
                                    <img
                                        src="/images/Rendez-vous-ai/rdv_1.png"
                                        className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                                    />
                                    <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">Rendez-vous.ia</p>
                                </a>
                            </CarouselItem>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
                                <a href="#absolumentparfumeur">
                                    <img
                                        src="/images/Absolument-Parfumeur/AP_2.png"
                                        className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                                    />
                                    <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">Absolument Parfumeur</p>
                                </a>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious variant="default" className="left-[1vw] lg:left-[2vw]" />
                        <CarouselNext variant="default" className="right-[1vw] lg:right-[2vw]" />
                    </Carousel>
                </div>
            </section>

            <section
                className="bg-[#262626] text-white px-[2vw] sm:px-[3vw] lg:px-[6vw] pb-[4vh] lg:pb-[5vh]"
                id="flitewatch"
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-[4vh] lg:py-[7vh] gap-[2vh] sm:gap-0">
                    <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">Flite Watch</h2>
                    <div className="flex justify-end w-full sm:w-auto">
                        <div className="w-[40vw] sm:w-[50vw] lg:w-[60vw] h-[0.2vh] bg-white"></div>
                    </div>
                </div>
                <p className="pb-[3vh] lg:pb-[5vh] pr-0 sm:pr-[8vw] lg:pr-[26vw] text-left text-[1.8vh] sm:text-[2vh]">
                    Développement de pages statiques pour le site vitrine de la compagnie Flite Watch. Travail axé sur la
                    performance, le responsive et la clarté de navigation.
                </p>
                <Carousel className="mb-[2vh]">
                    <CarouselContent>
                        <CarouselItem>
                            <img
                                src={"/images/FliteWatch/FliteWatch_1.png"}
                                alt={""}
                                className="w-full h-auto object-cover rounded-[1vh]"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={"/images/FliteWatch/FliteWatch_2.png"}
                                alt={""}
                                className="w-full h-auto object-cover rounded-[1vh]"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={"/images/FliteWatch/FliteWatch_3.png"}
                                alt={""}
                                className="w-full h-auto object-cover rounded-[1vh]"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-black">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
                <a href={"https://www.flitewatch.aero/"} target="_blank" rel="noreferrer">
                    <p className="py-[2vh] lg:py-[4vh] hover:underline text-[1.8vh] sm:text-[2vh]">visitez le site</p>
                </a>
            </section>

            <section className="px-[2vw] sm:px-[3vw] lg:px-[6vw] py-[8vh] lg:py-[16vh]" id="emmazepter">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-[4vh] lg:py-[7vh] gap-[2vh] sm:gap-0">
                    <div className="flex justify-start sm:justify-end w-full sm:w-auto order-2 sm:order-1">
                        <div className="w-[40vw] sm:w-[50vw] lg:w-[60vw] h-[0.2vh] bg-black"></div>
                    </div>
                    <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh] order-1 sm:order-2">Emma Zepter</h2>
                </div>
                <p className="text-left sm:text-right pb-[3vh] text-[1.8vh] sm:text-[2vh]">
                    Création du site temporaire &quot;Launching Soon&quot; pour Emma Zepter, avec intégration d&apos;un système
                    d&apos;inscription à la newsletter via formulaire d&apos;email
                </p>
                <div className="flex items-center">
                    <Image
                        src={"/images/EmmaZepter/EmmaZepter_1.png"}
                        alt={""}
                        width={2000}
                        height={2000}
                        className="w-full h-auto object-contain rounded-[1vh]"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <a
                    href="https://www.emmazepter.com/"
                    target="_blank"
                    className="flex py-[2vh] hover:underline justify-start sm:justify-end"
                    rel="noreferrer"
                >
                    <p className="text-[1.8vh] sm:text-[2vh]">visitez le site</p>
                </a>
            </section>

            <section className="px-[2vw] sm:px-[3vw] lg:px-[6vw] py-[8vh] lg:py-[16vh] bg-[#f2f2f2]" id="rendezvousai">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-[4vh] lg:mb-[8vh] gap-[2vh] sm:gap-0">
                    <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">Rendez-vous.ai</h2>
                    <div className="flex justify-end w-full sm:w-auto">
                        <div className="w-[40vw] sm:w-[45vw] lg:w-[55vw] h-[0.2vh] bg-black"></div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-[4vh]">
                    <div className="flex flex-col gap-[3vh] w-full lg:w-[40%]">
                        <img
                            src="/images/Rendez-vous-ai/rdv_3.png"
                            alt="Dashboard Rendez-vous.ai"
                            className="rounded-tr-[3vh] lg:rounded-tr-[6vh] object-cover w-full"
                        />
                        <img
                            src="/images/Rendez-vous-ai/rdv_2.png"
                            alt="Calendrier Rendez-vous.ai"
                            className="object-cover w-full rounded-[1vh]"
                        />
                        <p className="text-[1.8vh] sm:text-[2vh]">
                            J&apos;ai également contribué au développement des outils permettant à l&apos;IA de connaître en temps
                            réel les créneaux disponibles et de gérer automatiquement la prise de rendez-vous.
                        </p>
                        <p className="text-[1.8vh] sm:text-[2vh]">
                            En complément, j&apos;ai pris en charge les fonctionnalités suivantes :
                        </p>
                        <ul className="list-disc list-inside text-[1.8vh] sm:text-[2vh] space-y-[0.5vh]">
                            <li>
                                Intégration d&apos;un chatbot intelligent relié à l&apos;IA avec accès aux outils internes via le
                                serveur Node.js
                            </li>
                            <li>
                                Développement d&apos;une page de chat permettant aux utilisateurs de visualiser l&apos;historique des
                                conversations
                            </li>
                            <li>Création de la page de paramètres (langue, avatar, informations personnelles)</li>
                            <li>Internationalisation complète du dashboard en 5 langues</li>
                            <li>Développement de la page de connexion (signin)</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[40%] text-justify flex flex-col gap-[3vh]">
                        <p className="text-[1.8vh] sm:text-[2vh]">
                            Participation au développement du dashboard SaaS de Rendez-vous.ai, une plateforme d&apos;automatisation
                            des appels et de la prise de rendez-vous par IA.
                        </p>
                        <p className="text-[1.8vh] sm:text-[2vh]">
                            J&apos;ai conçu et développé l&apos;ensemble de la gestion des événements en interne, reposant sur Payload
                            CMS :
                        </p>
                        <ul className="list-disc list-inside text-[1.8vh] sm:text-[2vh] space-y-[0.5vh]">
                            <li>Calendrier personnalisable (vues jour, semaine, mois)</li>
                            <li>Gestion avancée des catégories</li>
                            <li>Création, modification et suppression des événements via des interfaces dédiées</li>
                            <li>Stockage structuré des événements dans la base de données interne</li>
                            <li>Option de synchronisation avec les agendas Outlook pour les utilisateurs qui le souhaitent</li>
                        </ul>
                        <img
                            src="/images/Rendez-vous-ai/rdv_5.png"
                            alt="Calendrier Rendez-vous.ai"
                            className="object-cover w-full pt-[3vh] lg:pt-[6vh] rounded-[1vh]"
                        />
                    </div>
                </div>
                <div className="px-0 sm:px-[3vw] lg:px-[14vw] pt-[6vh] lg:pt-[10vh]">
                    <p className="pb-[3vh] text-[1.8vh] sm:text-[2vh]">
                        Pour l&apos;ensemble de ces fonctionnalités, j&apos;ai assuré le développement frontend, backend et
                        infrastructure, sans recourir à des solutions clés-en-main, afin de garantir flexibilité, sécurité et
                        maîtrise technique.
                    </p>
                    <p className="text-[1.8vh] sm:text-[2vh] mb-[2vh]">
                        Ces réalisations s&apos;inscrivent dans le cadre plus large de Rendez-vous.ai, qui propose un agent vocal
                        intelligent disponible 24/7 pour automatiser la prise d&apos;appels et de rendez-vous.
                    </p>
                    <a href="https://rendez-vous.ai/" target="_blank" className="hover:underline" rel="noreferrer">
                        <p className="text-[1.8vh] sm:text-[2vh]">Site vitrine</p>
                    </a>
                </div>
            </section>

            <section className="px-[2vw] sm:px-[3vw] lg:px-[6vw] pb-[8vh] lg:pb-[16vh]" id="absolumentparfumeur">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-[4vh] lg:py-[7vh] gap-[2vh] sm:gap-0">
                    <div className="flex justify-start sm:justify-end w-full sm:w-auto order-2 sm:order-1">
                        <div className="w-[30vw] sm:w-[35vw] lg:w-[40vw] h-[0.2vh] bg-black"></div>
                    </div>
                    <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh] order-1 sm:order-2">Absolument Parfumeur</h2>
                </div>
                <div className="text-left sm:text-right pb-[8vh] lg:pb-[16vh] pl-0 sm:pl-[8vw] lg:pl-[24vw]">
                    <p className="pb-[3vh] text-[1.8vh] sm:text-[2vh]">
                        Développement complet du site e-commerce pour la maison de parfumerie Absolument Parfumeur.
                    </p>
                    <h5 className="pl-0 sm:pl-[6vw] lg:pl-[12vw] text-[1.8vh] sm:text-[2vh]">
                        J&apos;ai pris en charge l&apos;architecture technique et le développement fullstack : Le design a été
                        fourni par le client, et j&apos;ai assuré l&apos;intégration technique et le développement de
                        l&apos;ensemble du site jusqu&apos;à sa finalisation.
                    </h5>
                </div>
                <Carousel className="mb-[2vh]">
                    <CarouselContent>
                        <CarouselItem>
                            <img
                                src={"/images/Absolument-Parfumeur/AP_2.png"}
                                alt={""}
                                className="w-full h-auto object-cover rounded-[1vh]"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={"/images/Absolument-Parfumeur/AP_1.png"}
                                alt={""}
                                className="w-full h-auto object-cover rounded-[1vh]"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                src={"/images/Absolument-Parfumeur/AP_3.png"}
                                alt={""}
                                className="w-full h-auto object-cover rounded-[1vh]"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <div className="text-black">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
                <h5 className="text-left sm:text-right py-[3vh] text-[1.8vh] sm:text-[2vh]">
                    Le déploiement est en cours, la mise en ligne est prévue
                </h5>
                <ul className="list-disc list-inside py-[3vh] lg:py-[6vh] text-[1.8vh] sm:text-[2vh] space-y-[1vh]">
                    <li>Mise en place du backend avec PostgreSQL et Payload CMS</li>
                    <li>Création des pages produits et collections entièrement dynamiques</li>
                    <li>Formulaire de contact intégré pour faciliter les échanges avec les clients</li>
                    <li>Gestion multilingue du site en Français et Anglais</li>
                    <li>Optimisation SEO côté code pour améliorer la visibilité en ligne</li>
                </ul>
            </section>

            <footer className="bg-[#262626] text-white px-[2vw] sm:px-[3vw] lg:px-[6vw] py-[4vh] lg:py-[8vh]" id="contact">
                <h3 className="text-[2.2vh] sm:text-[2.5vh] lg:text-[3vh] mb-[2vh]">Contact</h3>
                <h4 className="text-[1.8vh] sm:text-[2vh] lg:text-[2.2vh] mb-[3vh]">
                    Vous avez un projet ou une question ? N&apos;hésitez pas à me contacter :
                </h4>
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between py-[2vh] px-0 sm:px-[3vw] lg:px-[8vw] gap-[2vh] sm:gap-0">
                    <a
                        href="https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/"
                        target="_blank"
                        className="flex items-center gap-[2vw] hover:opacity-80"
                        rel="noreferrer"
                    >
                        <img
                            src="/images/linkedin-logo-vector.svg"
                            alt="LinkedIn"
                            className="w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full p-[0.2vw]"
                        />
                        <span className="text-[1.8vh] sm:text-[2vh]">Linkedin</span>
                    </a>
                    <a
                        href="https://github.com/gaetan-rogeron"
                        target="_blank"
                        className="flex items-center gap-[2vw] hover:opacity-80"
                        rel="noreferrer"
                    >
                        <img
                            src="/images/icons8-github.svg"
                            alt="GitHub"
                            className="w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full p-[0.2vw]"
                        />
                        <span className="text-[1.8vh] sm:text-[2vh]">GitHub</span>
                    </a>
                    <a href="mailto:gaetan.dev@pm.me" className="flex items-center gap-[2vw] hover:opacity-80">
                        <img
                            src="/images/mail%20logo.svg"
                            alt="Email"
                            className="w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full p-[0.2vw]"
                        />
                        <span className="text-[1.8vh] sm:text-[2vh]">gaetan.dev@pm.me</span>
                    </a>
                </div>
            </footer>
        </>
    )
}
