import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '../../utils/test-utils'
import { DefaultLayout } from '.'

describe('', () => {
  it('should render the DefaultLayout component', () => {
    render(
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>,
    )
  })
})
