import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Script from 'next/script'
import dynamic from 'next/dynamic'

import Header from '../../fragments/Header'
import ActivationHandler from '../../axg-react/ActivationHandler'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ActivationHandler />
      <Script src={'http://localhost:3012/init/v4/dev'} type={'module'} strategy={"beforeInteractive"}></Script>
      <Script src={'http://localhost:3012/global/runScripts'} strategy={'beforeInteractive'}></Script>
      <Script src={'/activationhandlerutils.js'} strategy={"beforeInteractive"}></Script>
      <Axg />
    </>
  )
}
