"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContainerLayout from "../layout/ContainerLayout";
import { logos } from "@/app/db/dummy";

const LogoSlider = () => {
  const settings = {
    arrows: false,
    centerMode: false,
    dots: false,
    lazyLoad: true,
    centerPadding: 0,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  return (
      <Box width="100%" overflow="hidden">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
              key={index}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                maxW={["90px", "90px", "100px"]}
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>
  );
};

export default LogoSlider;
