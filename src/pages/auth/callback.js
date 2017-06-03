import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginWithAuth0AndGetProfile } from '../../data/user/actions'
import { P } from '../../components/text'
import Auth from '../../services/auth'

class Callback extends React.Component {
  componentDidMount () {
    if (window.location.hash && !Auth.isAuthenticated(this.props.user)) {
      this.props.loginAndGetProfile()
    } else {
      window.location.replace('/')
    }
  }

  render () {
    return Auth.isAuthenticated(this.props.user)
      ? <Redirect to='/' />
      : <P>Logging in...</P>
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  loginAndGetProfile: () => dispatch(loginWithAuth0AndGetProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
