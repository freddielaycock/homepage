import { screen } from "@testing-library/react";
import { chakraUiRender } from "../../utils/chakra-ui-render";
import { TestComponent } from "./TestComponent";

const render = (text?: string) => chakraUiRender(<TestComponent text={text} />);

describe("TestComponent", () => {
  it("renders", () => {
    render("test");

    expect(screen.getByTestId("test-component")).toMatchSnapshot();
  });

  it("does not render a Text component if no text is provided", () => {
    render();

    expect(screen.queryByTestId("test-component-text")).not.toBeInTheDocument();
  });
});
