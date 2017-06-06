import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import { Link } from '../../../components/text'
import Button from '../../../components/button'
import NotFound from '../../error/notFound'
import Title from './components/title'

class Trip extends React.Component {
  componentDidMount () {
    this.props.getTrip(this.props.match.params.id)
  }

  deleteTrip = () => {
    // this.props.deleteTrip(this.props.trip.id)
    // this.props.history.push('/')
  }

  render () {
    const { trip, loading } = this.props
    console.log('props: activeTripSelector, isActiveTripLoading', trip, loading)
    return loading
      ? <p>loading...</p>
      : (
        <div>
          <Title loading={loading}>{trip.title}</Title>
          <Link to='/'>Change trip</Link>
          <Button onClick={this.deleteTrip}>Delete trip</Button>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  trip: activeTripSelector(state),
  loading: isActiveTripLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id))
  // deleteTrip: (id) => dispatch(deleteTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
