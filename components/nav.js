/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Themed, Flex } from 'theme-ui'
import Logo from '@/components/logo'
import ThemeSelector from '@/components/theme-selector'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Nav = () => {
  // framer-motion variant
  const container = {
    hidden: {
      opacity: 0,
      y: -24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, 
        ease: "linear"
      }
    }
  }

  return (
    <>
      <InView 
        threshold={0.25}
        triggerOnce={true}
      >
        {({ ref, inView, entry }) => (
          <>
            <motion.nav
              ref={ref}
              variants={container}
              initial={"hidden"}
              animate={inView ? "visible" : "hidden"}
              sx={{
                variant: 'layout.nav'
              }}
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
            </motion.nav>
          </>
        )}
      </InView>
      
    </>
  )
}

export default Nav