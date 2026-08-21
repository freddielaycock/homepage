import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { chakraUiRender } from "../../utils/chakra-ui-render";
import { ThemeToggle } from "./ThemeToggle";

const render = (component: React.ReactNode) => chakraUiRender(component);

describe("ThemeToggle", () => {
  it("renders the toggle button", () => {
    render(<ThemeToggle />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("toggles the color mode when clicked", async () => {
    render(<ThemeToggle />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveTextContent("Dark Mode");

    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("Light Mode");

    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveTextContent("Dark Mode");
  });
});
