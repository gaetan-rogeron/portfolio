import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

import fliteWatch1 from "../../public/images/FliteWatch/FliteWatch_1.png";
import emmaZepter1 from "../../public/images/EmmaZepter/EmmaZepter_1.png";
import rdvAi1 from "../../public/images/Rendez-vous-ai/rdv_1.png";
import ap2 from "../../public/images/Absolument-Parfumeur/AP_2.png";

type Project = {
  id: string;
  image: StaticImageData;
  alt: string;
  label: string;
  href: string;
};

const projects: Project[] = [
  {
    id: "flitewatch",
    image: fliteWatch1,
    alt: "Flite Watch",
    label: "Flite Watch",
    href: "#flitewatch",
  },
  {
    id: "emmazepter",
    image: emmaZepter1,
    alt: "Emma Zepter",
    label: "Emma Zepter",
    href: "#emmazepter",
  },
  {
    id: "rendezvousai",
    image: rdvAi1,
    alt: "Rendez-vous.ia",
    label: "Rendez-vous.ia",
    href: "#rendezvousai",
  },
  {
    id: "absolumentparfumeur",
    image: ap2,
    alt: "Absolument Parfumeur",
    label: "Absolument Parfumeur",
    href: "#absolumentparfumeur",
  },
];

function ProjectCarouselItem({ project }: { project: Project }) {
  return (
    <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 px-[1vw] lg:px-[2vw] flex flex-col items-center">
      <a href={project.href}>
        <Image
          src={project.image}
          alt={project.alt}
          width={400}
          height={300}
          className="rounded-[2vh] lg:rounded-[3vh] object-cover w-full h-[24vh] sm:h-[30vh] lg:h-[36vh]"
          placeholder="blur"
        />
        <p className="text-center mt-[2vh]">{project.label}</p>
      </a>
    </CarouselItem>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-[#f2f2f2] pb-[12vh]" id="projects">
      <div className="flex justify-center pb-[7vh]">
        <div className="w-[20vw] h-[0.2vh] bg-black"></div>
      </div>
      <h2 className="text-center pb-[10vh]">Projets</h2>
      <div className="relative px-[2vw]">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent className="relative flex">
            {projects.map((project) => (
              <ProjectCarouselItem key={project.id} project={project} />
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" className="left-[1vw]" />
          <CarouselNext variant="default" className="right-[1vw]" />
        </Carousel>
      </div>
    </section>
  );
}
