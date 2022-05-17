/** @jsxImportSource theme-ui */
import { Flex, Button, useColorMode } from 'theme-ui'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Flex
      sx={{
        flex: '0 0 auto'
      }}
    >
      <Button
        aria-label='Switch theme'
        variant="iconOutline"
        onClick={() => {
          setColorMode(colorMode === 'dark' ? 'light' : 'dark')
        }}
        onMouseUp={() => {
          // Blur the focus after button is clicked
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
        }}
      >
        {colorMode === 'dark' && 
          <FiMoon size={'24px'} />
        }
        {colorMode === 'light' && 
          <FiSun size={'24px'} />
        }
      </Button>
    </Flex>
  )
}

export default ThemeSelector