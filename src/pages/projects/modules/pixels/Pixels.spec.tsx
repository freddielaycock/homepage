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
      screen.getByRole("heading", {
        name: 'Pixels! Using the "randomPixels" function',
      }),
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole("combobox")).getByText("randomPixels"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Pixels Canvas")).toBeInTheDocument();
  });

  it("updates the canvas function when a new option is selected", async () => {
    render();

    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByRole("option", { name: "randomPixels" }));

    expect(
      screen.getByRole("heading", {
        name: 'Pixels! Using the "randomPixels" function',
      }),
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole("combobox")).getByText("randomPixels"),
    ).toBeInTheDocument();
  });
});
