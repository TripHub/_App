import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrips } from '../../data/entities/actions'
import { selectActiveTrip } from '../../data/entities/selectors'
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
            : Object.values(trips.byId).map(trip =>
              <TripItem
                key={trip.id}
                to={`/${trip.id}`}
                trip={trip}
                active={activeTrip.id === trip.id} />)
        }
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  trips: state.entities.trips,
  activeTrip: selectActiveTrip(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

const TripsPage = dashboardPageWithLogin(Trips)
export default connect(mapStateToProps, mapDispatchToProps)(TripsPage)
