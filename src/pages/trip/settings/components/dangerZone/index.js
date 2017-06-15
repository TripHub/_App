import React from 'react'
import { Heading1, Small } from '../../../../../components/text'
import Button from '../../../../../components/button'

export default ({ onDelete }) => (
  <div>
    <Heading1>Danger Zone!</Heading1>
    <Small>Be careful! These actions are irreversible.</Small>
    <Button onClick={onDelete}>Delete Trip</Button>
  </div>
)
