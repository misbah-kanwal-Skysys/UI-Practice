import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const ContentSection = ({ heading, definition, textwidth }) => {
  return (
    <Flex
      w="100%"
      gap="38px"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        h={"max-content"}
        borderRadius={"7px"}
        bg={"green.100"}
        py={["10px"]}
        px={"10px"}
      >
        <Heading
          letterSpacing={1}
          fontFamily={"Space Grotesk"}
          textStyle={"p3"}
          fontWeight={600}
        >
          {heading}
        </Heading>
      </Box>
      <Box maxW={textwidth}>
        <Text lineHeight={1.3} textStyle={"p5"}>
          {definition}
        </Text>
      </Box>
    </Flex>
  );
};

export default ContentSection;
