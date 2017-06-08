import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip, deleteTrip, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Spinner from '../../../components/spinner'
import Button from '../../../components/button'
// import Members from './components/members'
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

  deleteTrip = () => {
    this.props.deleteTrip(this.props.trip.id)
      .then(() => this.props.setActiveTrip(''))
      .then(() => this.props.history.push('/'))
  }

  render () {
    const { trip, loading } = this.props
    return (
      <div>
        <Button small onClick={this.deleteTrip}>Delete trip</Button>
        <Title
          loading={loading}
          title={trip.title}
          description={trip.description} />

        {trip.is_complete ? (
          // these elements need a fully loaded trip object
          <div>
            <Destinations destinations={trip.destinations} />
          </div>

        ) : <Spinner />}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: activeTripSelector(state),
  loading: isActiveTripLoading(state),
  errors: state.trip.active.errors
})

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id)),
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
