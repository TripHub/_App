import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { renewAuthHandler } from '../../data/user/actions'
import { isUserAuthenticated } from '../../data/user/selectors'
import { getReturnToValue } from '../../services/url'
import { P } from '../../components/text'
import Auth from '../../services/auth'

// this page is inteneded to be loaded by Auth0 inside an i-frame for silent reauthentication
class Renew extends React.Component {
  componentDidMount () {
    // checks the hash and posts the result to the parent frame
    if (!this.props.isUserAuthenticated) {
      const auth = new Auth()
      auth.parseHash((error, authResult) => {
        error
          ? new Auth().login({
            state: { returnTo: getReturnToValue(window.location.hash) }
          })
          : this.props.renewAuthHandler(error, authResult)
      })
    }
  }

  render () {
    return this.props.isUserAuthenticated
      ? <Redirect push={false} to={getReturnToValue(window.location.hash)} />
      : <P>Redirecting...</P>
  }
}

const mapStateToProps = (state) => ({
  isUserAuthenticated: isUserAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  renewAuthHandler: (error, authResult) => dispatch(renewAuthHandler(error, authResult))
})

export default connect(mapStateToProps, mapDispatchToProps)(Renew)
