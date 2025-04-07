import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ style, variant, text }) => {
  return (
    <Button {...style} >
      <Flex align="center" justifyContent={"center"} gap={3}>
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
};

export default CustomButton;
