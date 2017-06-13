import React from 'react'
import Button from '../../../../../../../components/button'
import { Input } from '../../../../../../../components/form'
import Form from './components/form'
import InputContainer from './components/inputContainer'

export default ({ input, onChange, onSubmit, onCancel }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onCancel()
    }
  }

  return (
    <Form>
      <InputContainer>
        <Input
          small
          autoFocus
          label='Name'
          value={input}
          onKeyDown={handleKeyDown}
          onChange={onChange} />
      </InputContainer>
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
