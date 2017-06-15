import React from 'react'
import { styled } from 'styletron-react'
import { spacing } from '../../../../../common/style'
import { Heading1 } from '../../../../../components/text'
import { Input } from '../../../../../components/form'

const Container = styled('div', {
  marginBottom: spacing.lg
})

export default ({ title, description }) => (
  <Container>
    <Heading1>Trip</Heading1>
    <Input small label='Trip Title' value={title} />
    <Input small label='Description' value={description} />
  </Container>
)
