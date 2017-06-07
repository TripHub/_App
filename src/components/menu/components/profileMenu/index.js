import React from 'react'
import Icon from '../../../icon'
import Container from './components/container'
import Text from './components/text'
import Image from './components/image'
import ImagePlaceholder from './components/imagePlaceholder'

export default ({ loading, picture, onClick, open, ...props }) => (
  <Container loading={loading} onClick={onClick}>
    {
      loading || !picture
        ? <ImagePlaceholder />
        : <Image src={picture} />
    }
    <Text>Profile <Icon name='caret-down' /></Text>
  </Container>
)
