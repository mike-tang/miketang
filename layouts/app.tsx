/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui'
import Head from '@/components/head'
import Nav from '@/components/nav'

type AppLayoutProps = {
  title?: string,
  children?: React.ReactNode;
}

const AppLayout = ({ title, children }: AppLayoutProps) => {
  return (
    <>
      <Head title={title} />
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