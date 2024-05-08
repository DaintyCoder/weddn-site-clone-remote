import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, ChakraProvider } from "@chakra-ui/react"; // To use Chakra UI, wrap your _app.js file with the ChakraProvider
import { Global } from "@emotion/react";
import Head from "next/head";
import Script from "next/script";

// Styles and theme
import "../styles/globals.css";
import "../styles/fonts.css";
import theme from "../themes/weddingTheme";
import { GlobalStyles } from "../themes/GlobalStyles";

// Define a custom window interface that includes the gtag function
interface CustomWindow extends Window {
    gtag?: (command: string, target: string, params: object) => void;
}

const Application: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        // To ensure that process.env.NEXT_PUBLIC_GA_ID is always a string:
        // 1. Provide a fallback value:
        const handleRouteChange = (url: string) => {
            const gaId = process.env.NEXT_PUBLIC_GA_ID || 'default_GA_ID'; // Provide a default ID or handle it accordingly
            (window as CustomWindow).gtag?.("config", gaId, { page_path: url });
        };

        // OR

        // 2. Assert that the value is not undefined:
        /*
        const handleRouteChange = (url: string) => {
            if (process.env.NEXT_PUBLIC_GA_ID) {
            (window as CustomWindow).gtag?.("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });
            } else {
                console.error("Google Analytics ID is undefined");
             }
        };  */

        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <ChakraProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-calendar@3/dist/Calendar.min.css" />
                <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
                <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname });
                    `,
                }} />
            </Head>
            <Component {...pageProps} />
            <Box id="modals" />
        </ChakraProvider>
    );
};

export default Application;