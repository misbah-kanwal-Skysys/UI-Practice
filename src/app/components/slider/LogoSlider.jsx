"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ContainerLayout from "../layout/ContainerLayout";
import { logos } from "@/app/db/dummy";

const LogoSlider = () => {
  const settings = {
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
    <ContainerLayout>
      <Box py="20px" width="100%">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                height={82}
                width={125}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "105px",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </ContainerLayout>
  );
};

export default LogoSlider;
