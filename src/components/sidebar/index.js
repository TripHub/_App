import React from 'react'
import Container from './components/container'
import Sidebar from './components/sidebar'
import Children from './components/children'
import Logo from './components/logo'
import Link from './components/link'

export default ({children, currentTrip, ...props}) => {
  const { id } = currentTrip
  const disabled = !id
  return (
    <Container>
      <Sidebar>
        <Logo>TripHub</Logo>
        <Link disabled={disabled} to={!disabled ? `/${id}` : ''} icon='globe'>Trip</Link>
        <Link disabled={disabled} to={!disabled ? `/${id}/tickets` : ''} icon='ticket'>Tickets</Link>
        <Link disabled={disabled} to={!disabled ? `/${id}/money` : ''} icon='gbp'>Money</Link>
      </Sidebar>
      <Children children={children} />
    </Container>
  )
}
