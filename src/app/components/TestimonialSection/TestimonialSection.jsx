"use client";
import React, { useState } from "react";
import TestimonialCard from "../cards/TestimonialCard";
import Slider from "react-slick";
import ContentSection from "../contentSection/ContentSection";
import { Box, Icon, Image } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { testimonialCardData } from "@/app/db/dummy";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      onClick={onClick}
      position="absolute"
      bottom="-15px"
      right={["0px", "30px", "200px", "325px"]}
      zIndex="2"
      cursor="pointer"
    >
      <Icon
        as={FaArrowRight}
        boxSize={"20px"}
        color="gray.200"
        fontSize="18px"
      />
    </Box>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <Box
      onClick={onClick}
      position="absolute"
      bottom="-15px"
      left={["0px", "30px", "200px", "325px"]}
      zIndex="2"
      cursor="pointer"
    >
      <Icon
        as={FaArrowLeft}
        boxSize={"20px"}
        color="gray.200"
        fontSize="16px"
      />
    </Box>
  );
};

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "280px",
    arrows: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    customPaging: function (i) {
      return (
        <Box boxSize={"10px"}>
          <Image
            src={
              i === activeSlide
                ? "/images/Vectorgreen.svg"
                : "/images/Vector.svg"
            }
          />
        </Box>
      );
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "70px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box mt={["50px", "60px", "70px"]}>
      <ContentSection
        heading={"Testimonials"}
        definition={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
        textwidth={["900px"]}
      />
      <Box
        mt="55px"
        w="100%"
        h={"100%"}
        borderRadius="45px"
        py={{ base: "25px", md: "40px", lg: "80px" }}
        bg="#191A23"
        position={"relative"}
      >
        <Slider {...settings} className="custom-slider">
          {testimonialCardData?.map((item, index) => (
            <Box
              key={index}
              w={"50%"}
              pb={["60px", "60px", "90px"]}
              px={["0px", "0px", "0px", "18px"]}
            >
              <TestimonialCard item={item} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
