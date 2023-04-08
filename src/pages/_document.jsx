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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-187520717-1"></Script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-187520717-1');
        `}} />
        <Script strategy={'beforeInteractive'} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5146054383186265" crossorigin="anonymous"></Script>
        <Script strategy={'beforeInteractive'} async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></Script>
        <script dangerouslySetInnerHTML={{__html:`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/22901649087/sidebar', [[120, 600], [200, 446], [240, 400], [120, 240]], 'div-gpt-ad-1680994203642-0').addService(googletag.pubads());
            googletag.defineSlot('/22901649087/sidebar2', [[120, 240], [120, 600], [200, 446], [240, 400]], 'div-gpt-ad-1680994309478-0').addService(googletag.pubads());
            googletag.defineSlot('/22901649087/contentButtom', [[980, 120], [120, 20], [980, 90], [320, 100], [300, 75], [728, 90], [480, 320], [320, 50], [468, 60], [970, 90]], 'div-gpt-ad-1680990353679-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
