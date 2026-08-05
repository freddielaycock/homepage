import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ChakraUIRender } from "../../utils/chakra-ui-render";
import { ThemeToggle } from "./ThemeToggle";

const render = (component: React.ReactNode) => ChakraUIRender(component);

describe("ThemeToggle", () => {
  it("renders the toggle button", () => {
    render(<ThemeToggle />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("toggles the color mode when clicked", async () => {
    render(<ThemeToggle />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveTextContent("Toggle Dark Mode");

    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("Toggle Light Mode");

    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("Toggle Dark Mode");
  });
});
