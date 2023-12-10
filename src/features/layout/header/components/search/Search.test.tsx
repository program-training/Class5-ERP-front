import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { describe, expect, it } from "vitest";
import RenderComponent from "../../../../../tests/ReactComponent";
import userEvent from "@testing-library/user-event";

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
  it("When the user types in the field, the value of the field is updated", async () => {
    const user = userEvent.setup();
    render(<RenderComponent children={<Search />} />);
    const input: HTMLInputElement = screen.getByPlaceholderText(
      "product, category, user added, supplier"
    );
    await user.type(input, "Test");
    expect(input.value).toBe("Test");
  });

  it("Shows the button", () => {
    render(<RenderComponent children={<Search />} />);
    const result = screen.getByRole("button");
    expect(result).toBeInTheDocument();
  });
  it("Shows the icon button", () => {
    render(<RenderComponent children={<Search />} />);
    const result = screen.getByTestId("Search_Icon");
    expect(result).toBeInTheDocument();
  });
  it("Shows the divider", () => {
    render(<RenderComponent children={<Search />} />);
    const result = screen.getByTestId("Search_Divider");
    expect(result).toBeInTheDocument();
  });
});
