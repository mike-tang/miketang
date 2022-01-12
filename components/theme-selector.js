/** @jsxImportSource theme-ui */
import { Themed, Select, useColorMode } from 'theme-ui'

const ThemeSelector = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Themed.div
      sx={{
        display: 'block',
        flex: '2 0 auto',
        maxWidth: '80px'
      }}
    >
      <Select
        name="theme"
        id="theme"
        aria-label="Theme"
        value={colorMode}
        onChange={(e) => {
          setColorMode(e.target.value)
        }}
      >
        <option value="default">Dark</option>
        <option value="light">Light</option>
      </Select>
    </Themed.div>
  )
}

export default ThemeSelector