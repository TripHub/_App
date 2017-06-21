import React from 'react'
import { connect } from 'react-redux'
import { notify } from 'react-notify-toast'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import { Title } from '../../../components/text'
import {
  deleteTrip, updateTrip, setActiveTrip,
  inviteMember
} from '../../../data/trip/actions'
import { getInvites, cancelInvite } from '../../../data/invite/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Padding from './components/padding'
import Trip from './components/trip'
import Members from './components/members'
import DangerZone from './components/dangerZone'

class Settings extends React.Component {
  state = {
    title: '',
    description: ''
  }

  componentDidMount () {
    /** Bootstrap trip-dependant actions */
    const { trip } = this.props
    this.getInvites = this.props.getInvites(trip.id)
    this.updateTrip = this.props.updateTrip(trip.id)
    this.inviteMember = this.props.inviteMember(trip.id)

    this.getInvites()
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
      .then(this.getInvites)
  }

  handleCancel = (id) => {
    this.props.cancelInvite(id)
      .then(({ error, payload }) => {
        error
          ? notify.show(payload.response[0] || 'There was a problem', 'error')
          : notify.show('Invite cancelled', 'success')
      })
      .then(this.getInvites)
  }

  render () {
    const { loading, trip, invites, invitesLoading } = this.props
    const { title, tagLine } = this.state
    return (
      <Padding>
        <Title>Settings</Title>
        <Trip
          loading={loading}
          title={trip.title}
          titleDisabled={!title || title === trip.title || loading}
          onTitleChange={(e) => this.setState({ title: e.target.value.trim() })}
          onTitleSubmit={(e) => this.handleUpdate(e, { title })}
          description={trip.tag_line}
          tagLineDisabled={!tagLine || tagLine === trip.tag_line || loading}
          onTagLineChange={(e) => this.setState({ tagLine: e.target.value.trim() })}
          onTagLineSubmit={(e) => this.handleUpdate(e, { tag_line: tagLine })} />
        <Members
          invitesLoading={invitesLoading}
          members={invites}
          onSubmit={this.handleInvite}
          onCancel={this.handleCancel} />
        <DangerZone onDelete={this.handleDelete} />
      </Padding>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: activeTripSelector(state),
  loading: isActiveTripLoading(state),
  invites: state.invite.entities,
  invitesLoading: state.invite.loading
})

const mapDispatchToProps = (dispatch) => ({
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  updateTrip: (id) => (data) => dispatch(updateTrip(id, data)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id)),
  getInvites: (id) => () => dispatch(getInvites(id)),
  inviteMember: (id) => (email) => dispatch(inviteMember(id, email)),
  cancelInvite: (id) => dispatch(cancelInvite(id))
})

const SettingsPage = dashboardPageWithLogin(loadTrip(Settings))
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
