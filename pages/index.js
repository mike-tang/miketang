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
          px: 4,
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
            <Styled.h1
              sx={{
                lineHeight: 'heading',
                textAlign: 'left',
                fontWeight: 'heading',
                pb: 6,
              }}
            >
              Mike Tang
            </Styled.h1>
            <Styled.p 
              sx={{
                fontSize: 3,
                lineHeight: 'body',
                textAlign: 'left',
                fontWeight: 'body',
                pb: 6,
              }}
            >
              Product designer and developer.
            </Styled.p>
            <Styled.p 
              sx={{
                fontSize: 3,
                lineHeight: 'body',
                textAlign: 'left',
                fontWeight: 'body'
              }}
            >
              {`Building `}
              <Styled.a
                href="https://ko.education"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  variant: 'links.text'
                }}
              >
                Ko
              </Styled.a> 
              {` to equalize access to education.`}
            </Styled.p>
          </Box>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default Home