import { apiRequest } from '../../services/api'

export const GET_INVITES_REQUEST = 'GET_INVITES_REQUEST'
export const GET_INVITES_SUCCESS = 'GET_INVITES_SUCCESS'
export const GET_INVITES_FAILURE = 'GET_INVITES_FAILURE'
export const GET_INVITE_REQUEST = 'GET_INVITE_REQUEST'
export const GET_INVITE_SUCCESS = 'GET_INVITE_SUCCESS'
export const GET_INVITE_FAILURE = 'GET_INVITE_FAILURE'
export const CANCEL_INVITE_REQUEST = 'CANCEL_INVITE_REQUEST'
export const CANCEL_INVITE_SUCCESS = 'CANCEL_INVITE_SUCCESS'
export const CANCEL_INVITE_FAILURE = 'CANCEL_INVITE_FAILURE'

/**
 * Get the list of all invitations for all trips in the user's scope.
 * @param {string} [id=''] - Filters results on the ID.
 */
export const getInvites = (id = '') => apiRequest(`/invite/?trip=${id}`, {
  types: [GET_INVITES_REQUEST, GET_INVITES_SUCCESS, GET_INVITES_FAILURE]
})

/**
 * Gets details for a specific invitation.
 * @param {string} id - ID of the invite to get details for.
 */
export const getInvite = (id) => apiRequest(`/invite/${id}/`, {
  types: [GET_INVITE_REQUEST, GET_INVITE_SUCCESS, GET_INVITE_FAILURE]
})

/**
 * Cancels an invitation so it cannot be used.
 * @param {string} id - ID of the invitation to cancel.
 */
export const cancelInvite = (id) => apiRequest(`/invite/${id}/cancel/`, {
  types: [CANCEL_INVITE_REQUEST, CANCEL_INVITE_SUCCESS, CANCEL_INVITE_FAILURE]
})
