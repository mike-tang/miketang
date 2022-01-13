/** @jsxImportSource theme-ui */
import { Themed, Button, useColorMode } from 'theme-ui'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Themed.div
      sx={{
        display: 'block',
        maxWidth: '80px'
      }}
    >
      <Button
        variant="iconOutline"
        onClick={() => {
          setColorMode(colorMode === 'dark' ? 'light' : 'dark')
        }}
        onMouseUp={() => {
          // Blur the focus after button is clicked
          document.activeElement.blur()
        }}
      >
        {colorMode === 'dark' && 
          <FiMoon size={'24px'} />
        }
        {colorMode === 'light' && 
          <FiSun size={'24px'} />
        }
      </Button>
    </Themed.div>
  )
}

export default ThemeSelector