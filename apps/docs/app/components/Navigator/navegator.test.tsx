import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navegator from "./navegator";

test("Navegator", () => {
  render(<Navegator />);
  expect(screen.findByText("Principal"));
});
