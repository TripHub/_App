import React from 'react'
import { Input } from '../../../../../../../components/form'
import Button from '../../../../../../../components/button'

export default ({ input, onChange, onSubmit, onCancel }) => (
  <form>
    <Input
      small
      autoFocus
      label='Name'
      value={input}
      onChange={onChange} />
    <Button
      small
      primary
      type='submit'
      onClick={onSubmit}
      children='Create' />
    <Button
      small
      onClick={onCancel}
      children='Cancel' />
  </form>
)
