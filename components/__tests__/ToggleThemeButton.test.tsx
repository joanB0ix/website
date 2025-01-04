import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggleButton from "../ThemeToggleButton";

describe("ThemeToggleButton Component", () => {
  it("Renders correctly and toggles theme", () => {
    render(<ThemeToggleButton />);

    const moonIcon = screen.getByTestId("moon-icon");
    expect(moonIcon).toBeInTheDocument();

    fireEvent.click(moonIcon);

    const sunIcon = screen.getByTestId("sun-icon");
    expect(sunIcon).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
