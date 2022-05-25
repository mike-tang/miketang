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
          width: '100%',
          variant: 'layout.footer',
        }}
      >
        <Flex
          variant="layout.footer.inner"
        >
          <Connect />
          <NowPlaying />
        </Flex>
      </Flex>
    </>
  )
}

export default Footer