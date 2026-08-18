import { Text } from "@chakra-ui/react";
import type { FC } from "react";

export const Bold: FC<{ text: string }> = ({ text }) => (
  <Text as="span" data-test-id="bold-text" fontWeight="bold">
    {text}
  </Text>
);
