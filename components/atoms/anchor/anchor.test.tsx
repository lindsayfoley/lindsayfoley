import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Anchor from "./anchor";
import { AnchorProps } from "./types";

const text = {
  href: "https://lindsayfoley.co.uk",
  icon: "fa-github-alt",
  cta: "View Github profile",
  titleText: "Find me on Github",
};

const defaultProps: AnchorProps = {
  link: text.href,
};

const optionalProps: Omit<AnchorProps, "link"> = {
  icon: text.icon,
  cta: text.cta,
  titleText: text.titleText,
  external: false,
};

describe("Anchor", () => {
  it("Should render a link with the cta and href", () => {
    render(<Anchor {...defaultProps} cta={optionalProps.cta} />);
    expect(screen.getByRole("link", { name: text.cta })).toHaveAttribute(
      "href",
      text.href,
    );
  });

  it("Should render an icon", () => {
    render(<Anchor {...defaultProps} icon={optionalProps.icon} />);
    expect(screen.getByTestId("icon")).toBeVisible();
  });

  it("Should add a title attribute which is visible on hover", () => {
    render(<Anchor {...defaultProps} titleText={optionalProps.titleText} />);
    expect(screen.getByRole("link")).toHaveAttribute("title", text.titleText);
  });

  it("Should add extra attributes to links when external is true", () => {
    render(<Anchor {...defaultProps} external={true} />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noreferrer");
  });
});
