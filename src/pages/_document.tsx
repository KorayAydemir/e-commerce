import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head></Head>
            <body className="bg-[#0e0f10]">
                <div id="overlays"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
