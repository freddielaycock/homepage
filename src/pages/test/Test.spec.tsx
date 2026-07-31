import { render as rtlRender, screen } from "@testing-library/react";

import { Test } from "./Test";

jest.mock("../../components/test-component/TestComponent", () => ({
  TestComponent: ({ text }: { text: string }) => (
    <div data-test-id="mock-test-component">
      {text}
    </div>
  ),
}));

const render = () => rtlRender(<Test />);


describe("Test", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("test-page")).toMatchSnapshot();
  });

  it("renders the TestComponent", () => {
    render();

    expect(screen.getByTestId("mock-test-component")).toBeInTheDocument();
  });
});
