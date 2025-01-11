import SocialsSection from "@/app/(root)/about/SocialsSection";
import WhoamiSection from "@/app/(root)/about/WhoamiSection";
import ExperienceSection from "@/app/(root)/experience/ExperienceSection";
import ProjectsSection from "@/app/(root)/projects/ProjectsSection";
import { EXPERIENCE_LIST } from "@/config/experienceList";
import { PROJECT_LIST } from "@/config/projectList";
import { SOCIAL_LIST } from "@/config/socialList";
import { WHOAMI } from "@/config/whoami";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joan Boix",
  description:
    "Welcome to my website! Here you can find my experience, portfolio and socials!",
  openGraph: {
    title: "Joan Boix",
    description:
      "Welcome to my website! Here you can find my experience, portfolio and socials!",
    url: "https://joanboix.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joan Boix",
    description: "Welcome to my website!",
  },
};

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
