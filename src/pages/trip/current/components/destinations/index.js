import React from 'react'
import { Heading1, Text } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Icon from '../../../../../components/icon'
import Container from './components/container'
import Header from './components/header'
import Destination from './components/destination'
import PlaceSearch from './components/placeSearch'

export default class extends React.Component {
  state = {
    showForm: false
  }

  show = () => this.setState({ showForm: true })

  hide = () => this.setState({ showForm: false })

  handleSubmit = (data) => {
    this.props.createDestination(data)
    this.hide()
  }

  render () {
    const { destinations, showCreate } = this.props
    let { showForm, address } = this.state

    return (
      <Container>
        {showCreate &&
          <Header>
            <Heading1>Destinations</Heading1>
            <Button small onClick={this.show}>
              <Text>
                <Icon name='plus' /> add destination
              </Text>
            </Button>
          </Header>
        }

        {showForm && (
          <PlaceSearch
            value={address}
            onCancel={this.hide}
            onSubmit={this.handleSubmit} />
        )}

        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            address={destination.address} />
        ))}
      </Container>
    )
  }
}
