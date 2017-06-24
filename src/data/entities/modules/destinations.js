import { merge } from '../../../services/primitives'
import { ADD_ENTITIES } from '../actions'

export const STATE_KEY = 'destinations'

export default function reducer (state = { byId: {} }, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        byId: merge(state.byId, action.payload.destination)
      }
    default:
      return state
  }
}
