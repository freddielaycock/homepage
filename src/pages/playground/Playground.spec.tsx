import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { PageProps } from "../../components/page/Page.types";
import { chakraUiRender } from "../../utils/chakra-ui-render";
import { Playground } from "./Playground";

jest.mock("../../components/page/Page", () => ({
  Page: ({ heading, id, children }: PageProps) => (
    <div data-test-id={`${id}-page`}>
      {heading && <h1>{heading}</h1>}
      {children}
    </div>
  ),
}));

const render = () => chakraUiRender(<Playground />);

describe("Playground", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("playground-page")).toMatchSnapshot();
  });

  it("renders the component buttons", () => {
    render();

    expect(screen.getByTestId("playground-page-button")).toBeInTheDocument();
    expect(
      screen.getByTestId("playground-test-component-button"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("playground-theme-toggle-button"),
    ).toBeInTheDocument();
  });

  it("renders the selected component", () => {
    render();

    expect(screen.getByText("This is bold text")).toBeInTheDocument();
  });

  it("renders the selected component when a button is clicked", async () => {
    render();

    const testComponentButton = screen.getByTestId(
      "playground-test-component-button",
    );

    await userEvent.click(testComponentButton);

    expect(screen.getByText("This is a test component")).toBeInTheDocument();
  });
});
