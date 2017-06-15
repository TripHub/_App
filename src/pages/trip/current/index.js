import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip, deleteTrip, createDestination, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Spinner from '../../../components/spinner'
import Title from './components/title'
import Destinations from './components/destinations'

class Trip extends React.Component {
  componentDidMount () {
    const { match, setActiveTrip, getTrip } = this.props
    setActiveTrip(match.params.id)
      .then(() => getTrip(match.params.id))
  }

  componentWillReceiveProps (nextProps) {
    Object.entries(nextProps.errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  // deleteTrip = () => {
  //   this.props.deleteTrip(this.props.trip.id)
  //     .then(() => this.props.setActiveTrip(''))
  //     .then(() => this.props.history.push('/'))
  // }

  render () {
    const { loading, trip, createDestination } = this.props
    return (
      <div>
        <Title
          settingsLink={`/${trip.id}/settings`}
          loading={loading}
          title={trip.title}
          description={trip.description} />

        { trip.is_complete ? ( // these elements need a fully loaded trip object
          <div>
            <Destinations
              createDestination={createDestination(trip.id)}
              destinations={trip.destinations} />
          </div>

        ) : <Spinner /> }
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
  getTrip: (id) => dispatch(getTrip(id)),
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  createDestination: (id) => (title) => dispatch(createDestination(id, title))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
