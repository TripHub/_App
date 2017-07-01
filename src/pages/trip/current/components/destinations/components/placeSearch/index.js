import React from 'react'
import PlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng
} from 'react-places-autocomplete'
import Button from '../../../../../../../components/button'

class PlaceSearch extends React.Component {
  state = {
    address: '',
    placeId: '',
    location: {}
  }

  handleSubmit = (e) => e.preventDefault()

  handleSelect = (address, placeId) => {
    // Set the place ID
    this.setState({ address, placeId })
    // Retrieve additional details for the place
    geocodeByPlaceId(placeId)
      .then(results =>
        // Extract the lat/lng
        getLatLng(results[0]).then((latLng) => this.setState({ latLng })))
      .catch(x => console.log(x))
  }

  render () {
    const inputProps = {
      value: this.state.address,
      onChange: (address) => this.setState({ address }),
      type: 'search',
      placeholder: 'Search Places...'
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <PlacesAutocomplete
          highlightFirstSuggestion
          onSelect={this.handleSelect}
          inputProps={inputProps} />
        <Button small primary type='submit'>Add</Button>
      </form>
    )
  }
}

export default PlaceSearch
