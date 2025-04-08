"use client";
import React from "react";
import ContentSection from "../contentSection/ContentSection";
import { Accordion, Box, Heading, Span, Text } from "@chakra-ui/react";

const OurWorkingSection = () => {
  const array = [
    {
      ques: "Consultation",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      ques: "Research and Strategy Development",
      ans: "To join, you must verify that you are a current or former Navy Nuke by uploading your DD-214 and/or NSIPS Member Data Summary during registration. Once verified, you will gain access to employer profiles, job postings, career resources, and networking opportunities. This verification ensures that only qualified Navy Nukes are represented on the platform, maintaining the integrity and credibility of our network.",
    },
  ];
  return (
    <>
      <ContentSection
        heading={"Our Working Process "}
        definition={"Step-by-Step Guide to Achieving Your Business Goals"}
        textwidth={["380px"]}
      />
      <Box bg={"red"}>
        <Accordion.Root collapsible defaultValue={[0]}>
          {array.map((item, index) => (
            <Accordion.Item
              border="1px solid #191A23"
              borderBottom="6px solid #191A23"
              bg="#F3F3F3"
              my={4}
              p={["30px"]}
              borderRadius="33px"
              key={index}
              value={item.value}
            >
              <Accordion.ItemTrigger>
                <Box display="flex" alignItems="center" gap="8px">
                  <Text fontWeight="bold" color="gray.500">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </Text>
                  <Span flex="1" textAlign="left">
                    {item.ques}
                  </Span>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg={"white"}
                  borderRadius={"50%"}
                  w={"40px"}
                  h={"40px"}
                >
                  <Accordion.ItemIndicator />
                </Box>
              </Accordion.ItemTrigger>

              <Accordion.ItemContent>
                <Accordion.ItemBody>{item.ans}</Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </>
  );
};

export default OurWorkingSection;
