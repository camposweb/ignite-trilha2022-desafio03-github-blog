import { ThemeProvider } from 'styled-components'
import { fireEvent, render, screen } from '../../../../utils/test-utils'
import { defaultTheme } from '../../../../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { SearchForm } from '.'

const handleSearchIssues = vi.fn().mockReturnValue('como')

describe('render SearchForm component', async () => {
  it('should render', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('container-searchForm')).toBeVisible()
    expect(screen.getByTestId('container-searchForm')).toBeInTheDocument()
    expect(handleSearchIssues()).toBe('como')

    fireEvent.input(screen.getByPlaceholderText('Buscar conteúdo'), {
      target: {
        value: 'como',
      },
    })

    expect(screen.getByPlaceholderText('Buscar conteúdo')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Buscar conteúdo')).toHaveValue('como')
  })
})
