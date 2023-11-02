import { NavLink } from 'react-router-dom'
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
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataContext'

export function Profile() {
  const { user } = useContext(DataContext)

  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileImg src={`${user?.avatar_url}`} />
        <ProfileInfo>
          <ProfileTitle>
            <h1>{user?.name}</h1>
            <NavLink to={`${user?.html_url}`} target="_blank">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </ProfileTitle>
          <ProfileBio>
            <p>{user?.bio}</p>
          </ProfileBio>
          <ProfileData>
            <span>
              <FontAwesomeIcon icon={faGithub} />
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
  )
}
