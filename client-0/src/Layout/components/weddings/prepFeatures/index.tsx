// Importing necessary components and hooks from Chakra UI
import {
  Box, Text, /* Flex, Spacer, */ Grid, GridItem, /* VStack, */ Image, /* CircularProgress, CircularProgressLabel, useColorMode, */
} from "@chakra-ui/react";

// Importing custom components
import MobilePrepFeatures from "./features";
import Card, { TableData } from "./prepCards";

// Array of image paths used in the dashboard
const dashboardPictures = [
  "/images/weddings/Avatar.svg",
  "/images/weddings/Avatar-1.svg",
  "/images/weddings/Avatar-2.svg",
  "/images/weddings/Avatar-3.svg",
  "/images/weddings/Avatar-4.svg",
  "/images/weddings/gift.svg",
  "/images/weddings/gift-1.svg",
  "/images/weddings/gift-2.svg",
  "/images/weddings/gift-3.svg",
  "/images/weddings/gift-4.svg",
];

// Main functional component for the Wedding Prep Features
const WeddingPrepFeatures = () => {
  // Hook to toggle color modes (commented out as it's not currently used)
  // const { colorMode } = useColorMode();

  // Component return statement
  return (
    // Main container Box with responsive width and margin
    <Box w={{ base: "95%", md: "80%" }} m="0 auto" overflow={{ base: "hidden" }}>
      
      {/* Box for the main title with responsive text size and margin */}
      <Box w={{ base: "", md: "693px" }} mx="auto" textAlign="center" mb={14}>
        <Text fontSize={{ base: "24px", md: "48px" }}>
          One place for everything leading up to your{" "}
          <span style={{ color: "rgba(225, 184, 76, 1)", fontFamily: "NewSpirit" }}>
            igbeyawo
          </span>
        </Text>
      </Box>

      {/* Displaying cards in a grid layout for desktop view */}
      <Box display={{ base: "none", md: "block" }}>
        <Grid templateColumns="repeat(5, 1fr)" gap={12}>
          <GridItem colSpan={2}>
            <Card
              title={"Shared Information"}
              desc={"Share the needed information for people who would be attending your wedding."}
              content={
                <Box bgColor={"rgba(252, 248, 237, 0.05)"} w={{ md: "80%" }} mt={3} display="flex" flexDir="column" alignItems="center" justifyContent="center" pt={4} pos="absolute" bottom={0} left="10%" borderTopRadius="8px">
                  <Box w={{ md: "200px" }} textAlign="center">
                    <Text fontSize="24px" fontFamily="Playfair Display">#MeetTheOGs</Text>
                    <Text>📍 Lagos (Mainland)</Text>
                    <Text pt={2} fontFamily="Plus Jakarta Sans">Saturday, October 5, 2022 7:30 AM - 10:00 PM</Text>
                  </Box>
                  <Text color={"rgba(162, 205, 180, 1)"} py={2} fontFamily="Plus Jakarta Sans" fontWeight={700}>
                    E-Pass
                  </Text>
                  <Box>
                    <Image src="/images/weddings/qrcode.svg" alt="barcode" />
                  </Box>
                </Box>
              }
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Card
              title={"Manage Your RSVP"}
              desc={"View the full list of everyone that would be attending your wedding."}
              content={
                <Box>
                  <Box pos="absolute" bottom={0} right={0}>
                    <TableData />
                  </Box>
                  <Box borderRadius="30px" py={3} px={6} pos="absolute" bgColor={"rgba(120, 182, 146, 1)"} bottom={{ md: "7%" }} right={{ md: "5%" }} boxShadow="-1px 2px 7px 0px rgba(0,0,0,0.75)" color="#fff">
                    <Text>Edit Attendance List</Text>
                  </Box>
                </Box>
              }
            />
          </GridItem>
        </Grid>

        {/* Additional rows and cards are defined similarly... */}
      </Box>

      {/* Mobile-specific features component */}
      <Box display={{ base: "block", md: "none" }}>
        <MobilePrepFeatures dashboardPictures={dashboardPictures} />
      </Box>
    </Box>
  );
};

// Exporting the component for use in other parts of the application
export default WeddingPrepFeatures;