import SocialsSection from "@/app/(root)/about/SocialsSection";
import WhoamiSection from "@/app/(root)/about/WhoamiSection";
import ExperienceSection from "@/app/(root)/experience/ExperienceSection";
import ProjectsSection from "@/app/(root)/projects/ProjectsSection";
import { EXPERIENCE_LIST } from "@/config/experienceList";
import { PROJECT_LIST } from "@/config/projectList";
import { SOCIAL_LIST } from "@/config/socialList";
import { WHOAMI } from "@/config/whoami";

export default function Home() {
  return (
    <main className="flex-grow">
      <WhoamiSection content={WHOAMI} />
      <ExperienceSection experienceList={EXPERIENCE_LIST} />
      <ProjectsSection projectList={PROJECT_LIST} />
      <SocialsSection socialList={SOCIAL_LIST} />
    </main>
  );
}
