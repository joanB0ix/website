import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("Should render", () => {
    render(<Footer />);

    const footerText = screen.getByText("Made with");
    const heartIcon = screen.getByTestId("heart-icon");

    expect(footerText).toBeInTheDocument();
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveClass("h-5 w-5 text-red-600");
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
