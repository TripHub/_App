import React from 'react'
import { connect } from 'react-redux'
import { getInvite } from '../../data/invite/actions'
import NotFound from '../error/notFound'
import { Heading1 } from '../../components/text'

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
    console.log(error, invite)
    return !resolved ? <p>loading...</p> : error
      ? <NotFound />
      : (
        <Heading1>You have been invited to {invite.trip.title}</Heading1>
      )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInvite: (id) => dispatch(getInvite(id))
})

export default connect(null, mapDispatchToProps)(Invites)
