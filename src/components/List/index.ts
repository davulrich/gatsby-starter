import styled from 'styled-components'

export const List = styled.ul`
  padding: 0 0 0 1em;
  list-style: none;
`

export const ListItem = styled.li`
  margin-bottom: 0.35em;
  position: relative;

  :before {
    content: '•';
    width: 0.8em;
    display: inline-block;
    color: var(--c-secondary);
    font-size: var(--fs-plus-2);
    position: absolute;
    top: -0.25em;
    left: -0.75em;
  }
`
