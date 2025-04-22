import React from "react";
import ContentSection from "../contentSection/ContentSection";
import { Box } from "@chakra-ui/react";
import ContactForm from "../contactForm/ContactForm";

const ContactSection = () => {
  return (
    <Box mt={["20px", "50px", "100px"]}>
      <ContentSection
        heading={"Contact Us"}
        definition={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
        textwidth={["500px"]}
      />
      {/* <ContactForm /> */}
    </Box>
  );
};

export default ContactSection;
