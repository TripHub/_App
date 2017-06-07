import React from 'react'
import { Link } from 'react-router-dom'
import Container from './components/container'
import ProfileMenu from './components/profileMenu'
import MenuButton from './components/menuButton'

export default ({ loading, picture, onLogout, ...props }) => (
  <Container {...props}>
    <Link to='/'>
      <MenuButton small>All Trips</MenuButton>
    </Link>
    <Link to='/auth/logout'>
      <MenuButton small>Logout</MenuButton>
    </Link>
    <ProfileMenu loading={loading} picture={picture} />
  </Container>
)
