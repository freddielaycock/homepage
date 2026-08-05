import { screen } from "@testing-library/react";

import type { PageProps } from "../../components/page/Page.types";
import { chakraUiRender } from "../../utils/chakra-ui-render";
import { Career } from "./Career";

jest.mock("../../components/page/Page", () => ({
  Page: ({ heading, id, children }: PageProps) => (
    <div data-test-id={`${id}-page`}>
      {heading && <h1>{heading}</h1>}
      {children}
    </div>
  ),
}));

const render = () => chakraUiRender(<Career />);

describe("Career", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("career-page")).toMatchSnapshot();
  });
});
