import React from 'react'
import { Title, P } from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import Container from './components/container'
import TitleRow from './components/titleRow'
import IconLink from './components/iconLink'

export default ({ loading, title, description, settingsLink }) => (
  <Container>
    <TitleRow>
      <Title noMargin disabled={loading}>{title}</Title>
      <IconLink to={settingsLink} disabled={loading}>
        <Icon name='cog' />
      </IconLink>
    </TitleRow>
    <P noMargin disabled={loading}>{description || 'Get your camping gear ready ;)'}</P>
  </Container>
)
