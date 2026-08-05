import { screen } from "@testing-library/react";
import React from "react";

import { ChakraUIRender } from "./chakra-ui-render";

jest.mock("../components/ui/provider", () => ({
  Provider: ({ children }: { children: React.ReactNode }) =>
    React.createElement("div", { "data-test-id": "provider" }, children),
}));

describe("ChakraUIRender", () => {
  it("renders the provided component wrapped in the Chakra UI Provider", () => {
    ChakraUIRender(
      React.createElement("div", { "data-test-id": "test-component" }, "Test"),
    );

    expect(screen.getByTestId("provider")).toBeInTheDocument();
    expect(screen.getByTestId("test-component")).toBeInTheDocument();
  });
});
