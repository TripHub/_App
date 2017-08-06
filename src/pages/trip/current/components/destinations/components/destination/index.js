import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { styled } from 'styletron-react'
import { color, spacing, opacity } from '../../../../../../../common/style'

import Icon from '../../../../../../../components/icon'
import { Heading3, Small, P } from '../../../../../../../components/text'
import Container from './components/container'
import Header from './components/header'
import Body from './components/body'

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
  const displayFormat = 'ddd Do MMM, YYYY'
  const arrive = arrivalTime &&
    moment.utc(arrivalTime, moment.ISO_8601).format(displayFormat)
  const depart = departTime &&
    moment.utc(departTime, moment.ISO_8601).format(displayFormat)

  return (
    <Container>
      <Header>
        <Heading3 noMargin>{address}</Heading3>
        <div><Icon name='ticket' /></div>
      </Header>
      <Body>
        <P>Body stuff here...</P>
      </Body>
      {
      // <TimeContainer>
      //   <IconContainer>
      //     <Icon name='clock-o' />
      //   </IconContainer>
      //   <Small noMargin muted>{arrive}</Small>
      //   <Split hasArrive={arrive} hasDepart={depart} />
      //   <Small noMargin muted>{depart}</Small>
      // </TimeContainer>
      }
    </Container>
  )
}

Destination.propTypes = {
  address: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string,
  departTime: PropTypes.string,
  googleMapUrl: PropTypes.string
}

Destination.defaultProps = {
  arrivalTime: null,
  departTime: null,
  googleMapUrl: null
}

export default Destination
