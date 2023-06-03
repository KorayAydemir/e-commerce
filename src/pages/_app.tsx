import { SiteProvider } from "@components/contexts/SiteContext";
import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            </Head>
            <SiteProvider>
                <Component {...pageProps} />
            </SiteProvider>
        </>
    );
}
