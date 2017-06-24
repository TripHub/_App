import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'
import { logout } from '../data/user/actions'
import { isUserActiveTripOwner } from '../data/trip/selectors'
import { selectActiveTrip } from '../data/entities/selectors'

// adds the menu bar and `user` to this.props
export default (Wrapped) => {
  class WithMenu extends React.Component {
    render () {
      const { user, trip, logout, isOwner } = this.props
      return (
        <div>
          <Menu
            loading={user.loading}
            onLogout={logout}
            trip={trip}
            isOwner={isOwner}
            picture={user.picture} />
          <Wrapped {...this.props} />
        </div>
      )
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user,
    trip: selectActiveTrip(state),
    isOwner: isUserActiveTripOwner(state)
  })

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
  })
  return connect(mapStateToProps, mapDispatchToProps)(WithMenu)
}
