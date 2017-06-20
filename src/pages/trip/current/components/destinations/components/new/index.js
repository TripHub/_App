import React from 'react'
import Button from '../../../../../../../components/button'
import { Text } from '../../../../../../../components/text'
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
      <Button small primary type='submit' onClick={onSubmit}>
        <Text>Create</Text>
      </Button>
      <Button small onClick={onCancel}>
        <Text>Cancel</Text>
      </Button>
    </Form>
  )
}
