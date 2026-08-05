import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "../../components/ui/provider";

import { Page } from "./Page";
import type { PageProps } from "./Pages.types";

const render = ({ heading, id, children }: PageProps) => rtlRender(
  <Provider>
    <Page heading={heading} id={id}>
      {children}
    </Page>
  </Provider>
);

describe("Page", () => {
  it("renders with the correct heading", () => {
    const heading = "Test Heading";

    render({ heading });

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
  });

  it("renders with the correct id", () => {
    const id = "test";

    render({ id });

    expect(screen.getByTestId(`${id}-page`)).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const id = "test";
    const children = <div data-test-id="child">Child Content</div>;

    render({ id, children });

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
