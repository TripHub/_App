import React from 'react'
import { connect } from 'react-redux'
import { loginRequired } from '../../enhancers'
import { logout } from '../../data/user/actions'
import { P } from '../../components/text'

class Logout extends React.Component {
  componentDidMount () {
    this.props.logout()
  }

  render () {
    return <P>Logging out...</P>
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

const LogoutPage = loginRequired(Logout)
export default connect(null, mapDispatchToProps)(LogoutPage)
