import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import fliteWatch1 from "../../public/images/FliteWatch/FliteWatch_1.png";
import emmaZepter1 from "../../public/images/EmmaZepter/EmmaZepter_1.png";
import rdvAi1 from "../../public/images/Rendez-vous-ai/rdv_1.png";
import ap2 from "../../public/images/Absolument-Parfumeur/AP_2.png";

export default function ProjectsSection() {
  return (
    <section className="bg-[#f2f2f2] py-[4vh] lg:py-0" id="projects">
      <div className="flex justify-center pb-[4vh] lg:pb-[7vh] pt-[4vh] lg:pt-0">
        <div className="w-[20vw] sm:w-[15vw] lg:w-[13vw] h-[0.2vh] bg-black"></div>
      </div>
      <h2 className="text-center pb-[6vh] lg:pb-[10vh] text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">
        Projets
      </h2>
      <div className="relative pb-[10vh] lg:pb-[22vh] px-[2vw] lg:px-0">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent className="relative flex">
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
              <a href="#flitewatch">
                <Image
                  src={fliteWatch1}
                  alt="Flite Watch"
                  width={400}
                  height={300}
                  className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                  placeholder="blur"
                />
                <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">
                  Flite Watch
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
              <a href="#emmazepter">
                <Image
                  src={emmaZepter1}
                  alt="Emma Zepter"
                  width={400}
                  height={300}
                  className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                  placeholder="blur"
                />
                <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">
                  Emma Zepter
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
              <a href="#rendezvousai">
                <Image
                  src={rdvAi1}
                  alt="Rendez-vous.ia"
                  width={400}
                  height={300}
                  className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                  placeholder="blur"
                />
                <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">
                  Rendez-vous.ia
                </p>
              </a>
            </CarouselItem>
            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
              <a href="#absolumentparfumeur">
                <Image
                  src={ap2}
                  alt="Absolument Parfumeur"
                  width={400}
                  height={300}
                  className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
                  placeholder="blur"
                />
                <p className="text-center mt-[2vh] text-[1.8vh] sm:text-[2vh]">
                  Absolument Parfumeur
                </p>
              </a>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            variant="default"
            className="left-[1vw] lg:left-[2vw]"
          />
          <CarouselNext
            variant="default"
            className="right-[1vw] lg:right-[2vw]"
          />
        </Carousel>
      </div>
    </section>
  );
}
