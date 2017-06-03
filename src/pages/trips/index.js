import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner/'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrips } from '../../data/trip/list/actions'
import TripItem from './components/tripItem'
import TripList from './components/tripList'

class Trips extends React.Component {
  componentDidMount () {
    this.props.getTrips()
  }

  render () {
    const { loading, trips } = this.props
    return (
      <TripList>
        {
          loading
            ? <Spinner />
            : trips.map(trip =>
              <TripItem
                key={trip.id}
                to={`/${trip.id}`}
                trip={trip} />)
        }
      </TripList>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ ...trip.list })

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trips))
