/** @jsxImportSource theme-ui */
import { Themed, Flex } from 'theme-ui'
import Head from '@/components/head'
import Nav from '@/components/nav'

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
          variant: 'styles.root'
        }}
      >
        <Nav />
        <Themed.div 
          as="main"
          sx={{
            width: '100%',
            flex: '1 1 auto',
            variant: 'layout.main',
          }}
        >
          {children}
        </Themed.div>
      </Flex>
    </>
  )
}

export default Layout