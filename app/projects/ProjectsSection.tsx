import { Section } from "@/components/Section";
import { Project } from "@/config/projectList";

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
              <span className="underline">{project.title}</span>{" "}
              {project.description}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
