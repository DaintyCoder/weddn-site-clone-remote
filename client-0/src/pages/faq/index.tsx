/// Import necessary components and libraries
import { Flex, Spacer, Text as PageHeading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Styled from "styled-components";
import Accordion from "../../components/Accordion";
import { BottomWrapper, ContentWrapper, Header, Link, SubHeading, Tabsheader } from "../../components/commons/styles";
import PublicLayout from "../../Layout/PublicLayout";
import ChatbotComponent from "../../components/chatbots";
//import ChatbotComponent from "../../components/chatbots/index";

//import ConditionallyRender from "react-util-kit";

//import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
//import { ReactComponent as ButtonIcon } from "../../assets/icons/robot.svg";

import { IoChatbubblesSharp } from 'react-icons/io5'; // Import the chat icon

// Debugging logs
//console.log("Accordion:", Accordion);
//console.log("PublicLayout:", PublicLayout);
//console.log("ChatbotComponent:", ChatbotComponent);
//console.log("ButtonIcon:", ButtonIcon);


/* 
In the provided code snippet, two SVG files are being imported as React components using ES6 destructuring syntax.

The first import statement:
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
This line imports the SVG file located at "../../assets/icons/logo.svg" and assigns it to the variable Logo as a React component. This allows you to use the SVG file as a React component in your code.

The second import statement:
import { ReactComponent as ButtonIcon } from "../../assets/icons/robot.svg";
Similarly, this line imports the SVG file located at "../../assets/icons/robot.svg" and assigns it to the variable ButtonIcon as a React component.

By importing SVG files as React components, you can easily use them within your React components like regular JSX elements. For example, you can render the Logo and ButtonIcon components in your React component's render method:

import React from 'react';
import { type } from 'os';

const MyComponent = () => {
  return (
    <div>
      <Logo />
      <ButtonIcon />
    </div>
  );
};

export default MyComponent;
This way, you can leverage the power of React to manipulate and display SVG files within your React application.
*/



// Define the props type for the FAQ component
interface FaqProps {
  carnonical: string;
}

// FAQ component definition
const Faq = ({ carnonical }: FaqProps) => {

  
  const [showChatbot, toggleChatbot] = useState(false);

  // State to manage the active tab
  const [toggleState, setToggleState] = useState(1);


  // Data for the FAQ sections
  const faqAccount = [
    {
      title: "What do I need to sign up?",
      body: "You only need to input your name, email address, phone number and a beautiful image of you so your friends can easily identify that it is you.",
    },
    {
      title: "Can I skip setting up an account?",
      body: "No, you can't skip creating an account.",
    },
    {
      title: "Is my information safe?",
      body: "Your information is securely stored in our database for contact purposes only. For example, when you lose your password, your email or phone number is where we will send the steps to recover your password.",
    },
    {
      title: "Will you bombard me with emails?",
      body: "No, you won't be bombarded with irrelevant emails. You'd only get notified for transactions and updates about unboxd.",
    },
  ];

  const faqWishlist = [
    {
      title: "What types of event can I use unboxd for?",
      body: "All events really. Unboxd is primarily an item listing tool that can be used for just about anything you can imagine. Some people have used it for their birthdays, others have used it for setting up their new home. You can use it for your wedding, anniversary, graduation etc.",
    },
    {
      title: "Can I list items from a vendor?",
      body: "Not yet. The current version of unboxd only allows you to list items manually. You take a picture, upload, put the title, state the cost and publish.",
    },
    {
      title: "Can I list an item without a picture?",
      body: "No. All item needs to have a respective picture for your loved ones to see.",
    },
    {
      title: "Can I delete an item later?",
      body: "Yes. If you added an item but no longer want your loved ones to see it, you can delete it.",
    },
  ];

  const faqSharing = [
    {
      title: "Where can I share my list to?",
      body: "Unboxd allows you to share directly to facebook, whatsapp and twitter. You can also copy your custom link and insert in your bio link on instagram, send as direct message etc.",
    },
    {
      title: "Is my wishlist hidden or open to anyone?",
      body: "Your wish list is hidden but is visible to anyone who has the link.",
    },
    {
      title: "Can I restrict access to my wishlist?",
      body: "Anyone you have shared your wish list link with will be able to access it any time.",
    },
  ];

  const faqContributions = [
    {
      title: "Where are my contributions kept?",
      body: "Upon completing sign up, an e-wallet is setup for each user. All contributions made are securely saved in the wallet, available to be withdrawn anytime.",
    },
    {
      title: "Are there limits on withdrawals and contributions?",
      body: "When you are ready to withdraw the contributions from your loved ones, you can go ahead with it without limits on minimum or maximum amount. But for contributions, there is a N500k limit per transaction. That sucks right? Yh, we know. But there is nothing we can do, it's due to CBN policies.",
    },
    {
      title: "How secure is the unboxd wallet?",
      body: "Very secure. We have processed millions of transactions and not a single complaint has been made about missing money.",
    },
    {
      title: "How do I withdraw the contributions?",
      body: "When ready, click 'request payout' from the wallet screen and follow the prompt to have the funds transferred to your local bank account.",
    },
    {
      title: "What does it cost to use unboxd?",
      body: "We have made sure that no one loses the amount that they want, so what we do is mark up the cost by 4%. Example: When you create an Item for 50k, we markup and it becomes 52k, when this item is posted online for your contributors, they see 52k and contribute towards 52k. Flutterwave takes their charge from the 52k, instead of an extra charge from the client, the user gets their original 50k and unboxd gets the difference. This way, contributors will not pay any transaction charge to do good (contributing towards a goal), then list creators will not lose any money.",
    },
  ];

  // Function to change the active tab
  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  // Component render
  return (
    <>
      <Head>
        <title>Get clarity about Unboxd</title>
        <meta name="description" content="Read through answers to popular questions about Unboxd" />
        <meta property="og:description" content="Read through answers to popular questions about Unboxd" />
        <meta property="og:site_name" content="Unboxd" />
        <meta property="og:image" content="" />
        <meta property="title" content="Get clarity about Unboxd" />
        {/* Twitter meta tags */}
        <meta property="og:title" content="Get clarity about Unboxd" />
        <meta property="twitter:title" content="Get clarity about Unboxd" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:description" content="Read through answers to popular questions about Unboxd" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:creator" content="@unboxdgifts" />
        <meta property="og:url" content={`https://${carnonical}/faq`} />
        <link rel="canonical" href={`https://${carnonical}/faq`} />
      </Head>
      <PublicLayout>
      <Container>
        <Spacer w={"full"} h={{ base: "170px" }} />
        <Flex alignItems="center" justifyContent="center">
          <PageHeading fontSize={{ base: "30px", md: "64px" }} lineHeight={{ base: "40.4px", md: "80.64px" }} fontWeight={600} align={"center"} maxW={{ base: "342px", md: "518px" }} mb={"23px"}>
            Frequently Asked Questions
          </PageHeading>
        </Flex>
        <Tabsheader>
          {/* Tab headers */}
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            <Header>Account</Header>
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            <Header>Wishlist</Header>
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            <Header>Sharing</Header>
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            <Header>Wallet</Header>
          </button>
        </Tabsheader>
        <ContentWrapper>
          {/* Content for each tab */}
          <div className={toggleState === 1 ? "active-content" : "content"}>
            {faqAccount.map(({ title, body }, index) => (
              <Accordion key={index} title={title} body={body} />
            ))}
            <Spacer w={"full"} h={{ base: "20px" }} />
            <BottomWrapper>
              <h4>Next, list the things you need.</h4>
              <p>Whatever you want your friends and family to help you get, list them all, attach respective features, fill their price and you are almost done.</p>
            </BottomWrapper>
          </div>
          <div className={toggleState === 2 ? "active-content" : "content"}>
            {faqWishlist.map(({ title, body }, index) => (
              <Accordion key={index} title={title} body={body} />
            ))}
            <Spacer w={"full"} h={{ base: "20px" }} />
            <BottomWrapper>
              <h4>Then, generate a custom link and share your wishlist</h4>
              <p> Each unboxd event gets a custom link that your loved ones can use to view the items you have listed and then make part or full contribution for you to purchase the item. For even more convenience, unboxd lets you share directly to WhatsApp, Facebook and Twitter. </p>
            </BottomWrapper>
          </div>
          <div className={toggleState === 3 ? "active-content" : "content"}>
            {faqSharing.map(({ title, body }, index) => (
              <Accordion key={index} title={title} body={body} />
            ))}
            <Spacer w={"full"} h={{ base: "20px" }} />
            <BottomWrapper>
              <h4>Finally, start practicing the money dance 🕺🏽</h4>
              <p> After you share your list with your loved ones anywhere in the world, you can begin to receive part or full payment for any of the items on your wishlist. The contributions received will be saved securely in your wallet and be available for immediate transfer once you request to payout. </p>
              <p>Hint: Always follow up with your loved ones so your needs remain top of mind.</p>
            </BottomWrapper>
          </div>
          <div className={toggleState === 4 ? "active-content" : "content"}>
            {faqContributions.map(({ title, body }, index) => (
              <Accordion key={index} title={title} body={body} />
            ))}
            <Spacer w={"full"} h={{ base: "20px" }} />
            <BottomWrapper>
              <SubHeading>Still got questions?</SubHeading>
              <Link href="https://twitter.com/unboxdgifts" target="_blank" rel="noopener noreferrer">Ask on Twitter</Link>
            </BottomWrapper>
          </div>
        </ContentWrapper>
        <Spacer w={"full"} h={{ base: "100px" }}></Spacer>
      </Container>
      
      </PublicLayout>
      {/* Chatbot toggle button */}
  <button 
    type="button"
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      fontSize: '24px',
      background: 'rgba(53, 146, 93, 1)',
      color: 'white',
      borderRadius: '50%',
      border: 'none',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }} 
    onClick={() => toggleChatbot((prev) => !prev)} 
    aria-label={showChatbot ? "Close chatbot" : "Open chatbot"}
  >
    <IoChatbubblesSharp />
  </button>

  {/* Button to hide the chatbot */}
  {showChatbot && (
    <button 
      type="button"
      style={{
        position: 'fixed',
        bottom: '530px',
        right: '20px',
        fontSize: '14px',
        background: 'rgba(53, 146, 93, 1)',
        color: 'white',
        borderRadius: '8px',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        zIndex: '9999'  // Adjust the z-index to ensure it's above other elements
      }} 
      onClick={() => toggleChatbot(false)}  
      aria-label="Close chatbot"
    >
      Hide Chatbot
    </button>
  )}

  {/* Chatbot component */}
  {showChatbot && <ChatbotComponent />}
    </>
  );
};

// Styled container component
const Container = Styled.div`
  flex-direction: column;
  max-width: 750px;
  margin: auto;
`;

// Server-side props fetching for canonical URL
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      carnonical: req.headers.host
    }
  };
};

export default Faq;