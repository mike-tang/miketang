/** @jsxImportSource theme-ui */
import { Styled, Flex } from 'theme-ui'
import Head from './head'
import Nav from './nav'

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
        <Styled.div 
          as="main"
          sx={{
            width: '100%',
            flex: '1 1 auto',
            variant: 'layout.main',
          }}
        >
          {children}
        </Styled.div>
      </Flex>
    </>
  )
}

export default Layout