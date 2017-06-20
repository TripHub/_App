import React from 'react'
import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../../common/style'
import { Heading1, Small } from '../../../../../components/text'
import { InputForm } from '../../../../../components/form'

const Container = styled('div', {
  marginBottom: spacing.sd,
  padding: spacing.sd,
  border: `1px solid ${color.medGrey}`,
  borderRadius: borderRadius.sd
})

export default () => (
  <Container>
    <Heading1>Members</Heading1>
    <Small>You can add as many users as you like.</Small>
    <InputForm
      small
      type='email'
      placeholder='name@domain.com'
      label='Invite Member'
      buttonText='Invite' />
  </Container>
)
