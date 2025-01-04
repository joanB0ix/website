import { Section } from "@/components/Section";
import { render, screen } from "@testing-library/react";

describe("Section", () => {
  const getTestView = () => {
    return <Section title="Test Title" content={<p>Test Content</p>} />;
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
