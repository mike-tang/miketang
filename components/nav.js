/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Themed, Flex, Box } from 'theme-ui'
import Logo from '@/components/logo'
import ThemeSelector from '@/components/theme-selector'

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
            justifyContent: 'space-between',
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'border.default',
            pb: '24px',
            transition: 'all 0.2s ease-out'
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              maxHeight: '40px',
              width: 'auto'
            }}
          >
            <Link href="/" passHref>
              <Themed.a 
                aria-label="Go to Mike Tang's home page"
                sx={{ 
                  variant: 'links.logo' 
                }}
              >
                <Logo />
              </Themed.a>
            </Link>
          </Box>

          {/* Theme selector */}
          <ThemeSelector />
        </Flex>
      </Flex>
    </>
  )
}

export default Nav