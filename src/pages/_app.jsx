
import Script from 'next/script'
import ActivationHandler from '../../builtin-axg/ActivationHandler'
import '../../builtin-axg/dropdown/v5/style.css'
import '../../builtin-axg/styleV2.css'
import '../../builtin-axg/colorVars.css'
import '../../builtin-axg/fontVars.css'
import '../styles/globals.css'
import '../styles/fonts.css'
import "../../builtin-axg/switchThemescheme";

export default function App({ Component, pageProps }) {
  return (<>
      <Component {...pageProps} />
      <ActivationHandler />
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Script async src={process.env.GOOGLE_SYNDICATION_LINK} crossOrigin={"anonymous"}></Script>
    </>
  )
}