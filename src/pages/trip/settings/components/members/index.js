import React from 'react'
import { styled } from 'styletron-react'
import { spacing } from '../../../../../common/style'
import { Heading1, Small } from '../../../../../components/text'

const Container = styled('div', {
  marginBottom: spacing.lg
})

export default () => (
  <Container>
    <Heading1>Members</Heading1>
    <Small>Member management to go here...</Small>
  </Container>
)
