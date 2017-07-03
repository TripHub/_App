import React from 'react'

export default ({ formattedSuggestion }) => (
  <div>
    <strong>{formattedSuggestion.mainText}</strong>{' '}
    <em>formattedSuggestion.secondaryText</em>
  </div>
)
