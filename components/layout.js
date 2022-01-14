/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
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
        <Flex
          as="main"
          variant="layout.main"
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout