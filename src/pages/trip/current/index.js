import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import { getTrip, getTrips, createDestination, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Title from './components/title'
import Destinations from './components/destinations'

class Trip extends React.Component {
  componentWillReceiveProps (nextProps) {
    Object.entries(nextProps.errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  render () {
    const { loading, trip, createDestination } = this.props
    return (
      <div>
        <Title
          settingsLink={`/${trip.id}/settings`}
          loading={loading}
          title={trip.title}
          description={trip.description} />

        {
          // these elements need a fully loaded trip object
          trip.is_complete && (
            <div>
              <Destinations
                createDestination={createDestination(trip.id)}
                destinations={trip.destinations} />
            </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: activeTripSelector(state),
  loading: isActiveTripLoading(state),
  errors: state.trip.errors
})

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips()),
  getTrip: (id) => dispatch(getTrip(id)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  createDestination: (id) => (title) => dispatch(createDestination(id, title))
})

const TripPage = dashboardPageWithLogin(loadTrip(Trip))
export default connect(mapStateToProps, mapDispatchToProps)(TripPage)
