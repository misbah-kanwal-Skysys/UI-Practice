import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TeamCard = ({ item }) => {
  return (
    <Box
      cursor={"pointer"}
      h={["330px"]}
      p={{ md: "10px 30px 17px 30px", base: "7px 16px 23px 16px" }}
      width={"100%"}
      // maxW={["400px"]}
      borderRadius={"35px"}
      border={"1px solid #191A23"}
      borderBottom="5px solid #191A23"
      flexWrap={"wrap"}
      fontFamily={"Space Grotesk"}
    >
      <Box
        display={"flex"}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
        py={["20px"]}
        borderBottom={"1px solid "}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Box w={"31%"}>
          <Image
            // height={{ md: "150px", base: "35px" }}
            // width={{ md: "150px", base: "35px" }}
            src={item.image}
            alt="icon image"
          />
        </Box>

        <Flex w={"63%"} position={"relative"}>
          <Box position={"absolute"} right={0}>
            <Image
              borderRadius={"100px"}
              src={"/images/in.svg"}
              alt="linkedinIcon"
            />
          </Box>
          <Flex
            flexDirection={"column"}
            justifyContent={"end"}
            mt={["17px"]}
            lineHeight={1.3}
          >
            <Text textStyle={"p1"} fontWeight={600}>
              {item.title}
            </Text>
            <Text lineHeight={1.3} textStyle={"p1"}>
              {item.text}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box mt={["18px"]} w={"100%"}>
        <Text my={["10px"]} textStyle={"p1"}>
          {item?.decs}
        </Text>
      </Box>
    </Box>
  );
};

export default TeamCard;
