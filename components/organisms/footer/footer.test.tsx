import "@testing-library/jest-dom/extend-expect";
import { render, screen, within } from "@testing-library/react";
import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TRAVEL_BLOG,
  TRAVEL_BLOG_INSTAGRAM,
} from "components/constants";
import Footer from "./footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should render the footer", () => {
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });

  it("Should render a contact me icon with the correct link", () => {
    const contactLink = screen.getByRole("link", { name: "Contact me" });
    expect(contactLink).toBeVisible();
    expect(contactLink).toHaveAttribute("href", EMAIL_ADDRESS);
    expect(within(contactLink).getByTestId("icon")).toBeVisible();
  });

  it("Should render a LinkedIn icon with the correct link", () => {
    const contactLink = screen.getByRole("link", {
      name: "View my LinkedIn profile",
    });
    expect(contactLink).toBeVisible();
    expect(contactLink).toHaveAttribute("href", LINKEDIN_PROFILE);
    expect(within(contactLink).getByTestId("icon")).toBeVisible();
  });

  it("Should render a Github icon with the correct link", () => {
    const contactLink = screen.getByRole("link", { name: "Find me on GitHub" });
    expect(contactLink).toBeVisible();
    expect(contactLink).toHaveAttribute("href", GITHUB_PROFILE);
    expect(within(contactLink).getByTestId("icon")).toBeVisible();
  });

  it("Should render an Instagram icon with the correct link", () => {
    const contactLink = screen.getByRole("link", {
      name: "Check out my Instagram",
    });
    expect(contactLink).toBeVisible();
    expect(contactLink).toHaveAttribute("href", TRAVEL_BLOG_INSTAGRAM);
    expect(within(contactLink).getByTestId("icon")).toBeVisible();
  });

  it("Should render a blog icon with the correct link", () => {
    const contactLink = screen.getByRole("link", {
      name: "Have a look at my blog",
    });
    expect(contactLink).toBeVisible();
    expect(contactLink).toHaveAttribute("href", TRAVEL_BLOG);
    expect(within(contactLink).getByTestId("icon")).toBeVisible();
  });

  it("Should render a signature", () => {
    expect(screen.getByText(/Lindsay Foley/i)).toBeVisible();
  });
});
