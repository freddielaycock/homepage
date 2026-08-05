"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        danger: {
          value: { base: "{colors.red}", _dark: "{colors.darkred}" },
        },
        success: {
          value: { base: "{colors.green}", _dark: "{colors.darkgreen}" },
        },
      },
    },
  },
});
const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
