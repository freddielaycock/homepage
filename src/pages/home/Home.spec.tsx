import { render as rtlRender, screen } from "@testing-library/react";

import { Home } from "./Home";

jest.mock("../../components/test-component/TestComponent", () => ({
  TestComponent: ({ text }: { text: string }) => (
    <div data-test-id="mock-test-component">
      {text}
    </div>
  ),
}));

const render = () => rtlRender(<Home />);


describe("Home", () => {
  it("renders", () => {
    render();

    expect(screen.getByTestId("home-page")).toMatchSnapshot();
  });

  it("renders the TestComponent", () => {
    render();

    expect(screen.getByTestId("mock-test-component")).toBeInTheDocument();
  });
});
