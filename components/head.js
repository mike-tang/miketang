import NextHead from 'next/head'

const ogImage = 'https://res.cloudinary.com/miketang/image/upload/v1606712282/og-image_aan6rq.png'

const Head = ({
  title = 'Mike Tang',
  description = 'Product designer and developer',
  image = ogImage,
  url = 'https://miketang.co'
}) => {
  
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta property="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      {/* URL */}
      <meta property="og:url" content="https://miketang.co" />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="2400" />
      <meta property="og:image:height" content="1260" />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#111111" />
      <meta name="theme-color" content="#111111" />

      {/* Other */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Mike Tang" />
      <meta name="apple-mobile-web-app-title" content="Mike Tang" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@miketang" />
      <meta property="og:type" content="website" />

    </NextHead>
  )
}

export default Head