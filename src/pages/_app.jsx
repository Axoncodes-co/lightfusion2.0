
import Script from 'next/script'
import ActivationHandler from '../../axg-react/ActivationHandler'
import '../../builtin-axg/dropdown/v5/style.css'
import '../../builtin-axg/styleV2.css'
import '../../builtin-axg/colorVars.css'
import '../../builtin-axg/fontVars.css'
import '../styles/globals.css'
import '../styles/fonts.css'

export default function App({ Component, pageProps }) {
  return (<>
      <Component {...pageProps} />
      <ActivationHandler />
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Script async src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5146054383186265"} crossorigin={"anonymous"}></Script>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-187520717-1"></Script>
      <Script id={'google_analytics'}>
        {window.dataLayer = window.dataLayer || []}
        {function gtag(){dataLayer.push(arguments)}}
        {gtag('js', new Date())}
        {gtag('config', 'UA-187520717-1')}
      </Script>

    </>
  )
}