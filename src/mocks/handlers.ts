import { HttpResponse, http } from 'msw'
import { UserProps } from '../contexts/DataContext'

export const user: UserProps = {
  id: 30279343,
  avatar_url: 'https://avatars.githubusercontent.com/u/30279343?v=4',
  name: 'Leandro Campos',
  html_url: 'https://github.com/camposweb',
  bio: 'Frontend Developer',
  login: 'camposweb',
  company: null,
  followers: 0,
}

export const handlers = [
  http.get('https://api.github.com/users/camposweb', () => {
    return HttpResponse.json(user, { status: 200 })
  }),
]
