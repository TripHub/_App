import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { renewAuthHandler } from '../../data/user/actions'
import { isUserAuthenticated } from '../../data/user/selectors'
import { getHashItem } from '../../services/url'
import Auth from '../../services/auth'

// this page is inteneded to be loaded by Auth0 inside an i-frame for silent reauthentication
class Renew extends React.Component {
  componentDidMount () {
    // checks the hash and posts the result to the parent frame
    if (!this.props.isUserAuthenticated) {
      const auth = new Auth()
      auth.parseHash((error, authResult) => {
        console.log('error, authResult', error, authResult)
        error
          ? new Auth().login()
          : this.props.renewAuthHandler(error, authResult)
      })
    }
  }

  getReturnToValue = () => {
    const hashState = getHashItem(window.location.hash, 'state')
    if (hashState) {
      const decodedState = decodeURIComponent(hashState)
      const jsonState = JSON.parse(decodedState)
      return jsonState.returnTo || '/'
    }
    return '/'
  }

  render () {
    return this.props.isUserAuthenticated
      ? <Redirect push={false} to={this.getReturnToValue()} />
      : <div>Redirecting...</div>
  }
}

const mapStateToProps = (state) => ({
  isUserAuthenticated: isUserAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  renewAuthHandler: (error, authResult) => dispatch(renewAuthHandler(error, authResult))
})

export default connect(mapStateToProps, mapDispatchToProps)(Renew)
