import { defineSlotRecipe } from "@chakra-ui/react";

export const inputSlotRecipe = defineSlotRecipe({
  // slots: ["root", "badge", "icon"],
  // base: {
  //   root: {
  //     bg: "blue.500",
  //     color: "white",
  //     px: 4,
  //     py: 2,
  //   },
  //   badge: {
  //     borderRadius: "full",
  //     px: 2,
  //     py: 1,
  //   },
  // },
  outlinedInput: {
    value: {
      border: "1px solid #000000",
      //   fontWeight: 400,
      //   fontSize: ["22px", "18px", "18px"],
      //   textTransform: "None",
    },
  },
});
