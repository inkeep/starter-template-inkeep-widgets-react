// hook for custom color mode
// insert your own color mode logic/storage layer here, if desired

import { type ColorMode } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

export const useCustomColorMode = (): [ColorMode, () => void] => {
  const [colorMode, setColorMode] = useState<ColorMode>("light");

  const toggleColorMode = useCallback(() => {
    setColorMode((colorMode) => (colorMode === "light" ? "dark" : "light"));
  }, []);

  return [colorMode, toggleColorMode];
};
