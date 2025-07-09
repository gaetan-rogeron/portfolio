import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ap2 from "../../../public/images/Absolument-Parfumeur/AP_2.png";
import ap1 from "../../../public/images/Absolument-Parfumeur/AP_1.png";
import ap3 from "../../../public/images/Absolument-Parfumeur/AP_3.png";

export default function AbsolumentParfumeurSection() {
  return (
    <section
      className="px-[2vw] sm:px-[3vw] lg:px-[6vw] pb-[8vh] lg:pb-[16vh]"
      id="absolumentparfumeur"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-[4vh] lg:py-[7vh] gap-[2vh] sm:gap-0">
        <div className="flex justify-start sm:justify-end w-full sm:w-auto order-2 sm:order-1">
          <div className="w-[30vw] sm:w-[35vw] lg:w-[40vw] h-[0.2vh] bg-black"></div>
        </div>
        <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh] order-1 sm:order-2">
          Absolument Parfumeur
        </h2>
      </div>
      <div className="text-left sm:text-right pb-[8vh] lg:pb-[16vh] pl-0 sm:pl-[8vw] lg:pl-[24vw]">
        <p className="pb-[3vh] text-[1.8vh] sm:text-[2vh]">
          Développement complet du site e-commerce pour la maison de parfumerie
          Absolument Parfumeur.
        </p>
        <h5 className="pl-0 sm:pl-[6vw] lg:pl-[12vw] text-[1.8vh] sm:text-[2vh]">
          J&apos;ai pris en charge l&apos;architecture technique et le
          développement fullstack : Le design a été fourni par le client, et
          j&apos;ai assuré l&apos;intégration technique et le développement de
          l&apos;ensemble du site jusqu&apos;à sa finalisation.
        </h5>
      </div>
      <Carousel className="mb-[2vh]">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={ap2}
              alt={"Absolument Parfumeur screenshot 1"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-[1vh]"
              placeholder="blur"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={ap1}
              alt={"Absolument Parfumeur screenshot 2"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-[1vh]"
              placeholder="blur"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={ap3}
              alt={"Absolument Parfumeur screenshot 3"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-[1vh]"
              placeholder="blur"
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
        <li>
          Création des pages produits et collections entièrement dynamiques
        </li>
        <li>
          Formulaire de contact intégré pour faciliter les échanges avec les
          clients
        </li>
        <li>Gestion multilingue du site en Français et Anglais</li>
        <li>
          Optimisation SEO côté code pour améliorer la visibilité en ligne
        </li>
      </ul>
    </section>
  );
}
