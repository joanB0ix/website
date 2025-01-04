import { render, screen } from "@testing-library/react";
import WhoamiSection from "../WhoamiSection";

const MOCK_CONTENT =
  "I am a software developer passionate about building web applications.";

describe("WhoamiSection", () => {
  const getTestView = () => {
    return <WhoamiSection content={MOCK_CONTENT} />;
  };

  it("Should render correctly", () => {
    render(getTestView());

    const sectionTitle = screen.getByText("Who am I?");
    const contentParagraph = screen.getByText(MOCK_CONTENT);

    expect(sectionTitle).toBeInTheDocument();
    expect(contentParagraph).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(getTestView());
    expect(asFragment()).toMatchSnapshot();
  });
});
