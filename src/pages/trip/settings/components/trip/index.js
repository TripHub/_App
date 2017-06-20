import React from 'react'
import { styled } from 'styletron-react'
import { borderRadius, color, spacing } from '../../../../../common/style'
import { Heading1 } from '../../../../../components/text'
import { InputForm } from '../../../../../components/form'

const Container = styled('div', {
  marginBottom: spacing.sd,
  padding: spacing.sd,
  border: `1px solid ${color.medGrey}`,
  borderRadius: borderRadius.sd
})

export default ({
  loading,
  title,
  description,
  titleDisabled,
  onTitleChange,
  onTitleSubmit,
  tagLineDisabled,
  onTagLineChange,
  onTagLineSubmit
}) => (
  <Container>
    <Heading1>Trip</Heading1>
    <InputForm
      small
      maxLength='255'
      loading={loading}
      label='Title'
      defaultValue={title}
      disabled={titleDisabled}
      onChange={onTitleChange}
      onSubmit={onTitleSubmit} />
    <InputForm
      small
      maxLength='255'
      loading={loading}
      label='Tag Line'
      defaultValue={description}
      disabled={tagLineDisabled}
      onChange={onTagLineChange}
      onSubmit={onTagLineSubmit} />
  </Container>
)
