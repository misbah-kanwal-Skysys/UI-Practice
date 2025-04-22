"use client";
import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import ContentSection from "../contentSection/ContentSection";
import TeamCard from "../cards/TeamCard";
import CustomButton from "../button/CustomButton";
import { cardArray } from "@/app/db/dummy";

const TeamSection = () => {
  // const [showCards, setShowCards] = useState(cardArray);
  // const [loading, setLoading] = useState(false);
  // const handleClick = () => { };

  return (
    <>
      <Box mt={["20px", "35px", "80px"]}>
        <ContentSection
          heading={"Team"}
          definition={
            "Meet the skilled and experienced team behind our successful digital marketing strategies"
          }
          textwidth={["500px"]}
        />
        <Box
          mt={"50px"}
          display={"grid"}
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          columnGap={"35px"}
          rowGap="35px"
          alignItems={"center"}
        >
          {cardArray?.map((item, ind) => {
            return (
              <Box key={ind}>
                <TeamCard item={item} />
              </Box>
            );
          })}
        </Box>

        <Flex justifyContent={"flex-end"} mt="30px">
          <CustomButton
            text="See all team"
            style={{
              variant: "squareOutlineBtn",
              size: "xxl",
              bg: "#191A23",
              color: "#FFFFFF",
            }}
            // handleEvent={handleClick}
            // loading={loading}
          />
        </Flex>
      </Box>
    </>
  );
};

export default TeamSection;
