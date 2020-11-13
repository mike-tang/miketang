import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap" 
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
                }
              `
            }}
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument