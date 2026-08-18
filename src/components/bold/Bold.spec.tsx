import { screen } from "@testing-library/react";

import { chakraUiRender } from "../../utils/chakra-ui-render";
import { Bold } from "./Bold";

describe("Bold", () => {
  it("renders correctly", () => {
    chakraUiRender(<Bold>Test</Bold>);

    expect(screen.getByTestId("bold-text")).toMatchSnapshot();
  });
});
