import React from 'react'
import { Row, OneTwoFour } from '../../../../../components/responsive'
import { Heading1, Heading2 } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import Icon from '../../../../../components/icon'
import Header from './components/header'

export default ({ destinations, onDelete }) => (
  <div>
    <Header>
      <Heading1>{destinations.length} destinations</Heading1>
      <Button small>
        <Icon name='plus' /> add destination
      </Button>
    </Header>
    <Row>
      {
        destinations.map((destination) => (
          <OneTwoFour key={destination.id}>
            <Panel>
              <Heading2>{destination.title}</Heading2>
              <Button small onClick={() => onDelete(destination.id)}>
                Delete
              </Button>
            </Panel>
          </OneTwoFour>
        ))
      }
    </Row>
  </div>
)
