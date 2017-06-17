import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'
import { logout } from '../data/user/actions'
import { activeTripSelector } from '../data/trip/selectors'

// adds the menu bar and `user` to this.props
export default (Wrapped) => {
  class WithMenu extends React.Component {
    render () {
      const { user, trip, logout } = this.props
      return (
        <div>
          <Menu
            loading={user.loading}
            onLogout={logout}
            trip={trip}
            picture={user.picture} />
          <Wrapped {...this.props} />
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user,
    trip: activeTripSelector(state)
  })

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
  })
  return connect(mapStateToProps, mapDispatchToProps)(WithMenu)
}
