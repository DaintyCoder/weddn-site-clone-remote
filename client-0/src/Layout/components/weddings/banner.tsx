// Importing necessary components and hooks from Chakra UI and local components
import { Box, Spacer, Stack, Flex, Text, Image, /* useColorMode */ } from "@chakra-ui/react";
import CreateYourWeddingButton from "../../../components/ButtonCmp/CreateYourWeddingButton";



// Interface for the props of the WeddingBanner component
interface IBanner {
  text: string;
}

// PlayButton component which is a custom SVG play button
/* const PlayButton = () => {
  return (
    <Box as="svg" width={{ base: "24px", md: "48px" }} height={{ base: "24px", md: "48px" }} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.532 27.032C38.9949 26.6737 39.3697 26.2141 39.6275 25.6886C39.8853 25.163 40.0194 24.5854 40.0194 24C40.0194 23.4146 39.8853 22.8369 39.6275 22.3114C39.3697 21.7858 38.9949 21.3263 38.532 20.968C32.5371 16.3292 25.8429 12.6729 18.7 10.136L17.394 9.67197C14.898 8.78597 12.26 10.474 11.922 13.052C10.9778 20.3201 10.9778 27.6798 11.922 34.948C12.262 37.526 14.898 39.214 17.394 38.328L18.7 37.864C25.8429 35.327 32.5371 31.6707 38.532 27.032Z" fill="#EBF4EF" />
    </Box>
  );
}; */

// Main component for displaying the wedding banner
const WeddingBanner: React.FC<IBanner> = ({ text }) => {
  // Hook to access the current color mode (light or dark)
  //const { colorMode } = useColorMode();

  return (
    <Box w={"full"} p={{ md: "0 24px" }} pb={"30px"} overflow={"hidden"}>
      <Box pos="relative">
        <Spacer w={"full"} h={{ base: "120px", md: "200px" }}></Spacer>
        <Stack pos={"relative"} zIndex={2} display={"flex"} flexDir={"column"} alignItems={{ md: "center" }} maxW={{ md: "1250px" }} margin={{ md: "0 auto" }}>
          <Box mb={"60px"} mt={"40px"} display={"flex"} flexDir={{ base: "column", md: "row" }} w={"100%"}>
            <Box display={"flex"} flexDir={"column"} alignItems={{ base: "center", md: "start" }} w={{ base: "", md: "65%" }} gap={4}>
              <Text fontSize={{ base: "30px", md: "63.2px" }} lineHeight={{ base: "40.4px", md: "80.64px" }} fontWeight={400} align={{ base: "center", md: "start" }} maxW={{ base: "328px", md: "617px" }} mb={"23px"}>
                Built for <span className="highlighted-text">Nigerian {text}</span>
              </Text>
              <Text fontSize={{ base: "18px", md: "24px" }} fontWeight={400} lineHeight={{ base: "28.2px", md: "33.84px" }} align={{ base: "center", md: "start" }} w={"full"} maxW={{ base: "328px", md: "594px" }} mb={"48px"}>
                An all-in-one app to manage your guest list, get aso-ebi payments, get gifts and also customise your wedding website to Tomato Red & Danfo Yellow. *wink
              </Text>
              <Flex direction={"column"} mb={"42px"}>
                <CreateYourWeddingButton />
              </Flex>
            </Box>
            <Box w={{ base: "100%", md: "35%" }} px={{ base: "50px", md: "0px" }} height={"fit-content"} justifyContent={"center"} borderRadius={"27px"} background="transparent" alignItems={"center"} mx={"auto"} pos="relative" mt={{ base: 24 }}>
              <Box background="linear-gradient(to bottom, rgba(38, 104, 66, 0.35), rgba(38, 104, 66, 0.35))" filter="blur(20px)" transform="translateX(-5%)" width="53%" height="211px" borderRadius="160px"></Box>
              <Box>
                <Image src="/images/bg-flower.svg" alt="flower" pos="absolute" top={{ base: "-25px", md: "-120px" }} right={{ md: "-60px" }} w={{ base: "87%" }} />
                <Image src="/images/TheOGs-arc.svg" alt="The_OGs_arc" pos="absolute" zIndex={2} right={{ md: "60px" }} top={{ base: "54px", md: "-17px" }} w={{ base: "80%" }} left={{ base: "42px" }} />
                <Image src="/images/TheOGs-lgCut.svg" alt="The_OGs_cutout" pos="absolute" zIndex={1} right={{ md: "56.8px" }} top={{ base: "-10px", md: "-90px" }} w={{ base: "80%" }} left={{ base: "44px" }} />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

/* 
This code is a React component using Chakra UI for styling and layout. It's structured to create a visually appealing section, 
likely for a web page, with responsive design features. Here’s a breakdown of the key elements and Chakra UI features used:

1. Outer Box Container:
- w={"full"}: This sets the width of the box to be full relative to its parent container.
- p={{ md: "0 24px" }}: Applies padding on medium screens and larger. No padding on smaller screens.
- pb={"30px"}: Adds padding at the bottom.
- overflow={"hidden"}: Ensures that any child content that overflows will be hidden.


2. Nested Box with Positioning:
- pos="relative": Positions this box relative to its normal position, allowing absolutely positioned nested elements to be positioned relative to this box.


3. Spacer:
- Used to create space in the layout. Its size is responsive (h={{ base: "120px", md: "200px" }}), adjusting between base and medium-sized screens.


4. Stack for Vertical Layout:
- A Chakra UI component that stacks its children vertically.
- pos={"relative"} and zIndex={2}: Ensures the stack is positioned relative to its container and above some other elements due to the z-index.
- display={"flex"}: Uses Flexbox for layout.
- flexDir={"column"}: Children of this stack are stacked vertically.
- alignItems={{ md: "center" }}: Centers items on medium screens.
- maxW={{ md: "1250px" }} and margin={{ md: "0 auto" }}: Limits the maximum width and centers the stack on medium screens.


5. Textual Content:
Multiple Text components with varying styles for different screen sizes, such as font size and line height, which are responsive.
The text includes a span with a class for additional styling.
CreateYourWeddingButton:
A custom button component imported from another part of the project. It likely triggers navigation or another action.


Image and Styling:
Multiple Image components with absolute positioning, making them overlap or position in specific ways relative to their parent containers.
Background effects like gradients and blur are applied to some boxes for visual enhancement.


Responsive Design:
The use of Chakra UI's responsive styles (base, md) throughout the component ensures that the layout and styling adapt well to different screen sizes.
This component is a complex arrangement of text, images, and a button, styled and laid out to be visually appealing and functional across different devices using Chakra UI's responsive system. */



// Exporting the component for use in other parts of the application
export default WeddingBanner;