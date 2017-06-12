import React from 'react'
import { Input } from '../../../../../../../components/form'
import Button from '../../../../../../../components/button'

export default ({ input, onChange, onSubmit }) => (
  <form>
    <Input
      small
      label='Name'
      value={input}
      onChange={onChange} />
    <Button
      small
      primary
      type='submit'
      onClick={onSubmit}
      children='Create' />
  </form>
)
