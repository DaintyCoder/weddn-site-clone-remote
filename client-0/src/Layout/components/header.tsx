import React/* , { useState } */ from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Image, HStack /* , useMediaQuery */ } from "@chakra-ui/react";
import { LinkButton } from "../../components/ButtonCmp";
import WeddingHeader from "./weddings/weddingsHeader";



interface IHeaderProps {
  isWedding?: boolean; // Ensure this prop is used or remove if unnecessary
}

const Header: React.FC<IHeaderProps> = () => {
  const { pathname } = useRouter();
  //const [showEarlyAccessModal, setShowEarlyAccessModal] = useState(false);
  //const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const isWeddingRoute = () => pathname === "/weddings";

  return (
    <>
      {isWeddingRoute() || pathname === "/" ? (
        <WeddingHeader />
      ) : (
        <Box w="full" h={{ base: "111px", md: "150px" }} pos="fixed" p={{ base: "0 16px", sm: "0 24px" }} zIndex="5">
          <HStack w="full" maxW="1344px" backgroundColor="rgba(34, 36, 44, 0.8)" backdropFilter="blur(4px)" borderRadius="60px" justifyContent="space-between" h={{ base: "91px", md: "110px" }} padding={{ base: "33px 18px", md: "37px 35px" }} pos="relative" top={{ base: "20px", xl: "40px" }} m="0 auto">
            <Link href="/">
              <Image w={{ base: "139px", md: "239px" }} src="/images/logo/unboxd-logo-white.svg" alt="Logo" cursor="pointer" />
            </Link>
            <LinkButton
              href={`${process.env.NEXT_PUBLIC_APP_LINK}?destination=${isWeddingRoute() ? "wedding" : "gift"}`}
              external
              text= {"Sign in"}
              size= {"sm"}
              padding="20px 16px"
              width= "82px"
              height= "61px"
              fontSize= "14px"
              fontWeight= "500"
              backgroundColor= "rgba(51, 129, 73, 0.2)"
              opacity= "1"
              borderRadius= "30px"
              color= "#46D16E"
              onClick={() => {}}
            />
          </HStack>
        </Box>
      )}
    </>
  );
};

export default Header;