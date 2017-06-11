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
export const DELETE_DESTINATION_REQUEST = 'DELETE_DESTINATION_REQUEST'
export const DELETE_DESTINATION_SUCCESS = 'DELETE_DESTINATION_SUCCESS'
export const DELETE_DESTINATION_FAILURE = 'DELETE_DESTINATION_FAILURE'

export const getTrips = () => apiRequest('/trip/', {
  bailout: ({ trip }) => !trip.didInvalidate,
  types: [GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE]
})

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

export const setActiveTrip = (id) => ({
  type: SET_ACTIVE_TRIP,
  payload: { id }
})

export const createTrip = (title) => apiRequest(`/trip/`, {
  method: 'post',
  body: JSON.stringify({ title }),
  types: [CREATE_TRIP_REQUEST, CREATE_TRIP_SUCCESS, CREATE_TRIP_FAILURE]
})

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
