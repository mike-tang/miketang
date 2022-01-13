/** @jsxImportSource theme-ui */
import { Themed, Flex, Box } from 'theme-ui'
import TextLink from '@/components/link-text'

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
        <Box as="section">
          <Themed.h1
            sx={{
              lineHeight: 'heading',
              textAlign: 'left',
              fontWeight: 'heading',
              pb: 4,
              letterSpacing: '-4px'
            }}
          >
            Mike Tang
          </Themed.h1>
          <Themed.p 
            sx={{
              fontSize: 3,
              color: 'foreground.secondary',
              lineHeight: 'body',
              textAlign: 'left',
              fontWeight: 'body'
            }}
          >
            {`Designing systems and interfaces. Developing performant software and digital services. Building `}
            <TextLink 
              text="Ko"
              url="https://ko.education"
              sx={{
                variant: 'links.text.underlined'
              }}
            />
            {` to support the education economy.`}
          </Themed.p>

        </Box>
      </Box>
    </Flex>
  )
}

export default Home