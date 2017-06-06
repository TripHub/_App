import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrips } from '../../data/trip/actions'
// import { selectTrips } from '../../data/trip/list/selectors'
import Spinner from '../../components/spinner/'
import TripItem from './components/tripItem'
import TripList from './components/tripList'

class Trips extends React.Component {
  componentDidMount () {
    if (!this.props.state.trip.entitiesCount) {
      this.props.getTrips()
    }
  }

  render () {
    const { trip } = this.props.state
    return (
      <div>
        <TripList>
          <TripItem to='/new'>+ New</TripItem>
          {
            trip.loading
              ? <Spinner />
              : Object.values(trip.entities).map(trip =>
                <TripItem
                  key={trip.id}
                  to={`/${trip.id}`}
                  trip={trip}
                  memberCount={trip.member_count} />)
          }
        </TripList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ state })

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trips))
