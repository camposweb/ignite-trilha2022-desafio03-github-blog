import { BrowserRouter, NavLink } from 'react-router-dom'
import { Profile } from '.'
import { render, screen } from '../../../../utils/test-utils'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'
import { UserProps } from '../../../../contexts/DataContext'
import {
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileData,
  ProfileImg,
  ProfileInfo,
  ProfileTitle,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const user: UserProps = {
  id: 30279343,
  avatar_url: 'https://avatars.githubusercontent.com/u/30279343?v=4',
  name: 'Leandro Campos',
  html_url: 'string',
  bio: 'Frontend Developer',
  login: 'camposweb',
  company: null,
  followers: 0,
}

describe('render Profile components', () => {
  it('should render', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ProfileContainer data-testid="profile">
            <ProfileContent>
              <ProfileImg src={`${user?.avatar_url}`} alt="Image Profile" />
              <ProfileInfo>
                <ProfileTitle>
                  <h1>{user?.name}</h1>
                  <NavLink to={`${user?.html_url}`} target="_blank">
                    github
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      title="svg-01"
                    />
                  </NavLink>
                </ProfileTitle>
                <ProfileBio>
                  <p>{user?.bio}</p>
                </ProfileBio>
                <ProfileData>
                  <span>
                    <FontAwesomeIcon icon={faGithub} title="svg-02" />
                    {user?.login}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />
                    {user?.company != null
                      ? user?.company
                      : 'sem organização vinculada'}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} />
                    {user?.followers} seguidores
                  </span>
                </ProfileData>
              </ProfileInfo>
            </ProfileContent>
          </ProfileContainer>
        </BrowserRouter>
      </ThemeProvider>,
    )
    // const p = screen.getByRole('paragraph')
    // expect(screen.findAllByRole('img')).toBeInTheDocument()
    expect(screen.getByTestId('profile')).toBeInTheDocument()
    expect(screen.getByAltText('Image Profile')).toBeInTheDocument()

    expect(screen.getByText('Leandro Campos')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByTitle('svg-01')).toBeInTheDocument()
    expect(screen.getByTitle('svg-02')).toBeInTheDocument()
    // expect(screen).toBe('Frontend Developer')
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  })
})
