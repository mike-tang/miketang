/** @jsxImportSource theme-ui */
import { Styled, Flex, Box } from 'theme-ui'

const Home = () => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        px: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '640px',
          margin: '0 auto'
        }}
      >
        <Box
          as="section"
          sx={{
            pb: 8
          }}
        >
          <Styled.h1
            sx={{
              lineHeight: 'heading',
              textAlign: 'left',
              fontWeight: 'heading',
              pb: 6,
            }}
          >
            Mike Tang
          </Styled.h1>
          <Styled.p 
            sx={{
              fontSize: 3,
              lineHeight: 'body',
              textAlign: 'left',
              fontWeight: 'body',
              pb: 6,
            }}
          >
            Product designer and developer.
          </Styled.p>
          <Styled.p 
            sx={{
              fontSize: 3,
              lineHeight: 'body',
              textAlign: 'left',
              fontWeight: 'body',
              pb: 6
            }}
          >
            {`Building `}
            <Styled.a
              href="https://ko.education"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                variant: 'links.text'
              }}
            >
              Ko
            </Styled.a> 
            {` to equalize access to education. Launching early 2021.`}
          </Styled.p>
          <Styled.p 
            sx={{
              fontSize: 3,
              lineHeight: 'body',
              textAlign: 'left',
              fontWeight: 'body',
              pb: 6
            }}
          >
            {`Find me elsewhere on `}
            <Styled.a
              href="https://www.linkedin.com/in/mctang/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                variant: 'links.text'
              }}
            >
              LinkedIn
            </Styled.a>
            {`, `}
            <Styled.a
              href="https://www.github.com/mike-tang/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                variant: 'links.text'
              }}
            >
              GitHub
            </Styled.a>
            {`, and `}
            <Styled.a
              href="https://www.twitter.com/miketang/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                variant: 'links.text'
              }}
            >
              Twitter
            </Styled.a>
            {`.`}
          </Styled.p>
        </Box>
      </Box>
    </Flex>
  )
}

export default Home