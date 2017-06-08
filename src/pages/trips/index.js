import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrips } from '../../data/trip/actions'
import { tripsSelector, activeTripSelector } from '../../data/trip/selectors'
import Spinner from '../../components/spinner/'
import { Row } from '../../components/responsive/'
import Icon from '../../components/icon/'
import TripItem from './components/tripItem'

class Trips extends React.Component {
  componentDidMount () {
    this.props.getTrips()
  }

  componentWillReceiveProps (nextProps) {
    const errors = nextProps.trips.errors
    errors && this.showErrors(errors)
  }

  showErrors = (errors) => {
    Object.entries(errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  render () {
    const { trips, activeTrip } = this.props
    return (
      <Row>
        <TripItem to='/new'>
          <Icon name='plus' /> New Trip
        </TripItem>
        {
          trips.loading
            ? <Spinner />
            : Object.values(trips.entities).map(trip =>
              <TripItem
                key={trip.id}
                to={`/${trip.id}`}
                trip={trip}
                active={activeTrip.id === trip.id}
                memberCount={trip.member_count} />)
        }
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  trips: tripsSelector(state),
  activeTrip: activeTripSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trips))
