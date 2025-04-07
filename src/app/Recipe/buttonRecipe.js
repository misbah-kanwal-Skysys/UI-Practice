import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    cursor: "pointer",
  },
  variants: {
    variant: {
      squareOutlineBtn: {
        border: "1px solid",
        borderColor: "#000000",
        borderRadius: "14px",
        cursor: "pointer",
      },
    },
    size: {
      xl: {
        width: { lg: "180px", base: "150px" },
        height: { lg: "52px", base: "50px" },
        fontSize: { base: "13px", sm: "15px", lg: "17px" },
      },
      xxl: {
        width: { lg: "220px", base: "150px" },
        height: { lg: "53px", base: "50px" },
        fontSize: { base: "13px", sm: "15px", lg: "16px" },
      },
    },
  },
});
