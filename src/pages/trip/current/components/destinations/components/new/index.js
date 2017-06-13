import React from 'react'
import Button from '../../../../../../../components/button'
import Form from './components/form'
import Input from './components/input'

export default ({ input, onChange, onSubmit, onCancel }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onCancel()
    }
  }

  return (
    <Form>
      <Input
        small
        autoFocus
        label='Name'
        value={input}
        onKeyDown={handleKeyDown}
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
    </Form>
  )
}
