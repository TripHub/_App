import React from 'react'
import { styled } from 'styletron-react'
import { spacing } from '../../../../../common/style'
import { Heading1 } from '../../../../../components/text'
import { InputForm } from '../../../../../components/form'

const Container = styled('div', {
  marginBottom: spacing.lg
})

export default ({
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
      label='Title'
      defaultValue={title}
      disabled={titleDisabled}
      onChange={onTitleChange}
      onSubmit={onTitleSubmit} />
    <InputForm
      small
      label='Tag Line'
      defaultValue={description}
      disabled={tagLineDisabled}
      onChange={onTagLineChange}
      onSubmit={onTagLineSubmit} />
  </Container>
)
