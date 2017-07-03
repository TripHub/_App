import React from 'react'
import { Row, OneTwoFour } from '../../../../../components/responsive'
import { Heading1, Heading2, Text } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import Icon from '../../../../../components/icon'
import Header from './components/header'
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
      <div>
        {
          showCreate &&
          <Header>
            <Heading1>Destinations</Heading1>
            <Button small onClick={this.show}>
              <Text>
                <Icon name='plus' /> add destination
              </Text>
            </Button>
          </Header>
        }
        <Row>
          {
            showForm && (
              <OneTwoFour>
                <Panel>
                  <PlaceSearch
                    value={address}
                    onCancel={this.hide}
                    onSubmit={this.handleSubmit} />
                </Panel>
              </OneTwoFour>
            )
          }
          {
            destinations.map((destination) => (
              <OneTwoFour key={destination.id}>
                <Panel>
                  <Heading2 noMargin>{destination.address}</Heading2>
                </Panel>
              </OneTwoFour>
            ))
          }
        </Row>
      </div>
    )
  }
}
