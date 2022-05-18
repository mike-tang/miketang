import { AppProps } from 'next/app'
import '@/styles/global.css'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '@/styles/theme'
import AppLayout from '@/layouts/app'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default App