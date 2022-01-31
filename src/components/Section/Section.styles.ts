import styled from 'styled-components'
import {mediaUp, breakpoints} from '../../helpers/media-queries'

export const SectionWrapper = styled.section<{bg: string}>`
  padding: 2.5rem 0;
  position: relative;

  background: ${(props) => props.bg};

  ${mediaUp(breakpoints.lg)} {
    padding: 5rem 0;
  }
`
