import React from 'react'
import { styled } from 'styletron-react'
import { borderRadius, spacing, color, fontFamily, fontSize } from '../../../common/style'

export const InputWithoutLabel = styled('input', ({ small }) => ({
  display: 'block',
  boxSizing: 'border-box',
  padding: small ? spacing.sm : spacing.sd,
  border: `1px solid ${color.medGrey}`,
  fontSize: small ? fontSize.body : fontSize.heading2,
  fontFamily: fontFamily.body,
  borderRadius: borderRadius.sd,
  width: '100%',
  outline: 0,

  ':hover': {
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
  // if no ID is given, then generate a random one
  const _id = id || Math.random().toString(36).replace(/[^a-z]+/gi, '')
  return (
    <div>
      <Label
        htmlFor={_id}
        small={small}
        children={label} />
      <InputWithoutLabel
        id={_id}
        small={small}
        {...props} />
    </div>
  )
}
