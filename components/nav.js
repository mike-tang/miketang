/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Styled, Flex, Box } from 'theme-ui'
import Logo from './logo'
import ThemeSelector from './theme-selector'

const Nav = () => {

  return (
    <>
      <Flex 
        as="nav" 
        sx={{
          width: '100%',
          variant: 'layout.nav',
        }}
      >
        <Flex
          sx={{
            width: '100%',
            maxWidth: 'container',
            margin: '0 auto',
            justifyContent: 'space-between'
          }}
        >
          <Link href="/" passHref>
            <Styled.a 
              aria-label="Go to Mike Tang's home page"
              sx={{ 
                variant: 'links.logo' 
              }}
            >
              <Box 
                sx={{
                  maxWidth: '64px',
                }}
              >
                <Logo />
              </Box>
            </Styled.a>
          </Link>
          <ThemeSelector />
        </Flex>
      </Flex>
    </>
  )
}

export default Nav