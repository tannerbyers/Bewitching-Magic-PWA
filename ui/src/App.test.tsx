import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders website", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bewitching Magic/i);
  expect(linkElement).toBeInTheDocument();
});
