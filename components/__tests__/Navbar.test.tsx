import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("renders correctly", () => {
    render(<Navbar />);

    const navbarTitle = screen.getByText("Joan Boix Àvalos");

    expect(navbarTitle).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
