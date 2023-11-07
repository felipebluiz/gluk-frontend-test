import { useContext } from 'react'
import { Bell, List, Question, User } from '@phosphor-icons/react'
import Button from 'react-bootstrap/Button'
import { Logo } from '@/components/ui/Logo'

import { Container } from './styles'
import { NavbarContext } from '@/providers/NavbarProvider'

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(NavbarContext)

  return (
    <Container>
      <div className="info">
        <Logo />
        <div className="company-details">
          <h1>AB InBev</h1>
          <span>06.966.259/0001-78</span>
        </div>
      </div>
      <div className="action-buttons">
        <Button
          variant="light"
          className="rounded-circle list"
          onClick={() => setIsOpen(!isOpen)}
        >
          <List size={20} weight="fill" />
        </Button>
        <Button variant="secondary" className="rounded-circle question">
          <Question size={20} weight="fill" />
        </Button>
        <Button variant="secondary" className="rounded-circle bell">
          <Bell size={20} weight="fill" />
        </Button>
        <Button variant="secondary" className="rounded-circle user">
          <User size={20} weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
