import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { chakraUiRender } from "../../../../utils/chakra-ui-render";
import { Pixels } from "./Pixels";

const render = () => chakraUiRender(<Pixels />);

describe("Pixels", () => {
  const ctx = {
    setTransform: jest.fn(),
    fillRect: jest.fn(),
    strokeRect: jest.fn(),
  } as unknown as CanvasRenderingContext2D;
  let getContext: jest.SpyInstance;

  beforeEach(() => {
    getContext = jest
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue(ctx);
    window.HTMLElement.prototype.scrollTo = jest.fn();
  });

  afterEach(() => {
    getContext.mockRestore();
  });

  it("renders the Pixels component", () => {
    render();

    expect(
      screen.getByRole("heading", { name: "Pixels!" }),
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole("combobox")).getByText("randomPixels"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Pixels Canvas")).toBeInTheDocument();
  });

  it("updates the canvas function when a new option is selected", async () => {
    render();

    await userEvent.click(
      screen.getByRole("combobox", {
        name: "Select a function to generate pixels",
      }),
    );
    await userEvent.click(screen.getByRole("option", { name: "spiralPixels" }));

    expect(
      screen.getByRole("heading", { name: "Pixels!" }),
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByRole("combobox", {
          name: "Select a function to generate pixels",
        }),
      ).getByText("spiralPixels"),
    ).toBeInTheDocument();
  });

  it("sets the starting colour when the user has selected spiralPixels and updates the starting colour", async () => {
    render();

    await userEvent.click(
      screen.getByRole("combobox", {
        name: "Select a function to generate pixels",
      }),
    );
    await userEvent.click(screen.getByRole("option", { name: "spiralPixels" }));

    const colourCombobox = screen.getByRole("combobox", {
      name: "Select a starting colour for the spiral pixels",
    });

    await userEvent.click(colourCombobox);
    await userEvent.click(screen.getByRole("option", { name: "green" }));

    expect(within(colourCombobox).getByText("green")).toBeInTheDocument();
  });
});
