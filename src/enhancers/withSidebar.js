import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/sidebar'
import { getActiveTrip } from '../data/trip/selectors'

// adds the sidebar
export default (Wrapped) => {
  class WithSidebar extends React.Component {
    render () {
      const { trip } = this.props
      return (
        <Sidebar trip={trip}>
          <Wrapped {...this.props} />
        </Sidebar>
      )
    }
  }

  const mapStateToProps = (state) => ({
    trip: getActiveTrip(state)
  })

  return connect(mapStateToProps)(WithSidebar)
}
