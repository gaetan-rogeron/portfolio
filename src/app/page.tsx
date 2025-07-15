import dynamic from "next/dynamic";

import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

const FliteWatchSection = dynamic(
  () => import("@/components/projects/FliteWatchSection"),
);
const EmmaZepterSection = dynamic(
  () => import("@/components/projects/EmmaZepterSection"),
);
const RendezVousAiSection = dynamic(
  () => import("@/components/projects/RendezVousAiSection"),
);
const AbsolumentParfumeurSection = dynamic(
  () => import("@/components/projects/AbsolumentParfumeurSection"),
);
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-center py-[6vh] sm:py-[8vh] lg:py-[12vh]">
        Portfolio
      </h1>
      <AboutSection />
      <ProjectsSection />
      <FliteWatchSection />
      <EmmaZepterSection />
      <RendezVousAiSection />
      <AbsolumentParfumeurSection />
      <Footer />
    </>
  );
}
