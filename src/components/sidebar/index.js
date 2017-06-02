import React from 'react'
import Container from './components/container'
import Sidebar from './components/sidebar'
import Children from './components/children'
import Logo from './components/logo'

export default ({children, ...props}) => (
  <Container>
    <Sidebar>
      <Logo>TripHub</Logo>
    </Sidebar>
    <Children children={children} />
  </Container>
)
