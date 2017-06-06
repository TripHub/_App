import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../components/sidebar'

export default (Wrapped) => {
  class WithSidebar extends React.Component {
    render () {
      const { trip } = this.props
      return (
        // <Sidebar currentTrip={trip}>
          <Wrapped {...this.props} />
        // </Sidebar>
      )
    }
  }
  const mapStateToProps = ({ trip }) => ({ trip: trip.current })
  return connect(mapStateToProps)(WithSidebar)
}
