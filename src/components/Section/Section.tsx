/* eslint-disable react/require-default-props */
import React from 'react'
import {Container} from 'react-bootstrap'
import {SectionWrapper} from './Section.styles'

interface RequiredProps {
  id: string
  children: React.ReactNode
}

interface OptionalProps {
  bg?: string
  relative?: boolean
}

interface Props extends RequiredProps, OptionalProps {}

const Section: React.FC<Props> = (props) => {
  const {id, children, bg = '#fff', relative = false} = props

  return (
    <SectionWrapper id={id} bg={bg}>
      <Container className={relative ? 'position-relative' : ''}>
        {children}
      </Container>
    </SectionWrapper>
  )
}

export default Section
