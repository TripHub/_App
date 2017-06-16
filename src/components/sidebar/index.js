import React from 'react'
import Container from './components/container'
import Sidebar from './components/sidebar'
import Children from './components/children'
import Logo from './components/logo'
import Link from './components/link'

export default ({children, trip, ...props}) => {
  const { id } = trip || {}
  const disabled = !id
  return (
    <Container>
      <Sidebar>
        <Logo>TripHub</Logo>
        <Link
          disabled={disabled}
          to={!disabled ? `/${id}` : ''}
          icon='globe'
          children='Trip' />
        <Link
          disabled={disabled}
          to={!disabled ? `/${id}/tickets` : ''}
          icon='ticket'
          children='Tickets' />
        <Link
          disabled={disabled}
          to={!disabled ? `/${id}/money` : ''}
          icon='gbp'
          children='Money' />
      </Sidebar>
      <Children children={children} />
    </Container>
  )
}
