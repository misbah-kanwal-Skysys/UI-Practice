import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { buttonRecipe } from "./Recipe/buttonRecipe";
import { textStyles } from "./Recipe/textRecipe";
import {inputSlotRecipe} from "@/app/Recipe/slotRecipe"

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },

  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        white: {
          100: { value: "#FFFFFF" },
        },
        black: {
          100: { value: "#000000" },
          200: { value: "#191A23" },
        },
        gray: {
          100: { value: "#F3F3F3" },
          200: { value: "#898989" },
        },
        green: {
          100: { value: "#B9FF66" },
        },
      },
    },
    textStyles,
   
    recipes: {
      button: buttonRecipe,
    },
    slotRecipes: {
      input: inputSlotRecipe
    },
  },
});

export const system = createSystem(defaultConfig, config);
