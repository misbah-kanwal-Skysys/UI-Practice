import { Box, Container } from "@chakra-ui/react";
import React from "react";

const ContainerLayout = ({ children }) => {
  return (
    <Container
      px={{ base: "15px", md: "30px", lg: "80px" }}
      mx={"auto"}
      maxW={"1400px"}
    >
      {children}
    </Container>
  );
};

export default ContainerLayout;
