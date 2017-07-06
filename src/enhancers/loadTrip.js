import React from 'react'
import { connect } from 'react-redux'
import { getTrips, getTrip, setActiveTrip } from '../data/entities/actions'
import { selectActiveTrip } from '../data/entities/selectors'
import { P } from '../components/text'
import NotFound from '../pages/error/notFound'

// gets the trip from the URL and loads it
export default (Wrapped) => {
  class LoadTrip extends React.Component {
    state = { resolved: false }

    componentDidMount () {
      const { trip, match, setActiveTrip, getTrip, getTrips } = this.props
      const urlId = match.params.id
      if (urlId !== trip.id) {
        getTrips()
          .then(() => getTrip(match.params.id))
          .then(() => setActiveTrip(match.params.id))
          .then(() => this.setState({ resolved: true }))
      } else {
        this.setState({ resolved: true })
      }
    }

    render () {
      const { trip } = this.props
      return this.state.resolved
        ? trip.id
          ? <Wrapped {...this.props} />
          : <NotFound />
        : <P>Loading...</P>
    }
  }

  const mapStateToProps = (state) => ({
    trip: selectActiveTrip(state)
  })

  const mapDispatchToProps = (dispatch) => ({
    getTrips: () => dispatch(getTrips()),
    getTrip: (id) => dispatch(getTrip(id)),
    setActiveTrip: (id) => dispatch(setActiveTrip(id))
  })

  return connect(mapStateToProps, mapDispatchToProps)(LoadTrip)
}
