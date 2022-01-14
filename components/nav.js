/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Themed, Flex } from 'theme-ui'
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
          variant="layout.nav.inner"
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Flex
            sx={{
              alignItems: 'center',
              flex: '0 1 auto'
            }}
          >
            <Link href="/" passHref>
              <Themed.a 
                aria-label="Go to Mike Tang's home page"
                sx={{ 
                  variant: 'links.logo',
                  maxHeight: ['24px', '32px', '32px']
                }}
              >
                <Logo />
              </Themed.a>
            </Link>
          </Flex>

          {/* Theme selector */}
          <ThemeSelector />
        </Flex>
      </Flex>
    </>
  )
}

export default Nav