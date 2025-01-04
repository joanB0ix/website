import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggleButton from "../ThemeToggleButton";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: light)",
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
});

describe("ThemeToggleButton", () => {
  it("Should render correctly and toggle theme", () => {
    render(<ThemeToggleButton />);

    const moonIcon = screen.getByTestId("moon-icon");
    expect(moonIcon).toBeInTheDocument();

    fireEvent.click(moonIcon);

    const sunIcon = screen.getByTestId("sun-icon");
    expect(sunIcon).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    fireEvent.click(sunIcon);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(<ThemeToggleButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
