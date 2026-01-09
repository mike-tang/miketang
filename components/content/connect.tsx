/** @jsxImportSource theme-ui */
import { Flex, Text } from 'theme-ui'
import { BsTwitterX, BsGithub } from 'react-icons/bs'
import { ListItemLink } from '@/components/links'

const Connect = () => {
  return (
    <Flex
      as="section"
      variant="layout.section"
    >
      <Flex
        variant="layout.section.inner"
      >
        {/* Section title */}
        <Text 
          variant="overline"
          pb={4}
        >
          Connect
        </Text>

        {/* Links */}
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 4
          }}
        >
          <ListItemLink
            icon={<BsTwitterX size={24} />}
            url="https://x.com/miketang/"
            textPrimary="X"
            textSecondary="@miketang"
          />
          <ListItemLink 
            icon={<BsGithub size={24} />}
            url="https://www.github.com/mike-tang/"
            textPrimary="GitHub"
            textSecondary="@mike-tang"
          />
        </Flex>

      </Flex>

    </Flex>
  )
}

export default Connect