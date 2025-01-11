import { render, screen } from "@testing-library/react";
import OverviewSection from "../OverviewSection";

describe("OverviewSection", () => {
  it("Should render correctly", () => {
    render(<OverviewSection />);

    const sectionTitle = screen.getByText("My Blog");
    expect(sectionTitle).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(<OverviewSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
