import Image from "next/image";
import rdvAi3 from "../../../public/images/Rendez-vous-ai/rdv_3.png";
import rdvAi2 from "../../../public/images/Rendez-vous-ai/rdv_2.png";
import rdvAi5 from "../../../public/images/Rendez-vous-ai/rdv_5.png";

export default function RendezVousAiSection() {
  return (
    <section
      className="px-[2vw] sm:px-[3vw] lg:px-[6vw] py-[8vh] lg:py-[16vh] bg-[#f2f2f2]"
      id="rendezvousai"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-[4vh] lg:mb-[8vh] gap-[2vh] sm:gap-0">
        <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">
          Rendez-vous.ai
        </h2>
        <div className="flex justify-end w-full sm:w-auto">
          <div className="w-[40vw] sm:w-[45vw] lg:w-[55vw] h-[0.2vh] bg-black"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-[4vh]">
        <div className="flex flex-col gap-[3vh] w-full lg:w-[40%]">
          <Image
            src={rdvAi3}
            alt="Dashboard Rendez-vous.ai"
            width={800}
            height={600}
            className="rounded-tr-[3vh] lg:rounded-tr-[6vh] object-cover w-full"
            placeholder="blur"
          />
          <Image
            src={rdvAi2}
            alt="Calendrier Rendez-vous.ai"
            width={800}
            height={600}
            className="object-cover w-full rounded-[1vh]"
            placeholder="blur"
          />
          <p className="text-[1.8vh] sm:text-[2vh]">
            J&apos;ai également contribué au développement des outils permettant
            à l&apos;IA de connaître en temps réel les créneaux disponibles et
            de gérer automatiquement la prise de rendez-vous.
          </p>
          <p className="text-[1.8vh] sm:text-[2vh]">
            En complément, j&apos;ai pris en charge les fonctionnalités
            suivantes :
          </p>
          <ul className="list-disc list-inside text-[1.8vh] sm:text-[2vh] space-y-[0.5vh]">
            <li>
              Intégration d&apos;un chatbot intelligent relié à l&apos;IA avec
              accès aux outils internes via le serveur Node.js
            </li>
            <li>
              Développement d&apos;une page de chat permettant aux utilisateurs
              de visualiser l&apos;historique des conversations
            </li>
            <li>
              Création de la page de paramètres (langue, avatar, informations
              personnelles)
            </li>
            <li>Internationalisation complète du dashboard en 5 langues</li>
            <li>Développement de la page de connexion (signin)</li>
          </ul>
        </div>
        <div className="w-full lg:w-[40%] text-justify flex flex-col gap-[3vh]">
          <p className="text-[1.8vh] sm:text-[2vh]">
            Participation au développement du dashboard SaaS de Rendez-vous.ai,
            une plateforme d&apos;automatisation des appels et de la prise de
            rendez-vous par IA.
          </p>
          <p className="text-[1.8vh] sm:text-[2vh]">
            J&apos;ai conçu et développé l&apos;ensemble de la gestion des
            événements en interne, reposant sur Payload CMS :
          </p>
          <ul className="list-disc list-inside text-[1.8vh] sm:text-[2vh] space-y-[0.5vh]">
            <li>Calendrier personnalisable (vues jour, semaine, mois)</li>
            <li>Gestion avancée des catégories</li>
            <li>
              Création, modification et suppression des événements via des
              interfaces dédiées
            </li>
            <li>
              Stockage structuré des événements dans la base de données interne
            </li>
            <li>
              Option de synchronisation avec les agendas Outlook pour les
              utilisateurs qui le souhaitent
            </li>
          </ul>
          <Image
            src={rdvAi5}
            alt="Calendrier Rendez-vous.ai"
            width={800}
            height={600}
            className="object-cover w-full pt-[3vh] lg:pt-[6vh] rounded-[1vh]"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="px-0 sm:px-[3vw] lg:px-[14vw] pt-[6vh] lg:pt-[10vh]">
        <p className="pb-[3vh] text-[1.8vh] sm:text-[2vh]">
          Pour l&apos;ensemble de ces fonctionnalités, j&apos;ai assuré le
          développement frontend, backend et infrastructure, sans recourir à des
          solutions clés-en-main, afin de garantir flexibilité, sécurité et
          maîtrise technique.
        </p>
        <p className="text-[1.8vh] sm:text-[2vh] mb-[2vh]">
          Ces réalisations s&apos;inscrivent dans le cadre plus large de
          Rendez-vous.ai, qui propose un agent vocal intelligent disponible 24/7
          pour automatiser la prise d&apos;appels et de rendez-vous.
        </p>
        <a
          href="https://rendez-vous.ai/"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          <p className="text-[1.8vh] sm:text-[2vh]">Site vitrine</p>
        </a>
      </div>
    </section>
  );
}
