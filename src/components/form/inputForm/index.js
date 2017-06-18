import React from 'react'
import { styled } from 'styletron-react'
import { spacing } from '../../../common/style'
import { randomString } from '../../../services/primitives'
import Button from '../../button'
import { InputWithoutLabel, Label } from '../input'

const Form = styled('form', ({ noMargin }) => ({
  marginBottom: noMargin ? 0 : spacing.sd
}))

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch'
})

const InputWrapper = styled('div', {
  width: '100%',
  marginRight: spacing.sm
})

export const InputForm = ({ loading, small, label, id, onSubmit, buttonText, disabled, ...props }) => {
  const _id = id || randomString()
  return (
    <Form onSubmit={onSubmit}>
      <Label
        htmlFor={_id}
        small={small}
        children={label} />
      <Row>
        <InputWrapper>
          <InputWithoutLabel
            id={_id}
            small={small}
            disabled={loading}
            {...props} />
        </InputWrapper>
        <Button
          small
          type='submit'
          disabled={disabled || loading}
          children={buttonText || 'Save'} />
      </Row>
    </Form>
  )
}
