import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAuth0TokensAndGetProfile } from '../../data/user/actions'
import { isUserAuthenticated } from '../../data/user/selectors'
import { getHashItem } from '../../services/url'
import { P } from '../../components/text'

class Callback extends React.Component {
  componentDidMount () {
    if (window.location.hash && !this.props.isUserAuthenticated) {
      this.props.handleTokensAndGetProfile()
    } else {
      this.props.history.replace('/')
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
      : <P>Logging in...</P>
  }
}

const mapStateToProps = (state) => ({
  isUserAuthenticated: isUserAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleTokensAndGetProfile: () => dispatch(handleAuth0TokensAndGetProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
