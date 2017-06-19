import { apiRequest } from '../../services/api'

export const GET_TRIPS_REQUEST = 'GET_TRIPS_REQUEST'
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS'
export const GET_TRIPS_FAILURE = 'GET_TRIPS_FAILURE'
export const GET_TRIP_REQUEST = 'GET_TRIP_REQUEST'
export const GET_TRIP_SUCCESS = 'GET_TRIP_SUCCESS'
export const GET_TRIP_FAILURE = 'GET_TRIP_FAILURE'
export const SET_ACTIVE_TRIP = 'SET_ACTIVE_TRIP'
export const CREATE_TRIP_REQUEST = 'CREATE_TRIP_REQUEST'
export const CREATE_TRIP_SUCCESS = 'CREATE_TRIP_SUCCESS'
export const CREATE_TRIP_FAILURE = 'CREATE_TRIP_FAILURE'
export const DELETE_TRIP_REQUEST = 'DELETE_TRIP_REQUEST'
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS'
export const DELETE_TRIP_FAILURE = 'DELETE_TRIP_FAILURE'
export const UPDATE_TRIP_REQUEST = 'UPDATE_TRIP_REQUEST'
export const UPDATE_TRIP_SUCCESS = 'UPDATE_TRIP_SUCCESS'
export const UPDATE_TRIP_FAILURE = 'UPDATE_TRIP_FAILURE'
export const CREATE_DESTINATION_REQUEST = 'CREATE_DESTINATION_REQUEST'
export const CREATE_DESTINATION_SUCCESS = 'CREATE_DESTINATION_SUCCESS'
export const CREATE_DESTINATION_FAILURE = 'CREATE_DESTINATION_FAILURE'
export const DELETE_DESTINATION_REQUEST = 'DELETE_DESTINATION_REQUEST'
export const DELETE_DESTINATION_SUCCESS = 'DELETE_DESTINATION_SUCCESS'
export const DELETE_DESTINATION_FAILURE = 'DELETE_DESTINATION_FAILURE'
export const INVITE_MEMBER_REQUEST = 'INVITE_MEMBER_REQUEST'
export const INVITE_MEMBER_SUCCESS = 'INVITE_MEMBER_SUCCESS'
export const INVITE_MEMBER_FAILURE = 'INVITE_MEMBER_FAILURE'

/**
 * Gets essential details for all trips in the user's scope.
 */
export const getTrips = () => apiRequest('/trip/', {
  bailout: ({ trip }) => !trip.didInvalidate,
  types: [GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE]
})

/**
 * Gets full details for a specific trip.
 * @param {string} id - ID of the trip.
 */
export const getTrip = (id) => apiRequest(`/trip/${id}/`, {
  // prevent requesting details of a trip we already have
  bailout: ({ trip }) => !trip.entities[id] || trip.entities[id].is_complete,
  types: [{
    type: GET_TRIP_REQUEST,
    meta: { id }
  }, {
    type: GET_TRIP_SUCCESS,
    meta: { id }
  }, {
    type: GET_TRIP_FAILURE,
    meta: { id }
  }]
})

/**
 * Updates a trip.
 * @param {string} id - ID of the trip to update.
 * @param {object} data - Object containing the new data (can be partial).
 */
export const updateTrip = (id, data) => apiRequest(`/trip/${id}/`, {
  method: 'PATCH',
  body: JSON.stringify(data),
  types: [{
    type: UPDATE_TRIP_REQUEST,
    meta: { id }
  }, {
    type: UPDATE_TRIP_SUCCESS,
    meta: { id }
  }, {
    type: UPDATE_TRIP_FAILURE,
    meta: { id }
  }]
})

/**
 * Sets the trip with the given ID as the active trip.
 * @param {string} id - ID of the trip to make active.
 */
export const setActiveTrip = (id) => ({
  type: SET_ACTIVE_TRIP,
  payload: { id }
})

/**
 * Creates a trip.
 * @param {string} title - The title of the trip.
 */
export const createTrip = (title) => apiRequest(`/trip/`, {
  method: 'post',
  body: JSON.stringify({ title }),
  types: [CREATE_TRIP_REQUEST, CREATE_TRIP_SUCCESS, CREATE_TRIP_FAILURE]
})

/**
 * Deletes a trip.
 * @param {string} id - ID of the trip to delete.
 */
export const deleteTrip = (id) => apiRequest(`/trip/${id}/`, {
  method: 'delete',
  types: [{
    type: DELETE_TRIP_REQUEST,
    meta: { id }
  }, {
    type: DELETE_TRIP_SUCCESS,
    meta: { id }
  }, {
    type: DELETE_TRIP_FAILURE,
    meta: { id }
  }]
})

/**
 *
 * @param {string} id - ID of the trip to create the destination on.
 * @param {string} title - Title of the destination.
 */
export const createDestination = (id, title) => apiRequest('/destination/', {
  method: 'post',
  body: JSON.stringify({ trip: id, title: title }),
  types: [{
    type: CREATE_DESTINATION_REQUEST,
    meta: { id }
  }, {
    type: CREATE_DESTINATION_SUCCESS,
    meta: { id }
  }, {
    type: CREATE_DESTINATION_FAILURE,
    meta: { id }
  }]
})

/**
 * Deletes a destination.
 * @param {string} id - ID of the destination to delete.
 */
export const deleteDestination = (id) => apiRequest(`/destination/${id}/`, {
  method: 'delete',
  types: [{
    type: DELETE_DESTINATION_REQUEST,
    meta: { id }
  }, {
    type: DELETE_DESTINATION_SUCCESS,
    meta: { id }
  }, {
    type: DELETE_DESTINATION_FAILURE,
    meta: { id }
  }]
})

/**
 * Sends an email invitation to join a specific trip.
 * @param {string} id - The ID of the trip to add the member to.
 * @param {string} email - The email of the new member.
 */
export const inviteMember = (id, email) => apiRequest(`/trip/${id}/invite/`, {
  method: 'post',
  body: JSON.stringify({ email }),
  types: [INVITE_MEMBER_REQUEST, INVITE_MEMBER_SUCCESS, INVITE_MEMBER_FAILURE]
})
