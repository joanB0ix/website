import { metadata } from "../page";

describe("Blog page metadata snapshot", () => {
  it("matches the expected metadata snapshot", () => {
    expect(metadata).toMatchSnapshot();
  });
});
