// Import necessary React and Chakra UI components
import React, { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

// Define the TypeScript interface for the Accordion props
interface IAccordion {
  title: string;
  body: string;
  version?: React.ReactNode;
  backgroundColor?: string;
  highlightColor?: string;
}

// Accordion functional component
const Accordion = ({ title, body, version, highlightColor, backgroundColor }: IAccordion) => {
  // State to manage the visibility of the accordion body
  const [show, setShow] = useState(false);

  // Function to toggle the visibility state
  const toggleContent = () => setShow(!show);

  return (
    <Box borderRadius="16px" marginBottom="0.5rem" background={backgroundColor || "#0e1018"}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        margin="0"
        bgColor={backgroundColor || "#16181d"}
        borderRadius="16px"
        p="10px 16px"
        cursor="pointer"
        onClick={toggleContent} // Toggle content on click
      >
        <Text fontSize="16px" fontWeight="390">
          {title}
        </Text>
        <Button
          background="transparent"
          _hover={{ backgroundColor: highlightColor || "#0e1018" }}
          _focus={{ backgroundColor: highlightColor || "#0e1018" }}
          color="#fff"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="none"
          padding="0"
          onClick={toggleContent} // Toggle content on click
        >
          {!show ? (
            <span
              style={{
                lineHeight: "1",
                fontWeight: version === "two" ? "normal" : "bold",
                background: version === "two" ? "transparent" : "#fff",
                borderRadius: version === "two" ? "none" : "50%",
                display: "inline-block",
                height: "35px",
                width: "35px",
                padding: "10px",
                fontSize: "15px",
              }}
            >
              {version === "two" ? "+" : <span>&#43;</span>}
            </span>
          ) : (
            <span
              style={{
                fontWeight: version === "two" ? "normal" : "bold",
                background: version === "two" ? "transparent" : "#fff",
                borderRadius: version === "two" ? "none" : "50%",
                display: "inline-block",
                height: "35px",
                width: "35px",
                padding: "10px",
                fontSize: "15px",
              }}
            >
              {version === "two" ? "-" : <span>&#8722;</span>}
            </span>
          )}
        </Button>
      </Flex>
      {show && (
        <Text bgColor={backgroundColor || "#16181d"} p="10px 16px">
          {body}
        </Text>
      )}
    </Box>
  );
};

// Export the Accordion component
export default Accordion;