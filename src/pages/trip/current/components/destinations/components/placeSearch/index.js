import React from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete from 'react-places-autocomplete'
import { DateRangePicker } from 'react-dates'

import Button from '../../../../../../../components/button'
import Form from './components/form'
import Autocomplete from './components/autocomplete'
import DatePicker from './components/datePicker'

class PlaceSearch extends React.Component {
  constructor (props) {
    super(props)
    this.initialState = {
      address: '',          // Human readable address (used to populate dropdown)
      placeId: '',          // Google place ID
      startDate: null,      // selected start date (moment.js obj)
      endDate: null,        // selected end date (moment.js obj)
      focusedInput: null,  // which part of react-dates ui to show
      loading: false        // controls loading ui
    }
    this.state = this.initialState
  }

  componentDidMount () {
    window && this.setState({
      innerWidth: window.innerWidth
    })
  }

  handleDateChange = ({ startDate, endDate }) => this.setState({ startDate, endDate })

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

    const { placeId, startDate, endDate } = this.state

    this.props.onSubmit({
      google_place_id: placeId,
      arrival_time: startDate,
      depart_time: endDate
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
    const { loading, address, startDate, endDate, focusedInput, innerWidth } = this.state

    const inputProps = {
      onChange: (address) => this.setState({ address }),
      value: address,
      type: 'search',
      placeholder: 'Where are you going?'
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Autocomplete>
          <PlacesAutocomplete
            highlightFirstSuggestion
            onSelect={this.handleSelect}
            inputProps={inputProps} />
        </Autocomplete>
        <DatePicker>
          <DateRangePicker
            withPortal
            numberOfMonths={innerWidth > 720 ? 2 : 1}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={this.handleDateChange}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })} />
        </DatePicker>
        <Button small primary disabled={loading} type='submit'>Add</Button>
        <Button small disabled={loading} type='button' onClick={onCancel}>Cancel</Button>
      </Form>
    )
  }
}

PropTypes.propTypes = {

}

export default PlaceSearch
