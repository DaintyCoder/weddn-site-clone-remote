import Head from "next/head";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { CanonicalProps } from "typings/interfaces";
import BusinessBanner from "Layout/components/business/businessBanner";
import HowItWorks from "Layout/components/business/howItWorks";
import Testimonial from "Layout/components/business/testimonial";
import GiftExchange from "Layout/components/business/giftExchange";
import BusinessPublicLayout from "businessIndex";
import Questions from "Layout/components/business/questions";

const Business = ({ carnonical }: CanonicalProps) => {
  const reasons = [
    {
      number: "01",
      title: "Set up Account",
      content:
        "Set up your Secret Santa account and invite participants via email to join your Secret Santa.",
    },
    {
      number: "02",
      title: "Wishlist creation and Matching",
      content:
        "Participants create a wishlist and gets randomly matched with other participants to receive cash gifts.",
    },
    {
      number: "03",
      title: "Cash gifts exchange",
      content: "Cash gifts are sent between participants and payout occurs on set date.",
    },
  ];

  const gifts = [
    {
      title: "Reminder",
      icon: "/reminder.svg",
      customImage: true,
      content: "Automated reminder to ensure full participation",
    },
    {
      title: "Cash",
      icon: "/cash.svg",
      customImage: true,
      content: "Cash gifts to eliminate shipping headaches",
    },
    {
      title: "Tag",
      icon: "/tag.svg",
      customImage: true,
      content: "Gifts cap to keep participants within budget",
    },
    {
      title: "Support",
      icon: "/support.svg",
      customImage: true,
      content: "Real time support for all questions and enquires",
    },
  ];

  const testimonies = [
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
  ];

  const wants = ["birthday", "wedding", "graduation", "engagement", "anniversary"];

  const [wantState, setWantState] = useState({ id: 0 });

  useEffect(() => {
    const timeout = setInterval(() => {
      let currentState = wantState.id;
      setWantState({ id: currentState + 1 });
    }, 2000);
    return () => clearInterval(timeout);
  }, [wantState.id]);

  let textChange = wants[wantState.id % wants.length];

  return (
    <>
      <Head>
        <title>Unboxd: The best wishlist app</title>
        <meta
          name="description"
          content="Create a wishlist and collect cash gifts from your loved ones anywhere in the world"
        />
        <meta
          property="og:description"
          content="Create a wishlist and collect cash gifts from your loved ones anywhere in the world"
        />
        <meta property="og:site_name" content="Unboxd" />
        <meta property="og:image" content="" />
        <meta property="title" content="Unboxd: The best wishlist app" />
        {/*Twitter*/}
        <meta property="og:title" content="Unboxd: The best wishlist app" />
        <meta property="twitter:title" content="Unboxd: The best wishlist app" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:description"
          content="Create a wishlist and collect cash gifts from your loved ones anywhere in the world"
        />
        <meta property="twitter:image" content="" />
        <meta property="twitter:creator" content="@unboxdgifts" />
        <meta property="og:url" content={`https://${carnonical}`} />
        <link rel="canonical" href={`https://${carnonical}`} />
      </Head>
      <BusinessPublicLayout>
        <BusinessBanner text={textChange} />
        <HowItWorks reasons={reasons} />
        <GiftExchange gifts={gifts} />
        <Testimonial testimonies={testimonies} />
        <Questions />
      </BusinessPublicLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return { props: { carnonical: req.headers.host } };
};

export default Business;
