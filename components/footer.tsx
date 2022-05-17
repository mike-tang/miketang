/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'

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
          {/* Footer content */}
        </Flex>
      </Flex>
    </>
  )
}

export default Footer