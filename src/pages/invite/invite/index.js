import React from 'react'
import { connect } from 'react-redux'
import Auth from '../../../services/auth'
import { isUserAuthenticated } from '../../../data/user/selectors'
import { getInvite } from '../../../data/invite/actions'
import NotFound from '../../error/notFound'
import { Heading1, P } from '../../../components/text'
import Container from './components/container'
import Form from './components/form'

class Invite extends React.Component {
  state = {
    invite: {},
    error: false,
    resolved: false
  }

  handleSubmit = () => {
    new Auth().login({
      state: {
        returnTo: `/invite/${this.state.invite.id}/accept`
      },
      loginHint: this.state.invite.email,
      initialScreen: 'signUp'
    })
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
    console.log(invite.email)
    return !resolved ? <p>loading...</p> : error
      ? <NotFound />
      : (
        <Container>
          <Heading1>Join {invite.trip.title}</Heading1>
          <P>Sign up as <strong>{invite.email}</strong> to join this trip</P>
          <Form onSubmit={this.handleSubmit} />
        </Container>
      )
  }
}

const mapStateToProps = (state) => ({
  isUserAuthenticated: isUserAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  getInvite: (id) => dispatch(getInvite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Invite)
