/** @jsxImportSource theme-ui */
import { Themed } from 'theme-ui'
// import { keyframes } from '@emotion/react'

// const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

const TextLink = ({text, url, ...props}) => {
  return (
    <>
      <Themed.a
        {...props}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          variant: 'links.text'
        }}
      >
        {text}
      </Themed.a>
    </>
  )
}

export default TextLink