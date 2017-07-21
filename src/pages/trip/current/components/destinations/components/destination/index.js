import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { styled } from 'styletron-react'
import { color, spacing } from '../../../../../../../common/style'

import { Heading3, Small } from '../../../../../../../components/text'
import Container from './components/container'

/**
 * Local components
 */
const TimeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: spacing.sm
})

const Split = styled('span', ({ hasArrive, hasDepart }) => ({
  display: 'inline-block',
  flex: 1,
  height: '2px',
  marginLeft: hasArrive && spacing.lg,
  marginRight: hasDepart && spacing.lg,
  background: color.lightGrey
}))

/**
 * Export componet
 */
const Destination = ({ address, arrivalTime, departTime, ...props }) => {
  const format = 'ddd do MMM, hA'
  const arrive = arrivalTime && moment(arrivalTime).format(format)
  const depart = departTime && moment(departTime).format(format)

  return (
    <Container>
      <TimeContainer>
        <Small noMargin muted>{arrive}</Small>
        <Split hasArrive={!!arrive} hasDepart={!!depart} />
        <Small noMargin muted>{depart}</Small>
      </TimeContainer>
      <Heading3 noMargin>{address}</Heading3>
    </Container>
  )
}

Destination.propTypes = {
  address: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string,
  departTime: PropTypes.string
}

export default Destination
