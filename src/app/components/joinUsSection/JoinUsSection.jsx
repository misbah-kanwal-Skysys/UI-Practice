import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import CustomButton from "../button/CustomButton";

const JoinUsSection = () => {
  return (
    <Box position="relative" py="60px">
      <Box
        position="relative"
        borderRadius="45px"
        p={{ base: "15px", md: "18px", lg: "25px", xl: "60px" }}
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          zIndex={1}
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            textStyle="p6"
            lineHeight={1.3}
            fontFamily="Space Grotesk"
            fontWeight={600}
            letterSpacing={3}
          >
            Let’s make things happen
          </Text>
          <Text mt="20px" maxW={['480px']} color="black.100"  textStyle="p5">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </Text>
          <Box mt="30px">
            <CustomButton
              text="Get your free proposal"
              style={{
                variant: "squareOutlineBtn",
                size: "xxl",
                bg: "#191A23",
                color: "#FFFFFF",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        position="absolute"
        top="50%"
        right={"0px"}
        transform="translateY(-50%)"
        w={{ base: "200px", md: "470px" }}
        zIndex={2}
      >
        <Image src="/images/frame19.svg" alt="Proposal" w="100%" h="auto" />
      </Box>
    </Box>
  );
};

export default JoinUsSection;
