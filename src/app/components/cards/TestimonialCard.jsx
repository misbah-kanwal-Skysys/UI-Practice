import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TestimonialCard = ({ item }) => {
  return (
    <Box
      cursor={"pointer"}
      p={{ md: "10px 10px 17px 10px", base: "7px 16px 23px 16px" }}
      flexWrap={"wrap"}
      fontFamily={"Space Grotesk"}
      h={"max-content"}
    >
      <Box
        position="relative"
        color="white"
        border="1px solid #B0FF65"
        borderRadius="50px"
        px={["30px", "30px", "50px"]}
        py={["35px", "35px", "55px"]}
        h="100%"
        _after={{
          content: '""',
          position: "absolute",
          top: "100%",
          left: "57px",
          w: "0px",
          h: "0px",
          borderLeft: "24px solid transparent",
          borderRight: "24px solid transparent",
          borderTop: "28px solid #B0FF65",
        }}
        _before={{
          content: '""',
          position: "absolute",
          top: "100%",
          left: "58px",
          bottom: "-40px",
          w: "0px",
          h: "0px",
          borderLeft: "23px solid transparent",
          borderRight: "23px solid transparent",
          borderTop: "27px solid #191A23",
          zIndex: 1,
        }}
      >
        <Text textStyle={"p5"} color={"FFFFFF"}>
          {item.desc}
        </Text>
      </Box>

      <Box
        w={"max-content"}
        ml={["51px", "71px", "81px"]}
        mt={["38px", "38px", "49px"]}
      >
        <Text textStyle={"p1"} color={"green.100"}>
          {item?.title}
        </Text>
        <Text textStyle={"p7"} color={"#FFFFFF"}>
          {item?.text}
        </Text>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
