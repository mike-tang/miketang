import '../styles/global.css'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'

const App = ({ Component, pageProps }) => {
  
  // Configure Google Analytics
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App