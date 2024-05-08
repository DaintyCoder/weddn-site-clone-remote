import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Define the custom colors and extend the ThemeConfig type
interface CustomThemeConfig extends ThemeConfig {
  colors: {
    primaryBlack: string;
    primaryGreen: string;
  };
}

// Define the configuration with proper typing
const config: CustomThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors: {
    primaryBlack: "#060606",
    primaryGreen: "#30935B",
  },
};

// Extend the theme with the custom configuration
const theme = extendTheme({ config });

export default theme;