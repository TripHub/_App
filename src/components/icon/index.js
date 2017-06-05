import React from 'react'

export default ({ name, ...props }) => (
  <i className={`fa fa-${name}`} {...props} />
)
