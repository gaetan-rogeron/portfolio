import Image from "next/image";
import profilePhoto from "../../public/images/photo_2_2025-06-30_23-21-45.jpg";

export default function AboutSection() {
  return (
    <section className="pb-[8vh] sm:pb-[12vh] lg:pb-[16vh]" id="about">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[4vh] lg:gap-0">
        <div className="px-[2vw] sm:px-[3vw] lg:px-[6vw] w-full lg:w-auto">
          <Image
            src={profilePhoto}
            alt={"profile photo of Gaëtan Rogeron"}
            className="w-full lg:w-[90vw] h-auto object-cover rounded-tr-[3vh] lg:rounded-tr-[100px]"
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className="px-[2vw] sm:px-[3vw] lg:px-[2vw] w-full lg:w-auto">
          <div className="flex justify-center lg:justify-end px-[2vw] lg:px-[6vw]">
            <div className="w-[40vw] sm:w-[15vw] lg:w-[13vw] h-[0.2vh] bg-black"></div>
          </div>
          <h2 className="text-center lg:text-right pb-[2vh] lg:pb-[4vh] px-[2vw] lg:px-[6vw] pt-[3vh] lg:pt-[5vh] text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh]">
            Gaëtan Rogeron
          </h2>
          <h3 className="text-center lg:text-right pb-[2vh] lg:pb-[4vh] px-[2vw] lg:px-[6vw] text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]">
            Développeur Web Fullstack Freelance
          </h3>
          <p className="text-center lg:text-right px-[2vw] sm:px-[3vw] lg:pl-[12vw] lg:px-[6vw] text-[1.8vh] sm:text-[2vh]">
            Développeur web fullstack et freelance basé en France. Étudiant en
            double licence Mathématiques et Informatique à l&apos;Université
            Côte d&apos;Azur, je travaille principalement avec Next.js, Payload
            CMS, Docker et PostgreSQL. Je porte une attention particulière à la
            qualité du code, à la sécurité des applications et à la performance.
            Je m&apos;intéresse également à Rust et à la cybersécurité, dans une
            démarche d&apos;amélioration continue.
          </p>
        </div>
      </div>
    </section>
  );
}
