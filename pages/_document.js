import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'
import { GA_TRACKING_ID } from '../utils/gtag'

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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
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