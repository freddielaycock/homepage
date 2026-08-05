import { render as rtlRender, screen } from "@testing-library/react";
import type { PageProps } from "../../components/page/Pages.types";
import { Home } from "./Home";

jest.mock("../../components/page/Page", () => ({
  Page: ({ heading, id, children }: PageProps) => (
    <div data-test-id={`${id}-page`}>
      {heading && <h1>{heading}</h1>}
      {children}
    </div>
  ),
}));

const render = () => rtlRender(<Home />);

describe("Home", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("home-page")).toMatchSnapshot();
  });
});
