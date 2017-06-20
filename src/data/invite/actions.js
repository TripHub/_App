import { apiRequest } from '../../services/api'

export const GET_INVITES_REQUEST = 'GET_INVITES_REQUEST'
export const GET_INVITES_SUCCESS = 'GET_INVITES_SUCCESS'
export const GET_INVITES_FAILURE = 'GET_INVITES_FAILURE'

export const getInvites = (id = '') => apiRequest(`/invite/?trip=${id}`, {
  types: [GET_INVITES_REQUEST, GET_INVITES_SUCCESS, GET_INVITES_FAILURE]
})
