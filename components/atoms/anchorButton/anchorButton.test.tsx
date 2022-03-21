import { render, screen } from "@testing-library/react";
import AnchorButton, { AnchorButtonProps } from "./anchorButton";

const defaultProps: AnchorButtonProps = {
  link: "/portfolio",
  cta: "visit my portfolio",
};

describe("AnchorButton", () => {
  it("Should render AnchorButton with a link and cta", () => {
    render(<AnchorButton {...defaultProps} />);
    expect(screen.getByRole("link", { name: defaultProps.cta })).toBeVisible;
  });
});
