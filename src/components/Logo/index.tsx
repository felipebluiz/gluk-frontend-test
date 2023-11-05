import { NavLink } from 'react-router-dom'

import { Container } from './styles'

export function Logo() {
  return (
    <Container className="logo-container">
      <NavLink to="/">
        <img src="/images/gluk.png" alt="Gluk Logo" />
      </NavLink>
    </Container>
  )
}
