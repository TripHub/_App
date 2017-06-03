import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'
import Auth from '../services/auth'

export default (Wrapped) => {
  class WithMenu extends React.Component {
    render () {
      const { user } = this.props
      const auth = new Auth()
      return (
        <div>
          <Menu onLogout={auth.logout} loading={user.loading} picture={user.picture} />
          <Wrapped {...this.props} />
        </div>
      )
    }
  }
  const mapStateToProps = ({ user }) => ({ user })
  return connect(mapStateToProps)(WithMenu)
}
