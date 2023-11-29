import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { describe, expect, it } from "vitest";
import RenderComponent from "../../../../../tests/RenderComponent";

describe("Search", () => {
  it("Shows the Paper", () => {
    render(<RenderComponent children={<Search />} />);
    const result = screen.getByTestId("Search_Paper");
    expect(result).toBeInTheDocument();
  });
  it("Shows the InputBase, and he have placeholder with the test", () => {
    render(<RenderComponent children={<Search />} />);
    const result = screen.getByPlaceholderText(
      "product, category, user added, supplier"
    );
    expect(result).toBeInTheDocument();
  });
  it("Shows the icon button", () => {
    render(<RenderComponent children={<Search />} />);
    const result = screen.getByRole("button");
    expect(result).toBeInTheDocument();
  });
});
