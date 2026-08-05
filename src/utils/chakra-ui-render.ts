import { render } from "@testing-library/react";
import type { ReactNode } from "react";

import { Provider } from "../components/ui/provider";

export const chakraUiRender = (children: ReactNode) =>
  render(children, { wrapper: Provider });
