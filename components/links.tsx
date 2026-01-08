/** @jsxImportSource theme-ui */
import { Flex, Text, Link, ThemeUIStyleObject } from 'theme-ui'

interface TextLinkProps {
  text: string,
  url: string,
  sx?: ThemeUIStyleObject
}

const TextLink = ({url, text, ...props}: TextLinkProps) => {
  return (
    <>
      <Link
        {...props}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          variant: 'links.text'
        }}
      >
        {text}
      </Link>
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
      <Link
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
              fontWeight: 'body',
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
      </Link>
    </>
  )
}

export { TextLink, ListItemLink }