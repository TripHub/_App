import React from 'react'
import Container from './components/container'
import ProfileMenu from './components/profileMenu'
import LogoutButton from './components/logoutButton'

export default ({ loading, picture, onLogout, ...props }) => (
  <Container {...props}>
    <LogoutButton small onClick={onLogout}>Logout</LogoutButton>
    <ProfileMenu loading={loading} picture={picture} />
  </Container>
)
