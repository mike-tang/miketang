/** @jsxImportSource theme-ui */
import { Themed, Flex } from 'theme-ui'
import Head from '@/components/head'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
          variant: 'styles.root',
          alignItems: ['center', 'center', 'center'],
          justifyContent: ['flex-start', 'center', 'center']
        }}
      >
        <Nav />
        <Themed.div 
          as="main"
          sx={{
            width: '100%',
            flex: '0 0 auto',
            variant: 'layout.main',
          }}
        >
          {children}
        </Themed.div>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout