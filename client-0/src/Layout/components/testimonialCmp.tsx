// Import necessary components and hooks from Chakra UI
import { Flex, Box, Text, Image, useColorMode } from "@chakra-ui/react";

// Define the TestimonialCmp functional component
const TestimonialCmp = () => {
    // Use the useColorMode hook to handle theme colors based on light or dark mode
    const { colorMode } = useColorMode();

    return (
        // Main container Box with full width
        <Box w="full"
             display="flex"
             flexDir="column"
             justifyContent="center">
            {/* Flex container to align items and manage spacing responsively */}
            <Flex alignItems="center"
                  gap={9}
                  flexDir={{ base: "column", md: "row" }}
                  justifyContent="center"
                  px={{ base: 7 }}
                  pb={{ base: 5 }}
                  pt={{ base: 14, md: 24 }}>
                {/* Box for the image */}
                <Box>
                    <Image src="/images/weddings/couple-arc.svg" alt="couple" />
                </Box>
                {/* Text container Box */}
                <Box textAlign="center">
                    {/* Main testimonial text with responsive font size and color based on theme */}
                    <Text color={colorMode === "dark" ? "rgba(125, 125, 125, 0.5)" : "rgba(235, 244, 239, 0.75)"}
                          fontSize={{ base: "24px", md: "28px" }}
                          fontFamily="NewSpirit">
                        Testimonial
                    </Text>
                    {/* Detailed testimonial text */}
                    <Text w={{ md: "652px" }}
                          fontSize={{ base: "20px", md: "32px" }}
                          pt={3}
                          color="#fff">
                        Unboxd thinks of everything when it comes to creating and designing a wedding website. We just love it!!
                    </Text>
                    {/* Signature text */}
                    <Text pt={3}
                          color="rgba(231, 198, 112, 1)"
                          fontSize={{ base: "20px", md: "28px" }}
                          fontFamily="NewSpirit">
                        Tunji and Liz.
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

// Export the TestimonialCmp component
export default TestimonialCmp;