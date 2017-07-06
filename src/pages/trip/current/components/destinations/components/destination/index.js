import React from 'react'
import { Heading3 } from '../../../../../../../components/text'
import Container from './components/container'

export default ({ address, ...props }) => (
  <Container>
    <Heading3 noMargin>{address}</Heading3>
  </Container>
)
