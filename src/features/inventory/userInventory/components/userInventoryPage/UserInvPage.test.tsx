import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RenderComponent from "../../../../../tests/ReactComponent";
import UserProducts from "./UserInventoryPage";

describe("UserProducts", () => {
  it("if exist", () => {
    render(<RenderComponent children={<UserProducts />} />);
    const dialog = screen.queryByTestId("User_inventory_dialog");
    expect(dialog).toBeInTheDocument();
  });
});
