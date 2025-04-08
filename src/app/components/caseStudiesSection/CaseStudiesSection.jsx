import React from "react";
import ContentSection from "../contentSection/ContentSection";
import { Box, Flex, Image, Link, Separator, Text } from "@chakra-ui/react";

const CaseStudiesSection = () => {
  const array = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];
  return (
    <>
      <ContentSection
        heading={"Case Studies"}
        definition={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
        textwidth={["480px"]}
      />

      <Box
        mt="55px"
        w="100%"
        borderRadius="45px"
        px={{ base: "20px", md: "40px", xl: "43px" }}
        py={{ base: "25px", md: "40px", xl: "60px" }}
        bg="#191A23"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="stretch"
          gap={{ base: 10, md: 0 }}
          position="relative"
        >
          {array.map((text, i) => (
            <React.Fragment key={i}>
              <Box
                w={["500px"]}
                px={{ base: "0", md: i == 2 ? "32px" : "20px" }}
                textAlign="left"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                h={"max-content"}
              >
                <Text
                  mb="20px"
                  letterSpacing={1}
                  fontFamily="Space Grotesk"
                  textStyle="p7"
                  color={"#FFFFFF"}
                >
                  {text}
                </Text>

                <Flex align="center" gap={2}>
                  <Link
                    href="#"
                    color="#B9FF66"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Learn more
                  </Link>
                  <Image src="/images/arrow.svg" alt="arrow" boxSize="16px" />
                </Flex>
              </Box>

              {i < array.length - 1 && (
                <Box
                  display={{ base: "none", md: "block" }}
                  width="2px"
                  backgroundColor="gray.600"
                  mx="18px"
                />
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default CaseStudiesSection;
