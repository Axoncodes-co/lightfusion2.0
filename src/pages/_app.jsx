
import Script from 'next/script'
import ActivationHandler from '../../axg-react/ActivationHandler'
import '../../builtin-axg/dropdown/v5/style.css'
import '../../builtin-axg/styleV2.css'

export default function App({ Component, pageProps }) {
  return (<>
      <Component {...pageProps} />
      <ActivationHandler />
      {/* <Script src={'https://axg.axoncodes.com/init/v5'} type={'module'} strategy={"beforeInteractive"}></Script>
      <Script src={'https://axg.axoncodes.com/global/runScripts'} strategy={'afterInteractive'}></Script> */}
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Script src={'/switchThemescheme.js'} strategy={"beforeInteractive"}></Script>
      <Script async src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5146054383186265"} crossorigin={"anonymous"}></Script>

      <Script src={'/axgjs/dropdown_v5.js'} defer strategy={"lazyOnload"}></Script>
    </>
  )
}