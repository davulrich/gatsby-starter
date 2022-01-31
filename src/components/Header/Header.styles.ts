import styled from 'styled-components'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import {NavLink as NavItem} from 'react-bootstrap'
import {mediaUp, breakpoints} from '../../helpers/media-queries'

export const NavCollapse = styled(NavbarCollapse)`
  & .navbar-nav {
    ${mediaUp(breakpoints.lg)} {
      column-gap: 1rem;
    }

    ${mediaUp(breakpoints.xl)} {
      column-gap: 4rem;
    }

    ${mediaUp(breakpoints.xxl)} {
      column-gap: 5rem;
    }
  }
`

const buttonHeight = '1.2rem'
export const NavToggle = styled(NavbarToggle)`
  border: none;
  padding: 0;
  height: ${buttonHeight};
  font-size: 0;
  line-height: inherit;

  :hover,
  :focus {
    box-shadow: none;
  }

  & .navbar-toggler-icon {
    background: none;
    position: relative;

    &,
    ::before,
    ::after {
      border-radius: 50px;
      width: 2.6rem;
      height: 3.5px;
      background-color: var(--c-white);
      display: inline-block;
    }

    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    ::before {
      top: calc(${buttonHeight} / -2.1);
    }
    ::after {
      top: calc(${buttonHeight} / 2.1);
    }
  }

  :not(.collapsed) {
    & .navbar-toggler-icon {
      background: transparent;

      ::before {
        top: 0;
        transform: rotate(135deg);
      }

      ::after {
        top: 0;
        transform: rotate(-135deg);
      }
    }
  }
`

export const NavLink = styled(NavItem)`
  font-size: var(--fs-plus-2);
  text-align: center;
`
