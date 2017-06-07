import React from 'react'
import { Heading2, P } from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import Button from '../../../../../components/button'
import Panel from '../../../../../components/panel'
import Container from './components/container'

export default ({ members }) => (
  <div>
    <Heading2>{members.length} members</Heading2>
    <Button small>
      <Icon name='plus' /> add member
    </Button>
    <Container>
      <Panel>
        <P noMargin>
          James Firth
        </P>
      </Panel>
    </Container>
  </div>
)
