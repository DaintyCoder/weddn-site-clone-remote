// Importing the Link component from Next.js for client-side transitions between routes
import Link from "next/link";
// Importing React for building the components
import React from "react";
// Importing the Button component and its props interface, although it's not used in this file
//import Button, { IButtonProps } from "./ButtonCmp";
// Importing Flex and Text components from Chakra UI for layout and typography
import { Flex, Text } from "@chakra-ui/react";

// Interface defining the props for the link button components
interface ILinkButtonCmp {
  external?: boolean; // Optional prop to indicate if the link is external
  href: string; // URL or path to link to
}

// Component for a sign-in button styled with Chakra UI and using Next.js Link for navigation
const WeddingSignInButton: React.FC<ILinkButtonCmp> = ({ /* external, */ href, ...rest }) => {
  return (
    // Using the Link component to wrap the Flex component for navigation
    <Link href={href}>
      {/* Flex component from Chakra UI used to style the button */}
      <Flex
        {...rest} // Spreading the rest of the props for flexibility in styling and behavior
        _focus={{ outline: "none", boxShadow: "none" }} // Removing focus outline and shadow for accessibility
        _disabled={{ opacity: 0.5, cursor: "not-allowed" }} // Styling for disabled state
        h="50px" // Fixed height of the button
        px={7} // Horizontal padding
        justifyContent={"center"} // Centering content horizontally
        alignItems={"center"} // Centering content vertically
        gap={"10px"} // Space between elements inside the Flex container
        borderRadius={"20px"} // Rounded corners
        background={"rgba(38, 104, 66, 0.2)"} // Semi-transparent background color
      >
        {/* Text component to display the button label */}
        <Text>Sign in</Text>
      </Flex>
    </Link>
  );
};

// Component for a sign-up button, similar to the sign-in button
export const WeddingSignUpButton: React.FC<ILinkButtonCmp> = ({ /* external, */ href, ...rest }) => {
  return (
    // Using the Link component for navigation
    <Link href={href}>
      {/* Flex component styled similarly to the sign-in button */}
      <Flex
        {...rest} // Spreading additional props
        _focus={{ outline: "none", boxShadow: "none" }} // Accessibility styling for focus state
        _disabled={{ opacity: 0.5, cursor: "not-allowed" }} // Disabled state styling
        h="50px" // Height of the button
        px={7} // Padding along the x-axis
        justifyContent={"center"} // Center content horizontally
        alignItems={"center"} // Align items vertically
        gap={"10px"} // Gap between elements
        borderRadius={"20px"} // Border radius for rounded corners
        background={"rgba(38, 104, 66, 0.2)"} // Background color
      >
        {/* Text for the button label */}
        <Text>Sign up</Text>
      </Flex>
    </Link>
  )
}

// Exporting the sign-in button as the default export of this module
export default WeddingSignInButton;