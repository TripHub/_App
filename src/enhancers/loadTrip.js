import React from 'react'
import { connect } from 'react-redux'
import { getTrip, getTrips, setActiveTrip } from '../data/trip/actions'
import { activeTripSelector } from '../data/trip/selectors'
import NotFound from '../pages/error/notFound'

// gets the trip from the URL and loads it
export default (Wrapped) => {
  class LoadTrip extends React.Component {
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

    render () {
      const { trip } = this.props
      return this.state.resolved
        ? trip.id
          ? <Wrapped {...this.props} />
          : <NotFound />
        : <p>Loading...</p>
    }
  }

  const mapStateToProps = (state) => ({
    trip: activeTripSelector(state)
  })

  const mapDispatchToProps = (dispatch) => ({
    getTrips: () => dispatch(getTrips()),
    getTrip: (id) => dispatch(getTrip(id)),
    setActiveTrip: (id) => dispatch(setActiveTrip(id))
  })

  return connect(mapStateToProps, mapDispatchToProps)(LoadTrip)
}
