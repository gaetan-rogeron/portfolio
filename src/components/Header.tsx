import Image from "next/image";
import logoSvg from "../../public/images/LOGO.svg";

export default function Header() {
  return (
    <header className="bg-[#f2f2f2] w-full py-[2vh] px-[2vw]">
      <div className="flex items-center justify-between">
        <Image
          src={logoSvg}
          alt={"Gaëtan Rogeron logo"}
          width={120}
          height={32}
          style={{ objectFit: "cover" }}
          priority={true}
        />
        <div>
          <nav className="flex flex-col sm:flex-row space-y-[1vh] sm:space-y-0 sm:space-x-[8vw]">
            <a href="#projects" className="min-w-[44px] min-h-[44px]">
              <h4 className="items-center">Projets</h4>
            </a>
            <a href="#about" className="min-w-[44px] min-h-[44px]">
              <h4>À propos</h4>
            </a>
            <a href="#contact" className="min-w-[44px] min-h-[44px]">
              <h4>Contact</h4>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
