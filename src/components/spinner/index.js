import React from 'react'
import { color } from '../../common/style'
import Container from './components/container'
import Spinner from './components/spinner'

export default (props) => (
  <Container>
    <Spinner name='three-bounce' color={color.green} {...props} />
  </Container>
)
