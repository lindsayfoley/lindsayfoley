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

  describe("When the job description is hidden", () => {
    it("Should render a company title", () => {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: mockCompany.companyName,
        }),
      ).toBeVisible();
    });

    it("Should render a cta to view the description", () => {
      expect(screen.getByText(/Details/)).toBeVisible();
    });

    it("Should not render the description section by default", () => {
      expect(screen.queryByRole("separator")).toBeNull();
    });
  });

  describe("When the job description is visible", () => {
    it("Should render the description section on click of card", () => {
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(button).toHaveClass("show-details");
      expect(screen.getByText(description)).toBeVisible();
    });

    it("Should render a hr with a link to view the company website", () => {
      fireEvent.click(screen.getByRole("button"));
      expect(screen.getByRole("separator")).toBeVisible();
      expect(screen.getByText(cta)).toBeVisible();
    });

    it("Should hide the company title", () => {
      fireEvent.click(screen.getByRole("button"));
      expect(
        screen.queryByRole("heading", {
          level: 3,
          name: mockCompany.companyName,
        }),
      ).toBeNull();
    });

    it("Should hide the cta to view the description", () => {
      fireEvent.click(screen.getByRole("button"));
      expect(screen.queryByText(/Details/)).toBeVisible();
    });
  });
});
