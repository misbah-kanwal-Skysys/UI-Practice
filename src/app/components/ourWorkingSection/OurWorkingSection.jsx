"use client";
import React, { useState } from "react";
import ContentSection from "../contentSection/ContentSection";
import { Accordion, Box, Heading, Image, Span, Text } from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";
import { accordianArray } from "@/app/db/dummy";

const OurWorkingSection = () => {
  return (
    <>
      <ContentSection
        heading={"Our Working Process "}
        definition={"Step-by-Step Guide to Achieving Your Business Goals"}
        textwidth={["380px"]}
      />
      <Box mt={["60px"]}>
        <Accordion.Root defaultValue={[0]} collapsible>
          {accordianArray.map((item, index) => (
            <Accordion.Item
              border="1px solid #191A23"
              borderBottom="6px solid #191A23"
              bg="#F3F3F3"
              my={6}
              p={["30px"]}
              borderRadius="28px"
              key={index}
              value={item}
              _open={{
                bg: "green.100",
              }}
              px={["40px"]}
            >
              <Accordion.ItemTrigger
                display={"flex"}
                justifyContent={"space-between"}
                w={"100%"}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  color="#000000"
                  gap="15px"
                >
                  <Text
                    textStyle={"p6"}
                    fontFamily={"Space Grotesk"}
                    fontWeight="600"
                  >
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </Text>
                  <Span
                    fontWeight={700}
                    textStyle={"p1"}
                    flex="1"
                    textAlign="left"
                  >
                    {item.ques}
                  </Span>
                </Box>
                <Accordion.ItemIndicator
                  _open={{
                    src: "/images/negative.svg",
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"#F3F3F3"}
                  border={"1px solid #191A23"}
                  borderRadius={"50%"}
                  w={"30px"}
                  h={"30px"}
                >
                  <Image
                    src={"/images/positive.svg"}
                    alt={`Logo ${index + 1}`}
                    maxW={["14px"]}
                    objectFit="contain"
                  />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Separator bg={"#000000"} mt={["20px"]} />
                <Accordion.ItemBody
                  textStyle={"p7"}
                  mr={["10px"]}
                  mt={["20px"]}
                >
                  {item.ans}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </>
  );
};

export default OurWorkingSection;
