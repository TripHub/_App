import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip, deleteTrip } from '../../../data/trip/current/actions'
import { Link } from '../../../components/text'
import Button from '../../../components/button'
import NotFound from '../../error/notFound'
import Title from './components/title'

class Trip extends React.Component {
  componentDidMount () {
    // only call API if the trip isn't already loaded
    if (this.props.match.params.id !== this.props.trip.id) {
      this.props.getTrip(this.props.match.params.id)
    }
  }

  deleteTrip = () => {
    console.log('!!', this.props)
    this.props.deleteTrip(this.props.trip.id)
    this.props.history.push('/')
  }

  render () {
    const { trip } = this.props
    return trip.error.status
      ? <NotFound />
      : (
        <div>
          <Title loading={trip.loading}>{trip.title}</Title>
          <Link to='/'>Change trip</Link>
          <Button onClick={this.deleteTrip}>Delete trip</Button>
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
