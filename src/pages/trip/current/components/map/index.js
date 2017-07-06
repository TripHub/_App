import React from 'react'
import PropTypes from 'prop-types'
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

const Map = ({ destinations, center, zoom }) => (
  <Container>
    <GoogleMapReact
      defaultCenter={center}
      defaultZoom={zoom}>
      {destinations.map((destination) => (
        <Marker
          key={destination.id}
          lat={destination.latitude}
          lng={destination.longitude} />
      ))}
    </GoogleMapReact>
  </Container>
)

Map.propTypes = {
  destinations: PropTypes.arrayOf(PropTypes.object),
  center: PropTypes.object,
  zoom: PropTypes.number
}

Map.defaultProps = {
  destinations: [],
  center: { lat: 0, lng: 0 },
  zoom: 4
}

export default Map
