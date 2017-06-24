import { merge } from '../../../services/primitives'
import { ADD_ENTITIES } from '../actions'

export const STATE_KEY = 'users'

const initialState = { byId: {} }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        byId: merge(state.byId, action.payload.user)
      }
    default:
      return state
  }
}
