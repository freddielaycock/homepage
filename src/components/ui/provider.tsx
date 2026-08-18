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
        bg: {
          DEFAULT: {
            value: { _light: "#f1f1f1", _dark: "#333333" },
          },
          plain: {
            value: { _light: "#ffffff", _dark: "#000000" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "#333333", _dark: "#f1f1f1" },
          },
          plain: {
            value: { _light: "#000000", _dark: "#ffffff" },
          },
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
