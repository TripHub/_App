import React from 'react'
import { Title, P } from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import Container from './components/container'
import TitleRow from './components/titleRow'
import IconLink from './components/iconLink'

export default ({ loading, title, tagLine, settingsLink }) => (
  <Container>
    <TitleRow>
      <Title noMargin disabled={loading}>{title}</Title>
      <IconLink to={settingsLink} disabled={loading}>
        <Icon name='cog' />
      </IconLink>
    </TitleRow>
    <P noMargin disabled={loading}>{tagLine}</P>
  </Container>
)
