import * as actionTypes from './actions'

const initialState = {
  loading: false,
  errors: {},
  id: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_TRIP:
      return {
        ...state,
        id: action.payload.id
      }
    default:
      return state
  }
}
