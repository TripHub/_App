import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../data/user/actions'
import { isUserAuthenticated } from '../../data/user/selectors'
import { P } from '../../components/text'

class Callback extends React.Component {
  componentDidMount () {
    if (this.props.isUserAuthenticated) {
      this.props.logout()
    }
  }

  render () {
    return this.props.isUserAuthenticated
      ? <P>Logging out...</P>
      : <Redirect push={false} to='/' />
  }
}

const mapStateToProps = (state) => ({
  isUserAuthenticated: isUserAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
