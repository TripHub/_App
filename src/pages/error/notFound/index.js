import React from 'react'
import { Link } from 'react-router-dom'
import { Heading1 } from '../../../components/text'
import Button from '../../../components/button'
import { loginRequired } from '../../../enhancers'
import Container from './components/container'

export default loginRequired(() => (
  <Container>
    <Heading1>Page not found.</Heading1>
    <Link to='/'>
      <Button small>Return to dashboard</Button>
    </Link>
  </Container>
))
