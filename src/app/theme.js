import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { buttonRecipe } from "./Recipe/buttonRecipe";
import {textStyles} from "./Recipe/textRecipe"

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
        },
      },
    },
    textStyles,
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
