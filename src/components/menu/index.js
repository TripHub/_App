import React from 'react'
import Container from './components/container'
import ProfileMenu from './components/profileMenu'

export default ({ picture, children, ...props }) => (
  <Container {...props}>
    {children}
    <ProfileMenu picture={picture} />
  </Container>
)
