/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Themed, Flex, Box } from 'theme-ui'
import SocialLinks from '@/components/links-social'

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
          {/* Social links */}
          <SocialLinks />
        </Flex>
      </Flex>
    </>
  )
}

export default Footer