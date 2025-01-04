import { render, screen } from "@testing-library/react";
import ProjectsSection, { ProjectSectionProps } from "../ProjectsSection";

const PROJECT_LIST: ProjectSectionProps["projectList"] = [
  {
    title: "Project One",
    description: "Description for Project One.",
  },
  {
    title: "Project Two",
    description: "Description for Project Two.",
  },
];

describe("ProjectsSection", () => {
  it("Should render correctly", () => {
    render(<ProjectsSection projectList={PROJECT_LIST} />);

    const sectionTitle = screen.getByText("My Projects");
    expect(sectionTitle).toBeInTheDocument();

    PROJECT_LIST.forEach((project) => {
      const projectTitle = screen.getByText(project.title);
      expect(projectTitle).toBeInTheDocument();

      const projectDescription = screen.getByText(project.description);
      expect(projectDescription).toBeInTheDocument();
    });
  });

  it("Should not render list when there are no projects", () => {
    render(<ProjectsSection projectList={[]} />);
    const listElement = screen.queryByRole("list");
    expect(listElement).toBeEmptyDOMElement();
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(
      <ProjectsSection projectList={PROJECT_LIST} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
