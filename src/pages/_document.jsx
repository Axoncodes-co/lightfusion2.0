import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context" : "https://schema.org",
              "@type" : "WebSite",
              "name" : "Homa Pilot",
              "alternateName" : "HP",
              "url" : "https://homapilot.com/"
        })}} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://homapilot.com",
              "logo": "https://homapilot.com/logo.png"
        })}} />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
