/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import Connect from '@/components/content/connect'
import NowPlaying from '@/components/content/now-playing'

const Footer = () => {

  return (
    <>
      <Flex 
        as="footer" 
        sx={{
          variant: 'layout.footer',
        }}
      >
        <Connect />
        <NowPlaying />
      </Flex>
    </>
  )
}

export default Footer