// Import Link component from Next.js for client-side transitions between routes
import Link from "next/link";
// Import React for building the component
import React from "react";
// Import Button and its interface IButtonProps from a local component file
//import Button, { IButtonProps } from "./ButtonCmp";
// Import Flex and Text components from Chakra UI for layout and typography
import { Flex, Text } from "@chakra-ui/react";

// Define the interface for the component's props
interface ILinkButtonCmp {
    external?: boolean; // Optional boolean to indicate if the link is external
    href: string; // URL or path to navigate to
}

// Define a functional component with TypeScript, using React.FC and the defined props interface
const WeddingSignUpButton: React.FC<ILinkButtonCmp> = ({ /* external, */ href, ...rest }) => {
    return (
        // Use the Link component for navigation
        <Link href={href}>
            {/* Flex container from Chakra UI to align and justify content */}
            <Flex
                {...rest} // Spread the rest of the props to the Flex component
                _focus={{ outline: "none", boxShadow: "none" }} // Style modifications for the focus state
                _disabled={{ opacity: 0.5, cursor: "not-allowed" }} // Style modifications for the disabled state
                h="50px" // Fixed height of the button
                px={7} // Horizontal padding
                /* padding={"18px 38.5px"} */ // Padding around the content
                justifyContent={"center"} // Center the content horizontally
                alignItems={"center"} // Center the content vertically
                gap={"10px"} // Space between child elements
                borderRadius={"20px"} // Rounded corners of the container // formerly 25px
                /* border={"2px solid #23533B"} */ // Border styling
                background={"rgba(38, 104, 66, 0.2)"} // Semi-transparent background color
            >
                {/* Text component to display the button label */}
                <Text>Sign up</Text>
            </Flex>
        </Link>
    );
};

// Export the component for use in other parts of the application
export default WeddingSignUpButton;