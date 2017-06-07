import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip, deleteTrip, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Button from '../../../components/button'
import Title from './components/title'

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
      .then(() => this.props.history.push('/'))
  }

  render () {
    const { trip, loading } = this.props
    console.log('loading', loading)
    return loading
      ? <p>loading...</p>
      : (
        <div>
          <Button small onClick={this.deleteTrip}>Delete trip</Button>
          <Title loading={loading}>{trip.title}</Title>
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
  setActiveTrip: (id) => dispatch(setActiveTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
