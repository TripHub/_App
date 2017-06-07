import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrips } from '../../data/trip/actions'
// import { selectTrips } from '../../data/trip/list/selectors'
import { activeTripSelector } from '../../data/trip/selectors'
import Spinner from '../../components/spinner/'
import TripItem from './components/tripItem'
import TripList from './components/tripList'

class Trips extends React.Component {
  componentDidMount () {
    this.props.getTrips()
  }

  componentWillReceiveProps (nextProps) {
    const errors = nextProps.trip.errors
    errors && this.showErrors(errors)
  }

  showErrors = (errors) => {
    Object.entries(errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  render () {
    const { trip, activeTrip } = this.props
    return (
      <div>
        <TripList>
          <TripItem to='/new'>+ New</TripItem>
          {
            trip.loading
              ? <Spinner />
              : Object.values(trip.entities).map(trip =>
                <TripItem
                  key={trip.id}
                  to={`/${trip.id}`}
                  trip={trip}
                  active={activeTrip.id === trip.id}
                  memberCount={trip.member_count} />)
          }
        </TripList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: state.trip,
  activeTrip: activeTripSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trips))
