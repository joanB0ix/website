import { render, screen } from "@testing-library/react";
import ExperienceSection, {
  ExperienceSectionProps,
} from "../ExperienceSection";

describe("ExperienceSection", () => {
  const mockExperienceList: ExperienceSectionProps["experienceList"] = [
    {
      company: "Company One",
      position: "Software Engineer",
      location: "New York, NY",
      start_month: "January",
      start_year: 2020,
      end_month: "March",
      end_year: 2022,
      description: [
        "Developed web applications",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      company: "Company Two",
      position: "Senior Developer",
      location: "San Francisco, CA",
      start_month: "April",
      start_year: 2022,
      description: ["Led team of developers", "Architected scalable systems"],
    },
  ];

  it("Should render correctly", () => {
    render(<ExperienceSection experienceList={mockExperienceList} />);

    const sectionTitle = screen.getByText("Experience");
    expect(sectionTitle).toBeInTheDocument();

    mockExperienceList.forEach((experience) => {
      const companyName = screen.getByText(experience.company);
      expect(companyName).toBeInTheDocument();

      const position = screen.getByText(experience.position);
      expect(position).toBeInTheDocument();

      const location = screen.getAllByText(experience.location);
      expect(location[0]).toBeInTheDocument();

      const dateRange = screen.getAllByText(
        experience.end_month
          ? `${experience.start_month} ${experience.start_year}, ${experience.end_month} ${experience.end_year}`
          : `${experience.start_month} ${experience.start_year}, Present`
      );
      expect(dateRange[0]).toBeInTheDocument();

      experience.description.forEach((bullet) => {
        const bulletText = screen.getByText(bullet);
        expect(bulletText).toBeInTheDocument();
      });
    });
  });

  it("Should not render list when there are no experiences", () => {
    render(<ExperienceSection experienceList={[]} />);
    const sectionContent = screen.getByText("Experience");
    expect(sectionContent).toBeInTheDocument();

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(
      <ExperienceSection experienceList={mockExperienceList} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
