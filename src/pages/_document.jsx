import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='stylesheet' href='https://api.rexfont.com/rexfontIcons/font/all.css' />
        <link rel='stylesheet' href='./styles/globals.css' />
        <link rel='stylesheet' href='./styles/fonts.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
