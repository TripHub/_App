import React from 'react'
import { connect } from 'react-redux'
import { withSidebar, withMenu } from '../../enhancers'
import { getTrips } from '../../data/trip/list/actions'
import { getTrip } from '../../data/trip/current/actions'
import { Trip as TripItem } from '../../components/list'
import TripList from './components/tripList'

class Trip extends React.Component {
  componentDidMount () {
    this.props.getTrips()
  }
  render () {
    const { list, current, getTrip } = this.props
    return (
      <TripList> {
        current.id
          ? <p>{current.title} ({current.id})</p>
          : list.trips.map(trip =>
            <TripItem
              key={trip.id}
              children={trip.title}
              onClick={() => getTrip(trip.id)} />
          )
      } </TripList>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ ...trip })

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips()),
  getTrip: (id) => dispatch(getTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(withMenu(Trip)))
