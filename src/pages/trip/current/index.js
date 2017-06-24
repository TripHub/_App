import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import {
  createDestination,
  setActiveTrip
} from '../../../data/trip/actions'
import {
  getActiveTrip,
  isActiveTripLoading,
  isUserActiveTripOwner
} from '../../../data/trip/selectors'
import Destinations from './components/destinations'

class Trip extends React.Component {
  componentWillReceiveProps (nextProps) {
    Object.entries(nextProps.errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  render () {
    const { trip, createDestination, isOwner } = this.props
    return (
      <div>
        {
          // these elements need a fully loaded trip object
          trip.is_complete && (
            <div>
              <Destinations
                showCreate={isOwner}
                createDestination={createDestination(trip.id)}
                destinations={trip.destinations} />
            </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: getActiveTrip(state),
  isOwner: isUserActiveTripOwner(state),
  loading: isActiveTripLoading(state),
  errors: state.trip.errors
})

const mapDispatchToProps = (dispatch) => ({
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  createDestination: (id) => (title) => dispatch(createDestination(id, title))
})

const TripPage = dashboardPageWithLogin(loadTrip(Trip))
export default connect(mapStateToProps, mapDispatchToProps)(TripPage)
