import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Intro from "./intro";

describe("Intro", () => {
  beforeEach(() => {
    render(<Intro />);
  });

  it("Should render a main heading", () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  it("Should render a subheader", () => {
    expect(screen.getByRole("heading", { level: 2 })).toBeVisible();
  });

  it("Should render a hero image", () => {
    expect(
      screen.getByRole("img", {
        name: "A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac",
      }),
    ).toBeVisible();
  });

  it("Should render nav links", () => {
    expect(screen.getByRole("link", { name: "view my work" })).toBeVisible();
    expect(screen.getByRole("link", { name: "about me" })).toBeVisible();
  });
});
