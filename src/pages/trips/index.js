import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrips } from '../../data/trip/actions'
// import { selectTrips } from '../../data/trip/list/selectors'
import Spinner from '../../components/spinner/'
import TripItem from './components/tripItem'
import TripList from './components/tripList'

class Trips extends React.Component {
  componentDidMount () {
    this.props.getTrips()
  }

  componentWillReceiveProps (nextProps) {
    Object.entries(nextProps.trip.errors)
      .map((error) => notify.show(error[1].message, 'error'))
  }

  render () {
    const { trip } = this.props
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

const mapStateToProps = ({ trip }) => ({ trip })

const mapDispatchToProps = (dispatch) => ({
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trips))
