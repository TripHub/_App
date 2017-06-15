import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip, getTrips, createDestination, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Spinner from '../../../components/spinner'
import NotFound from '../../error/notFound'
import Title from './components/title'
import Destinations from './components/destinations'

class Trip extends React.Component {
  constructor (props) {
    super(props)
    this.state = { resolved: false }
  }

  componentDidMount () {
    const { match, setActiveTrip, getTrip, getTrips } = this.props
    getTrips()
      .then(() => getTrip(match.params.id))
      .then(() => setActiveTrip(match.params.id))
      .then(() => this.setState({ resolved: true }))
  }

  componentWillReceiveProps (nextProps) {
    Object.entries(nextProps.errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  render () {
    const { loading, trip, createDestination } = this.props
    if (!this.state.resolved) {
      return <Spinner />
    }
    return trip.id ? (
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
    ) : <NotFound />
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

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
