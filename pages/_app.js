import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'
import Layout from '../components/layout'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}