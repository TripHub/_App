import React from 'react'
import { color } from '../../common/style'
import { P } from '../text'
import Container from './components/container'
import Spinner from './components/spinner'

export default (props) => (
  <Container>
    <P muted>Loading…</P>
    <Spinner name='three-bounce' color={color.black} {...props} />
  </Container>
)
