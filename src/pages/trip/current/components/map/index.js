import React from 'react'
import { styled } from 'styletron-react'
import GoogleMapReact from 'google-map-react'

const Container = styled('div', {
  alignSelf: 'stretch',
  width: '50%'
})

const Marker = styled('div', {
  width: `8px`,
  height: `8px`,
  marginLeft: `-4px`,
  marginTop: `-4px`,
  borderRadius: '50%',
  background: 'dodgerblue'
})

export default ({ destinations, centre, zoom }) => (
  <Container>
    <GoogleMapReact
      defaultCenter={centre}
      defaultZoom={zoom}>
      {destinations.map((destination) => (
        <Marker
          lat={destination.latitude}
          lng={destination.longitude} />
      ))}
    </GoogleMapReact>
  </Container>
)
