import { ThemeProvider } from 'styled-components'
import { render, screen } from '../../../../utils/test-utils'
import { defaultTheme } from '../../../../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { IssuesProps, PostCard } from '.'

const issue: IssuesProps = {
  id: 12345,
  number: 1,
  title: 'Novo Issue',
  created_at: '2023-10-28T23:09:12Z',
  body: '# React + TypeScript + Vite\r\n\r\nThis template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.\r\n\r\nCurrently, two official plugins are available',
}

describe('render PostCard components', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PostCard cards={issue} />
        </BrowserRouter>
      </ThemeProvider>,
    )
    expect(screen.getByTestId('container')).toBeVisible()
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByTestId('span')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
  })

  it('render value', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PostCard cards={issue} />
        </BrowserRouter>
      </ThemeProvider>,
    )
    expect(issue.id).toBe(12345)
    expect(issue.number).toBe(1)
    expect(issue.title).toBe('Novo Issue')
    expect(issue.body).toBe(
      '# React + TypeScript + Vite\r\n\r\nThis template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.\r\n\r\nCurrently, two official plugins are available',
    )
  })
})
