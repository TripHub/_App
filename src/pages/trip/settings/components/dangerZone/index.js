import React from 'react'
import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../../common/style'
import { Heading1, Small } from '../../../../../components/text'
import Button from '../../../../../components/button'

const Container = styled('div', {
  marginBottom: spacing.sd,
  padding: spacing.sd,
  border: `1px solid ${color.red}`,
  borderRadius: borderRadius.sd
})

export default ({ onDelete }) => (
  <Container>
    <Heading1>Danger Zone!</Heading1>
    <Small>Be careful! These actions are irreversible.</Small>
    <Button primary danger onClick={onDelete}>Delete Trip</Button>
  </Container>
)
