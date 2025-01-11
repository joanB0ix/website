import { render } from "@testing-library/react";

import Home from "../page";

jest.mock("../about/WhoamiSection");
jest.mock("../about/SocialsSection");
jest.mock("../experience/ExperienceSection");
jest.mock("../projects/ProjectsSection");

describe("Home component snapshot", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
