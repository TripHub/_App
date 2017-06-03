import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../enhancers'
import { getTrip } from '../../data/trip/current/actions'
import { Link } from '../../components/text'

class Trip extends React.Component {
  componentDidMount () {
    // only call API if the trip isn't already loaded
    if (this.props.match.params.id !== this.props.id) {
      this.props.getTrip(this.props.match.params.id)
    }
  }

  render () {
    const { loading, title } = this.props
    return (
      <div>
        <Link to='/'>Change trip</Link>
        <p>{loading ? 'loading' : title}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ ...trip.current })

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
