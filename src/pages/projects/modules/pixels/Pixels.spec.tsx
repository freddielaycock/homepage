import { screen, waitFor, within } from "@testing-library/react";
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

  describe("pixelsPerLine", () => {
    it("updates the pixelsPerLine when a new value is entered", async () => {
      render();

      const input = screen.getByRole("spinbutton", {
        name: "Pixels Per Line (max 1000)",
      });
      await userEvent.clear(input);
      await userEvent.type(input, "100");

      await waitFor(() => expect(input).toHaveValue("100"));
    });

    it("updates the pixelsPerLine to 1000 when a value greater than 1000 is entered", async () => {
      render();

      const input = screen.getByRole("spinbutton", {
        name: "Pixels Per Line (max 1000)",
      });
      await userEvent.clear(input);
      await userEvent.type(input, "2000");
      await userEvent.tab();

      await waitFor(() => expect(input).toHaveValue("1000"));
    });

    it("updates the pixelsPerLine to 0 when a non-numeric value is entered", async () => {
      render();

      const input = screen.getByRole("spinbutton", {
        name: "Pixels Per Line (max 1000)",
      });
      await userEvent.clear(input);
      await userEvent.type(input, "a");
      await userEvent.tab();

      await waitFor(() => expect(input).toHaveValue("0"));
    });
  });

  it("sets the colour change amount when the user has selected spiralPixels and updates the colour change amount", async () => {
    render();

    await userEvent.click(
      screen.getByRole("combobox", {
        name: "Select a function to generate pixels",
      }),
    );
    await userEvent.click(screen.getByRole("option", { name: "spiralPixels" }));

    const colourChangeCombobox = screen.getByRole("combobox", {
      name: "How much to change the colour for each spiral step",
    });
    await userEvent.click(colourChangeCombobox);
    await userEvent.click(screen.getByRole("option", { name: "medium" }));

    expect(
      within(colourChangeCombobox).getByText("medium"),
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

  it("does not setup the canvas if the canvas element ref cannot be found", async () => {
    render();

    const canvas = screen.queryByRole("img", { name: "Pixels Canvas" });
    expect(canvas).not.toBeInTheDocument();
  });
});
