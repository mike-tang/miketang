/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import Connect from '@/components/content/connect'

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
      </Flex>
    </>
  )
}

export default Footer