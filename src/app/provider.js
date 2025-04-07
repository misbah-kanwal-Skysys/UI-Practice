"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { system } from "./theme";

const CustomProvider = ({ children }) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};

export default CustomProvider;
