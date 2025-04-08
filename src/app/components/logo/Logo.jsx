import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        cursor="pointer"
        maxW={{ base: "140px", sm: "130px", md: "150px", lg: "220px" }}
        src="/images/logo.svg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
