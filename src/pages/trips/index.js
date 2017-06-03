import React from 'react'
import { connect } from 'react-redux'
import { withSidebar, withMenu } from '../../enhancers'
import { getTrips } from '../../data/trip/list/actions'
import { renewAuthRequest } from '../../data/user/actions'
import TripItem from './components/tripItem'
import TripList from './components/tripList'
import Auth from '../../services/auth'

class Trip extends React.Component {
  componentDidMount () {
    if (Auth.isAuthenticated(this.props.user)) {
      this.props.getTrips()
    } else {
      this.props.renewAuthRequest()
    }
  }
  render () {
    const { loading, trips } = this.props
    return (
      <TripList>
        {
          trips.map(trip =>
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
  getTrips: () => dispatch(getTrips()),
  renewAuthRequest: () => dispatch(renewAuthRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(withMenu(Trip)))
