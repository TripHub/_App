import * as actionTypes from './actions'

const initialState = {
  trips: [],
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRIPS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_TRIPS_SUCCESS:
      return {
        ...state,
        trips: action.payload.results,
        loading: false
      }
    case actionTypes.GET_TRIPS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
