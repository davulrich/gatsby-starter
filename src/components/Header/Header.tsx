import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {NavCollapse, NavLink, NavToggle} from './Header.styles'

interface MenuItem {
  id: number
  href: string
  text: string
}

const menuItems: Array<MenuItem> = [
  {
    id: 1,
    href: '#',
    text: 'Item1',
  },
  {
    id: 2,
    href: '#',
    text: 'Item2',
  },
  {
    id: 3,
    href: '#',
    text: 'Item3',
  },
  {
    id: 4,
    href: '#',
    text: 'Item3',
  },
  {
    id: 5,
    href: '#',
    text: 'Item4',
  },
]

const Header: React.FC = () => (
  <Navbar as="header" expand="lg" sticky="top" bg="dark" variant="dark">
    <Container fluid="xxl" as="nav" className="justify-content-between">
      <Navbar.Brand href="#shingles-aware">Logo</Navbar.Brand>
      <NavToggle aria-controls="main-nav" />
      <NavCollapse id="main-nav">
        <Nav className="justify-content-end w-100">
          {menuItems.map(({id, href, text}) => (
            <NavLink key={id} href={href}>
              {text}
            </NavLink>
          ))}
        </Nav>
      </NavCollapse>
    </Container>
  </Navbar>
)
export default Header
