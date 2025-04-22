import { Box, Image } from "@chakra-ui/react";
import React from "react";
import LabelInput from "../Input/LabelInput";

const ContactForm = () => {
  return (
    <Box
      mt={["50px"]}
      bg={"gray.100"}
      position={"relative"}
      borderRadius={"20px"}
      p={["20px"]}
    >
      <Box>
        <LabelInput
          name={"name"}
          labelVariant={"label"}
          type="text"
          variant={"border-input"}
          placeholder="Enter Name"
          label={"Name"}
        />
        {/* <Image src="/images/contactImg.png" /> */}
      </Box>
    </Box>
  );
};

export default ContactForm;
