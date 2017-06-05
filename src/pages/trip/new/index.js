import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { createTrip } from '../../../data/trip/current/actions'
import { getTrips } from '../../../data/trip/list/actions'
import { loginRequired, withMenu } from '../../../enhancers'
import Button from '../../../components/button'
import { Input } from '../../../components/form'
import Title from './components/title'
import { Form, Header, Body, Footer, FooterLink } from './components/form'

class New extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      created: false
    }
  }

  // TODO: this bit feels quite hacky... see if we can improve it
  componentWillReceiveProps (nextProps) {
    // check if we have a new trip id
    if (nextProps.trip.id && nextProps.trip.id !== this.props.trip.id) {
      // update the trip list
      this.props.getTrips()
      // trigger the redirect to the new trip
      this.setState({ created: true })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTrip(this.state.title)
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render () {
    const { trip } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        { this.state.created && <Redirect to={`/${trip.id}`} /> }

        <Header>
          <Title>Create a New Trip</Title>
        </Header>

        <Body>
          <Input
            disabled={trip.loading}
            label={'Your Trip\'s Name'}
            placeholder='Trip Title'
            onChange={this.handleChange} />
        </Body>

        <Footer>
          <FooterLink>
            <Button disabled={trip.loading} primary type='submit'>
              Create Trip
            </Button>
          </FooterLink>
          <FooterLink>
            <Link disabled={trip.loading} to='/'>
              <Button>Cancel</Button>
            </Link>
          </FooterLink>
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ trip: trip.current })

const mapDispatchToProps = (dispatch) => ({
  createTrip: (title) => dispatch(createTrip(title)),
  getTrips: () => dispatch(getTrips())
})

export default connect(mapStateToProps, mapDispatchToProps)(loginRequired(withMenu(New)))
