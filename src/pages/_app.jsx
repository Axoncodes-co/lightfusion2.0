
import Script from 'next/script'
import ActivationHandler from '../../axg-react/ActivationHandler'
import '../../builtin-axg/dropdown/v5/style.css'
import '../../builtin-axg/styleV2.css'
import '../../builtin-axg/colorVars.css'
import '../../builtin-axg/fontVars.css'
import '../styles/globals.css'
import '../styles/fonts.css'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // <Script id={'google_analytics'}>
    //   window.dataLayer = window.dataLayer || []
    //   function gtag(){dataLayer.push(arguments)}
    //   gtag(`js`, new Date())
    //   gtag(`config`, `UA-187520717-1``)
    // </Script>
  })
  return (<>
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
      </Head>
      <Component {...pageProps} />
      <ActivationHandler />
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Script async src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5146054383186265"} crossorigin={"anonymous"}></Script>
      {/* <!-- Google tag (gtag.js) --> */}
      {/* <Script strategy={'beforeInteractive'} async src="https://www.googletagmanager.com/gtag/js?id=UA-187520717-1"></Script> */}
    </>
  )
}