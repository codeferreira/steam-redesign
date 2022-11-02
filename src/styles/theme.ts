import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      900: "#212328",
      600: "#32353B",
      400: "#5E6065",
      300: "#757575",
      100: "#ECEFF4",
    },
    green: {
      500: "#81AE3E",
      400: "#A4D008",
    },
    yellow: {
      400: "#FFD60A",
    },
    blue: {
      400: "#3A82F7",
      300: "#5AA0EA",
    },
    red: {
      400: "#FF453A",
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
