import { HeaderContainer } from './styles'

import logo from '../../assets/logo.png'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" className="href">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" className="href">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
