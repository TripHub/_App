import React from 'react'
import Container from './components/container'
import Link from './components/link'
import Title from './components/title'
import Text from './components/text'

export default ({ trip, children, memberCount, ...props }) => {
  const totalMembers = memberCount + 1
  const trippersText = totalMembers === 1 ? 'tripper' : 'trippers'
  return (
    <Container>
      <Link {...props}>
        <Title>{children || trip.title}</Title>
        {
          Number.isInteger(totalMembers)
            ? <Text>{totalMembers} {trippersText}</Text>
            : null
        }
      </Link>
    </Container>
  )
}
