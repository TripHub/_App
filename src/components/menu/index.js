import React from 'react'
import { Link } from 'react-router-dom'
import { Heading2, Small } from '../text'
import Icon from '../icon'
import Button from '../button'
import Container from './components/container'
import IconButton from './components/iconButton'
import TitleLink from './components/title'
import Right from './components/right'
import Left from './components/left'
import ProfileMenu from './components/profileMenu'

export default ({ loading, picture, trip, onLogout, ...props }) => (
  <Container {...props}>
    {
      trip.id && (
        <Left disabled={trip.loading}>
          <div>
            <TitleLink to={`/${trip.id}`}>
              <Heading2 noMargin>{trip.title}</Heading2>
            </TitleLink>
            <Small muted noMargin>{trip.tag_line}</Small>
          </div>
        </Left>
      )
    }
    <Right>
      {
        trip.id &&
        <IconButton to={`/${trip.id}/settings`}>
          <Icon name='cog' />
        </IconButton>
      }
      <Link to='/auth/logout'>
        <Button small>Logout</Button>
      </Link>
      <ProfileMenu loading={loading} picture={picture} />
    </Right>
  </Container>
)
