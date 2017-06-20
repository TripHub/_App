import React from 'react'
import { styled } from 'styletron-react'
import { Text } from '../../text'
import { borderRadius, spacing, color, fontFamily, fontSize, letterSpacing } from '../../../common/style'
import { randomString } from '../../../services/primitives'

export const InputWithoutLabel = styled('input', ({ small }) => ({
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  padding: small ? `${spacing.sm} 6px` : `0 ${spacing.sd}`,
  border: `1px solid ${color.medGrey}`,
  fontSize: fontSize.body,
  fontFamily: fontFamily.body,
  letterSpacing: letterSpacing.body,
  borderRadius: borderRadius.sd,
  outline: 0,
  lineHeight: small ? 1.55 : 2.8,

  ':focus': {
    borderColor: color.darkGrey
  },

  ':disabled': {
    background: color.lightGrey,
    borderColor: color.medGrey,
    color: color.darkGrey
  }
}))

export const Label = styled('label', ({ small }) => ({
  display: 'block',
  textAlign: 'left',
  paddingBottom: small ? spacing.sm : spacing.sd,
  fontFamily: fontFamily.body,
  fontSize: fontSize.body
}))

export const Input = ({ label, small, id, ...props }) => {
  const _id = id || randomString()
  return (
    <div>
      <Text>
        <Label
          htmlFor={_id}
          small={small}
          children={label} />
      </Text>
      <InputWithoutLabel
        id={_id}
        small={small}
        {...props} />
    </div>
  )
}
