import { ThemeProvider } from 'styled-components'
import { render, screen } from '../../utils/test-utils'
import { defaultTheme } from '../../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '.'

describe('render Home components', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('container-home')).toBeVisible()
    expect(screen.getByTestId('container-home')).toBeInTheDocument()
  })
})
