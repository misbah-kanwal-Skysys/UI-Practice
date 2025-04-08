import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CustomButton from "../button/CustomButton";

const HeroSection = () => {
  return (
    <Box
      display={"flex"}
      width="100%"
      minH={"inherit"}
      gap={"10px"}
      flexDirection={{ base: "column", sm: "column", lg: "row" }}
      mt={{ base: "20px", md: "20px", lg: "25px" }}
      justifyContent={"space-between"}
    >
      <Box
        width={"100%"}
        maxWidth={{ base: "800px", md: "700x", lg: "650px" }}
        mt={{ base: "25x", lg: "20px" }}
      >
        <Heading
          maxWidth={{ base: "800px", md: "700x", lg: "480px" }}
          textStyle={"p2"}
          lineHeight={1.3}
          fontFamily={"Space Grotesk"}
          fontWeight={600}
          letterSpacing={3}
        >
          Navigating the digital landscape for success
        </Heading>
        <Text
          mt={["20px"]}
          maxWidth={{ base: "800px", md: "700x", lg: "450px" }}
          color={"black.100"}
          lineHeight={1.5}
          textStyle={"p1"}
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </Text>
        <Box mt={["20px"]}>
          <CustomButton
            text="Book a consultation"
            style={{
              variant: "squareOutlineBtn",
              size: "xxl",
              bg: "black",
              color: "#FFFFFF",
            }}
          />
        </Box>
      </Box>

      <Box>
        <Image
          cursor="pointer"
          w={"100%"}
          src="/images/Illustration.svg"
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
