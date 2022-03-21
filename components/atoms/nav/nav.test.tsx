import { render, screen } from "@testing-library/react";
import Nav, { NavProps } from "./nav";

const defaultProps: NavProps = {
  links: [
    {
      link: "/",
      cta: "Back to home",
    },
    {
      link: "/about",
      cta: "About me",
    },
  ],
};

describe("Nav", () => {
  it("Should not render any links when the links array is empty", () => {
    render(<Nav links={[]} />);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("Should render all links as passed in to the links array", () => {
    render(<Nav {...defaultProps} />);
    expect(screen.getAllByRole("link")).toHaveLength(defaultProps.links.length);
  });
});
