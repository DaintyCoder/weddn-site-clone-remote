import { Box } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "../../typings/interfaces";
import Footer from "../components/footer";
import Header from "../components/header";

interface IPublicLayout extends LayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<IPublicLayout> = ({ children, isWedding }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      position="relative"
      overflow={{ base: "hidden", md: "auto" }} // Added responsiveness for medium devices
    >
      <Header isWedding={isWedding} />
      {children}
      <Footer />
    </Box>
  );
};

export default PublicLayout;



/* Key Changes Explained:
Overflow Property: Added responsiveness to the overflow property to handle medium-sized devices better. This helps in scenarios
where you might want different overflow behaviors based on the screen size.
Code Formatting: Used consistent quotes and removed unnecessary curly braces around string properties for cleaner and more readable
code. */