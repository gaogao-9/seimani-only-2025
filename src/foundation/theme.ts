import { createSystem, defaultConfig } from "@chakra-ui/react";

export const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px",
};

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      sizes: {
        xl: {
          value: "100px",
        },
      },
    },
    breakpoints,
  },
});
