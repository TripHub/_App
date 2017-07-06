import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import {
  getTrip,
  setActiveTrip,
  createDestination
} from '../../../data/entities/actions'
import {
  selectActiveTrip,
  isUserActiveTripOwner,
  selectActiveTripDestinations
} from '../../../data/entities/selectors'
import Container from './components/container'
import Destinations from './components/destinations'
import Map from './components/map'

class Trip extends React.Component {
  render () {
    const { trip, destinations, createDestination, isOwner } = this.props
    return (
      <Container>
        <Destinations
          hasCreatePermission={isOwner}
          createDestination={createDestination(trip.id)}
          destinations={destinations || []} />
        <Map
          centre={{ lat: 54, lng: 0 }}
          zoom={5}
          destinations={destinations || []} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: selectActiveTrip(state),
  destinations: selectActiveTripDestinations(state),
  isOwner: isUserActiveTripOwner(state)
})

const mapDispatchToProps = (dispatch) => ({
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  createDestination: (id) => (data) => dispatch(createDestination({
    trip: id,
    ...data
  }))
    .then(() => dispatch(getTrip(id)))
})

const TripPage = dashboardPageWithLogin(loadTrip(Trip))
export default connect(mapStateToProps, mapDispatchToProps)(TripPage)
