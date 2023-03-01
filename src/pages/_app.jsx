
import Script from 'next/script'
import dynamic from 'next/dynamic'

import Header from '../../fragments/Header'
import Footer from '../../fragments/Footer'
import ActivationHandler from '../../axg-react/ActivationHandler'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function App({ Component, pageProps }) {
  return (<>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ActivationHandler />
      <Script src={'http://localhost:3012/init/v4/dev'} type={'module'} strategy={"beforeInteractive"}></Script>
      <Script src={'http://localhost:3012/global/runScripts'} strategy={'afterInteractive'}></Script>
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      {/* <Script src={'http://localhost:3012/button/v3/template/dev'} strategy={'beforeInteractive'}></Script> */}
      <Axg />
  </>)
}
