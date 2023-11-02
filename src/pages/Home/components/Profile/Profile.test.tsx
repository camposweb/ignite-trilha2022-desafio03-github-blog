import { BrowserRouter } from 'react-router-dom'
import { Profile } from '.'
import { render, screen } from '../../../../utils/test-utils'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

describe('render Profile components', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </ThemeProvider>,
    )
  })
})
