import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import AboutMe from "./about-me";

describe("AboutMe", () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  it("Should render a header", () => {
    expect(screen.getByRole("banner")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "All About Me",
      }),
    ).toBeVisible();
  });

  it("Should render the header as a link", () => {
    expect(
      screen.getByRole("link", {
        name: "All About Me",
      }),
    ).toBeVisible();
  });

  it("Should render a description", () => {
    expect(screen.getByText(/Welcome/)).toBeVisible();
  });

  it("Should render the main content along with a list of skills", () => {
    expect(screen.getByRole("main")).toBeVisible();
    expect(screen.getByRole("term")).toBeVisible();
    expect(screen.getAllByRole("definition")[0]).toBeVisible();
  });

  it("Should render the required nav links", () => {
    expect(screen.getByRole("navigation")).toBeVisible();
    expect(screen.getByRole("link", { name: "View my work" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Back to home" })).toBeVisible();
  });
});
