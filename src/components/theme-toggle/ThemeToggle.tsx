import { Button } from "@chakra-ui/react";
import type { FC } from "react";
import { useColorMode } from "../ui/color-mode";

export const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="outline" onClick={toggleColorMode}>
      {colorMode === "light" ? "Dark?" : "Light?"}
    </Button>
  );
};
