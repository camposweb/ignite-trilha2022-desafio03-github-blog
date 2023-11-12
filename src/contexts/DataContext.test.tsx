import { render, screen } from '../utils/test-utils'
import { App } from '../App'
import { user } from '../mocks/handlers'

describe('Test DataContext', () => {
  it('Test data user', async () => {
    render(<App />)

    expect(await screen.findByAltText('profile')).toBeVisible()
    expect(
      await screen.findByRole('heading', { name: `${user.name}`, level: 1 }),
    ).toBeVisible()
    expect(await screen.findByRole('link', { name: 'github' })).toHaveAttribute(
      'href',
      `${user.html_url}`,
    )
    expect(await screen.findByText(user.bio)).toBeVisible()
    expect(await screen.findByText(user.login)).toBeVisible()
    expect(await screen.findByText('sem organização vinculada')).toBeVisible()
    expect(
      await screen.findByText(`${user.followers} seguidores`),
    ).toBeVisible()
  })

  // it('Test data Issues', () => {})
})
