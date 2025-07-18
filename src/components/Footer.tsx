import Image from "next/image";
import linkedinLogo from "../../public/images/linkedin-logo-vector.svg";
import githubLogo from "../../public/images/icons8-github.svg";
import mailLogo from "../../public/images/mail logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-white px-[2vw] py-[4vh]" id="contact">
      <h3 className="mb-[2vh]">Contact</h3>
      <h4 className="mb-[3vh]">
        Vous avez un projet ou une question ? N&apos;hésitez pas à me contacter
        :
      </h4>
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between py-[2vh] px-0 sm:px-[3vw] lg:px-[8vw] gap-[2vh] sm:gap-0">
        <a
          href="https://www.linkedin.com/in/ga%C3%ABtan-rogeron-4221322a1/"
          target="_blank"
          className="flex items-center gap-[2vw] hover:opacity-80"
          rel="noreferrer"
        >
          <Image
            src={linkedinLogo}
            alt="LinkedIn"
            width={48}
            height={48}
            className="w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full p-[0.2vw]"
          />
          <span>Linkedin</span>
        </a>
        <a
          href="https://github.com/gaetan-rogeron"
          target="_blank"
          className="flex items-center gap-[2vw] hover:opacity-80"
          rel="noreferrer"
        >
          <Image
            src={githubLogo}
            alt="GitHub"
            width={48}
            height={48}
            className="w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full p-[0.2vw]"
          />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:gaetan.dev@pm.me"
          className="flex items-center gap-[2vw] hover:opacity-80"
        >
          <Image
            src={mailLogo}
            alt="Email"
            width={48}
            height={48}
            className="w-[6vw] h-[6vw] lg:w-[3vw] lg:h-[3vw] rounded-full p-[0.2vw]"
          />
          <span>gaetan.dev@pm.me</span>
        </a>
      </div>
    </footer>
  );
}
