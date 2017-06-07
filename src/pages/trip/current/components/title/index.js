import React from 'react'
import { Title, P } from '../../../../../components/text'
import Container from './components/container'

export default ({ loading, title, description }) => (
  <Container>
    <Title disabled={loading}>{title}</Title>
    <P disabled={loading}>{description}</P>
  </Container>
)
