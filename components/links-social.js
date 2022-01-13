/** @jsxImportSource theme-ui */
import { Themed, Flex, Box } from 'theme-ui'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import TextLink from '@/components/link-text'

const SocialLinks = () => {
  return (
    <>
      {/* <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: 3
        }}
      >
        <Themed.a
          href="https://www.twitter.com/miketang/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: 'links.iconOutline'
          }}
        >
          <BsTwitter size={24} />
        </Themed.a>
        <Themed.a
          href="https://www.github.com/mike-tang/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            variant: 'links.iconOutline'
          }}
        >
          <BsGithub size={24} />
        </Themed.a>
      </Flex> */}
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          fontSize: 1,
          lineHeight: '20px',
          textAlign: 'left',
          fontWeight: 'body',
          color: 'foreground.secondary',
          gap: 4
        }}
      >
        <TextLink 
          text="Twitter"
          url="https://www.twitter.com/miketang/"
        />
        {/* {` ・ `} */}
        <TextLink 
          text="GitHub"
          url="https://www.github.com/mike-tang/"
        />
        {/* {` ・ `} */}
        <TextLink 
          text="LinkedIn"
          url="https://www.linkedin.com/in/mctang/"
        />        
      </Flex>
    </>
  )
}

export default SocialLinks