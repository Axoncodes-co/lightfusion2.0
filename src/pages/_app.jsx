
import Script from 'next/script'
import ActivationHandler from '../../axg-react/ActivationHandler'

export default function App({ Component, pageProps }) {
  return (<>
      <Component {...pageProps} />
      <ActivationHandler />
      <Script src={'https://axg.axoncodes.com/init/v5'} type={'module'} strategy={"beforeInteractive"}></Script>
      <Script src={'https://axg.axoncodes.com/global/runScripts'} strategy={'afterInteractive'}></Script>
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Script src={'/switchThemescheme.js'} strategy={"beforeInteractive"}></Script>
  </>)
}