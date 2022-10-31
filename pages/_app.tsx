import type { AppProps } from 'next/app'
import '@/styles/global.css'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '@/styles/theme'
import AppLayout from '@/layouts/app'
import { Analytics } from '@vercel/analytics/react'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default App