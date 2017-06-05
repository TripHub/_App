import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip, deleteTrip } from '../../../data/trip/current/actions'
import { Title, P, Link } from '../../../components/text'
import { Button } from '../../../components/button'

class Trip extends React.Component {
  componentDidMount () {
    // only call API if the trip isn't already loaded
    if (this.props.match.params.id !== this.props.trip.id) {
      this.props.getTrip(this.props.match.params.id)
    }
  }

  render () {
    const { user, trip, deleteTrip } = this.props
    return trip.error.status
      ? <p>Not found.</p>
      : (
        <div>
          <P>You are: { user.sub } | Owner is: { trip.owner }</P>
          <Title>{trip.title}</Title>
          <Link to='/'>Change trip</Link>
          <Button onClick={() => deleteTrip(trip.id)}>Delete trip</Button>
        </div>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ trip: trip.current })

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id)),
  deleteTrip: (id) => dispatch(deleteTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
