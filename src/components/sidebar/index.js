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
      <Link to='/' icon='globe'>Trips</Link>
      <Link to='/tickets' icon='ticket'>Tickets</Link>
      <Link to='/money' icon='gbp'>Money</Link>
    </Sidebar>
    <Children children={children} />
  </Container>
)
