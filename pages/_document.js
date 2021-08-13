import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}