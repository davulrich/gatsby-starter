import styled from 'styled-components'
import {breakpoints, mediaUp} from '../../helpers/media-queries'

export const StyledFooter = styled.footer`
  padding: 2.5rem 0;
  background: var(--c-primary);
  color: var(--c-white);

  ${mediaUp(breakpoints.lg)} {
    padding: 5rem 0;
  }
`
