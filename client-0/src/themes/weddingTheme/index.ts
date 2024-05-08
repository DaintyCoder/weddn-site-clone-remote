// Importing necessary functions and types from Chakra UI
import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react"; // Type Import: The type import for ThemeConfig is explicitly done 
                                                     // to keep type declarations separate from actual value imports, which 
                                                     // can help in tree shaking and potentially reducing bundle sizes if 
                                                     // only types are used from a module.

// Configuration for the theme
const config: ThemeConfig = {
  // Setting the initial color mode to 'dark'
  initialColorMode: "dark",
  // Allowing the theme to use the system color mode settings, which is useful for user accessibility and preference.
  useSystemColorMode: true,
};

// Extending the default theme with custom configurations
// extendTheme: This function is used to customize the default theme provided by Chakra UI. You can extend it further 
// by adding more properties like colors, fonts, etc., according to your design requirements.
const theme = extendTheme({
  config
});

// Exporting the custom theme to be used in your Chakra UI application
export default theme;