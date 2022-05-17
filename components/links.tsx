/** @jsxImportSource theme-ui */
import { Themed, Flex, Text } from 'theme-ui'

interface TextLinkProps {
  text: string,
  url: string,
  sx?: any
}

const TextLink = ({url, text, ...props}: TextLinkProps) => {
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

const ListItemLink = ({icon, textPrimary, textSecondary, url, ...props}: {
  icon: any,
  textPrimary: string,
  textSecondary: string,
  url: string
}) => {
// const ListItemLink = (icon: any, textPrimary: string, textSecondary: string, url: string, {...props}) => {
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
              width: '100%',
              fontSize: 2,
              lineHeight: '16px',
              fontWeight: 'bold',
              pb: 2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {textPrimary}
          </Text>
          
          <Text
            sx={{
              width: '100%',
              fontSize: 1,
              lineHeight: '16px',
              color: 'foreground.secondary',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
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