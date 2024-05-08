import Link from "next/link";
import React from "react";
import { BarDiv } from "../../components/style";
import { Box, Flex, HStack, Image, Text, /* useColorMode */ } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CtaCmp from "../../components/weddings/ctaCmp";

interface IFooter {
  wedding?: boolean;
}

const SocialMediaLinks = () => (
  <HStack
    justifyContent={"space-between"}
    maxW={{ base: "165px", md: "147px" }}
    w={"full"}
    mb={{ base: "31px", md: "0" }}
  >
    <a
      href="https://www.instagram.com/unboxdco/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Image src={"/images/icons/whiteIgLogo.svg"} width={"29px"} height={"29px"} />
    </a>
    <a
      href="https://www.facebook.com/unboxdgifts/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <Image src={"/images/icons/whiteFbLogo.svg"} width={"29px"} height={"29px"} />
    </a>
    <a
      href="https://twitter.com/unboxdco"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <Image src={"/images/icons/whiteSvgTwitter.svg"} width={"29px"} height={"29px"} />
    </a>
  </HStack>
);

const Footer: React.FC<IFooter> = ({ wedding }) => {
  const router = useRouter();
  //const { colorMode } = useColorMode();
  const appLink = process.env.NEXT_PUBLIC_APP_LINK || "/register"; // Fallback if env var is not set

  return wedding ? (
    <BarDiv
      style={{ cursor: "pointer" }}
      onClick={() => router.push(`${appLink}/register`)}
    >
      <Text fontSize={"sm"}>website made with unboxd</Text>
    </BarDiv>
  ) : (
    <Box
      pos={"relative"}
      display={"flex"}
      w={"full"}
      flexDir={"column"}
      p={{ base: "52px 24px", md: "78px 24px" }}
      backgroundColor={"#16181D"}
    >
      <Flex flexDir={"column"} maxW={{ md: "1083px" }} margin={{ md: "0 auto" }}>
        <CtaCmp />
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
          alignItems={"center"}
        >
          <HStack
            justifyContent={"space-between"}
            maxW={{ base: "187px", md: "184px" }}
            w={"full"}
            mb={{ base: "31px", md: "0" }}
            color={"rgba(255, 255, 255, 1)"}
          >
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/faq">FAQs</Link>
          </HStack>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            maxW={{ base: "165px", md: "362px" }}
            w={"full"}
            alignItems={{ md: "center" }}
          >
            <SocialMediaLinks />
            <Text
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"20.16px"}
              color={"rgba(255, 255, 255, 0.5)"}
              order={{ md: "-1" }}
              mr={{ md: "55px" }}
              style={{ whiteSpace: "nowrap" }}
            >
              © Unboxd Gifts {new Date().getUTCFullYear()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;