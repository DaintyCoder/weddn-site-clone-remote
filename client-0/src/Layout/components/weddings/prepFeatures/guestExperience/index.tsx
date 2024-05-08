// Import necessary components and hooks from Chakra UI
import {
  Box,
  Flex,
  Text,
  Image,
  useColorMode,
  /* CircularProgress,
  CircularProgressLabel, */
} from "@chakra-ui/react";

// Define the GuestExperience functional component
const GuestExperience = () => {
  // Use the useColorMode hook to access the current color mode (light or dark)
  const { colorMode } = useColorMode();

  // Return the JSX for rendering
  return (
    // Main container with top margin
    <Box mt={16}>
      {/* Center-aligned text container */}
      <Box textAlign="center">
        {/* Responsive font size text */}
        <Text fontSize={{ base: "24px", md: "40px" }}>
          Deliver a{" "}
          {/* Inline style for the word "superb" with conditional color based on the color mode */}
          <span style={{
            color: colorMode === "light" ? "rgba(48, 133, 85, 1)" : "rgba(225, 184, 76, 1)",
            fontFamily: "NewSpirit",
          }}>
            superb
          </span>{" "}
          online guest experience.
        </Text>
      </Box>
      {/* Flex container for layout adjustments based on screen size */}
      <Flex flexDir={{ base: "column", md: "row" }} gap={4} justifyContent={{ md: "center" }} mt={5} w={{ base: "95%" }} mx={{ base: "auto" }}>
        {/* Box for QR code section */}
        <Box>
          <Box w={{ base: "full", md: "605px" }} display="flex" flexDir="column" alignItems="center" bgColor={colorMode === "light" ? "rgba(245, 245, 245, 1)" : "rgba(27, 29, 34, 1)"}>
            <Box w={{ base: "88%", md: "80%" }} mt={4}>
              <Image src="/images/weddings/table-qr.svg" alt="qr code" />
            </Box>
            <Box py={4} w={{ base: "320px", md: "81%" }} mx={{ base: "auto" }}>
              <Text color="rgba(120, 182, 146, 1)" fontSize={{ base: "20px", md: "28px" }} fontFamily="NewSpirit" fontWeight={400}>
                Get a printable QR code
              </Text>
              <Text>Get real time notifications on how your wedding is progressing.</Text>
            </Box>
          </Box>
          {/* Additional sections with similar structure can be added here */}
        </Box>
      </Flex>
      {/* Additional main sections can be added similarly */}
    </Box>
  );
};

// Export the GuestExperience component for use in other parts of the application
export default GuestExperience;