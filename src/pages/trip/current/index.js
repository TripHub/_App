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
