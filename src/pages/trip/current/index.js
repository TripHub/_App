import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import {
  createDestination
} from '../../../data/trip/actions'
import { setActiveTrip } from '../../../data/entities/actions'
import {
  selectActiveTrip,
  isUserActiveTripOwner,
  selectActiveTripDestinations
} from '../../../data/entities/selectors'
import Destinations from './components/destinations'

class Trip extends React.Component {
  render () {
    const { trip, destinations, createDestination, isOwner } = this.props
    return (
      <div>
        <Destinations
          showCreate={isOwner}
          createDestination={createDestination(trip.id)}
          destinations={destinations || []} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: selectActiveTrip(state),
  destinations: selectActiveTripDestinations(state),
  isOwner: isUserActiveTripOwner(state),
  errors: state.trip.errors
})

const mapDispatchToProps = (dispatch) => ({
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  createDestination: (id) => (title) => dispatch(createDestination(id, title))
})

const TripPage = dashboardPageWithLogin(loadTrip(Trip))
export default connect(mapStateToProps, mapDispatchToProps)(TripPage)
