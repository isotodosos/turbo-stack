import { render, screen } from "@testing-library/react";
import { assert, describe, expect, it } from "vitest";
import Home from "./page";
const enlace = <a href="dsd"></a>;
describe("Home", () => {
  it("Main de la home", () => {
    render(<Home />);
    expect(screen.getByText("Main de la Home"));
  });
  it("Hay enlaces", () => {
    render(<Home />);
    assert.exists(enlace, "Si que existe");
  });
});
