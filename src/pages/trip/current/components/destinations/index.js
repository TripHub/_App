import React from 'react'
import { Row, OneTwoFour } from '../../../../../components/responsive'
import { Heading2 } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import Icon from '../../../../../components/icon'
import Header from './components/header'

export default ({ destinations }) => (
  <div>
    <Header>
      <Heading2>{destinations.length} destinations</Heading2>
      <Button small>
        <Icon name='plus' /> add destination
      </Button>
    </Header>
    <Row>
      {
        destinations.map((destination) => (
          <OneTwoFour smallGutter key={destination.id}>
            <Panel>{destination.title}</Panel>
          </OneTwoFour>
        ))
      }
    </Row>
  </div>
)
