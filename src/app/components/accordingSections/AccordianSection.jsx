'use client'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AccordianSection = ({ items }) => {
  return (
    <Box
      border="1px solid #191A23"
      borderBottom="6px solid #191A23"
      py={2}
      pb={[2, 6, 14]}
      bg="green.100"
    >
      <Accordion defaultIndex={[0]} allowMultiple>
        {items?.map((item, index) => (
          <AccordionItem
            key={index}
            bg="green.100"
            my={4}
            py={[1, 1, 2]}
            px={[0, 1, 1]}
            borderRadius="25px"
          >
            <AccordionButton
              _hover={{ backgroundColor: "white.100" }}
              bg="white.100"
              transition=".5s"
              _expanded={{
                "& .accordionIcon": { transform: "rotate(180deg)" },
              }}
            >
              <Box
                as="span"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#002A39"
                borderRadius="full"
                w={["21px", "22px", "23px"]}
                h={["20px", "22px", "22px"]}
                mr={[2, 3, 3]}
              >
                <Heading>0{index + 1}</Heading>
              </Box>

              <Box as="span" flex="1" textAlign="left">
                <Text variant="t8" fontWeight="semibold" color="blue.100">
                  {item.ques}
                </Text>
              </Box>

              <Box
                bg="white"
                textAlign="center"
                w="120px"
                h="200px"
                borderRadius="50%"
              >
                -
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4} textAlign="left">
              <Text variant="t8">{item.ans}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default AccordianSection;
