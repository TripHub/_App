import React from 'react'
import { connect } from 'react-redux'
import { renewAuthRequest } from '../data/user/actions'
import Auth from '../services/auth'

// checks the user is logged in, else send to the login screen
export default (Wrapped) => {
  class LoginRequired extends React.Component {
    componentDidMount () {
      if (!Auth.isAuthenticated(this.props.user)) {
        this.props.renewAuthRequest()
      }
    }

    render () {
      return <Wrapped {...this.props} />
    }
  }
  const mapStateToProps = ({ user }) => ({ user })
  const mapDispatchToProps = (dispatch) => ({
    renewAuthRequest: () => dispatch(renewAuthRequest())
  })

  return connect(mapStateToProps, mapDispatchToProps)(LoginRequired)
}
