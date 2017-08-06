import React from 'react'
import PropTypes from 'prop-types'

const AutocompleteItem = ({ formattedSuggestion }) => (
  <div>
    <strong>{formattedSuggestion.mainText}</strong>{' '}
    <em>formattedSuggestion.secondaryText</em>
  </div>
)

AutocompleteItem.propTypes = {
  formattedSuggestion: PropTypes.shape({
    mainText: PropTypes.string,
    secondaryText: PropTypes.string
  })
}

export default AutocompleteItem
