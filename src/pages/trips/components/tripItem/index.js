import React from 'react'
import Container from './components/container'
import Title from './components/title'

export default ({trip, ...props}) => (
  <Container {...props}>
    <Title>{trip.title}</Title>
  </Container>
)
