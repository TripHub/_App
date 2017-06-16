import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin, loadTrip } from '../../../enhancers'
import { Title } from '../../../components/text'
import { getTrip, deleteTrip, updateTrip, setActiveTrip } from '../../../data/trip/actions'
import { activeTripSelector, isActiveTripLoading } from '../../../data/trip/selectors'
import Padding from './components/padding'
import Trip from './components/trip'
import DangerZone from './components/dangerZone'

class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }

  componentDidMount () {
    this.props.getTrip(this.props.match.params.id)
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
    this.props.updateTrip(trip.id, data)
  }

  render () {
    const { trip } = this.props
    const { title, tagLine } = this.state
    return (
      <Padding>
        <Title>Settings</Title>
        <Trip
          title={trip.title}
          titleDisabled={!title || title === trip.title}
          onTitleChange={(e) => this.setState({ title: e.target.value.trim() })}
          onTitleSubmit={(e) => this.handleUpdate(e, { title })}
          description={trip.tag_line}
          tagLineDisabled={!tagLine || tagLine === trip.tag_line}
          onTagLineChange={(e) => this.setState({ tagLine: e.target.value.trim() })}
          onTagLineSubmit={(e) => this.handleUpdate(e, { tag_line: tagLine })} />
        <DangerZone onDelete={this.handleDelete} />
      </Padding>
    )
  }
}

const mapStateToProps = (state) => ({
  trip: activeTripSelector(state),
  loading: isActiveTripLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id)),
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  updateTrip: (id, data) => dispatch(updateTrip(id, data)),
  setActiveTrip: (id) => dispatch(setActiveTrip(id))
})

const SettingsPage = dashboardPageWithLogin(loadTrip(Settings))
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
