import { Text } from "@chakra-ui/react";
import type { FC } from "react";
import styled from "styled-components";

import type { TestInput } from "./TestComponent.types";

const TestComponentWrapper = styled.div`
  margin: auto;
  padding: 16px;
  text-align: center;
`;

export const TestComponent: FC<TestInput> = ({ text }) => (
  <TestComponentWrapper data-test-id="test-component">
    {text && <Text data-test-id="test-component-text">{text}</Text>}
  </TestComponentWrapper>
);
