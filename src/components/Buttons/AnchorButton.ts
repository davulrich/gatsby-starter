import styled from 'styled-components'

interface Props {
  color?: string
  hoverColor?: string
  fontSize?: string
}

// Create a button that looks like an Anchor link
const AnchorButton = styled.button<Props>`
  border: none;
  padding: 0;
  display: inline-block;
  background: none;
  color: ${({color}) => color || 'var(--c-secondary)'};
  font-size: ${({fontSize}) => fontSize || 'var(--fs-base)'};
  line-height: 1;

  :hover {
    ${({hoverColor}) => hoverColor && `color: ${hoverColor}`};
    text-decoration: underline;
  }
`

export default AnchorButton
