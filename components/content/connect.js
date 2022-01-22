/** @jsxImportSource theme-ui */
import { Flex, Text } from 'theme-ui'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
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
            icon={<BsTwitter size={24} />}
            url="https://www.twitter.com/miketang/"
            textPrimary="Twitter"
            textSecondary="@miketang"
          />
          <ListItemLink 
            icon={<BsGithub size={24} />}
            url="https://www.github.com/mike-tang/"
            textPrimary="GitHub"
            textSecondary="@mike-tang"
          />
          <ListItemLink 
            icon={<GrLinkedinOption size={24} />}
            url="https://www.linkedin.com/in/mctang/"
            textPrimary="LinkedIn"
            textSecondary="@mctang"
          />
        </Flex>

      </Flex>

    </Flex>
  )
}

export default Connect