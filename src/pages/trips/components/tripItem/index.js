import React from 'react'
import Container from './components/container'
import Border from './components/border'
import Link from './components/link'
import Title from './components/title'
import Text from './components/text'

export default ({ trip, children, memberCount, active, ...props }) => {
  const totalMembers = memberCount + 1
  const trippersText = totalMembers === 1 ? 'tripper' : 'trippers'
  return (
    <Container>
      <Border active={active}>
        <Link {...props}>
          <Title>{children || trip.title}</Title>
          {
            Number.isInteger(totalMembers)
              ? <Text>{totalMembers} {trippersText}</Text>
              : null
          }
        </Link>
      </Border>
    </Container>
  )
}
