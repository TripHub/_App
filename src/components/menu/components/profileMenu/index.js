import React from 'react'
import Container from './components/container'
import Text from './components/text'
import Image from './components/image'

export default ({ picture, onClick, open, ...props }) => (
  <Container onClick={onClick}>
    <Image src={picture} />
    <Text>Profile</Text>
  </Container>
)
