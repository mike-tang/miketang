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
                pb: 6,
              }}
            >
              Mike Tang
            </Styled.p>
            <Styled.p 
              sx={{
                fontSize: [3, 4, 4],
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
                fontSize: [3, 4, 4],
                lineHeight: 'body',
                textAlign: 'left',
                fontWeight: 'body',
                textRendering: 'optimizelegibility'
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