import {
  Box,
  Flex,
  Heading,
  Text,
  Card,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import ServiceCard from "../cards/ServiceCard";

const ServiceSection = () => {
  const services = [
    {
      title: ["Search engine", "optimization"],
      icon: "/images/img1.svg",
      arrow: "/images/arrowgreen.svg",
      bgColor: "#F3F3F3",
      headingColor:'#B9FF66'
    },
    {
      title: ["Pay-per-click", "advertising"],
      icon: "/images/img2.svg",
      arrow: "/images/arrowgreen.svg",
      bgColor: "#B9FF66",
      headingColor:'#FFFFFF'

    },
    {
      title: ["Social Media", "Marketing"],
      icon: "/images/img3.svg",
      arrow: "/images/arrowdark.svg",
      bgColor: "#191A23",
      headingColor:'#FFFFFF'

    },
    {
      title: ["Email", "Marketing"],
      icon: "/images/img4.svg",
      arrow: "/images/arrowgreen.svg",
      bgColor: "#F3F3F3",
      headingColor:'#B9FF66'

    },
    {
      title: ["Content", "Creation"],
      icon: "/images/img5.svg",
      arrow: "/images/arrowgreen.svg",
      bgColor: "#B9FF66",
      headingColor:'#FFFFFF'

    },
    {
      title: ["Analytics and ", "Tracking"],
      icon: "/images/img6.svg",
      arrow: "/images/arrowdark.svg",
      bgColor: "#191A23",
      headingColor:'#B9FF66'

    },
    // Add more services as needed
  ];

  return (
    <Box py={12} maxW="1200px" mx="auto">
      <Box
        mt={"27px"}
        display={"grid"}
        gridTemplateColumns={{ lg: "1fr 1fr", md: "2fr 1fr", base: "1fr" }}
        gap={["40px"]}
        w={"100%"}
      >
        {services.map((service, index) => (
          <ServiceCard index={index} key={index} item={service} />
        ))}
      </Box>
    </Box>
  );
};

export default ServiceSection;
