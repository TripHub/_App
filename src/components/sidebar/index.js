import React from 'react'
import Container from './components/container'
import Sidebar from './components/sidebar'
import Children from './components/children'
import Logo from './components/logo'
import Link from './components/link'

export default ({children, currentTrip, ...props}) => (
  <Container>
    <Sidebar>
      <Logo>TripHub</Logo>
      <Link to={`/${currentTrip.id || ''}`}>Trip</Link>
      <Link to='/tickets'>Tickets</Link>
      <Link to='/money'>Money</Link>
      <Link to='/trip_fhdwhywdw6dw'>???</Link>
    </Sidebar>
    <Children children={children} />
  </Container>
)
