import Image from "next/image";
import profilePhoto from "../../public/images/photo_2_2025-06-30_23-21-45.jpg";

export default function AboutSection() {
  return (
    <section className="px-[2vw] pb-[8vh]" id="about">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[4vh]">
        <div className="w-full flex justify-center lg:block">
          <Image
            src={profilePhoto}
            alt={"profile photo of Gaëtan Rogeron"}
            className="w-full sm:w-[70vw] lg:w-[34vw] object-cover rounded-[3vw] lg:rounded-tr-[100px]"
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className="w-full text-center lg:text-right">
          <div className="flex justify-center lg:justify-end">
            <div className="w-[40vw] lg:w-[13vw] h-[0.2vh] bg-black"></div>
          </div>
          <h2 className="pb-[2vh] pt-[3vh]">Gaëtan Rogeron</h2>
          <h3 className="pb-[2vh]">Développeur Web Fullstack Freelance</h3>
          <p>
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
