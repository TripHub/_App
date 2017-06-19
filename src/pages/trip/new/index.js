import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createTrip } from '../../../data/trip/actions'
import { loginRequired, withMenu } from '../../../enhancers'
import Button from '../../../components/button'
import { Input } from '../../../components/form'
import Title from './components/title'
import { Form, Header, Body, Footer } from './components/form'

class New extends React.Component {
  state = { title: '' }

  handleSubmit = (e) => {
    const { history, createTrip } = this.props
    e.preventDefault()
    createTrip(this.state.title)
      .then((action) => {
        action.payload.id
          ? history.push(`/${action.payload.id}`)
          : history.push('/')
      })
  }

  handleKeyDown = (e) => {
    // clear state and leave route if esc key
    if (e.keyCode === 27) {
      this.props.history.push('/')
    }
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render () {
    const { trip } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>
          <Title>Create a New Trip</Title>
        </Header>

        <Body>
          <Input
            autoFocus
            disabled={trip.loading}
            label={'Your Trip\'s Name'}
            placeholder='e.g. American Getaway...'
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange} />
        </Body>

        <Footer>
          <Button disabled={trip.loading} primary type='submit'>
            Create Trip
          </Button>
          <Link disabled={trip.loading} to='/'>
            <Button>Cancel</Button>
          </Link>
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ trip })

const mapDispatchToProps = (dispatch) => ({
  createTrip: (title) => dispatch(createTrip(title))
})

const NewPage = loginRequired(withMenu(New))
export default connect(mapStateToProps, mapDispatchToProps)(NewPage)
