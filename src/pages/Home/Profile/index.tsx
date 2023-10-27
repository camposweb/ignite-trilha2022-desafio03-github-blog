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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileImg src="https://avatars.githubusercontent.com/u/30279343?v=4" />
        <ProfileInfo>
          <ProfileTitle>
            <h1>Leandro Campos</h1>
            <NavLink to={'#'}>
              github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </ProfileTitle>
          <ProfileBio>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </ProfileBio>
          <ProfileData>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              camposweb
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              camposweb
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </span>
          </ProfileData>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
