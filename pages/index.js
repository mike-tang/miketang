/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react'
import Head from 'next/head'
import { jsx, Styled, Flex, Box } from 'theme-ui'

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Mike Tang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        sx={{
          minHeight: theme => `calc(100vh - ${theme.sizes.nav})`,
          flexDirection: 'column',
          backgroundColor: 'background.primary',
          px: 3,
          transition: 'background-color 0.2s ease-out',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '640px',
            py: [6, 7, 8],
            margin: '0 auto'
          }}
        >
          <Box
            as="section"
            sx={{
              pb: 8
            }}
          >
            <Styled.p 
              sx={{
                fontSize: [5, 5, 6],
                lineHeight: 'heading',
                textAlign: 'left',
                fontWeight: 'heading',
                textRendering: 'optimizelegibility',
                pb: 4,
              }}
            >
              Mike Tang
            </Styled.p>
            <Styled.p 
              sx={{
                fontSize: [2, 4, 4],
                lineHeight: 'body',
                textAlign: 'left',
                fontWeight: 'body',
                textRendering: 'optimizelegibility',
                pb: 4,
              }}
            >
              Product designer and developer.
            </Styled.p>
            <Styled.p 
              sx={{
                fontSize: [2, 4, 4],
                lineHeight: 'body',
                textAlign: 'left',
                fontWeight: 'body',
                textRendering: 'optimizelegibility',
                pb: 4,
              }}
            >
              Building Ko.
            </Styled.p>
          </Box>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default Home