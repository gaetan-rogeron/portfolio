import Image from "next/image";
import emmaZepter1 from "../../../public/images/EmmaZepter/EmmaZepter_1.png";

export default function EmazeSection() {
  return (
    <section className="px-[2vw] pb-[8vh]" id="emmazepter">
      <div className="flex items-center justify-between py-[4vh] ">
        <div className="flex justify-start">
          <div className="w-[30vw] sm:w-[35vw] md:w-[40vw] lg:w-[50vw] h-[0.2vh] bg-black"></div>
        </div>
        <h2>Emma Zepter</h2>
      </div>
      <p className="text-right pb-[3vh]">
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
          className="w-full h-auto rounded-[1vh] object-cover"
          placeholder="blur"
        />
      </div>
      <a
        href="https://www.emmazepter.com/"
        target="_blank"
        className="flex py-[2vh] hover:underline justify-end min-w-[44px] min-h-[44px]"
        rel="noreferrer"
      >
        <p>visitez le site</p>
      </a>
    </section>
  );
}
