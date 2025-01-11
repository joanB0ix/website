import { Section } from "@/components/Section";
import { Project } from "@/config/projectList";
import Link from "next/link";

export interface ProjectSectionProps {
  projectList: Project[];
}

export default function ProjectsSection({ projectList }: ProjectSectionProps) {
  return (
    <Section title="My Projects">
      <ul className="list-disc pl-6">
        {projectList.map((project) => {
          return (
            <li key={project.title}>
              <Link className="underline" href={project.url}>
                {project.title}
              </Link>{" "}
              {project.description}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
