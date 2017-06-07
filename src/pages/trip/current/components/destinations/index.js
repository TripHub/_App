import React from 'react'
import { Heading2 } from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import { Row, OneTwoFour } from '../../../../../components/responsive'
import Toolbar from './components/toolbar'

export default ({ trip }) => (
  <div>
    <Heading2>{trip.destinations.length} destinations</Heading2>
    <Toolbar>
      <Button small style={{marginBotton: '5px'}}>
        <Icon name='plus' /> add destination
      </Button>
    </Toolbar>
    <Row>
      {
        trip.destinations.map((destination) => (
          <OneTwoFour key={destination.id}>
            <Panel>{destination.title}</Panel>
          </OneTwoFour>
        ))
      }
    </Row>
  </div>
)
