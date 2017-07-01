import React from 'react'
import PlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng
} from 'react-places-autocomplete'
import Button from '../../../../../../../components/button'

class PlaceSearch extends React.Component {
  constructor (props) {
    super(props)

    this.initialState = {
      address: '',
      placeId: '',
      latLng: {},
      loading: false
    }

    this.state = this.initialState
  }

  handleSubmit = (e) => {
    e.preventDefault()

    /**
     * We will use the data in this.state to populate the new destination.
     * However, we will need to format it as an object containing the correct
     * keys. Also, our api only accepts up to 9 decimal points for the lat/lng
     * and so we need to truncate the values provided.
     */

    const { address, placeId, latLng } = this.state
    const latitude = parseFloat(latLng.lat.toFixed(9))
    const longitude = parseFloat(latLng.lng.toFixed(9))

    this.props.createDestination({
      title: address,
      google_place_id: placeId,
      latitude,
      longitude
    })
      .then(() => this.setState(this.initialState))
  }

  handleSelect = (address, placeId) => {
    /**
     * Start by updating the state with details of the selected place.
     */

    this.setState({ address, placeId, loading: true })

    /**
     * Next use the place ID to get additional details.
     */

    geocodeByPlaceId(placeId)
      /**
       * Extract the lat/lng from the results
       */

      .then(results =>
        getLatLng(results[0]).then((latLng) => this.setState({ latLng })))

      .catch(err => console.log(err))

      /**
       * Fetching additional data has now completed, so we can now set
       * loading to false.
       */

      .then(() => this.setState({ loading: false }))
  }

  render () {
    const { loading } = this.state

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
        <Button small primary disabled={loading} type='submit'>Add</Button>
      </form>
    )
  }
}

export default PlaceSearch
