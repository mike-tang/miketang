/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Flex } from 'theme-ui'
import Logo from '@/components/logo'
import ThemeSelector from '@/components/theme-selector'

const Nav = () => {

  return (
    <>
      <Flex 
        as="nav" 
        variant="layout.nav"
      >
        <Flex
          variant="layout.nav.inner"
        >
          {/* Logo */}
          <Flex
            sx={{
              alignItems: 'center',
              flex: '0 1 auto'
            }}
          >
            <Link
              href="/"
              aria-label="Go to Mike Tang's home page"
              sx={{
                variant: 'links.logo',
                maxHeight: '24px'
              }}
            >
              <Logo />
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