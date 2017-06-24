import React from 'react'
import Invite from './components/invite'

export default ({ loading, invites, onCancel }) => (
  <div>
    {
      invites.map((invite) => (
        <Invite
          key={invite.id}
          email={invite.email}
          status={invite.status}
          onCancel={() => onCancel(invite.id)} />
      ))
    }
  </div>
)
