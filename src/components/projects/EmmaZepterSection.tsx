import Image from "next/image";
import emmaZepter1 from "../../../public/images/EmmaZepter/EmmaZepter_1.png";

export default function EmazeSection() {
  return (
    <section className="px-[2vw] py-[8vh] lg:py-[16vh]" id="emmazepter">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-[4vh] lg:py-[7vh] gap-[2vh] sm:gap-0">
        <div className="flex justify-start sm:justify-end w-full sm:w-auto order-2 sm:order-1">
          <div className="w-[40vw] sm:w-[50vw] lg:w-[60vw] h-[0.2vh] bg-black"></div>
        </div>
        <h2 className="text-[2.5vh] sm:text-[3vh] lg:text-[3.5vh] order-1 sm:order-2">
          Emma Zepter
        </h2>
      </div>
      <p className="text-left sm:text-right pb-[3vh] text-[1.8vh] sm:text-[2vh]">
        Création du site temporaire &quot;Launching Soon&quot; pour Emma Zepter,
        avec intégration d&apos;un système d&apos;inscription à la newsletter
        via formulaire d&apos;email
      </p>
      <div className="flex items-center">
        <Image
          src={emmaZepter1}
          alt={"Emma Zepter website"}
          width={2000}
          height={2000}
          className="w-full h-auto object-contain rounded-[1vh]"
          style={{ objectFit: "contain" }}
          placeholder="blur"
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
  );
}
