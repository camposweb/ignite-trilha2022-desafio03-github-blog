import { BrowserRouter, NavLink } from 'react-router-dom'
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
                      title="svg-link"
                    />
                  </NavLink>
                </ProfileTitle>
                <ProfileBio>
                  <p>{user?.bio}</p>
                </ProfileBio>
                <ProfileData>
                  <span>
                    <FontAwesomeIcon icon={faGithub} title="svg-github" />
                    {user?.login}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBuilding} title="svg-company" />
                    {user?.company != null
                      ? user?.company
                      : 'sem organização vinculada'}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faUserGroup} title="svg-followers" />
                    {user?.followers} seguidores
                  </span>
                </ProfileData>
              </ProfileInfo>
            </ProfileContent>
          </ProfileContainer>
        </BrowserRouter>
      </ThemeProvider>,
    )

    expect(screen.getByTestId('profile')).toBeInTheDocument()
    expect(screen.getByAltText('Image Profile')).toBeInTheDocument()

    expect(screen.getByText('Leandro Campos')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
    expect(screen.getByTitle('svg-github')).toBeInTheDocument()
    expect(screen.getByText('camposweb')).toBeInTheDocument()
    expect(screen.getByTitle('svg-company')).toBeInTheDocument()
    expect(screen.getByText('sem organização vinculada')).toBeInTheDocument()
    expect(screen.getByTitle('svg-followers')).toBeInTheDocument()
    expect(screen.getByText('0 seguidores')).toBeInTheDocument()
  })
})
