import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'} title="Home">
        <img src={logo} alt="Logo" />
      </NavLink>
    </HeaderContainer>
  )
}
