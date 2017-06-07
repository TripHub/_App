import React from 'react'
import { Heading2, P } from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import Panel from '../../../../../components/panel'


export default ({ trip }) => (
  <div>
    <Heading2>{trip.members.length} members</Heading2>
    <Panel>
      <P noMargin>
        <Icon name='plus' /> add
      </P>
    </Panel>
  </div>
)
