import { Box, Text, useColorMode } from "@chakra-ui/react";
import ButtonCmp from "../ButtonCmp/ButtonCmp";
//import { useRouter } from "next/router";
import Link from "next/link";


const CtaCmp = () => {
  //const router = useRouter();
  const { colorMode } = useColorMode();

  const textColor = colorMode === "light" ? "rgba(22, 61, 39, 1)" : "rgba(255, 255, 255, 1)";
  const registerLink = process.env.NEXT_PUBLIC_APP_REGISTER_LINK || "/register"; // Default link if env var is missing

  return (
    <>
      <Box mb={20} textAlign="center">
        <Text
          fontSize={{ base: "32px", md: "56px" }}
          color={textColor}
        >
          Be like <span className="highlighted-text" // An issue with span was resolved by moving the inline style for the <span> element to an external CSS (imported above: fonts.css)
                                                    // However, a styled component can also be used to achieve this effect.
                  >
                    Liz & Tunji,
                  </span> use Unboxd
        </Text>
        <Box mt={3}>
          <Link href={`${registerLink}?context=wedding`} passHref>
            <ButtonCmp
              as="a" // Render the component as an anchor tag
              text="Create your wedding website"
              height="50px"
              size="sm"
              padding="15px 40px"
              fontSize="20px"
              backgroundColor="rgba(53, 146, 93, 1)"
              opacity="1"
              borderRadius="20px"
              color="#FFFFFF"
              aria-label="Create your wedding website"
            />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CtaCmp;