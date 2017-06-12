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

export const Label = styled('label', {
  display: 'block',
  marginBottom: spacing.sd,
  fontFamily: fontFamily.body,
  fontSize: fontSize.body
})

export const Input = ({ label, ...props }) => (
  <div>
    <Label>{label}</Label>
    <InputWithoutLabel {...props} />
  </div>
)
