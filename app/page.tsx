import SocialsSection from "@/app/about/SocialsSection";
import WhoamiSection from "@/app/about/WhoamiSection";
import ProjectsSection from "@/app/projects/ProjectsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PROJECT_LIST } from "@/config/projectList";

export default function Home() {
  return (
    <div className="h-screen flex flex-col font-fira-code w-2/5 min-w-96 m-auto ">
      <Navbar />
      <main className="flex-grow">
        <WhoamiSection />
        <ProjectsSection projectList={PROJECT_LIST} />
        <SocialsSection />
      </main>
      <Footer />
    </div>
  );
}
