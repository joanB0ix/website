import { Section } from "@/components/Section";
import { Experience } from "@/config/experienceList";

export interface ExperienceSectionProps {
  experienceList: Experience[];
}

export default function ExperienceSection({
  experienceList,
}: ExperienceSectionProps) {
  return (
    <Section title="Experience">
      <div className="flex flex-col gap-y-2">
        {experienceList.map((experience) => {
          return (
            <div key={experience.start_month}>
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <div className="flex flex-col">
                  <h3 className="font-medium">{experience.company}</h3>
                  <span>{experience.position}</span>
                  <div className="block sm:hidden mt-1">
                    <div>{experience.location}</div>
                    <div>
                      {experience.start_month} {experience.start_year},{" "}
                      {experience.end_month
                        ? experience.end_month + " " + experience.end_year
                        : "Present"}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col text-right">
                  <div>{experience.location}</div>
                  <div>
                    {experience.start_month} {experience.start_year},{" "}
                    {experience.end_month
                      ? experience.end_month + " " + experience.end_year
                      : "Present"}
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-6">
                {experience.description.map((bullet) => {
                  return (
                    <li className="text-pretty" key={bullet}>
                      <p>{bullet}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
