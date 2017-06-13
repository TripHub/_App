import React from 'react'
import { Link } from 'react-router-dom'
import Container from './components/container'
import ProfileMenu from './components/profileMenu'
import Button from '../button'

export default ({ loading, picture, onLogout, ...props }) => (
  <Container {...props}>
    <Link to='/'>
      <Button small>All Trips</Button>
    </Link>
    <Link to='/auth/logout'>
      <Button small>Logout</Button>
    </Link>
    <ProfileMenu loading={loading} picture={picture} />
  </Container>
)
