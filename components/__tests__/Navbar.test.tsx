import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

jest.mock("../ThemeToggleButton", () => {
  return function MockThemeToggleButton() {
    return <div data-testid="theme-toggle-button"></div>;
  };
});

describe("Navbar", () => {
  it("Should render", () => {
    render(<Navbar />);
    const navbarTitle = screen.getByText("Joan Boix Àvalos");
    expect(navbarTitle).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
