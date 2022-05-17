import { AppProps } from 'next/app'
import '@/styles/global.css'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '@/styles/theme'
import Layout from '@/components/layout'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App