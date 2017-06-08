import React from 'react'
import { Row, OneTwoFour } from '../../../../../components/responsive'
import { Heading1 } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import Icon from '../../../../../components/icon'
import Header from './components/header'

export default ({ destinations }) => (
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
            <Panel>{destination.title}</Panel>
          </OneTwoFour>
        ))
      }
    </Row>
  </div>
)
