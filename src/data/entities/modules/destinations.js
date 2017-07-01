import { merge, deleteFrom } from '../../../services/primitives'
import { ADD_ENTITIES, addEntities } from '../actions'

export const STATE_KEY = 'destinations'
const DELETE = `${STATE_KEY}_delete`

const initialState = { byId: {} }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        byId: merge(state.byId, action.payload.destination)
      }
    case DELETE:
      return {
        ...state,
        byId: deleteFrom(state.byId, action.payload.id)
      }
    default:
      return state
  }
}

/**
 * Creates a destination for a trip.
 * @param {object} data - Object of data to populate the new destination with.
 * Need's at least the ID of the parent trip.
 */
export const createDestination = (data) =>
  (dispatch, getState, { api, schema }) => dispatch(api(`/destination/`, {
    method: 'post',
    body: JSON.stringify(data),
    success: addEntities(schema.destination)
  }))

/**
 * Deletes a destination.
 * @param {string} id - ID of the destination to delete.
 */
export const deleteDestination = (id) =>
  (dispatch, getState, { api, schema }) => dispatch(api(`/destination/${id}/`, {
    method: 'delete',
    success: { type: DELETE, payload: { id } }
  }))
