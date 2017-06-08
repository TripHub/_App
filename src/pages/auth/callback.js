import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAuth0TokensAndGetProfile } from '../../data/user/actions'
import { isUserAuthenticated } from '../../data/user/selectors'
import { P } from '../../components/text'

class Callback extends React.Component {
  componentDidMount () {
    console.log('redrect in DidMount?', window.location.hash && !this.props.isUserAuthenticated)
    if (window.location.hash && !this.props.isUserAuthenticated) {
      this.props.handleTokensAndGetProfile()
    } else {
      this.props.history.replace('/')
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps)
  }

  render () {
    console.log('render', this.props)
    return this.props.isUserAuthenticated
      ? <Redirect push={false} to='/' />
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
