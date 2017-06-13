import React from 'react'
import { Row, OneTwoFour } from '../../../../../components/responsive'
import { Heading1, Heading2 } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import Icon from '../../../../../components/icon'
import Header from './components/header'
import New from './components/new'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      input: ''
    }
  }

  show = () => this.setState({ showForm: true })

  hide = () => this.setState({ showForm: false, input: '' })

  handleChange = (e) => this.setState({ input: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createDestination(this.state.input)
    this.hide()
    this.setState({ input: '' })
  }

  render () {
    const { destinations } = this.props
    const { showForm, input } = this.state
    return (
      <div>
        <Header>
          <Heading1>Destinations</Heading1>
          <Button small onClick={this.show}>
            <Icon name='plus' /> add destination
          </Button>
        </Header>
        <Row>
          {
            showForm && (
              <OneTwoFour>
                <Panel>
                  <New
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onCancel={this.hide}
                    input={input} />
                </Panel>
              </OneTwoFour>
            )
          }
          {
            destinations.map((destination) => (
              <OneTwoFour key={destination.id}>
                <Panel>
                  <Heading2 noMargin>{destination.title}</Heading2>
                </Panel>
              </OneTwoFour>
            ))
          }
        </Row>
      </div>
    )
  }
}
