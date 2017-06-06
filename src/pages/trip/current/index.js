import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip } from '../../../data/trip/actions'
import { activeTripSelector } from '../../../data/trip/selectors'
import { Link } from '../../../components/text'
import Button from '../../../components/button'
import NotFound from '../../error/notFound'
import Title from './components/title'

class Trip extends React.Component {
  componentDidMount () {
    // only call API if the trip isn't already loaded
    if (this.props.match.params.id !== this.props.state.trip.activeTrip) {
      this.props.getTrip(this.props.match.params.id)
    }
  }

  deleteTrip = () => {
    // this.props.deleteTrip(this.props.trip.id)
    // this.props.history.push('/')
  }

  render () {
    console.log('activeTripSelector', this.props.activeTrip)
    // const { trip } = this.props
    // return trip.error.status
    //   ? <NotFound />
    //   : (
    //     <div>
    //       <Title loading={trip.loading}>{trip.title}</Title>
    //       <Link to='/'>Change trip</Link>
    //       <Button onClick={this.deleteTrip}>Delete trip</Button>
    //     </div>
    // )
    return <div>{this.props.activeTrip && this.props.activeTrip.id}</div>
  }
}

const mapStateToProps = (state) => ({
  state,
  activeTrip: activeTripSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id))
  // deleteTrip: (id) => dispatch(deleteTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
