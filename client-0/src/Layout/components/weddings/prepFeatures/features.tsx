import {
  Box, Text, Grid, GridItem, Image, CircularProgress, CircularProgressLabel,
  Flex, /* VStack, */ useColorMode,
} from "@chakra-ui/react";
import Card, { TableData } from "./prepCards";

interface MobilePrepProps {
  dashboardPictures: string[];
}

const MobilePrepFeatures: React.FC<MobilePrepProps> = ({ dashboardPictures }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex w="" flexDir="column">
        <Box>
          <Card
            title={"Shared Information"}
            desc={"Share the needed information for people who would be attending your wedding."}
            content={
              <Box bgColor="rgba(252, 248, 237, 0.05)" mt={5} display="flex" flexDir="column" alignItems="center" textAlign="center" borderTopRadius="5.74px">
                <Box w={{ base: "" }}>
                  <Text fontSize={{ base: "17.22px" }} fontFamily="Playfair Display" pt={2}>
                    #MeetTheOGs
                  </Text>
                  <Text fontSize={{ base: "11.48px" }}>
                    📍 Lagos (Mainland)
                  </Text>
                  <Text pt={2} fontFamily="Plus Jakarta Sans" fontSize={{ base: "11.48px" }} w={{ base: "149px" }}>
                    Saturday, October 5, 2022 7:30 AM - 10:00 PM
                  </Text>
                </Box>
                <Text color="rgba(162, 205, 180, 1)" py={2} fontFamily="Plus Jakarta Sans">
                  E-Pass
                </Text>
                <Box>
                  {colorMode === "dark" ? (
                    <Image src="/images/weddings/qrcode.svg" alt="barcode" />
                  ) : (
                    <Image src="/images/weddings/black-qrcode.svg" alt="barcode" />
                  )}
                </Box>
              </Box>
            }
          />
        </Box>
        <Box w="100%" mt={12}>
          <Card
            title={"Manage Your RSVP"}
            desc={"View the full list of every one that would be attending your wedding."}
            baseHeight="386px"
            content={
              <Box pos="relative">
                <Box pos="absolute" my={3}>
                  <TableData />
                </Box>
                <Box borderRadius="30px" py={3} px={6} pos="absolute" bgColor={colorMode === "dark" ? "rgba(120, 182, 146, 1)" : "rgba(29, 80, 51, 1)"} bottom={{ base: -60 }} right={{ base: -3 }} boxShadow="-1px 2px 7px 0px rgba(0,0,0,0.75)" color="#fff">
                  <Text fontSize="10px">Edit Attendance List</Text>
                </Box>
              </Box>
            }
          />
        </Box>
        <Box mt={12}>
          <Card
            title={"Wedding Wishlist"}
            desc={"Get the gifts that you want. No more cooler, pots, and yeye wedding gifts typical of Nigerian guests."}
            baseHeight="440px"
            content={
              <Box>
                <Image src="/images/weddings/tv.svg" alt="tv" pos="absolute" left={0} w={{ base: "" }} />
                <Flex bgColor="rgba(224, 224, 224, 0.2)" flexDir="row" alignItems="center" w={{ base: "" }} pos="absolute" bottom={{ base: "14%" }} right={{ base: "6%" }} backdropFilter={"blur(4px)"} px={3} py={1} gap={6}>
                  <Box>
                    <Text fontSize={{ base: "9.97px" }}>LG Smart TV</Text>
                    <Text fontSize={{ base: "9.97px" }} fontFamily="NewSpirit">
                      N485,000
                    </Text>
                  </Box>
                  <CircularProgress value={39} color="rgba(231, 198, 112, 1)" size="40px">
                    <CircularProgressLabel fontSize={{ base: "9.97px" }}>
                      39%
                    </CircularProgressLabel>
                  </CircularProgress>
                </Flex>
              </Box>
            }
          />
        </Box>
        <Box mt={12}>
          <Card
            title={"Aso-ebi Payments"}
            desc={"No more hassle when collecting payments for your aso-ebi."}
            baseHeight="410px"
            content={
              <Box>
                <Image src="/images/weddings/asoebi.svg" alt="asoebi" pos="absolute" right={0} bottom={0} />
                <Box bgColor="rgba(224, 224, 224, 0.2)" backdropFilter={"blur(4px)"} px={3} py={1} pos="absolute" display="flex" flexDir="column" bottom={{ base: "50%" }}>
                  <Text>Aso-Ebi and Auto Gele</Text>
                  <Text fontWeight={600} fontFamily="NewSpirit">
                    N25,000
                  </Text>
                </Box>
                <Box bgColor={colorMode === "dark" ? "rgba(93, 168, 125, 1)" : "rgba(29, 80, 51, 1)"} borderRadius="30px" py={3} px={6} pos="absolute" bottom={{ base: "4%" }} right={2} boxShadow="-1px 2px 7px 0px rgba(0,0,0,0.75)" color="#fff">
                  <Text>Pay for Aso-ebi</Text>
                </Box>
              </Box>
            }
          />
        </Box>
        <Box mt={12}>
          <Card
            title={"Manage Your Dashboard"}
            desc={"Get a full overview of your wedding from your personal dashboard"}
            baseHeight="450px"
            content={
              <Box mt={6}>
                <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                  <GridItem colSpan={{ base: 2 }}>
                    <Box pos="relative" display="flex" flexDir="column">
                      <Image src="/images/weddings/couple-mobile.svg" alt="couple" />
                      <Box bgColor="rgba(224, 224, 224, 0.2)" backdropFilter={"blur(4px)"} px={6} py={1} pos="absolute" bottom={{ base: "10%" }} left={{ base: "" }} color="#fff">
                        <Text fontSize={{ base: "8.14px" }}>24 days to go</Text>
                        <Text fontSize={{ base: "8.14px" }} fontWeight={600}> #WI-NE </Text>
                      </Box>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={{ base: 1 }}>
                    <Box>
                      <Image src="/images/weddings/dashboard-asoebi.svg" />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" mt={7} gap={2}>
                  <GridItem>
                    <Image src="/images/weddings/guest.svg" />
                  </GridItem>
                  <GridItem>
                    <Image src="/images/weddings/gift.svg" />
                  </GridItem>
                </Grid>
              </Box>
            }
          />
        </Box>
        <Box mt={12}>
          <Card
            title={"Email Notifications"}
            desc={"Get real time notifications on how your wedding is progressing."}
            content={
              <Box display="flex" alignItems="center" mt={5}>
                <Image src="/images/weddings/iphone.svg" alt="" />
              </Box>
            }
          />
        </Box>
      </Flex>
    </>
  );
};

export default MobilePrepFeatures;