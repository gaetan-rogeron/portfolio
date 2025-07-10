import Image from "next/image";
import logoSvg from "../../public/images/LOGO.svg";

export default function Header() {
  return (
    <header className="bg-[#f2f2f2] w-full py-[1vh] px-[1vw] lg:px-[2vw]">
      <div className="flex items-center justify-between">
        <Image
          src={logoSvg}
          alt={"Gaëtan Rogeron logo"}
          width={120}
          height={32}
          className="lg:w-[10vw] lg:h-[9vh]"
          style={{ objectFit: "cover" }}
          priority={true}
        />
        <div>
          <nav className="flex flex-col sm:flex-row space-y-[0.5vh] sm:space-y-0 sm:space-x-[2vw] lg:space-x-[8vw]">
            <a
              href="#projects"
              className="text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]"
            >
              <h4>Projets</h4>
            </a>
            <a
              href="#about"
              className="text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]"
            >
              <h4>À propos</h4>
            </a>
            <a
              href="#contact"
              className="text-[2vh] sm:text-[2.2vh] lg:text-[2.5vh]"
            >
              <h4>Contact</h4>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
