import React from "react";
import { useColorMode, useColorModeValue, Button } from "@chakra-ui/react";

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  return <Button onClick={toggleColorMode}>mode {text}</Button>;
};
