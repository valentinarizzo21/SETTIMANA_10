import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("Testing mounting phase", () => {
  it("mounts correctly", () => {
    render(<Welcome />);
    const h4 = screen.getByText(
      `Courious to see the offers? Don't hesitate and click here!`
    );
    expect(h4).toBeInTheDocument();
  });
});
