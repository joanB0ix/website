import { render, screen } from "@testing-library/react";
import { Section } from "../Section";

describe("Section", () => {
  const getTestView = () => {
    return (
      <Section title="Test Title">
        <p>Test Content</p>
      </Section>
    );
  };

  it("Should render", () => {
    render(getTestView());

    const headerElement = screen.getByText("Test Title");
    const paragraphElement = screen.getByText("Test Content");

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe("H2");
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName).toBe("P");
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(getTestView());
    expect(asFragment()).toMatchSnapshot();
  });
});
