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
      <link rel="icon" href="/favicon.ico" />

      {/* Other */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="author" content="Mike Tang" />

    </NextHead>
  )
}

export default Head