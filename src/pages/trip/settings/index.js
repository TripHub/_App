import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../../enhancers'
import { Title } from '../../../components/text'
import { getTrip, deleteTrip, createDestination, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import DangerZone from './components/dangerZone'
import Padding from './components/padding'

class Settings extends React.Component {
  componentDidMount () {
    this.props.getTrip(this.props.match.params.id)
  }

  handleDelete = () => {
    const { deleteTrip, setActiveTrip, history, trip } = this.props
    deleteTrip(trip.id)
      .then(() => setActiveTrip(''))
      .then(() => history.push('/'))
  }

  render () {
    const { loading, trip } = this.props
    return (
      <Padding>
        <Title>Settings</Title>
        <DangerZone onDelete={this.handleDelete} />
      </Padding>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: activeTripSelector(state),
  loading: isActiveTripLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id)),
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id))
})

const SettingsPage = dashboardPageWithLogin(Settings)
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
