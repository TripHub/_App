import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { styled } from 'styletron-react'
import { color, spacing, opacity } from '../../../../../../../common/style'

import Icon from '../../../../../../../components/icon'
import { Heading3, Small, Link } from '../../../../../../../components/text'
import Container from './components/container'

/**
 * Local components
 */
const TimeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: spacing.sm
})

const IconContainer = styled(Small, {
  margin: `0 6px 0 0`,
  color: color.black,
  opacity: opacity.muted
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
const Destination = ({ address, arrivalTime, departTime, googleMapUrl, ...props }) => {
  const format = 'ddd do MMM, hA'
  const arrive = arrivalTime && moment(arrivalTime).format(format)
  const depart = departTime && moment(departTime).format(format)
  const addressComponent = <Heading3 noMargin>{address}</Heading3>

  return (
    <Container>
      <TimeContainer>
        <IconContainer>
          <Icon name='clock-o' />
        </IconContainer>
        <Small noMargin muted>{arrive}</Small>
        <Split hasArrive={!!arrive} hasDepart={!!depart} />
        <Small noMargin muted>{depart}</Small>
      </TimeContainer>
      {googleMapUrl
        ? <Link target='_blank' to={googleMapUrl} children={addressComponent} />
        : addressComponent
      }
    </Container>
  )
}

Destination.propTypes = {
  address: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string,
  departTime: PropTypes.string
}

export default Destination
