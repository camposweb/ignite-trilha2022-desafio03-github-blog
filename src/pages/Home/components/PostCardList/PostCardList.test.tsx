import { ThemeProvider } from 'styled-components'
import { PostCardList } from '.'
import { render, screen } from '../../../../utils/test-utils'
import { defaultTheme } from '../../../../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

describe('render PostCard components', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PostCardList />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('container-postCardList')).toBeVisible()
    expect(screen.getByTestId('container-postCardList')).toBeInTheDocument()
  })
})
