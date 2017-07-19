import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import Button from '../../../../../../../components/button'
import Form from './components/form'

class PlaceSearch extends React.Component {
  constructor (props) {
    super(props)
    this.initialState = {
      address: '',
      placeId: '',
      loading: false
    }
    this.state = this.initialState
  }

  handleSubmit = (e) => {
    e.preventDefault()

    /**
     * Use `this.state` to populate the new destination, formatting the data
     * as an object containing the correct keys. The API will fill in the
     * place details automatically using the Google Place ID.
     *
     * However, if we want to submit a custom location we leave out the Google
     * Place ID and send the address, lat and lng ourselves. Note that the api
     * only accepts up to 10 decimal points for the lat and lng and so we should
     * truncate the values provided.
     */

    const { placeId } = this.state

    this.props.onSubmit({
      google_place_id: placeId
    })
  }

  handleSelect = (address, placeId) => {
    /**
     * Start by updating the state with details of the selected place.
     */

    this.setState({ address, placeId })
  }

  render () {
    const { onCancel } = this.props
    const { loading, address } = this.state

    const inputProps = {
      value: address,
      onChange: (address) => this.setState({ address }),
      type: 'search',
      placeholder: 'Search Places...'
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <PlacesAutocomplete
          highlightFirstSuggestion
          onSelect={this.handleSelect}
          inputProps={inputProps} />
        <Button small primary disabled={loading} type='submit'>Add</Button>
        <Button small disabled={loading} type='button' onClick={onCancel}>Cancel</Button>
      </Form>
    )
  }
}

export default PlaceSearch
