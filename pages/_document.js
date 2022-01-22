import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'
import { GA_TRACKING_ID } from '@/utils/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload self-hosted fonts */}
          <link
            rel="preload"
            href="/fonts/Inter-Bold.woff2?v=3.19"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-Regular.woff2?v=3.19"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
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