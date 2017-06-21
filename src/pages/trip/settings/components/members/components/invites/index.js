import React from 'react'
import Container from './components/container'
import Invite from './components/invite'

export default ({ loading, invites, onCancel }) => (
  <Container loading={loading}>
    {
      invites.map((invite) => (
        <Invite
          key={invite.id}
          email={invite.email}
          status={invite.status}
          onCancel={() => onCancel(invite.id)} />
      ))
    }
  </Container>
)
