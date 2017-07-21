import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, ...props }) => (
  <i className={`fa fa-${name}`} {...props} />
)

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon
