import { render } from "@testing-library/react";

import Blog from "../page";

jest.mock("../overview/OverviewSection");

describe("Blog component snapshot", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Blog />);
    expect(container).toMatchSnapshot();
  });
});
