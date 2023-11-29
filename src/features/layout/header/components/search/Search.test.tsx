import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { describe, expect, it } from "vitest";

describe("Search", () => {
  it("Shows the Paper", () => {
    render(<Search />);
    const result = screen.getByPlaceholderText(
      "product, category, user added, supplier"
    );
    expect(result).toBeInTheDocument();
  });
});
