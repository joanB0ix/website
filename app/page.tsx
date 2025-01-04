import SocialsSection from "@/app/about/SocialsSection";
import WhoamiSection from "@/app/about/WhoamiSection";
import ExperienceSection from "@/app/experience/ExperienceSection";
import ProjectsSection from "@/app/projects/ProjectsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { EXPERIENCE_LIST } from "@/config/experienceList";
import { PROJECT_LIST } from "@/config/projectList";
import { SOCIAL_LIST } from "@/config/socialList";
import { WHOAMI } from "@/config/whoami";

export default function Home() {
  return (
    <div className="h-screen flex flex-col font-fira-code w-2/5 min-w-96 m-auto ">
      <Navbar />
      <main className="flex-grow">
        <WhoamiSection content={WHOAMI} />
        <ExperienceSection experienceList={EXPERIENCE_LIST} />
        <ProjectsSection projectList={PROJECT_LIST} />
        <SocialsSection socialList={SOCIAL_LIST} />
      </main>
      <Footer />
    </div>
  );
}
