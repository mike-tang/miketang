/** @jsxImportSource theme-ui */
import { Themed, Flex, Box } from 'theme-ui'

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
          <Themed.h1
            sx={{
              lineHeight: 'heading',
              textAlign: 'left',
              fontWeight: 'heading',
              pb: 6,
            }}
          >
            Mike Tang
          </Themed.h1>
          <Themed.p 
            sx={{
              fontSize: 3,
              lineHeight: 'body',
              textAlign: 'left',
              fontWeight: 'body',
              pb: 6,
            }}
          >
            Product designer and developer.
          </Themed.p>
          <Themed.p 
            sx={{
              fontSize: 3,
              lineHeight: 'body',
              textAlign: 'left',
              fontWeight: 'body',
              pb: 6
            }}
          >
            {`Building `}
            <Themed.a
              href="https://ko.education"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                variant: 'links.text'
              }}
            >
              Ko
            </Themed.a> 
            {` to support self-directed education.`}
          </Themed.p>
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
        </Box>
      </Box>
    </Flex>
  )
}

export default Home