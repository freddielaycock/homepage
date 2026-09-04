import { screen } from "@testing-library/react";
import type { PageProps } from "../../components/page/Page.types";
import { chakraUiRender } from "../../utils/chakra-ui-render";
import { Projects } from "./Projects";

const render = () => chakraUiRender(<Projects />);

jest.mock("@tanstack/react-router", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

jest.mock("../../components/page/Page", () => ({
  Page: ({ heading, id, children }: PageProps) => (
    <div data-test-id={`${id}-page`}>
      {heading && <h1>{heading}</h1>}
      {children}
    </div>
  ),
}));

describe("Projects", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("projects-page")).toMatchSnapshot();
  });
});
