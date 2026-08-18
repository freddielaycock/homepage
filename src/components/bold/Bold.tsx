import { Text } from "@chakra-ui/react";
import type { FC } from "react";

export const Bold: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text as="span" data-test-id="bold-text" fontWeight="bold">
    {children}
  </Text>
);
