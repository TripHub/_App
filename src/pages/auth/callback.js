import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginWithAuth0AndGetProfile } from '../../data/user/actions'
import { P } from '../../components/text'
import NotFound from '../error/notFound'
import Auth from '../../services/auth'

class Callback extends React.Component {
  componentDidMount () {
    if (window.location.hash) {
      this.props.loginAndGetProfile()
    }
  }

  componentWillReceiveProps (nextProps) {
    // check if the user has been logged in successfully
    if (Auth.isAuthenticated(nextProps.user)) {
      // ...
    }
  }

  render () {
    return window.location.hash && !Auth.isAuthenticated(this.props.user)
      ? <P>Logging in...</P>
      : <Link to='/'>Go to dashboard</Link>
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  loginAndGetProfile: () => dispatch(loginWithAuth0AndGetProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
