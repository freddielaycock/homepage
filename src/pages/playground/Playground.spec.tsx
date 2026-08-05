import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "../../components/ui/provider";

import { Playground } from "./Playground";
import type { PageProps } from "../../components/page/Pages.types";

jest.mock("../../components/page/Page", () => ({
  Page: ({ heading, id, children }: PageProps) => (
    <div data-test-id={`${id}-page`}>
      {heading && <h1>{heading}</h1>}
      {children}
    </div>
  ),
}));

const render = () => rtlRender(
  <Provider>
    <Playground />
  </Provider>
);


describe("Playground", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("playground-page")).toMatchSnapshot();
  });
});
