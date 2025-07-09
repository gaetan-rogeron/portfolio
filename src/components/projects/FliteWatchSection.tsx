import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import fliteWatch1 from "../../../public/images/FliteWatch/FliteWatch_1.png";
import fliteWatch2 from "../../../public/images/FliteWatch/FliteWatch_2.png";
import fliteWatch3 from "../../../public/images/FliteWatch/FliteWatch_3.png";

export default function FliteWatchSection() {
  return (
    <section
      className="bg-[#262626] text-white px-[2vw] sm:px-[3vw] lg:px-[6vw] pb-[4vh] lg:pb-[5vh]"
      id="flitewatch"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-[4vh] lg:py-[7vh] gap-[2vh] sm:gap-0">
        <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">
          Flite Watch
        </h2>
        <div className="flex justify-end w-full sm:w-auto">
          <div className="w-[40vw] sm:w-[50vw] lg:w-[60vw] h-[0.2vh] bg-white"></div>
        </div>
      </div>
      <p className="pb-[3vh] lg:pb-[5vh] pr-0 sm:pr-[8vw] lg:pr-[26vw] text-left text-[1.8vh] sm:text-[2vh]">
        Développement de pages statiques pour le site vitrine de la compagnie
        Flite Watch. Travail axé sur la performance, le responsive et la clarté
        de navigation.
      </p>
      <Carousel className="mb-[2vh]">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={fliteWatch1}
              alt={"Flite Watch screenshot 1"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-[1vh]"
              placeholder="blur"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={fliteWatch2}
              alt={"Flite Watch screenshot 2"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-[1vh]"
              placeholder="blur"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={fliteWatch3}
              alt={"Flite Watch screenshot 3"}
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
      <a href={"https://www.flitewatch.aero/"} target="_blank" rel="noreferrer">
        <p className="py-[2vh] lg:py-[4vh] hover:underline text-[1.8vh] sm:text-[2vh]">
          visitez le site
        </p>
      </a>
    </section>
  );
}
