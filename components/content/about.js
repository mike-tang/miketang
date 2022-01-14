/** @jsxImportSource theme-ui */
import { Themed, Flex, Box } from 'theme-ui'
import { TextLink } from '@/components/links'

const About = () => {
  return (
    <Flex
      as="section"
      variant="layout.section"
    >
      <Flex
        variant="layout.section.inner"
        sx={{
          py: [9, 9, 9],
          minHeight: '64vh',
          justifyContent: 'center'
        }}
      >
        <Themed.h1
          sx={{
            lineHeight: 'heading',
            textAlign: 'left',
            fontWeight: 'heading',
            pb: 4,
            letterSpacing: ['-2px', '-3px', '-4px']
          }}
        >
          Mike Tang
        </Themed.h1>
        <Themed.p 
          sx={{
            fontSize: 3,
            color: 'foreground.secondary',
            lineHeight: 'body',
            textAlign: 'left',
            fontWeight: 'body'
          }}
        >
          {`Designing systems and interfaces. Developing performant software and digital services. Building `}
          <TextLink 
            text="Ko"
            url="https://ko.education"
            sx={{
              variant: 'links.text.underlined'
            }}
          />
          {` to support the education economy.`}
        </Themed.p>
      </Flex>
    </Flex>
  )
}

export default About