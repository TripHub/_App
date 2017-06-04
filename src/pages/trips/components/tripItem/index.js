import React from 'react'
import Container from './components/container'
import Link from './components/link'
import Title from './components/title'

export default ({trip, children, ...props}) => (
  <Container>
    <Link {...props}>
      <Title>{children || trip.title}</Title>
    </Link>
  </Container>
)
