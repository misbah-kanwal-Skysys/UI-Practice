import { Box, Heading, Link, Flex, Image } from "@chakra-ui/react";
const ServiceCard = ({ index, item }) => {
  return (
    <Box
      border="1px solid #191A23"
      borderRadius="45px"
      h="100%"
      borderBottom="6px solid #191A23"
      bg={item?.bgColor}
      justifyContent="space-between"
      transition="all 0.3s"
      gap={["30px"]}
      cursor={"pointer"}
      p={{ md: "40px 35px 40px 35px", base: "30px 20px 30px 20px" }}
      width={"100%"}
      fontFamily={"Space Grotesk"}
    >
      <Box
        w={"100%"}
        //    maxW={["300px", "400px"]}
        // maxW={["100px", "300px", "450px"]}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box>
          {item.title.map((e, i) => (
            <Box
              key={i}
              h={"max-content"}
              w={"max-content"}
              borderRadius={"7px"}
              bg={item?.headingColor}
              py={["3px"]}
              px={["8px"]}
            >
              <Heading
                letterSpacing={1.2}
                fontFamily={"Space Grotesk"}
                textStyle={"p4"}
                fontWeight={600}
              >
                {e}
              </Heading>
            </Box>
          ))}
        </Box>

        <Box
          w={"100%"}
          // maxW={["100px", "200px", "300px"]}
          display="flex"
          justifyContent="flex-end"
          mt={["5px", "10px", "10px", "-10px"]}
        >
          <Image src={item.icon} alt="service illustration" />
        </Box>

        <Flex gap={3} align="center">
          <Box w={{ base: "20px", md: "35px" }}>
            <Image w="100%" src={item.arrow} alt="arrow" />
          </Box>
          <Link
            href="#"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="medium"
            color={[2, 5].includes(index) ? "#FFFFFF" : "black"}
            _hover={{
              textDecoration: "underline",
              color: "blue.600",
            }}
          >
            Learn more
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default ServiceCard;
