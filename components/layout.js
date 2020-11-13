/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Styled, Flex } from 'theme-ui'
import { Global } from '@emotion/core'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={theme => ({
          'html': {
            backgroundColor: theme.colors.background.primary,
          }
        })}
      />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
          variant: 'styles.root'
        }}
      >
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