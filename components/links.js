/** @jsxImportSource theme-ui */
import { Themed, Flex, Box, Text } from 'theme-ui'

// import { keyframes } from '@emotion/react'

// const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

const TextLink = ({text, url, ...props}) => {
  return (
    <>
      <Themed.a
        {...props}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          variant: 'links.text'
        }}
      >
        {text}
      </Themed.a>
    </>
  )
}

const ListItemLink = ({icon, textPrimary, textSecondary, url, ...props}) => {
  return (
    <>
      {/* Link */}
      <Themed.a
        {...props}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
          justifyContent: 'flex-start',
          alignItems: 'center',
          maxWidth: 'fit-content',
          color: 'foreground.primary',
          ':hover': {
            textDecoration: 'none'
          },
          ':hover > .icon-button': {
            color: 'foreground.primary',
            borderColor: 'foreground.primary',
            bg: 'transparent',
            transition: 'all 0.2s ease-out',
          }
        }}
      >
        {/* Icon */}
        <Flex
          className="icon-button"
          sx={{
            variant: 'links.iconOutline'
          }}
        >
          {icon}
        </Flex>

        {/* Text */}
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          <Text
            sx={{
              fontSize: 2,
              lineHeight: '16px',
              fontWeight: 'bold',
              pb: 2
            }}
          >
            {textPrimary}
          </Text>
          
          <Text
            sx={{
              fontSize: 1,
              lineHeight: '16px',
              color: 'foreground.secondary'
            }}
          >
            {textSecondary}
          </Text>
        </Flex>
      </Themed.a>
    </>
  )
}

export { TextLink, ListItemLink }