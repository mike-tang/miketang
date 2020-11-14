import NextHead from 'next/head'

const Head = ({
  title = 'Mike Tang',
  description = 'Product designer and developer'
}) => {
  
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* URL */}
      <meta name="og:url" content="https://miketang.co" />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#111111" />
      <meta name="theme-color" content="#111111" />

      {/* Other */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="author" content="Mike Tang" />

    </NextHead>
  )
}

export default Head