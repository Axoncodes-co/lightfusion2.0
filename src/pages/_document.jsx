import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import ExtraHeaderScripts from '../../public/extras/header'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {process.env.ALLOW_WEBSITE_GOOGLE_ENHANCEMENTS?.toLocaleLowerCase == "true" ? <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context" : "https://schema.org",
              "@type" : "WebSite",
              "name" : process.env.WEBNAME,
              "alternateName" : process.env.WEBNAME_ALT,
              "url" : process.env.DOMAIN
        })}} /> : ''}
        {process.env.ALLOW_ORGANIZATION_GOOGLE_ENHANCEMENTS?.toLocaleLowerCase == "true" ? <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": process.env.DOMAIN,
              "logo": `${process.env.DOMAIN}/logo.png`
        })}} /> : ''}
        <ExtraHeaderScripts />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
