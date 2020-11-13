/** @jsxRuntime classic */
/** @jsx jsx */
import Link from 'next/link'
import { Fragment } from 'react'
import { jsx, Styled, Flex, Box, Container } from 'theme-ui'
import Logo from './logo'

const Nav = () => {

  return (
    <Fragment>
      <Flex 
        as="nav" 
        sx={{
          width: '100%',
          variant: 'layout.nav',
        }}
      >
        <Container>
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
        </Container>
      </Flex>
    </Fragment>
  )
}

export default Nav