import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'
import Auth from '../services/auth'

export default (Wrapped) => {
  class WithMenu extends React.Component {
    render () {
      const { user } = this.props
      return (
        <div>
          <Menu picture={user.picture}>
            <button onClick={new Auth().login}>Login</button>
          </Menu>
          <Wrapped {...this.props} />
        </div>
      )
    }
  }
  const mapStateToProps = ({ user }) => ({ user })
  return connect(mapStateToProps)(WithMenu)
}
