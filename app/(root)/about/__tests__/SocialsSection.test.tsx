import { render, screen } from "@testing-library/react";
import SocialsSection from "../SocialsSection";

jest.mock("next/link", () => {
  const Link = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>;
  Link.displayName = "MockedLink";
  return Link;
});

const SOCIAL_LIST = [
  { name: "GitHub", url: "https://github.com/example" },
  { name: "LinkedIn", url: "https://linkedin.com/in/example" },
];

describe("SocialsSection", () => {
  it("Should render correctly", () => {
    render(<SocialsSection socialList={SOCIAL_LIST} />);

    const sectionTitle = screen.getByText("My Socials");
    expect(sectionTitle).toBeInTheDocument();

    SOCIAL_LIST.forEach((social) => {
      const socialLink = screen.getByText(social.name);
      expect(socialLink).toBeInTheDocument();
      expect(socialLink.closest("a")).toHaveAttribute("href", social.url);
    });
  });

  it("Should not render list when there are no socials", () => {
    render(<SocialsSection socialList={[]} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });

  it("Should match snapshot", () => {
    const { asFragment } = render(<SocialsSection socialList={SOCIAL_LIST} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
