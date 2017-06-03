import React from 'react'
import Container from './components/container'
import ProfileMenu from './components/profileMenu'

export default ({ picture, ...props }) => (
  <Container>
    <ProfileMenu picture={picture} />
  </Container>
)
