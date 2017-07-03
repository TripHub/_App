import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createTrip } from '../../../data/entities/actions'
import { loginRequired, withMenu } from '../../../enhancers'
import Button from '../../../components/button'
import { Text } from '../../../components/text'
import { Input } from '../../../components/form'
import Title from './components/title'
import { Form, Header, Body, Footer } from './components/form'

class New extends React.Component {
  state = {
    title: '',
    tagLine: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { history, createTrip } = this.props
    const { title, tagLine } = this.state
    createTrip({ title, tag_line: tagLine })
      .then(({ payload }) => {
        const id = Object.keys(payload.trip)[0]
        id
          ? history.push(`/${id}`)
          : history.push('/')
      })
  }

  handleKeyDown = (e) => {
    // leave route if esc key pressed
    if (e.keyCode === 27) {
      this.props.history.push('/')
    }
  }

  render () {
    const { trip } = this.props
    const { title } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header>
          <Title>Create a New Trip</Title>
        </Header>

        <Body>
          <Input
            autoFocus
            disabled={trip.loading}
            label={'What is your trip called?'}
            placeholder='e.g. American Getaway...'
            onKeyDown={this.handleKeyDown}
            onChange={(e) => this.setState({ title: e.target.value })}
            value={title} />
          <Input
            disabled={trip.loading}
            label={'Your trip\'s tag line'}
            placeholder='e.g. Get ready for the adventure of a lifetime...'
            onKeyDown={this.handleKeyDown}
            onChange={(e) => this.setState({ tagLine: e.target.value })} />
        </Body>

        <Footer>
          <Button disabled={trip.loading} primary type='submit'>
            <Text>Create Trip</Text>
          </Button>
          <Link disabled={trip.loading} to='/'>
            <Button>
              <Text>Cancel</Text>
            </Button>
          </Link>
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ trip })

const mapDispatchToProps = (dispatch) => ({
  createTrip: (data) => dispatch(createTrip(data))
})

const NewPage = loginRequired(withMenu(New))
export default connect(mapStateToProps, mapDispatchToProps)(NewPage)
