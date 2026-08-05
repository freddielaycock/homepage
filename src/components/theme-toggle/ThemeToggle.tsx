"use client";

import { Button } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant="outline" onClick={toggleColorMode}>
      {colorMode === "light" ? "Toggle Dark Mode" : "Toggle Light Mode"}
    </Button>
  );
};
