/** @jsxImportSource theme-ui */
import { Themed, Flex, Box } from 'theme-ui'

const SocialLinks = () => {
  return (
    <>
      <Themed.p 
        sx={{
          fontSize: 3,
          lineHeight: 'body',
          textAlign: 'left',
          fontWeight: 'body',
          pb: 6
        }}
      >
        {`Find me elsewhere on `}
        <Themed.a
          href="https://www.linkedin.com/in/mctang/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: 'links.text'
          }}
        >
          LinkedIn
        </Themed.a>
        {`, `}
        <Themed.a
          href="https://www.github.com/mike-tang/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: 'links.text'
          }}
        >
          GitHub
        </Themed.a>
        {`, and `}
        <Themed.a
          href="https://www.twitter.com/miketang/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: 'links.text'
          }}
        >
          Twitter
        </Themed.a>
        {`.`}
      </Themed.p>
    </>
  )
}

export default SocialLinks