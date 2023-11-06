import { ThemeProvider } from 'styled-components'
import { Post } from '.'
import { render, screen } from '../../utils/test-utils'
import { defaultTheme } from '../../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

describe('render Home component', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Post />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('container-postContainer')).toBeInTheDocument()
    expect(screen.getByTestId('container-postContainer')).toBeVisible()
  })
})
