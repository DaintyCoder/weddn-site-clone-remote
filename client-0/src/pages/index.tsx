import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import PublicLayout from "../Layout/PublicLayout";
import { CanonicalProps } from "../typings/interfaces";
import WeddingBanner from "../Layout/components/weddings/banner";
//import WeddingPrepFeatures from "Layout/components/weddings/prepFeatures";
import WeddingPrepFeatures from "../Layout/components/weddings/prepFeatures";
//import GuestExperience from "Layout/components/weddings/prepFeatures/guestExperience";
//import TestimonialCmp from "Layout/components/weddings/testimonialCmp";
//import { getServerSideProps } from "../utils/server-side-props";



/* The IndexPage function is a functional component 
   that renders a webpage using various React and Next.js features.  */
const IndexPage = ({ canonical }: CanonicalProps) => { // This component accepts canonical as a prop, which is part of the
                                                       // CanonicalProps interface. This prop is used to set canonical URLs 
                                                       // for SEO purposes.
  /* const reasons = [
    // Your reasons array here
        {
          icon: "/jet.svg",
          customImage: true,
          title: "Get setup in minutes",
          content:
            "Your loved ones have asked. Show them quickly with an Unboxd wishlist where you can add any item. Better than posting on whatsapp stories  or Twitter ",
        },
        {
          icon: "/gift-bags.svg",
          customImage: true,
          title: "Share with loved ones",
          content:
            "Get a unique shareable link for each wishlist and customise a heart warming welcome note to make your loved ones do awww 😍",
        },
        {
          icon: "/money-bag.svg",
          customImage: true,
          title: "part or full contributions",
          content:
            "Let your loved ones contribute what they can afford towards each item on your wishlist. No pressure!",
        },
        {
          icon: "/stop-sign.svg",
          customImage: true,
          title: "Multiple usecases",
          content:
            "From birthdays to weddings, baby shower, christmas, graduation and valentines, Unboxd is great for all situations",
        },
  ]; */

  /* const testimonies = [
    // Your testimonies array here
    {
        photo: "/twitter-img-1.svg",
        name: "Ayomide tingting",
        handle: "@Omohtine_",
        content:
          "We are making progress with my dress from dyeLab.NG I like that I can see who contributes to my wishlist with @unboxdgifts",
        dateTime: "11:35 AM · Feb 11, 2022",
      },
      {
        photo: "/twitter-img-2.svg",
        name: "Mary_E",
        handle: "@uniqcoda",
        content:
          "Don't let anyone give your an excuse that they don't know what gift to buy for you for your birthday, wedding, baby shower etc. Use @unboxdgifts to design a classy list of gifts you want and send to your family and friends. Thank me later 😊",
        dateTime: "11:58 PM · Jan 13, 2022",
      },
      {
        photo: "/twitter-img-3.svg",
        name: "LamLam❣🇨🇦",
        handle: "@NubianCutiee",
        content:
          "Married/relationship twitter Valentine is coming you can create your gift list with @unboxdgifts it’s a really cool way to ask for what you want without looking like a babilla 😉thank me later…",
        dateTime: "1:44 PM · Jan 13, 2022",
      },
      {
        photo: "/twitter-img-4.svg",
        name: "Pixxis",
        handle: "@Pixxis1",
        content:
          "There’s a wishlist + crowdfunding app you didn’t know about 😌 @unboxdgifts. An awesome way to collect cash contributions for stuff you need. You should definitely check them out! #startup #BlackTechTwitter",
        dateTime: "1:44 PM · Jan 13, 2022",
      },
  ]; */

  const wants = ["birthdays", "weddings", "graduations", "engagements", "anniversaries"];

  // State Management:
  // the useState hook  is used to manage state for wantState, which tracks an index for cycling through different 
  // event types (like birthday, wedding, etc.).
  const [wantState, setWantState] = useState({ id: 0 });

  /* 
     In the context of the code, wantState is an object that contains a property named id. This id property is used to store 
     a numerical value which represents the current index for the wants array. The value of wantState.id is used directly in 
     arithmetic operations, such as the modulo operation shown in the code snippet, to determine the current position in the 
     wants array to display the appropriate event type. 
  */


  // Effect Hook: 
  // The useEffect hook is used to create a timer that updates wantState every 2000 milliseconds (2 seconds). 
  // This effectively cycles through the wants array, changing the displayed text in a banner cyclically.
  useEffect(() => {
    const timeout = setInterval(() => {
      const currentState = wantState.id;
      setWantState({ id: currentState + 1 });
    }, 2000);
    return () => clearInterval(timeout);
  }, [wantState.id]);


  // Dynamic Text: 
  // The textChange variable computes which text to display from the wants array based on the current wantState.id. 
  // This ensures the text displayed in the WeddingBanner component changes over time.
  const textChange = wants[wantState.id % wants.length]; // This code calculates the value of textChange based on the current value 
                                                         // of wantState.id and the length of the wants array.

  /* 
     FLOW:
     The code snippet uses the modulo operator (%) to calculate the remainder of wantState.id divided by the length of the wants array.
     The result of the modulo operation is used as the index to access an element from the wants array.
     The value of the accessed element is assigned to the textChange variable. 
     
     OUTPUT:
     textChange: A string representing the event type based on the current value of wantState.id


     USAGE EXAMPLE:
     const wants = ["birthday", "wedding", "graduation", "engagement", "anniversary"];
     const wantState = { id: 2 };

     const textChange = wants[wantState.id % wants.length];
     console.log(textChange); // Output: "graduation"

     In this example, the value of wantState.id is 2, and the length of the wants array is 5. 
     The modulo operation 2 % 5 results in 2, so the element at index 2 in the wants array ("graduation") is assigned 
     to the textChange variable. The output is "graduation".
  */
  return (
    <>
      <Head>
        <title>Unboxd: The best wishlist app</title>
        <meta name="description" content="Create a wishlist and collect cash gifts from your loved ones anywhere in the world" />
        <meta property="og:site_name" content="Unboxd" />
        <meta property="og:image" content="" />
        <meta property="og:url" content={`https://${canonical}`} />
        <link rel="canonical" href={`https://${canonical}`} />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <PublicLayout isWedding>
        <div>
          <WeddingBanner text={textChange} />
          <WeddingPrepFeatures />
          {/* 
          <GuestExperience />
          <TestimonialCmp /> */}
        </div>
      </PublicLayout>
    </>
  );
};

//export { getServerSideProps };
export default IndexPage;