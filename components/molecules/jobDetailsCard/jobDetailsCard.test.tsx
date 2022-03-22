import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import JobDetailsCard from "./jobDetailsCard";
import { CompanyDetails } from "./types";

const description =
  "At Scampi's Emporium I used Cats whilst working on my first Scala project";
const cta = "visit site";

const mockCompany: CompanyDetails = {
  id: "scampi-emporium",
  companyName: "Scampi's Emporium",
  description: <p>{description}</p>,
  cta,
  link: "https://scampis-emporium.com",
};

describe("JobDetailsCard", () => {
  beforeEach(() => {
    render(<JobDetailsCard company={mockCompany} />);
  });

  it("Should render a company title", () => {
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: mockCompany.companyName,
      }),
    ).toBeVisible();
  });

  it("Should render a cta to view the summary", () => {
    expect(screen.getByText(/Details/)).toBeVisible();
  });

  it("Should not render the summary by default", () => {
    expect(screen.getByRole("button")).not.toHaveClass("show-details");
  });

  it("Should render the summary on click of card", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveClass("show-details");
    expect(screen.getByText(description)).toBeVisible();
  });

  it("Should render a hr with a link to view the company website", () => {
    expect(screen.getByRole("separator")).toBeVisible();
    expect(screen.getByText(cta)).toBeVisible();
  });
});
