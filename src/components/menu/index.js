import React from 'react'
import { Heading2, Small } from '../text'
import Icon from '../icon'
import DropDown, { DropDownItem } from '../dropDown'
import Container from './components/container'
import IconButton from './components/iconButton'
import TitleLink from './components/title'
import Right from './components/right'
import Left from './components/left'
import ProfileMenu from './components/profileMenu'

export default ({ loading, picture, trip, isOwner, onLogout, ...props }) => (
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
        trip.id && isOwner &&
        <IconButton to={`/${trip.id}/settings`}>
          <Icon name='cog' />
        </IconButton>
      }
      <DropDown toggle={<ProfileMenu loading={loading} picture={picture} />}>
        <DropDownItem to='/auth/logout'>Logout</DropDownItem>
      </DropDown>
    </Right>
  </Container>
)
