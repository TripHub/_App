import * as actionTypes from './actions'
import { objectFromArray } from '../../services/primitives'

const initialState = {
  loading: false,
  entities: {},
  fetchStatus: {},
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INVITES_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        loading: !action.error
      }
    case actionTypes.GET_INVITES_SUCCESS:
      return {
        ...state,
        entities: objectFromArray(action.payload.results, 'id'),
        loading: false
      }
    case actionTypes.GET_INVITES_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        },
        loading: false
      }
    default:
      return state
  }
}
