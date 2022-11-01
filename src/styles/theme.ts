import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      900: "#212328",
      600: "#323538",
      300: "#757575",
      100: "#ECEFF4",
    },
    green: {
      promo: "#81AE3E",
      highlight: "#A4D008",
    },
    yellow: {
      warn: "#FFD60A",
    },
    blue: {
      main: "#3A82F7",
      secondary: "#5AA0EA",
    },
    red: {
      highlight: "#FF453A",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "SF-Pro-Display-Bold",
    subheading: "SF-Pro-Display-Semibold",
    body: "SF-Pro-Text-Regular",
    medium: "SF-Pro-Text-Medium",
    semibold: "SF-Pro-Text-Semibold",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 22,
    "2xl": 34,
  },
  sizes: {
    14: 56,
  },
});
