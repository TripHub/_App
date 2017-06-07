import React from 'react'
import { Heading2, P } from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import Panel from '../../../../../components/panel'
import Container from './components/container'

export default ({ trip }) => (
  <div>
    <Heading2>{trip.members.length} members</Heading2>
    <Container>
      <Panel>
        <P noMargin>
          <Icon name='plus' /> add
        </P>
      </Panel>
    </Container>
  </div>
)
