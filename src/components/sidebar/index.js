import React from 'react'
import Container from './components/container'
import Sidebar from './components/sidebar'
import Children from './components/children'
import Logo from './components/logo'
import Link from './components/link'

export default ({children, ...props}) => (
  <Container>
    <Sidebar>
      <Logo>TripHub</Logo>
      <Link to='/'>Trip</Link>
      <Link to='/tickets'>Tickets</Link>
      <Link to='/money'>Money</Link>
    </Sidebar>
    <Children children={children} />
  </Container>
)
