import React from "react";
import { Box, Text } from "@chakra-ui/react";

// Define a functional component named CreateYourWeddingButton
// Use Record<string, never> to indicate that no props are accepted
const CreateYourWeddingButton: React.FC<Record<string, never>> = () => {
    return (
        <Box
            display="flex" // Use flexbox layout to align children
            padding="15px 40px" // Set padding around the content
            justifyContent="center" // Center content horizontally
            alignItems="center" // Center content vertically
            gap="10px" // Space between child elements
            borderRadius="20px" // Rounded corners
            bg="rgba(53, 146, 93, 1)" // Background color
            cursor="pointer" // Change cursor to pointer to indicate clickable
            onClick={() => {
                // Redirect to a URL when the box is clicked
                window.location.href = process.env.NEXT_PUBLIC_APP_REGISTER_LINK + `?context=wedding`;
            }}
            w={{ base: "326px", md: "346px" }} // Responsive width
            h="50px" // Fixed height
        >
            <Text
                fontWeight={400} // Font weight
                fontSize={{ base: "16px", md: "20px" }} // Responsive font size
                color="#fff" // Text color
            >
                Create wedding website
            </Text>
        </Box>
    );
};

export default CreateYourWeddingButton;