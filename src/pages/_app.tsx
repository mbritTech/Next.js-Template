import React from 'react'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import { GlobalStyles } from '../styles/GlobalStyles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
