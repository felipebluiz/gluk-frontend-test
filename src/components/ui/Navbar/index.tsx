import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Bell,
  DotsThreeOutline,
  FilePlus,
  Question,
  User,
} from '@phosphor-icons/react'
import { NavbarContext } from '@/providers/NavbarProvider'
import { Logo } from '@/components/ui/Logo'

import { Container } from './styles'

export const Navbar = () => {
  const { isOpen } = useContext(NavbarContext)

  return (
    <Container isopen={isOpen.toString()}>
      <Logo />
      <DotsThreeOutline size={22} weight="fill" className="dots" />
      <ul>
        <li>
          <NavLink
            to="/sales/new"
            title="Cadastrar Venda"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="line" />
            <FilePlus size={30} weight="fill" />
            <span>Cadastrar Venda</span>
          </NavLink>
        </li>
        <div className="separator" />
        <li className="mobile">
          <NavLink
            to=""
            title="Conta"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="line" />
            <User size={30} weight="fill" />
            <span>Conta</span>
          </NavLink>
        </li>
        <li className="mobile">
          <NavLink
            to=""
            title="Notificações"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="line" />
            <Bell size={30} weight="fill" />
            <span>Notificações</span>
          </NavLink>
        </li>
        <li className="mobile">
          <NavLink
            to=""
            title="Ajuda"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="line" />
            <Question size={30} weight="fill" />
            <span>Ajuda</span>
          </NavLink>
        </li>
      </ul>
    </Container>
  )
}
