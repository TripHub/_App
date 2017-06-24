import { merge, deleteFrom } from '../../../services/primitives'
import { ADD_ENTITIES, addEntities } from '../actions'

export const STATE_KEY = 'invitations'
export const DELETE = `${STATE_KEY}_delete`

const initialState = { byId: {} }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        byId: merge(state.byId, action.payload.invitation),
        loading: false
      }
    case DELETE: {
      return {
        ...state,
        byId: deleteFrom(state.byId, action.payload.id)
      }
    }
    default:
      return state
  }
}

/**
 * Get all invitations for all trips in the user's scope.
 */
export const getInvitations = () => (dispatch, getState, { api, schema }) => (
  dispatch(api('/invite/pending/', {
    success: addEntities([ schema.invitation ])
  }))
)

/**
 * Gets details for a specific invitation.
 * This endpoint does not need authentication.
 * @param {string} id - ID of the invite to get details for.
 */
export const getInvitation = (id) => (dispatch, getState, { api, schema }) => (
  dispatch(api(`/invite/${id}/`))
)

/**
 * Sends an email invitation to join a specific trip.
 * @param {string} id - The ID of the trip to add the member to.
 * @param {string} email - The email of the new member.
 */
export const inviteMember = (id, email) =>
  (dispatch, getState, { api, schema }) => dispatch(api(`/trip/${id}/invite/`, {
    method: 'post',
    body: JSON.stringify({ email })
  }))

/**
 * Cancels an invitation so it cannot be used.
 * @param {string} id - ID of the invitation to cancel.
 */
export const cancelInvite = (id) => (dispatch, getState, { api, schema }) => (
  dispatch(api(`/invite/${id}/cancel/`, {
    success: { type: DELETE, payload: { id } }
  }))
)

/**
 * Accepts an invitation.
 * @param {string} id - ID of the invitation to accept.
 */
export const acceptInvite = (id) => (dispatch, getState, { api, schema }) => (
  dispatch(api(`/invite/${id}/accept/`))
)
