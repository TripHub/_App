import React from 'react'
import { Link } from 'react-router-dom'
import Container from './components/container'
import ProfileMenu from './components/profileMenu'
import LogoutButton from './components/logoutButton'

export default ({ loading, picture, onLogout, ...props }) => (
  <Container {...props}>
    <Link to='/auth/logout'><LogoutButton small>Logout</LogoutButton></Link>
    <ProfileMenu loading={loading} picture={picture} />
  </Container>
)
