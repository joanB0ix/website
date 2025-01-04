import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("renders correctly", () => {
    render(<Navbar />);

    const navbarTitle = screen.getByText("Joan Boix Àvalos");
    const sunIcon = screen.getByTestId("sun-icon");

    expect(navbarTitle).toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();
    expect(sunIcon).toHaveClass("h-5 w-5 mb-1 mr-5");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
