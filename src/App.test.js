import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderWithRouter = (component, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(component, { wrapper: BrowserRouter });
};

test("render header", () => {
  renderWithRouter(<App />, { route: "/" });
  const header = screen.getByText(/MyReads/i);
  expect(header).toBeInTheDocument();
});
