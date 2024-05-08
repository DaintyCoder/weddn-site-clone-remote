// Importing necessary modules and components from libraries and files
import React from "react";
import {
  Box, Flex, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, //Text,
  /* useColorMode, */ useMediaQuery
} from "@chakra-ui/react";
import { LayoutProps } from "../../../typings/interfaces";
import Link from "next/link"; // Link: Imported from next/link to enable client-side transitions between routes.
//import { WeddingSignInButton, WeddingSignUpButton } from "components/ButtonCmp/WeddingSignInButton";
import WeddingSignInButton from "../../../components/ButtonCmp/WeddingSignInButton";
import WeddingSignUpButton from "../../../components/ButtonCmp/WeddingSignUpButton";
//import ThemeToggleButton from "ThemeToggleButton";
//import styles from "../../../styles/styles.module.css";

// Interface for props specific to the WeddingHeader component
// IWeddingHeaderProps: Extends LayoutProps (containing properties like isWedding which could be used to customize the header 
// based on whether the page is wedding-specific).
interface IWeddingHeaderProps extends LayoutProps {}

// Component for rendering the menu icon
const WeddingMenuIcon: React.FC<Record<string, never>> = () => {
  // SVG icon for the menu
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7ZM4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8946 19.2652 13 19 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12ZM4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929C4.48043 16.1054 4.73478 16 5 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17Z"
        fill="white"
      />
    </svg>
  );
};

// Main component for the wedding header
const WeddingHeader: React.FC<IWeddingHeaderProps> = (/* { isWedding } */) => {
// based on whether the page is wedding-specific).
  // 
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)"); // Media query to check screen width

  return (
    <>
      <Box
        w={"full"}
        h={{ base: "111px", md: "110px" }}
        pos={"fixed"}
        p={{ base: "0 16px", sm: "0 24px" }}
        zIndex={"9"}
      >
        <HStack
          w={"full"}
          backdropFilter={"blur(4px)"}
          justifyContent={"space-between"}
          h={{ base: "91px", md: "110px" }}
          padding={{ base: "33px 18px", md: "37px 35px" }}
          pos={"relative"}
          top="0"
          m={"0 auto"}
        >
          <Link href="/">
            <Image src="/images/logo/logo-raw.svg" alt="Logo" cursor={"pointer"} w="" />
          </Link>
          <HStack justifyContent={"space-between"} gap={12}>
            {isLargerThan800 ? (
              <Flex flexDir="row" gap={4}>
                <WeddingSignUpButton href={process.env.NEXT_PUBLIC_APP_REGISTER_LINK + `?context=wedding`} />
                <WeddingSignInButton href={process.env.NEXT_PUBLIC_APP_LINK + `?context=wedding`} />
              </Flex>
            ) : (
              <Menu>
                <MenuButton as={IconButton} aria-label="Options" icon={<WeddingMenuIcon />} variant="outline" />
                <MenuList background={"rgba(34, 36, 44, 0.8)"}>
                  <MenuItem onClick={() => { window.location.href = process.env.NEXT_PUBLIC_APP_REGISTER_LINK + `?context=wedding`; }}>
                    Sign Up
                  </MenuItem>
                  <MenuItem onClick={() => { window.location.href = process.env.NEXT_PUBLIC_APP_LINK + `?context=wedding`; }}>
                    Sign In
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

// Exporting the component for use in other parts of the application
export default WeddingHeader;