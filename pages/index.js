/** @jsxImportSource theme-ui */
import { Themed, Flex, Box } from 'theme-ui'
import SocialLinks from '@/components/links-social'

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
              pb: 6
            }}
          >
            {`Designing for scale and impact. Building efficient software and digital experiences. Working on `}
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
            {` to support the education economy.`}
          </Themed.p>

          {/* Social links */}
          <SocialLinks />

        </Box>
      </Box>
    </Flex>
  )
}

export default Home