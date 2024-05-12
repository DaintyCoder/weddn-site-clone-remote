// Importing necessary components and libraries
import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Styled from "styled-components";
// Importing custom components and styles
import { Text, Clear, List } from "../../components/commons/styles";
import { Text as PageHeading } from "@chakra-ui/react";
import PublicLayout from "../../Layout/PublicLayout";

// Define the Privacy component
const Privacy = () => {
  return (
    // Using PublicLayout component to wrap the privacy policy content
    <PublicLayout>
      <Container>
        {/* Spacer for adding vertical space at the top */}
        <Spacer w={"full"} h={{ base: "170px" }} />

        {/* Flex container to center the heading */}
        <Flex alignItems="center" justifyContent="center">
          <PageHeading
            fontSize={{ base: "30px", md: "64px" }}
            lineHeight={{ base: "40.4px", md: "80.64px" }}
            fontWeight={600}
            align={"center"}
            maxW={{ base: "342px", md: "518px" }}
            mb={"23px"}
          >
            Privacy
          </PageHeading>
        </Flex>

        {/* Box container for padding around the text content */}
        <Box px={{ base: "20px" }}>
          {/* Text components for each section of the privacy policy */}
          <Text>
            At Unboxd, your privacy is a priority for us, that's why we collect and retain the least information necessary to provide our services and debug any occasional problems that might arise.
          </Text>
          <Text>
            As long as our applications and websites can provide their functionality without doing so, we prefer to avoid collecting data from you.
          </Text>
          <Text>
            In the cases where we do collect data, we try to be clear about why we're collecting it, tell you how long we keep it, and delete it when we no longer need it.
          </Text>
          <Text>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at{" "}
            <a href={"mailto:privacy@unboxd.gift"}>privacy@unboxd.gift</a>
          </Text>
          <Clear />

          {/* Repeated structure for different sections of the privacy policy */}
          <PageHeading>Log files</PageHeading>
          <Text>
            Our products follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and it's part of hosting services' analytics.
          </Text>
          <Text>The information collected by log files include:</Text>
          <List>
            <li>Internet protocol (IP) addresses (may reveal your approximate geographic location).</li>
            <li>Details of the software making the request (such as browser type, version, operating system).</li>
            <li>Device type (mobile, tablet, desktop).</li>
            <li>Date and time stamp of the request.</li>
            <li>The name of the resource requested.</li>
            <li>Number of requests.</li>
            <li>Referring/exit pages.</li>
          </List>
          <Text>
            These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </Text>
          <Clear />

          {/* Additional sections omitted for brevity but follow similar structure */}
          {/* Each section should be clearly separated and include a PageHeading and Text components as needed */}

          {/* Spacer at the bottom for additional vertical space */}
          <Spacer w={"full"} h={{ base: "100px" }} />
        </Box>
      </Container>
    </PublicLayout>
  );
};

// Styled container for the privacy policy content
const Container = Styled.div`
  flex-direction: column;
  max-width: 750px;
  margin: auto;
`;

// Exporting the Privacy component as the default export
export default Privacy;