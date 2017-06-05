import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'
import { logout } from '../data/user/actions'

export default (Wrapped) => {
  class WithMenu extends React.Component {
    render () {
      const { user, logout } = this.props
      return (
        <div>
          <Menu onLogout={logout} loading={user.loading} picture={user.picture} />
          <Wrapped {...this.props} />
        </div>
      )
    }
  }

  const mapStateToProps = ({ user }) => ({ user })

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
  })
  return connect(mapStateToProps, mapDispatchToProps)(WithMenu)
}
