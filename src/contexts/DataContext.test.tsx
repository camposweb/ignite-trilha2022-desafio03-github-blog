import { render, screen } from '../utils/test-utils'
import { App } from '../App'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'

describe('Test DataContext', () => {
  const handlers = [
    http.get('https://api.github.com/users/camposweb', () => {
      return HttpResponse.json({
        id: 30279343,
        avatar_url: 'https://avatars.githubusercontent.com/u/30279343?v=4',
        name: 'Leandro Campos',
        html_url: 'https://github.com/camposweb',
        bio: 'Frontend Developer',
        login: 'camposweb',
        company: null,
        followers: 0,
      })
    }),
    http.get(
      'https://api.github.com/repos/camposweb/ignite-trilha2022-desafio03-github-blog/issues',
      () => {
        return HttpResponse.json([
          {
            id: 1966726512,
            number: 1,
            html_url:
              'https://github.com/camposweb/ignite-trilha2022-desafio03-github-blog/issues/1',
            title: 'Necessidade de escrever um ótimo README.md',
            body: 'body',
            created_at: '2023-10-28T20:11:58Z',
            comments: 0,
            user: {
              login: 'camposweb',
            },
          },
        ])
      },
    ),
  ]

  const server = setupServer(...handlers)

  beforeAll(() => {
    server.listen()
  })

  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  it('Test data user', async () => {
    render(<App />)

    expect(screen.getByAltText('profile')).toBeVisible()
    expect(
      await screen.findByRole('heading', { name: 'Leandro Campos', level: 1 }),
    ).toBeVisible()
    // expect(await screen.findByText('Leandro Campos')).toBeInTheDocument()
    expect(await screen.findByRole('link', { name: 'github' })).toHaveAttribute(
      'href',
      `https://github.com/camposweb`,
    )
    expect(await screen.findByText('Frontend Developer')).toBeVisible()
    expect(await screen.findByText('camposweb')).toBeVisible()
    expect(await screen.findByText('sem organização vinculada')).toBeVisible()
    expect(await screen.findByText(`0 seguidores`)).toBeVisible()
  })

  it('Test data Issues', async () => {
    render(<App />)

    expect(
      await screen.findByRole('heading', {
        name: 'Necessidade de escrever um ótimo README.md',
        level: 3,
      }),
    ).toBeVisible()

    expect(await screen.findByTestId('span')).toBeVisible()
    expect(await screen.findByRole('paragraph')).toBeVisible()
  })
})
