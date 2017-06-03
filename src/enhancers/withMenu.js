import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'

export default (Wrapped) => {
  const withMenu = class extends React.Component {
    render () {
      const { user } = this.props
      return (
        <div>
          <Menu picture={user.picture} />
          <Wrapped {...this.props} />
        </div>
      )
    }
  }
  const mapStateToProps = ({ user }) => ({ user })
  return connect(mapStateToProps)(withMenu)
}
