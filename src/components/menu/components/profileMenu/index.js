import React from 'react'
import Container from './components/container'
import Text from './components/text'
import Image from './components/image'

export default ({onClick, open, ...props}) => (
  <Container onClick={onClick}>
    <Image src='http://tinypost.co/wp-content/uploads/2016/09/cute-profile-pics-for-whatsapp-images.png' />
    <Text>Profile</Text>
  </Container>
)
