import { BrowserRouter } from 'react-router-dom'
import { Header } from '.'
import { render, screen } from '../../utils/test-utils'

describe('render Header components', () => {
  it('should render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const header = screen.getByRole('img')
    const navLink = screen.getByRole('link')
    expect(header).toHaveAttribute('src')
    expect(header).toHaveAttribute('alt')
    expect(navLink).toHaveAttribute('href')
    expect(navLink).toHaveAttribute('title')
    expect(header).toBeInTheDocument()
    expect(navLink).toBeInTheDocument()
  })
})
