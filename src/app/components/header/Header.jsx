import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../logo/Logo";
import { navLinks } from "../../db/navlink";
import Link from "next/link";
import CustomButton from "../button/CustomButton";

const Header = () => {
  return (
    <Box as="header" width="full">
      <Container
        maxW={["1000px", "1000px", "1210px"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"auto"}
        py={["20px", "20px", "40px"]}
        px={{ base: "10px", md: "20px" }}
      >
        <Logo />
        <Box
          display={{ base: "none", xl: "flex" }}
          gap={{ lg: "40px", md: "20px", sm: "10px", base: "4px" }}
          maxWidth={{ lg: "600px", xl: "830px" }}
          justifyContent={"end"}
          w={"100%"}
        >
          {navLinks.map((item, index) => (
            <Flex
              key={index}
              gap={["5px"]}
              align="center"
              justifyContent={"center"}
              textStyle="p1"
            >
              <Link href={item.pathName}>
                <Text
                  _hover={{
                    color: "white",
                  }}
                >
                  {item.title}
                </Text>
              </Link>
            </Flex>
          ))}
          <CustomButton
            style={{
              variant: "squareOutlineBtn",
              size: "xl",
            }}
            text="Request a quote"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
