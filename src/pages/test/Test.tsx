import type { FC } from "react";

import { TestComponent } from "../../components/test-component/TestComponent";

export const Test: FC = () => (
  <div data-test-id="test-page">
    <TestComponent text="Please check back for further updates for the test page." />
  </div>
);
