import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { renewAuthHandler } from '../../data/user/actions'
import Auth from '../../services/auth'

// this page is inteneded to be loaded by Auth0 inside an i-frame for silent reauthentication
class Renew extends React.Component {
  constructor (props) {
    super(props)
    this.state = { authenticated: false }
  }

  componentDidMount () {
    // checks the hash and posts the result to the parent frame
    const auth = new Auth()
    auth.parseHash((error, authResult) =>
      this.props.renewAuthHandler(error, authResult))
  }

  componentWillReceiveProps (nextProps) {
    console.log('will receive props')
    if (Auth.isAuthenticated(nextProps.user)) {
      this.setState({ authenticated: true })
    } else {
      Auth().login()
    }
  }

  render () {
    return this.state.authenticated
      ? <Redirect to='/' />
      : <div>Logging in...</div>
  }
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  renewAuthHandler: (error, authResult) => dispatch(renewAuthHandler(error, authResult))
})

export default connect(mapStateToProps, mapDispatchToProps)(Renew)
