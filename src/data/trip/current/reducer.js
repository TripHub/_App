import * as actionTypes from './actions'

const initialState = {
  id: '',
  owner: '',
  title: '',
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
        ...initialState,
        error: action.payload,
        loading: false
      }
    case actionTypes.CREATE_TRIP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CREATE_TRIP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case actionTypes.CREATE_TRIP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case actionTypes.DELETE_TRIP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETE_TRIP_SUCCESS:
      return initialState
    case actionTypes.DELETE_TRIP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
