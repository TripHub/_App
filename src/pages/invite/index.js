import React from 'react'
import { connect } from 'react-redux'
import { isUserAuthenticated } from '../../data/user/selectors'
import { getInvite } from '../../data/invite/actions'
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

  componentDidMount () {
    this.props.getInvite(this.props.match.params.id)
      .then((action) => (
        this.setState({ error: !!action.error, invite: action.payload }))
      )
      .then(() => this.setState({ resolved: true }))
  }

  render () {
    const { error, resolved, invite } = this.state
    return !resolved ? <p>loading...</p> : error
      ? <NotFound />
      : (
        <Container>
          <Heading1>Join {invite.trip.title}</Heading1>
          <Form email={invite.email} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Invites)
