import { render } from "@testing-library/react";

import { Provider } from "../components/ui/provider";

export const ChakraUIRender = (children: React.ReactNode) =>
  render(children, { wrapper: Provider });
