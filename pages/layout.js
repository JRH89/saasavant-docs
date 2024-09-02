// app/layout.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Layout({ children }) {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* Add other head elements if needed */}
            </Head>
            <body>
                {children}
                <NextScript />
            </body>
        </Html>
    );
}
