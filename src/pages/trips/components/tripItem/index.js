import React from 'react'
import Panel from '../../../../components/panel'
import { OneTwoFour } from '../../../../components/responsive'
import Title from './components/title'
import Text from './components/text'

export default ({ trip, children, memberCount, ...props }) => {
  const totalMembers = memberCount + 1
  const trippersText = totalMembers === 1 ? 'tripper' : 'trippers'
  return (
    <OneTwoFour>
      <Panel {...props}>
        <Title>{children || trip.title}</Title>
        {
          Number.isInteger(totalMembers)
            ? <Text>{totalMembers} {trippersText}</Text>
            : null
        }
      </Panel>
    </OneTwoFour>
  )
}
