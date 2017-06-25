import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import { Title } from '../../../components/text'
import {
  setActiveTrip,
  getInvitations,
  inviteMember,
  cancelInvite,
  updateTrip,
  deleteTrip
} from '../../../data/entities/actions'
import {
  selectActiveTrip,
  selectActiveTripInvitations,
  selectActiveTripMembers,
  isUserActiveTripOwner
} from '../../../data/entities/selectors'
import NotFound from '../../error/notFound/'
import Padding from './components/padding'
import Trip from './components/trip'
import Members from './components/members'
import DangerZone from './components/dangerZone'

class Settings extends React.Component {
  state = {
    title: '',
    description: '',
    notFound: false
  }

  componentDidMount () {
    if (!this.props.isOwner) {
      return this.setState({ notFound: true })
    }
    /** Bootstrap trip-dependant actions */
    const { trip } = this.props
    this.updateTrip = this.props.updateTrip(trip.id)
    this.inviteMember = this.props.inviteMember(trip.id)

    this.props.getInvites()
  }

  handleDelete = () => {
    const { deleteTrip, setActiveTrip, history, trip } = this.props
    deleteTrip(trip.id)
      .then(() => setActiveTrip(''))
      .then(() => history.push('/'))
  }

  handleUpdate = (e, data) => {
    e.preventDefault()
    const { trip } = this.props
    this.updateTrip(data)
      .then(() => notify.show(`${trip.title} updated`, 'success'))
  }

  handleInvite = (email) => {
    this.inviteMember(email)
      .then(({ error, payload }) => {
        error
          ? notify.show(payload.response[0] || 'There was a problem.', 'error')
          : notify.show('Invite sent', 'success')
      })
      .then(this.props.getInvites)
  }

  handleCancel = (id) => {
    this.props.cancelInvite(id)
      .then(({ error, payload }) => {
        error
          ? notify.show(payload.response[0] || 'There was a problem', 'error')
          : notify.show('Invite cancelled', 'success')
      })
      .then(this.props.getInvites)
  }

  render () {
    const { trip, invites, members, invitesLoading } = this.props
    const { title, tagLine } = this.state
    return this.state.notFound ? <NotFound /> : (
      <Padding>
        <Title>Settings</Title>
        <Trip
          loading={trip.loading}
          title={trip.title}
          titleDisabled={!title || title === trip.title || trip.loading}
          onTitleChange={(e) => this.setState({
            title: e.target.value.trim()
          })}
          onTitleSubmit={(e) => this.handleUpdate(e, { title })}
          description={trip.tag_line}
          tagLineDisabled={!tagLine || tagLine === trip.tag_line || trip.loading}
          onTagLineChange={(e) => this.setState({
            tagLine: e.target.value.trim()
          })}
          onTagLineSubmit={(e) => this.handleUpdate(e, {
            tag_line: tagLine
          })} />
        <Members
          invitesLoading={invitesLoading}
          invites={invites}
          members={members}
          onSubmit={this.handleInvite}
          onCancel={this.handleCancel} />
        <DangerZone onDelete={this.handleDelete} />
      </Padding>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: selectActiveTrip(state),
  members: selectActiveTripMembers(state),
  isOwner: isUserActiveTripOwner(state),
  invites: selectActiveTripInvitations(state),
  invitesLoading: state.entities.invitations.loading
})

const mapDispatchToProps = (dispatch) => ({
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  updateTrip: (id) => (data) => dispatch(updateTrip(id, data)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  getInvites: () => dispatch(getInvitations()),
  inviteMember: (id) => (email) => dispatch(inviteMember(id, email)),
  cancelInvite: (id) => dispatch(cancelInvite(id))
})

const SettingsPage = dashboardPageWithLogin(loadTrip(Settings))
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
