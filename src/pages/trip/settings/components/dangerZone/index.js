import React from 'react'
import { styled } from 'styletron-react'
import { spacing } from '../../../../../common/style'
import { Heading1, Small } from '../../../../../components/text'
import Button from '../../../../../components/button'

const Container = styled('div', {
  marginBottom: spacing.lg
})

export default ({ onDelete }) => (
  <Container>
    <Heading1>Danger Zone!</Heading1>
    <Small>Be careful! These actions are irreversible.</Small>
    <Button onClick={onDelete}>Delete Trip</Button>
  </Container>
)
