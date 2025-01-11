import { metadata } from "../page";

describe("Home page metadata snapshot", () => {
  it("matches the expected metadata snapshot", () => {
    expect(metadata).toMatchSnapshot();
  });
});
