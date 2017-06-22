import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { isUserAuthenticated } from '../../data/user/selectors'
import { getInvite } from '../../data/invite/actions'
import { signup } from '../../data/user/actions'
import NotFound from '../error/notFound'
import { Heading1 } from '../../components/text'
import Container from './components/container'
import Form from './components/form'

class Invites extends React.Component {
  state = {
    invite: {},
    error: false,
    resolved: false
  }

  handleSubmit = (password, passwordConfirm) => {
    const passwordsMatch = password === passwordConfirm
    const { email } = this.state.invite
    if (!passwordsMatch) {
      return notify.show('The passwords don\'t match', 'error')
    }
    this.props.signup(email, password)
  }

  componentDidMount () {
    this.props.getInvite(this.props.match.params.id)
      // if theres an error then we assume that the invite doesn't exist
      .then((action) => this.setState({
        error: !!action.error,
        invite: action.payload
      }))
      .then(() => this.setState({ resolved: true }))
  }

  render () {
    const { error, resolved, invite } = this.state
    return !resolved ? <p>loading...</p> : error
      ? <NotFound />
      : (
        <Container>
          <Heading1>Join {invite.trip.title}</Heading1>
          <Form email={invite.email} onSubmit={this.handleSubmit} />
        </Container>
      )
  }
}

const mapStateToProps = (state) => ({
  isUserAuthenticated: isUserAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  getInvite: (id) => dispatch(getInvite(id)),
  signup: (email, password) => dispatch(signup(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Invites)
