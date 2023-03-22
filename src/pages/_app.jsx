
import Script from 'next/script'
import dynamic from 'next/dynamic'

import Footer from '../../fragments/Footer'
import ActivationHandler from '../../axg-react/ActivationHandler'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function App({ Component, pageProps }) {
  return (<>
      <Component {...pageProps} />
      <Footer />
      <ActivationHandler />
      <Script src={'https://axg.axoncodes.com/init/v5'} type={'module'} strategy={"beforeInteractive"}></Script>
      <Script src={'https://axg.axoncodes.com/global/runScripts'} strategy={'afterInteractive'}></Script>
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Script src={'/switchThemescheme.js'} strategy={"beforeInteractive"}></Script>
      <Axg />
  </>)
}