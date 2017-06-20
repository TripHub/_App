import React from 'react'
import { Small } from '../../../../../../../components/text'
import Button from '../../../../../../../components/button'
import Container from './components/container'
import Email from './components/email'

export default ({ email, status, onCancel }) => {
  return (
    <Container>
      <Email>{email}</Email>
      <Small noMargin muted>{status}</Small>
      <Button small onClick={onCancel}>X</Button>
    </Container>
  )
}
