/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import Head from '@/components/head'
import Nav from '@/components/nav'

const AppLayout = ({ children }: any) => {
  return (
    <>
      <Head />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
          variant: 'styles.root',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <Nav />
        <Flex
          as="main"
          variant="layout.main"
        >
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default AppLayout