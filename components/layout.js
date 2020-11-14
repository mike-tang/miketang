/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled, Flex } from 'theme-ui'
import Head from './head'
import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Layout