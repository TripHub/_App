import { merge } from '../../../services/primitives'
import { ADD_ENTITIES, addEntities } from '../actions'

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

export const createDestination = (trip, title) =>
  (dispatch, getState, { api, schema }) => (
    dispatch(api(`/destination/`, {
      method: 'post',
      body: JSON.stringify({ trip, title }),
      success: addEntities(schema.destination)
    }))
  )
