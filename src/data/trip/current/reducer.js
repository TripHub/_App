import * as actionTypes from './actions'

const initialState = {
  id: '',
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRIP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_TRIP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case actionTypes.GET_TRIP_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
