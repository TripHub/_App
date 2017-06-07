import React from 'react'
import { Heading1 } from '../../../components/text'
import { loginRequired } from '../../../enhancers'
import Container from './components/container'

export default loginRequired(() => (
  <Container>
    <Heading1>404 - Page not found.</Heading1>
  </Container>
))
