import React from 'react'
import Panel from '../../../../components/panel'
import { Heading2, Small } from '../../../../components/text'
import { OneTwoFour } from '../../../../components/responsive'

export default ({ trip, children, memberCount, ...props }) => {
  const totalMembers = memberCount + 1  // include the owner
  const memberText = totalMembers === 1 ? 'member' : 'members'
  return (
    <OneTwoFour>
      <Panel {...props}>
        <Heading2 noMargin>{children || trip.title}</Heading2>
        {
          Number.isInteger(totalMembers)
            ? <Small noMargin>{totalMembers} {memberText}</Small>
            : null
        }
      </Panel>
    </OneTwoFour>
  )
}
