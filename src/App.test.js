import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("when the app runs shows the text for the home screen and the two options on the menu", () => {
  render(<App />);
  const linkElement = screen.getByText(/designs/i);

  expect(linkElement).toBeInTheDocument();
  expect(screen.queryByText("Hello! Welcome back!!!")).toBeInTheDocument();
});

test("when the app runs and the user clicks on the designs button, the table field 'Courses' gets rendered", () => {
  render(<App />);

  const designButton = screen.getByText("Designs");

  fireEvent.click(designButton);

  expect(screen.getByText("Courses")).toBeInTheDocument();
});

test("when the app runs and the user clicks on the setouts button, the table field 'Machine Name' gets rendered", () => {
  render(<App />);

  const designButton = screen.getByText("Setouts");

  fireEvent.click(designButton);

  expect(screen.getByText("Machine Name")).toBeInTheDocument();
});
