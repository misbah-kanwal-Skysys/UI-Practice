import React from "react";
import ContainerLayout from "../layout/ContainerLayout";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CustomButton from "../button/CustomButton";

const HeroSection = () => {
  return (
    <ContainerLayout>
      <Box
        display={"flex"}
        width="100%"
        minH={"inherit"}
        gap={"10px"}
        flexDirection={{ base: "column", sm: "column", lg: "row" }}
        mt={{ base: "20px", md: "20px", lg: "25px" }}
      >
        <Box
          width={"100%"}
          maxWidth={{ base: "800px", md: "700x", lg: "700px" }}
          mt={{ base: "25x", lg: "20px" }}
        >
          <Heading
            maxWidth={{ base: "800px", md: "700x", lg: "420px" }}
            textStyle={"p2"}
            lineHeight={1.3}
            fontFamily={"Space Grotesk"}
          >
            Navigating the digital landscape for success
          </Heading>
          <Text
            mt={["20px"]}
            maxWidth={{ base: "800px", md: "700x", lg: "400px" }}
            color={"black.100"}
            lineHeight={1.5}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </Text>

          <Box mt={["20px"]}>
            <CustomButton
              text="Book a consultation"
              style={{
                variant: "squareOutlineBtn",
                size: "xxl",
                bg:'black',
                // bgC : "black.100",
                color: "#FFFFFF",
              }}
            />
          </Box>
        </Box>

        <Image
          cursor="pointer"
          //   height={{ lg: "390px", base: "210px" }}
          w={"100%"}
          maxW={{ base: "580px", lg: "550px" }}
          src="/images/Illustration.svg"
          alt="logo"
        />
      </Box>
    </ContainerLayout>
  );
};

export default HeroSection;
